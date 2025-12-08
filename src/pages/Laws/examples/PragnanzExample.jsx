import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Home, Settings, Search, User, Bell, Lock,
    Hexagon, Aperture, Dna, Database, Component, Shield
} from 'lucide-react';

const TASKS = [
    { id: 'home', label: 'Home', simple: Home, complex: Hexagon },
    { id: 'settings', label: 'Settings', simple: Settings, complex: Aperture },
    { id: 'search', label: 'Search', simple: Search, complex: Dna },
    { id: 'profile', label: 'Profile', simple: User, complex: Database },
    { id: 'notify', label: 'Notifications', simple: Bell, complex: Component },
    { id: 'security', label: 'Security', simple: Lock, complex: Shield },
];

export default function PragnanzExample() {
    const [gameState, setGameState] = useState('intro'); // intro, countdown, playing, results
    const [round, setRound] = useState(null); // 'complex' or 'simple'
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [shuffledItems, setShuffledItems] = useState([]);
    const [startTime, setStartTime] = useState(0);
    const [complexTimes, setComplexTimes] = useState([]);
    const [simpleTimes, setSimpleTimes] = useState([]);
    const [feedback, setFeedback] = useState(null); // 'correct' or 'wrong'

    const currentTask = TASKS[currentTaskIndex];

    const startGame = (type) => {
        setRound(type);
        setGameState('countdown');
    };

    const startRound = () => {
        setCurrentTaskIndex(0);
        setCurrentTaskIndex(0);

        // Only clear the times for the current round being started
        if (round === 'complex') {
            setComplexTimes([]);
        } else {
            setSimpleTimes([]);
        }

        // Shuffle items for the grid
        setShuffledItems([...TASKS].sort(() => Math.random() - 0.5));

        setGameState('playing');
        setStartTime(Date.now());
    };

    const handleItemClick = (itemId) => {
        if (gameState !== 'playing') return;

        if (itemId === currentTask.id) {
            // Correct
            const timeTaken = Date.now() - startTime;

            if (round === 'complex') {
                setComplexTimes(prev => [...prev, timeTaken]);
            } else {
                setSimpleTimes(prev => [...prev, timeTaken]);
            }

            setFeedback('correct');

            setTimeout(() => {
                setFeedback(null);
                if (currentTaskIndex < TASKS.length - 1) {
                    setCurrentTaskIndex(prev => prev + 1);
                    setShuffledItems([...TASKS].sort(() => Math.random() - 0.5)); // Reshuffle
                    setStartTime(Date.now());
                } else {
                    // Round Finished
                    if (round === 'complex') {
                        setGameState('round-intermission');
                    } else {
                        setGameState('results');
                    }
                }
            }, 300);
        } else {
            // Wrong
            setFeedback('wrong');
            setTimeout(() => setFeedback(null), 500);
        }
    };

    // Calculate averages
    const complexAvg = complexTimes.length ? Math.round(complexTimes.reduce((a, b) => a + b, 0) / complexTimes.length) : 0;
    const simpleAvg = simpleTimes.length ? Math.round(simpleTimes.reduce((a, b) => a + b, 0) / simpleTimes.length) : 0;
    const improvement = complexAvg ? Math.round(((complexAvg - simpleAvg) / complexAvg) * 100) : 0;

    return (
        <div className="min-h-[600px] w-full bg-gray-50 p-8 flex flex-col items-center justify-center gap-8 relative overflow-hidden text-center">

            <AnimatePresence mode="wait">
                {gameState === 'intro' && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="max-w-lg flex flex-col items-center gap-6"
                    >
                        <Component size={64} className="text-orange-500 mb-4" />
                        <h2 className="text-3xl font-bold text-gray-800">Icon Recognition Test</h2>
                        <p className="text-gray-600 text-lg">
                            According to the <strong>Law of Prügnanz</strong>, our eyes prefer simple, recognizable forms.
                            <br /><br />
                            Let's test this. Two rounds. Find the correct icon as fast as you can.
                        </p>
                        <button
                            onClick={() => startGame('complex')}
                            className="bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
                        >
                            START TEST
                        </button>
                    </motion.div>
                )}

                {gameState === 'countdown' && (
                    <CountDown key="countdown" onComplete={startRound} label={round === 'complex' ? "Round 1: Abstract Shapes" : "Round 2: Standard Icons"} />
                )}

                {gameState === 'round-intermission' && (
                    <motion.div
                        key="intermission"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="max-w-lg flex flex-col items-center gap-6"
                    >
                        <h3 className="text-2xl font-bold text-gray-800">Round 1 Complete!</h3>
                        <p className="text-gray-600">Average Time: <span className="font-mono font-bold text-orange-600">{complexAvg}ms</span></p>
                        <p className="text-gray-600">
                            That was hard because the shapes were ambiguous.
                            <br />
                            Now let's try with <strong>Standard Icons</strong>.
                        </p>
                        <button
                            onClick={() => startGame('simple')}
                            className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-blue-200"
                        >
                            START ROUND 2
                        </button>
                    </motion.div>
                )}

                {gameState === 'playing' && (
                    <motion.div
                        key="playing"
                        className="w-full max-w-2xl flex flex-col items-center gap-8"
                    >
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-gray-400 text-sm font-medium uppercase tracking-widest">Find this icon</span>
                            <motion.h2
                                key={currentTask.label}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-4xl font-extrabold text-gray-900"
                            >
                                {currentTask.label}
                            </motion.h2>
                        </div>

                        <div className={`grid grid-cols-3 gap-4 w-full ${feedback === 'wrong' ? 'animate-shake' : ''}`}>
                            {shuffledItems.map((item) => {
                                const Icon = round === 'complex' ? item.complex : item.simple;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => handleItemClick(item.id)}
                                        className={`
                                            h-24 md:h-32 rounded-2xl flex items-center justify-center transition-all
                                            border-2 shadow-sm
                                            ${feedback === 'correct' && item.id === currentTask.id
                                                ? 'bg-green-100 border-green-500 text-green-600 scale-105'
                                                : 'bg-white border-gray-100 text-gray-600 hover:border-blue-400 hover:shadow-md'
                                            }
                                        `}
                                    >
                                        <Icon size={40} strokeWidth={1.5} />
                                    </button>
                                );
                            })}
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full mt-8 overflow-hidden">
                            <motion.div
                                className="h-full bg-blue-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${(currentTaskIndex / TASKS.length) * 100}%` }}
                            />
                        </div>
                    </motion.div>
                )}

                {gameState === 'results' && (
                    <motion.div
                        key="results"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-lg w-full bg-white p-8 rounded-3xl shadow-xl flex flex-col items-center gap-8"
                    >
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Law of Prügnanz Proven!</h2>
                            <p className="text-gray-500">Simple forms are processed faster.</p>
                        </div>

                        <div className="flex gap-4 w-full">
                            <div className="flex-1 bg-orange-50 p-4 rounded-xl flex flex-col items-center gap-2 border border-orange-100">
                                <span className="text-xs font-bold text-orange-400 uppercase">Complex</span>
                                <span className="text-2xl font-bold text-orange-700">{complexAvg}ms</span>
                            </div>
                            <div className="flex-1 bg-blue-50 p-4 rounded-xl flex flex-col items-center gap-2 border border-blue-100">
                                <span className="text-xs font-bold text-blue-400 uppercase">Simple</span>
                                <span className="text-2xl font-bold text-blue-700">{simpleAvg}ms</span>
                            </div>
                        </div>

                        {improvement > 0 && (
                            <div className="bg-green-100 text-green-800 px-6 py-3 rounded-full font-bold text-lg animate-pulse">
                                🚀 {improvement}% Faster!
                            </div>
                        )}

                        <button
                            onClick={() => {
                                setGameState('intro');
                                setComplexTimes([]);
                                setSimpleTimes([]);
                                setCurrentTaskIndex(0);
                            }}
                            className="text-gray-400 hover:text-gray-600 font-medium mt-4"
                        >
                            Try Again
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                .animate-shake {
                    animation: shake 0.3s ease-in-out;
                }
            `}</style>
        </div>
    );
}

const CountDown = ({ onComplete, label }) => {
    const [count, setCount] = useState(3);

    useEffect(() => {
        if (count > 0) {
            const timer = setTimeout(() => setCount(count - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            onComplete();
        }
    }, [count]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            className="flex flex-col items-center justify-center gap-4"
        >
            <h3 className="text-2xl font-medium text-gray-500">{label}</h3>
            <span className="text-9xl font-black text-blue-600">{count > 0 ? count : "GO!"}</span>
        </motion.div>
    );
};
