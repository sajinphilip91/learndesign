import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star } from 'lucide-react';

export default function VonRestorffExample() {
    const [isIsolated, setIsIsolated] = useState(false);

    return (
        <div className="min-h-[600px] w-full bg-slate-900 p-8 flex flex-col items-center justify-center gap-12 relative overflow-hidden text-center">

            <div className="flex flex-col items-center gap-4 z-10 max-w-lg">
                <button
                    onClick={() => setIsIsolated(!isIsolated)}
                    className="bg-white px-6 py-3 rounded-full shadow-lg border border-gray-200 font-bold text-gray-800 hover:bg-gray-50 transition-colors flex items-center gap-2"
                >
                    {isIsolated ? <Star className="text-yellow-500 fill-yellow-500" /> : <Star className="text-gray-300" />}
                    {isIsolated ? "Isolation Applied" : "No Isolation"}
                </button>
                <p className="text-slate-400 text-sm">
                    {isIsolated
                        ? "When one object stands out distinctively (color, size), it is more likely to be remembered and selected."
                        : "When everything looks the same, nothing stands out. The choice becomes harder."}
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center w-full max-w-4xl">

                {/* Basic Plan */}
                <Card
                    title="Basic"
                    price="$9"
                    features={['1 User', 'Basic Support']}
                    isHighlighted={false} // Never highlighted
                />

                {/* Pro Plan - THE TARGET */}
                <motion.div
                    layout
                    className={`relative rounded-3xl p-8 flex flex-col gap-6 transition-all duration-500
                        ${isIsolated
                            ? 'bg-gradient-to-br from-blue-600 to-indigo-600 shadow-[0_0_50px_rgba(79,70,229,0.4)] scale-110 z-10 border-2 border-white/20'
                            : 'bg-slate-800 border border-slate-700 md:scale-100 opacity-50'}`}
                >
                    {isIsolated && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg uppercase tracking-wider">
                            Most Popular
                        </div>
                    )}

                    <div className="text-center">
                        <h3 className={`font-bold text-xl mb-2 ${isIsolated ? 'text-white' : 'text-slate-300'}`}>Pro Plan</h3>
                        <div className={`text-4xl font-black ${isIsolated ? 'text-white' : 'text-slate-400'}`}>$29</div>
                    </div>

                    <ul className="space-y-4 text-left">
                        <li className={`flex gap-3 text-sm ${isIsolated ? 'text-blue-100' : 'text-slate-500'}`}>
                            <Check size={18} /> 5 Users
                        </li>
                        <li className={`flex gap-3 text-sm ${isIsolated ? 'text-blue-100' : 'text-slate-500'}`}>
                            <Check size={18} /> Priority Support
                        </li>
                        <li className={`flex gap-3 text-sm ${isIsolated ? 'text-blue-100' : 'text-slate-500'}`}>
                            <Check size={18} /> Analytics
                        </li>
                    </ul>

                    <button className={`w-full py-3 rounded-xl font-bold transition-colors
                        ${isIsolated
                            ? 'bg-white text-blue-600 hover:bg-blue-50'
                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>
                        Choose Pro
                    </button>
                </motion.div>

                {/* Enterprise Plan */}
                <Card
                    title="Enterprise"
                    price="$99"
                    features={['Unlimited', '24/7 Support']}
                    isHighlighted={false}
                />

            </div>
        </div>
    );
}

const Card = ({ title, price, features }) => (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col gap-4 w-full md:w-64 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
        <div className="text-center">
            <h3 className="font-bold text-slate-300">{title}</h3>
            <div className="text-3xl font-bold text-slate-400">{price}</div>
        </div>
        <ul className="space-y-3">
            {features.map((f, i) => (
                <li key={i} className="flex gap-2 text-xs text-slate-500">
                    <Check size={14} /> {f}
                </li>
            ))}
        </ul>
        <button className="w-full bg-slate-700 text-slate-400 py-2 rounded-lg text-sm font-bold hover:bg-slate-600 hover:text-white transition-colors">
            Select
        </button>
    </div>
);
