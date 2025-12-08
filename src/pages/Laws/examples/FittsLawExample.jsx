import React, { useState, useEffect, useRef } from 'react';
import { MousePointer2, Timer, Target, RefreshCw, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ROUNDS_PER_GAME = 10;

export default function FittsLawExample() {
    const [gameState, setGameState] = useState('start'); // start, playing, finished
    const [stats, setStats] = useState([]);
    const [currentRound, setCurrentRound] = useState(0);
    const [target, setTarget] = useState(null);
    const [startTime, setStartTime] = useState(0);

    // Stats for calculations (tracking last click position)
    const [lastClickPos, setLastClickPos] = useState({ x: 0, y: 0 });

    const containerRef = useRef(null);

    // Initialize last click pos to center when measuring can happen
    useEffect(() => {
        if (containerRef.current) {
            setLastClickPos({
                x: containerRef.current.clientWidth / 2,
                y: containerRef.current.clientHeight / 2
            });
        }
    }, []);

    // Generate a new target
    const generateTarget = () => {
        if (!containerRef.current) return;

        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;

        // Random size (small vs large) to demonstrate the law
        const isHard = Math.random() > 0.5;
        // Make targets slightly larger overall for better playability on larger screens
        const size = isHard ? 30 + Math.random() * 30 : 80 + Math.random() * 60;

        const padding = size / 2 + 40; // Add safe padding from edges
        const x = padding + Math.random() * (width - padding * 2);
        const y = padding + Math.random() * (height - padding * 2);

        const newTarget = { x, y, size, id: Date.now() };

        // Calculate distance from last click for logging (Fitts's Law verification)
        const dx = x - lastClickPos.x;
        const dy = y - lastClickPos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        setTarget({ ...newTarget, distance });
        setStartTime(Date.now());
    };

    const startGame = () => {
        if (containerRef.current) {
            setLastClickPos({
                x: containerRef.current.clientWidth / 2,
                y: containerRef.current.clientHeight / 2
            });
        }
        setGameState('playing');
        setStats([]);
        setCurrentRound(0);
        // Delay first target slightly to allow UI transition
        setTimeout(() => generateTarget(), 100);
    };

    const handleTargetClick = (e) => {
        e.stopPropagation();
        const endTime = Date.now();
        const timeTaken = endTime - startTime;

        // Record stats
        const roundStat = {
            round: currentRound + 1,
            time: timeTaken,
            distance: Math.round(target.distance),
            size: Math.round(target.size),
            // Index of Difficulty (ID) approx
            difficulty: target.size < 60 ? 'High' : 'Low'
        };

        const newStats = [...stats, roundStat];
        setStats(newStats);

        // Update last click position to this target's center
        setLastClickPos({ x: target.x, y: target.y });

        if (currentRound + 1 >= ROUNDS_PER_GAME) {
            setGameState('finished');
        } else {
            setCurrentRound(r => r + 1);
            generateTarget();
        }
    };

    const hardStats = stats.filter(s => s.difficulty === 'High');
    const easyStats = stats.filter(s => s.difficulty === 'Low');
    const hardAvg = hardStats.length ? Math.round(hardStats.reduce((a, b) => a + b.time, 0) / hardStats.length) : 0;
    const easyAvg = easyStats.length ? Math.round(easyStats.reduce((a, b) => a + b.time, 0) / easyStats.length) : 0;

    return (
        <div className="w-full h-full flex flex-col gap-6 py-4">

            {/* Game Container - Responsive Width/Height */}
            <div
                ref={containerRef}
                className="relative w-full h-[600px] bg-slate-900 rounded-3xl shadow-2xl overflow-hidden select-none cursor-crosshair border-4 border-slate-800"
            >
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />

                <AnimatePresence mode="wait">
                    {/* START SCREEN */}
                    {gameState === 'start' && (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/60 backdrop-blur-sm z-20"
                        >
                            <Target size={64} className="text-red-500 mb-6" />
                            <h2 className="text-3xl font-bold mb-2">Target Acquisition Test</h2>
                            <p className="text-gray-300 mb-8 max-w-xs text-center">Hit the red targets as fast as you can. We'll measure how size & distance affect your speed.</p>
                            <button
                                onClick={startGame}
                                className="group relative px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="flex items-center gap-2"><Play fill="currentColor" size={20} /> START TEST</span>
                            </button>
                        </motion.div>
                    )}

                    {/* FINISHED SCREEN */}
                    {gameState === 'finished' && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                            className="absolute inset-0 flex flex-col items-center justify-center text-white bg-slate-900 z-20 p-8"
                        >
                            <h2 className="text-2xl font-bold mb-6">Test Complete!</h2>

                            <div className="grid grid-cols-2 gap-4 w-full max-w-sm mb-8">
                                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                                    <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Easy Targets</div>
                                    <div className="text-3xl font-mono text-green-400">{easyAvg} <span className="text-sm text-gray-500">ms</span></div>
                                    <div className="text-xs text-gray-500 mt-1">Large & Close</div>
                                </div>
                                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                                    <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Hard Targets</div>
                                    <div className="text-3xl font-mono text-red-400">{hardAvg} <span className="text-sm text-gray-500">ms</span></div>
                                    <div className="text-xs text-gray-500 mt-1">Small & Far</div>
                                </div>
                            </div>

                            <div className="text-center mb-8">
                                <p className="text-lg">
                                    <span className="font-bold text-red-400">{Math.round(((hardAvg - easyAvg) / easyAvg) * 100)}% Slower</span> on hard targets.
                                </p>
                                <p className="text-sm text-gray-400 mt-2">
                                    This proves Fitts's Law: Distance and Size directly impact usability.
                                </p>
                            </div>

                            <button
                                onClick={() => setGameState('start')}
                                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                            >
                                <RefreshCw size={16} /> Try Again
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* GAME TARGET */}
                {gameState === 'playing' && target && (
                    <motion.button
                        key={target.id}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        onClick={handleTargetClick}
                        className="absolute rounded-full bg-red-500 border-4 border-white shadow-[0_0_20px_rgba(239,68,68,0.6)] cursor-pointer hover:bg-red-400 active:scale-95 flex items-center justify-center group"
                        style={{
                            width: target.size,
                            height: target.size,
                            left: target.x - target.size / 2,
                            top: target.y - target.size / 2,
                        }}
                    >
                        <div className="w-2 h-2 bg-white/50 rounded-full" />
                    </motion.button>
                )}

                {/* HUD */}
                {gameState === 'playing' && (
                    <div className="absolute top-4 left-0 right-0 flex justify-center pointer-events-none">
                        <div className="bg-slate-800/80 backdrop-blur text-white px-4 py-1 rounded-full text-xs font-mono border border-white/10">
                            Round {currentRound + 1} / {ROUNDS_PER_GAME}
                        </div>
                    </div>
                )}
            </div>

            {/* Explanation */}
            <div className="w-full max-w-lg mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <MousePointer2 size={32} className="text-blue-600" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900">The Equation</h3>
                    <p className="text-sm text-gray-500 mt-1 mb-2">
                        Time = a + b * log2(2D / W)
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                        The time required to rapidly move to a target area is a function of the
                        ratio between the distance to the target and the width of the target.
                    </p>
                </div>
            </div>
        </div>
    );
}
