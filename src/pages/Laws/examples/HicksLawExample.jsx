import React, { useState, useEffect } from 'react';
import { Menu, Search, MousePointer2, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ITEMS_SIMPLE = [
    "Home", "Profile", "Settings", "Messages", "Help"
];

const ITEMS_COMPLEX = [
    "Dashboard", "Analytics", "Project A", "Project B", "Team Settings",
    "Billing", "Invoices", "User Management", "Roles", "Permissions",
    "Security Logs", "Audit Trail", "API Keys", "Webhooks", "Integrations",
    "Slack Bot", "Email Templates", "Notifications", "Profile", "Logout"
];

// Shuffle array helper
const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

export default function HicksLawExample() {
    // Game State
    const [mode, setMode] = useState('intro'); // intro, playing-simple, playing-complex, result
    const [targetItem, setTargetItem] = useState('');
    const [startTime, setStartTime] = useState(0);
    const [simpleTime, setSimpleTime] = useState(0);
    const [complexTime, setComplexTime] = useState(0);
    const [menuItems, setMenuItems] = useState([]);

    const startGame = (type) => {
        const items = type === 'simple' ? ITEMS_SIMPLE : ITEMS_COMPLEX;
        const shuffled = shuffle(items);
        const target = shuffled[Math.floor(Math.random() * shuffled.length)];

        setMenuItems(shuffled);
        setTargetItem(target);
        setMode(`playing-${type}`);
        setStartTime(Date.now());
    };

    const handleItemClick = (item) => {
        if (item === targetItem) {
            const timeTaken = Date.now() - startTime;
            if (mode === 'playing-simple') {
                setSimpleTime(timeTaken);
                // Move to complex round
                setTimeout(() => startGame('complex'), 500);
            } else {
                setComplexTime(timeTaken);
                setMode('result');
            }
        }
    };

    return (
        <div className="w-full h-full flex flex-col gap-6 py-4">

            {/* Game Container */}
            <div className="w-full bg-slate-900 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col min-h-[600px] border-4 border-slate-800">

                {/* Header / Instructions */}
                <div className="bg-slate-800/80 backdrop-blur-sm border-b border-white/10 p-8 text-center sticky top-0 z-10">
                    {mode === 'intro' && (
                        <>
                            <h3 className="text-2xl font-bold text-white mb-2">The Menu Challenge</h3>
                            <p className="text-slate-400">Find the target item in the menu as fast as you can.</p>
                        </>
                    )}
                    {(mode.startsWith('playing')) && (
                        <div className="flex flex-col items-center">
                            <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-2">Find this item</p>
                            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 animate-pulse pb-1">
                                {targetItem}
                            </div>
                        </div>
                    )}
                    {mode === 'result' && (
                        <h3 className="text-2xl font-bold text-white">Results</h3>
                    )}
                </div>

                {/* Content Area */}
                <div className="flex-1 p-8 flex items-center justify-center bg-slate-900 overflow-y-auto">
                    <AnimatePresence mode="wait">

                        {/* INTRO */}
                        {mode === 'intro' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400 border border-blue-500/30">
                                    <MousePointer2 size={40} />
                                </div>
                                <button
                                    onClick={() => startGame('simple')}
                                    className="bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold py-4 px-10 rounded-full shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] transition-all hover:scale-105 active:scale-95"
                                >
                                    Start Test
                                </button>
                            </motion.div>
                        )}

                        {/* PLAYING: MENU GRID */}
                        {mode.startsWith('playing') && (
                            <motion.div
                                key={mode}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="w-full max-w-4xl"
                            >
                                <div className={`grid gap-4 ${mode === 'playing-simple' ? 'grid-cols-1 md:grid-cols-1 max-w-md mx-auto' : 'grid-cols-2 md:grid-cols-4 lg:grid-cols-5'}`}>
                                    {menuItems.map((item) => (
                                        <button
                                            key={item}
                                            onClick={() => handleItemClick(item)}
                                            className={`
                                                group relative p-4 rounded-xl border text-left text-sm font-medium transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-3 overflow-hidden
                                                ${mode === 'playing-simple' ? 'py-5 text-lg' : ''}
                                                bg-slate-800 border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]
                                            `}
                                        >
                                            <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors" />
                                            <div className={`rounded-full bg-slate-600 group-hover:bg-blue-500 transition-colors shrink-0 ${mode === 'playing-simple' ? 'w-3 h-3' : 'w-2 h-2'}`} />
                                            <span className="relative z-10 truncate">{item}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* RESULTS */}
                        {mode === 'result' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="w-full max-w-2xl"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    {/* Simple Result */}
                                    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col items-center text-center">
                                        <div className="text-green-400 font-bold uppercase tracking-wider text-xs mb-2">Low Complexity</div>
                                        <div className="text-slate-400 text-sm mb-4">Simple Menu (5 items)</div>
                                        <div className="text-5xl font-mono font-bold text-white mb-2">{simpleTime}<span className="text-xl text-slate-500 ml-1">ms</span></div>
                                    </div>

                                    {/* Complex Result */}
                                    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex flex-col items-center text-center">
                                        <div className="text-red-400 font-bold uppercase tracking-wider text-xs mb-2">High Complexity</div>
                                        <div className="text-slate-400 text-sm mb-4">Complex Menu (20 items)</div>
                                        <div className="text-5xl font-mono font-bold text-white mb-2">{complexTime}<span className="text-xl text-slate-500 ml-1">ms</span></div>
                                    </div>
                                </div>

                                <div className="text-center bg-slate-800/50 p-8 rounded-2xl border border-white/5 mb-8">
                                    <p className="text-xl text-slate-300">
                                        You took <span className="font-bold text-blue-400 text-2xl">{Math.round(complexTime / simpleTime)}x longer</span> to decide when faced with more options.
                                    </p>
                                </div>

                                <div className="flex justify-center">
                                    <button
                                        onClick={() => setMode('intro')}
                                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold"
                                    >
                                        <RefreshCw size={16} /> Try Again
                                    </button>
                                </div>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
            </div>

            {/* Footer / Explanation */}
            <div className="w-full max-w-lg mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <Menu size={32} className="text-blue-600" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900">Hick's Law</h3>
                    <p className="text-sm text-gray-500 mt-1 mb-2">
                        RT = a + b log2 (n + 1)
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                        The time required to make a decision increases with the number and complexity of choices.
                    </p>
                </div>
            </div>

        </div>
    );
}
