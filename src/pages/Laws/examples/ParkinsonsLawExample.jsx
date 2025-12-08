import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle, RotateCcw } from 'lucide-react';

const SENTENCE = "The quick brown fox jumps over the lazy dog";

export default function ParkinsonsLawExample() {
    const [mode, setMode] = useState('intro'); // intro, playing
    const [timeLimit, setTimeLimit] = useState(30); // 30s or 5s
    const [timeLeft, setTimeLeft] = useState(30);
    const [userInput, setUserInput] = useState('');
    const [startTime, setStartTime] = useState(0);
    const [finalTime, setFinalTime] = useState(0);
    const inputRef = useRef(null);

    useEffect(() => {
        if (mode === 'playing' && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 0.1) {
                        clearInterval(timer);
                        finishGame(false);
                        return 0;
                    }
                    return prev - 0.1;
                });
            }, 100);
            return () => clearInterval(timer);
        }
    }, [mode, timeLeft]);

    const startGame = (limit) => {
        setTimeLimit(limit);
        setTimeLeft(limit);
        setUserInput('');
        setMode('playing');
        setStartTime(Date.now());
        setTimeout(() => inputRef.current?.focus(), 100);
    };

    const handleInput = (e) => {
        const val = e.target.value;
        setUserInput(val);
        if (val === SENTENCE) {
            finishGame(true);
        }
    };

    const finishGame = (success) => {
        setFinalTime((Date.now() - startTime) / 1000);
        setMode(success ? 'success' : 'failed');
    };

    return (
        <div className="min-h-[600px] w-full bg-slate-50 p-8 flex flex-col items-center justify-center gap-8 relative overflow-hidden text-center">

            <AnimatePresence mode="wait">
                {mode === 'intro' && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                        className="max-w-lg flex flex-col items-center gap-6"
                    >
                        <Clock size={64} className="text-indigo-500 mb-2" />
                        <h2 className="text-3xl font-bold text-gray-900">Work Expands to Fill Time</h2>
                        <p className="text-gray-600">
                            Parkinson's Law suggests that if you give yourself more time, a task will take longer.
                            <br /><br />
                            <strong>Task:</strong> Type the sentence "The quick brown fox jumps over the lazy dog"
                        </p>
                        <div className="flex gap-4 w-full">
                            <button
                                onClick={() => startGame(30)}
                                className="flex-1 bg-white border border-gray-300 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-sm"
                            >
                                Give me 30 Seconds
                            </button>
                            <button
                                onClick={() => startGame(10)}
                                className="flex-1 bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                            >
                                Give me 10 Seconds
                            </button>
                        </div>
                    </motion.div>
                )}

                {mode === 'playing' && (
                    <motion.div
                        key="playing"
                        initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1.05, opacity: 0 }}
                        className="w-full max-w-xl flex flex-col gap-6"
                    >
                        <div className="flex justify-between items-end text-indigo-900">
                            <span className="font-bold text-sm uppercase tracking-wider">Time Remaining</span>
                            <span className={`text-4xl font-mono font-black ${timeLeft < 3 ? 'text-red-500 animate-pulse' : 'text-indigo-600'}`}>
                                {timeLeft.toFixed(1)}s
                            </span>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            <motion.div
                                className="h-full bg-indigo-500"
                                initial={{ width: '100%' }}
                                animate={{ width: '0%' }}
                                transition={{ duration: timeLimit, ease: 'linear' }}
                            />
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-indigo-100 text-left">
                            <p className="text-gray-400 font-medium mb-2 select-none pointer-events-none">{SENTENCE}</p>
                            <input
                                ref={inputRef}
                                type="text"
                                value={userInput}
                                onChange={handleInput}
                                placeholder="Type here..."
                                className="w-full text-xl font-medium text-gray-900 placeholder:text-gray-300 outline-none"
                                spellCheck={false}
                            />
                        </div>
                    </motion.div>
                )}

                {(mode === 'success' || mode === 'failed') && (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                        className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl flex flex-col items-center gap-6"
                    >
                        {mode === 'success' ? (
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                                <CheckCircle size={40} />
                            </div>
                        ) : (
                            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-2">
                                <Clock size={40} />
                            </div>
                        )}

                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-900 mb-1">
                                {mode === 'success' ? "Task Complete!" : "Time's Up!"}
                            </h2>
                            <p className="text-gray-500">
                                You finished in <strong className="text-indigo-600">{finalTime.toFixed(2)}s</strong>
                            </p>
                        </div>

                        <div className="bg-indigo-50 p-4 rounded-xl text-sm text-indigo-800 leading-relaxed">
                            {timeLimit === 30 && finalTime > 10
                                ? "Notice how you took your time? With a 30s limit, we tend to relax and use more of it."
                                : "With a tight deadline, you were forced to focus and likely completed it much faster."}
                        </div>

                        <button
                            onClick={() => setMode('intro')}
                            className="flex items-center gap-2 text-gray-400 hover:text-gray-600 font-medium mt-2"
                        >
                            <RotateCcw size={16} /> Try Again
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
