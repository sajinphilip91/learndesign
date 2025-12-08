import React, { useState } from 'react';
import { Coffee, Check, Star, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Shared Components ---
const Stamp = ({ filled, index, isBonus = false }) => (
    <motion.div
        initial={false}
        animate={{
            scale: filled ? [1.5, 1] : 1,
            rotate: filled ? [15, -5, 0] : 0
        }}
        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center relative ${filled
                ? 'bg-amber-800 border-amber-800 text-white'
                : 'bg-amber-50 border-amber-200 text-amber-200'
            }`}
    >
        {filled ? (
            <Check size={24} strokeWidth={3} />
        ) : (
            isBonus ? <Star size={20} fill="currentColor" className="text-amber-200" /> : <Coffee size={20} />
        )}
        {/* Connector Line */}
        {index > 0 && (
            <div className={`absolute right-full top-1/2 -translate-y-1/2 w-4 h-1 ${filled ? 'bg-amber-800' : 'bg-amber-100'}`} />
        )}
    </motion.div>
);

const LoyaltyCard = ({ title, totalStamps, initialStamps, description, onStamp, count }) => {
    const isComplete = count >= totalStamps;
    const progress = (count / totalStamps) * 100;

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 w-full max-w-sm flex flex-col items-center relative overflow-hidden group">
            {/* Header */}
            <div className={`w-full text-center pb-4 border-b border-gray-100 mb-6 z-10 ${isComplete ? 'opacity-20' : ''}`}>
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2 text-amber-900">
                    <Coffee size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                <p className="text-xs text-gray-500 mt-1">{description}</p>
            </div>

            {/* Stamps Grid */}
            <div className="flex flex-wrap justify-center gap-4 gap-y-6 mb-8 max-w-[200px] z-10">
                {Array.from({ length: totalStamps }).map((_, i) => (
                    <Stamp
                        key={i}
                        filled={i < count}
                        index={i}
                        isBonus={i < initialStamps}
                    />
                ))}
            </div>

            {/* Progress Text */}
            <div className="text-sm font-medium text-gray-500 mb-6 z-10">
                {isComplete ? (
                    <span className="text-green-600 font-bold flex items-center gap-1">
                        <Star size={14} fill="currentColor" /> FREE COFFEE EARNED!
                    </span>
                ) : (
                    <span>{totalStamps - count} stamps to go!</span>
                )}
            </div>

            {/* Action Button */}
            <button
                onClick={onStamp}
                disabled={isComplete}
                className={`w-full py-3 rounded-xl font-bold transition-all z-10 flex items-center justify-center gap-2 ${isComplete
                        ? 'bg-green-100 text-green-700 cursor-default'
                        : 'bg-amber-800 hover:bg-amber-900 text-white hover:scale-[1.02] active:scale-95'
                    }`}
            >
                {isComplete ? "Enjoy your coffee!" : "Buy Coffee"}
            </button>

            {/* Celebration Effect */}
            <AnimatePresence>
                {isComplete && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-green-500/10 flex items-center justify-center pointer-events-none"
                    >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Progress Bar background hint */}
            <div className="absolute bottom-0 left-0 h-1 bg-amber-500 transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
    );
};

export default function GoalGradientExample() {
    // Card A: 10 stamps total, starts at 0.
    // Card B: 12 stamps total, starts at 2 (Artificial Progress).
    // Both define "10 coffees to buy", but B feels closer to the goal.

    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(2);

    const reset = () => {
        setCountA(0);
        setCountB(2);
    };

    return (
        <div className="w-full flex flex-col items-center gap-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-4xl px-4">

                {/* Variant A: Linear Progress */}
                <div className="flex flex-col items-center gap-4">
                    <div className="text-xs font-bold tracking-widest text-gray-400 uppercase bg-gray-100 py-1 px-3 rounded-full">
                        Standard Start
                    </div>
                    <LoyaltyCard
                        title="Regular Card"
                        description="Buy 10 coffees, get 1 free."
                        totalStamps={10}
                        initialStamps={0}
                        count={countA}
                        onStamp={() => setCountA(c => Math.min(c + 1, 10))}
                    />
                    <div className="text-center w-64 pt-2">
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gray-400"
                                animate={{ width: `${(countA / 10) * 100}%` }}
                            />
                        </div>
                        <p className="text-xs text-gray-400 mt-2 text-balance">
                            0% Complete. The goal feels far away. Motivation is low at the start.
                        </p>
                    </div>
                </div>

                {/* Variant B: Artificial Advancement */}
                <div className="flex flex-col items-center gap-4">
                    <div className="text-xs font-bold tracking-widest text-amber-600 uppercase bg-amber-100 py-1 px-3 rounded-full border border-amber-200">
                        Goal Gradient (Bonus)
                    </div>
                    <LoyaltyCard
                        title="Gold Member"
                        description="Buy 10 coffees, get 1 free. (12 slots, 2 bonus!)"
                        totalStamps={12}
                        initialStamps={2}
                        count={countB}
                        onStamp={() => setCountB(c => Math.min(c + 1, 12))}
                    />
                    <div className="text-center w-64 pt-2">
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-amber-500"
                                animate={{ width: `${(countB / 12) * 100}%` }}
                            />
                        </div>
                        <p className="text-xs text-amber-700 font-medium mt-2 text-balance">
                            17% Complete! The "bonus" stamps make you feel like you've already started. Motivation is higher.
                        </p>
                    </div>
                </div>

            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 max-w-lg flex gap-4 text-sm text-blue-900 items-start">
                <ArrowRight className="shrink-0 mt-0.5" />
                <p>
                    <strong>The Insight:</strong> Even though both cards require purchasing exactly 10 coffees to get the reward, Card B converts better because the user perceives themselves as being <em>closer to the goal</em> right from the start.
                </p>
            </div>

            <button onClick={reset} className="text-gray-400 hover:text-gray-600 text-sm underline">
                Reset Demo
            </button>
        </div>
    );
}
