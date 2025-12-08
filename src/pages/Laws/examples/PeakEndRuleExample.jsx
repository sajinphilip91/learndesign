import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, Check, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PeakEndRuleExample() {
    const [view, setView] = useState('split'); // split, uploading-a, uploading-b, success-a, success-b
    const [progress, setProgress] = useState(0);

    const startUpload = (type) => {
        setView(`uploading-${type}`);
        setProgress(0);

        // Simulate upload
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    completeUpload(type);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);
    };

    const completeUpload = (type) => {
        setView(`success-${type}`);
        if (type === 'b') {
            triggerConfetti();
        }
    };

    const triggerConfetti = () => {
        const count = 200;
        const defaults = {
            origin: { y: 0.7 }
        };

        function fire(particleRatio, opts) {
            confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio)
            });
        }

        fire(0.25, { spread: 26, startVelocity: 55 });
        fire(0.2, { spread: 60 });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45 });
    };

    const reset = () => {
        setView('split');
        setProgress(0);
    };

    return (
        <div className="min-h-[600px] w-full bg-gray-50 p-8 flex flex-col items-center justify-center gap-8 relative overflow-hidden text-center">

            <div className="max-w-lg z-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">The Peak-End Rule</h2>
                <p className="text-gray-500 text-sm mb-6">
                    "People judge an experience based on its peak and its end."
                    <br />
                    Compare two file upload experiences.
                </p>

                {view === 'split' && (
                    <div className="flex gap-6 justify-center">
                        <button
                            onClick={() => startUpload('a')}
                            className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-3 w-40 group"
                        >
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                                <FileText size={24} />
                            </div>
                            <span className="font-semibold text-gray-700">Experience A</span>
                            <span className="text-xs text-gray-400">Functional & Boring</span>
                        </button>

                        <button
                            onClick={() => startUpload('b')}
                            className="bg-white border border-indigo-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-3 w-40 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-500 relative z-10">
                                <FileText size={24} />
                            </div>
                            <span className="font-semibold text-indigo-900 relative z-10">Experience B</span>
                            <span className="text-xs text-indigo-400 relative z-10">Delightful End</span>
                        </button>
                    </div>
                )}
            </div>

            <AnimatePresence mode="wait">
                {view.startsWith('uploading') && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
                    >
                        <UploadCloud size={48} className="text-blue-500 mx-auto mb-4 animate-bounce" />
                        <h3 className="font-bold text-gray-800 mb-1">Uploading Files...</h3>
                        <p className="text-sm text-gray-400 mb-6">Please wait while we process your data.</p>

                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-blue-500"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </motion.div>
                )}

                {view === 'success-a' && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
                    >
                        <h3 className="font-bold text-gray-800">Upload Complete.</h3>
                        <p className="text-xs text-gray-500 mt-2 mb-6">Your files have been saved.</p>
                        <button onClick={reset} className="text-blue-600 text-sm font-medium hover:underline">
                            Go Back
                        </button>
                    </motion.div>
                )}

                {view === 'success-b' && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', bounce: 0.5 }}
                        className="w-full max-w-sm bg-white p-8 rounded-3xl shadow-2xl border border-indigo-100 text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}
                            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-green-200"
                        >
                            <Check size={40} strokeWidth={4} />
                        </motion.div>
                        <h3 className="text-2xl font-black text-gray-900 mb-2">Success!</h3>
                        <p className="text-gray-500 mb-8">
                            Your files are safe and sound. <br /> Great job!
                        </p>
                        <button
                            onClick={reset}
                            className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-transform active:scale-95"
                        >
                            Do it again
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}
