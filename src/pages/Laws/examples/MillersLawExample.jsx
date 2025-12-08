import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Eye, EyeOff, Play, RefreshCw } from 'lucide-react';

export default function MillersLawExample() {
    const [gameState, setGameState] = useState('intro'); // intro, memorize, recall, result
    const [difficulty, setDifficulty] = useState('hard'); // hard (unchunked), easy (chunked)
    const [numbers, setNumbers] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [score, setScore] = useState(0);

    const generateNumbers = () => {
        const nums = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10)); // 10 digits (Hard for working memory)
        setNumbers(nums);
    };

    const startGame = (diff) => {
        setDifficulty(diff);
        generateNumbers();
        setGameState('memorize');
        setUserInput('');
    };

    // Auto-advance from memorize to recall
    useEffect(() => {
        if (gameState === 'memorize') {
            const timer = setTimeout(() => {
                setGameState('recall');
            }, 3000); // 3 seconds to memorize
            return () => clearTimeout(timer);
        }
    }, [gameState]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const correctStr = numbers.join('');
        const userStr = userInput.replace(/[\s-]/g, ''); // standardize input

        let correctCount = 0;
        for (let i = 0; i < correctStr.length; i++) {
            if (userStr[i] === correctStr[i]) correctCount++;
        }
        setScore(correctCount);
        setGameState('result');
    };

    const ChunkedDisplay = ({ nums }) => (
        <div className="flex gap-4 text-4xl font-mono font-bold text-gray-800">
            <span>{nums.slice(0, 3).join('')}</span>
            <span>{nums.slice(3, 6).join('')}</span>
            <span>{nums.slice(6, 10).join('')}</span>
        </div>
    );

    const UnchunkedDisplay = ({ nums }) => (
        <div className="text-4xl font-mono font-bold text-gray-800 tracking-widest">
            {nums.join('')}
        </div>
    );

    return (
        <div className="min-h-[600px] w-full bg-gray-50 p-8 flex flex-col items-center justify-center gap-8 relative overflow-hidden text-center">

            <AnimatePresence mode="wait">
                {gameState === 'intro' && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="max-w-lg flex flex-col items-center gap-6"
                    >
                        <Brain size={64} className="text-purple-500 mb-4" />
                        <h2 className="text-3xl font-bold text-gray-800">Short-Term Memory Test</h2>
                        <p className="text-gray-600 text-lg">
                            Miller's Law states we can hold about 7 (±2) items in working memory.
                            <br /><br />
                            Let's see how <strong>Chunking</strong> affects your recall of a 10-digit number.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <button
                                onClick={() => startGame('hard')}
                                className="bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors"
                            >
                                Test without Chunking
                            </button>
                            <button
                                onClick={() => startGame('easy')}
                                className="bg-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-purple-700 shadow-lg shadow-purple-200 transition-colors"
                            >
                                Test with Chunking
                            </button>
                        </div>
                    </motion.div>
                )}

                {gameState === 'memorize' && (
                    <motion.div
                        key="memorize"
                        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1.1, opacity: 0 }}
                        className="flex flex-col items-center gap-8"
                    >
                        <h3 className="text-2xl font-bold text-gray-400">Memorize this...</h3>
                        <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100 min-w-[300px] flex justify-center">
                            {difficulty === 'easy' ? <ChunkedDisplay nums={numbers} /> : <UnchunkedDisplay nums={numbers} />}
                        </div>
                        <div className="w-full max-w-xs h-1 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-purple-500"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 3, ease: "linear" }}
                            />
                        </div>
                    </motion.div>
                )}

                {gameState === 'recall' && (
                    <motion.div
                        key="recall"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <EyeOff size={48} className="text-gray-300 mb-2" />
                        <h3 className="text-2xl font-bold text-gray-800">What was the number?</h3>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
                            <input
                                autoFocus
                                type="text"
                                inputMode="numeric"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                className="w-full text-center text-3xl font-mono p-4 rounded-xl border-2 border-purple-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                                placeholder={difficulty === 'easy' ? "XXX XXX XXXX" : "XXXXXXXXXX"}
                            />
                            <button
                                type="submit"
                                className="bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-black transition-colors"
                            >
                                Submit
                            </button>
                        </form>
                    </motion.div>
                )}

                {gameState === 'result' && (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                        className="max-w-lg w-full bg-white p-8 rounded-3xl shadow-xl flex flex-col items-center gap-6"
                    >
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Accuracy Score</span>
                            <span className={`text-6xl font-black ${score === 10 ? 'text-green-500' : score > 7 ? 'text-yellow-500' : 'text-red-500'}`}>
                                {score}/10
                            </span>
                        </div>

                        <div className="w-full bg-gray-50 p-4 rounded-xl text-center space-y-2">
                            <p className="text-sm text-gray-500">Actual Number</p>
                            <div className="font-mono font-bold text-xl text-gray-800">{numbers.join('')}</div>
                            <div className="w-full h-px bg-gray-200 my-2" />
                            <p className="text-sm text-gray-500">Your Answer</p>
                            <div className="font-mono font-medium text-lg text-gray-600">{userInput || "(Empty)"}</div>
                        </div>

                        <p className="text-gray-600">
                            {difficulty === 'easy'
                                ? "Chunking helps your brain process data as fewer 'units', making recall easier."
                                : "Without chunking, a 10-digit string often exceeds working memory capacity (7 items)."}
                        </p>

                        <button
                            onClick={() => setGameState('intro')}
                            className="flex items-center gap-2 text-purple-600 font-bold hover:underline mt-4"
                        >
                            <RefreshCw size={18} /> Try Another Mode
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
