import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ListChecks, BrainCircuit, EyeOff } from 'lucide-react';

const GROCERY_LIST = [
    "Apples",      // First (Primacy) - Likely recalled
    "Bread",       // Middle - Often forgotten
    "Milk",        // Middle
    "Eggs",        // Middle
    "Cheese",      // Middle
    "Yogurt",      // Middle
    "Butter",      // Middle
    "Juice",       // Middle
    "Coffee",      // Last (Recency) - Likely recalled
    "Bananas"      // Last
];

export default function SerialPositionExample() {
    const [gameState, setGameState] = useState('intro'); // intro, memorizing, recalling, results
    const [timeLeft, setTimeLeft] = useState(5);
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        if (gameState === 'memorizing') {
            const timer = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        setGameState('recalling');
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [gameState]);

    const toggleItem = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter(i => i !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    const calculateScore = () => {
        const firstTwo = GROCERY_LIST.slice(0, 2);
        const lastTwo = GROCERY_LIST.slice(-2);
        const middle = GROCERY_LIST.slice(2, -2);

        const recallFirst = firstTwo.filter(i => selectedItems.includes(i)).length;
        const recallLast = lastTwo.filter(i => selectedItems.includes(i)).length;
        const recallMiddle = middle.filter(i => selectedItems.includes(i)).length;

        // Normalizing to percentage for the specific groups
        const primacyScore = (recallFirst / 2) * 100;
        const recencyScore = (recallLast / 2) * 100;
        const middleScore = (recallMiddle / 6) * 100;

        return { primacyScore, recencyScore, middleScore };
    };

    const scores = gameState === 'results' ? calculateScore() : { primacyScore: 0, recencyScore: 0, middleScore: 0 };

    return (
        <div className="min-h-[600px] w-full bg-slate-50 p-8 flex flex-col items-center justify-center gap-8 relative overflow-hidden text-center">

            <AnimatePresence mode="wait">
                {gameState === 'intro' && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="max-w-lg flex flex-col items-center gap-6"
                    >
                        <BrainCircuit size={64} className="text-purple-500 mb-2" />
                        <h2 className="text-3xl font-bold text-gray-900">Memory List Challenge</h2>
                        <p className="text-gray-600">
                            The Serial Position Effect states we recall the first and last items best.
                            <br /><br />
                            You have <strong>5 seconds</strong> to memorize a list of groceries.
                        </p>
                        <button
                            onClick={() => { setGameState('memorizing'); setTimeLeft(5); setSelectedItems([]); }}
                            className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 shadow-lg shadow-purple-200 transition-colors"
                        >
                            Start Test
                        </button>
                    </motion.div>
                )}

                {gameState === 'memorizing' && (
                    <motion.div
                        key="memorizing"
                        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1.1, opacity: 0 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <h3 className="text-4xl font-black text-purple-600 mb-4">{timeLeft}</h3>
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-purple-100 w-64">
                            <ul className="text-left space-y-2 font-medium text-gray-700">
                                {GROCERY_LIST.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-400 text-xs flex items-center justify-center font-bold">
                                            {i + 1}
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}

                {gameState === 'recalling' && (
                    <motion.div
                        key="recalling"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="max-w-2xl w-full flex flex-col items-center gap-6"
                    >
                        <EyeOff size={48} className="text-gray-300 mb-2" />
                        <h3 className="text-2xl font-bold text-gray-900">Select the items you saw</h3>
                        <p className="text-gray-500 text-sm">Don't guess randomly!</p>

                        <div className="flex flex-wrap justify-center gap-3 max-w-xl">
                            {/* Mixing in some fake items to make it a real test */}
                            {[...GROCERY_LIST, "Pizza", "Soda", "Carrots", "Soup"].sort().map((item) => (
                                <button
                                    key={item}
                                    onClick={() => toggleItem(item)}
                                    className={`px-4 py-2 rounded-full border transition-all
                                        ${selectedItems.includes(item)
                                            ? 'bg-purple-100 border-purple-300 text-purple-700 font-bold'
                                            : 'bg-white border-gray-200 text-gray-600 hover:border-purple-200'}`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setGameState('results')}
                            className="mt-4 bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-colors"
                        >
                            Check Results
                        </button>
                    </motion.div>
                )}

                {gameState === 'results' && (
                    <motion.div
                        key="results"
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                        className="max-w-3xl w-full bg-white p-8 rounded-3xl shadow-xl flex flex-col gap-8"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 text-center">Your Recall Pattern</h3>

                        <div className="flex items-end justify-between h-48 gap-4 px-8 pb-4 border-b border-gray-100">
                            {/* Chart Bars */}
                            <div className="flex-1 flex flex-col items-center gap-2 group">
                                <div className="text-2xl font-black text-blue-600">{Math.round(scores.primacyScore)}%</div>
                                <motion.div
                                    initial={{ height: 0 }} animate={{ height: `${scores.primacyScore}%` }}
                                    className="w-full bg-blue-100 rounded-t-xl relative overflow-hidden group-hover:bg-blue-200 transition-colors"
                                >
                                    <div className="absolute inset-x-0 bottom-0 top-0 bg-blue-500 opacity-20" />
                                </motion.div>
                                <span className="text-xs font-bold text-gray-400 uppercase">First Items</span>
                            </div>

                            <div className="flex-1 flex flex-col items-center gap-2 group">
                                <div className="text-2xl font-black text-gray-400">{Math.round(scores.middleScore)}%</div>
                                <motion.div
                                    initial={{ height: 0 }} animate={{ height: `${scores.middleScore}%` }}
                                    className="w-full bg-gray-100 rounded-t-xl group-hover:bg-gray-200 transition-colors"
                                />
                                <span className="text-xs font-bold text-gray-400 uppercase">Middle Items</span>
                            </div>

                            <div className="flex-1 flex flex-col items-center gap-2 group">
                                <div className="text-2xl font-black text-blue-600">{Math.round(scores.recencyScore)}%</div>
                                <motion.div
                                    initial={{ height: 0 }} animate={{ height: `${scores.recencyScore}%` }}
                                    className="w-full bg-blue-100 rounded-t-xl relative overflow-hidden group-hover:bg-blue-200 transition-colors"
                                >
                                    <div className="absolute inset-x-0 bottom-0 top-0 bg-blue-500 opacity-20" />
                                </motion.div>
                                <span className="text-xs font-bold text-gray-400 uppercase">Last Items</span>
                            </div>
                        </div>

                        <p className="text-center text-gray-500">
                            Most people remember the beginning (Primacy Effect) and the end (Recency Effect) best. The middle gets lost.
                        </p>

                        <button
                            onClick={() => { setGameState('intro'); }}
                            className="text-purple-600 font-bold hover:underline self-center"
                        >
                            Try Again
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
