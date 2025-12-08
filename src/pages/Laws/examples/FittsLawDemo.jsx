import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';

export default function FittsLawDemo() {
    const [mode, setMode] = useState('easy'); // easy, hard
    const [score, setScore] = useState(0);

    return (
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-100 p-6 h-[400px] relative flex flex-col">
            <div className="flex justify-center mb-4 z-10">
                <div className="bg-gray-100 p-1 rounded-lg inline-flex">
                    <button
                        onClick={() => setMode('easy')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${mode === 'easy' ? 'bg-white shadow-sm text-green-600' : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        Easy Target
                    </button>
                    <button
                        onClick={() => setMode('hard')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${mode === 'hard' ? 'bg-white shadow-sm text-red-600' : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        Hard Target
                    </button>
                </div>
            </div>

            <div className="flex-1 relative bg-gray-50 rounded-lg overflow-hidden border border-dashed border-gray-200">
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <MousePointer2 className="w-6 h-6 text-gray-400 mb-2" />
                    <span className="text-xs text-gray-400">Start Here</span>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setScore(s => s + 1)}
                    className={`absolute rounded-full bg-blue-600 text-white font-bold shadow-lg flex items-center justify-center transition-all ${mode === 'easy'
                            ? 'w-24 h-24 top-10 left-1/2 -translate-x-1/2' // Large and close(ish)
                            : 'w-8 h-8 top-4 right-4' // Small and far
                        }`}
                >
                    Click!
                </motion.button>
            </div>

            <div className="mt-4 text-center text-sm text-gray-600">
                {mode === 'easy'
                    ? "Large target + Close distance = Fast & Easy"
                    : "Small target + Far distance = Slow & Error-prone"}
            </div>
        </div>
    );
}
