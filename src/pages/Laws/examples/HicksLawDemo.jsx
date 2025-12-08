import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../../components/ui/Button';
import { Clock } from 'lucide-react';

export default function HicksLawDemo() {
    const [mode, setMode] = useState('simple'); // simple, complex
    const [target, setTarget] = useState('');
    const [startTime, setStartTime] = useState(null);
    const [timeTaken, setTimeTaken] = useState(null);
    const [items, setItems] = useState([]);

    const simpleItems = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    const complexItems = [
        'Apple', 'Apricot', 'Avocado', 'Banana', 'Blackberry', 'Blueberry',
        'Cherry', 'Coconut', 'Cranberry', 'Date', 'Dragonfruit', 'Durian',
        'Elderberry', 'Fig', 'Grape', 'Guava', 'Honeydew', 'Kiwi', 'Lemon', 'Lime'
    ];

    const startGame = (selectedMode) => {
        setMode(selectedMode);
        const list = selectedMode === 'simple' ? simpleItems : complexItems;
        // Shuffle list
        const shuffled = [...list].sort(() => Math.random() - 0.5);
        setItems(shuffled);
        // Pick random target
        const randomTarget = shuffled[Math.floor(Math.random() * shuffled.length)];
        setTarget(randomTarget);
        setStartTime(Date.now());
        setTimeTaken(null);
    };

    const handleItemClick = (item) => {
        if (item === target) {
            const end = Date.now();
            setTimeTaken((end - startTime) / 1000);
        }
    };

    useEffect(() => {
        startGame('simple');
    }, []);

    return (
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col items-center">
            <div className="flex justify-center mb-6">
                <div className="bg-gray-100 p-1 rounded-lg inline-flex">
                    <button
                        onClick={() => startGame('simple')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${mode === 'simple' ? 'bg-white shadow-sm text-green-600' : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        Simple (5 items)
                    </button>
                    <button
                        onClick={() => startGame('complex')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${mode === 'complex' ? 'bg-white shadow-sm text-red-600' : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        Complex (20 items)
                    </button>
                </div>
            </div>

            <div className="text-center mb-6">
                <p className="text-sm text-gray-500 mb-1">Find and click:</p>
                <h3 className="text-2xl font-bold text-blue-600">{target}</h3>
            </div>

            <div className="grid grid-cols-2 gap-2 w-full mb-6 max-h-[200px] overflow-y-auto">
                {items.map((item) => (
                    <button
                        key={item}
                        onClick={() => handleItemClick(item)}
                        className="p-3 bg-gray-50 hover:bg-blue-50 hover:text-blue-600 rounded-lg text-sm font-medium transition-colors border border-transparent hover:border-blue-200"
                    >
                        {item}
                    </button>
                ))}
            </div>

            {timeTaken && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full"
                >
                    <Clock className="w-4 h-4" />
                    <span className="font-bold">{timeTaken.toFixed(2)}s</span>
                </motion.div>
            )}

            <div className="mt-4 text-center text-xs text-gray-400">
                {mode === 'complex' ? "More options = Slower decision time" : "Fewer options = Faster decision time"}
            </div>
        </div>
    );
}
