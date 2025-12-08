import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Camera, Loader2, CheckCircle2 } from 'lucide-react';

export default function ZeigarnikExample() {
    const [state, setState] = useState('incomplete'); // incomplete, complete

    return (
        <div className="min-h-[600px] w-full bg-gray-50 p-8 flex flex-col items-center justify-center gap-12 relative overflow-hidden text-center">

            <div className="flex flex-col items-center gap-4 z-10 max-w-lg">
                <div className="bg-white p-1 rounded-full shadow-sm border border-gray-200 flex">
                    <button
                        onClick={() => setState('complete')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${state === 'complete' ? 'bg-green-100 text-green-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Success (100%)
                    </button>
                    <button
                        onClick={() => setState('incomplete')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${state === 'incomplete' ? 'bg-orange-100 text-orange-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Tension (85%)
                    </button>
                </div>
                <p className="text-gray-500 text-sm max-w-md">
                    {state === 'incomplete'
                        ? "Zeigarnik Effect: People remember uncompleted tasks better. The '85%' progress creates a mental tension to finish it."
                        : "Once a task is 100% complete, the brain releases the tension and often forgets about it (closure)."}
                </p>
            </div>

            <div className="w-full max-w-md perspective-1000">
                <AnimatePresence mode="wait">
                    {state === 'incomplete' ? (
                        <motion.div
                            key="incomplete"
                            initial={{ rotateX: -10, opacity: 0 }}
                            animate={{ rotateX: 0, opacity: 1 }}
                            exit={{ rotateX: 10, opacity: 0 }}
                            className="bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-orange-100 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-2 bg-gray-100">
                                <motion.div
                                    className="h-full bg-orange-500"
                                    initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ duration: 1 }}
                                />
                            </div>

                            <div className="flex items-center justify-between mb-8 mt-2">
                                <h3 className="font-bold text-gray-800 text-lg">Profile Setup</h3>
                                <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">
                                    85% Complete
                                </div>
                            </div>

                            <div className="space-y-4 mb-8 text-left">
                                <div className="flex items-center gap-3 text-gray-400 line-through decoration-gray-300">
                                    <CheckCircle2 className="text-green-500" size={20} />
                                    <span>Create Account</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400 line-through decoration-gray-300">
                                    <CheckCircle2 className="text-green-500" size={20} />
                                    <span>Verify Email</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-800 font-bold bg-orange-50 p-3 rounded-xl border border-orange-200 animate-pulse">
                                    <div className="w-5 h-5 rounded-full border-2 border-orange-500" />
                                    <span>Upload Profile Photo</span>
                                </div>
                            </div>

                            <button onClick={() => setState('complete')} className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold shadow-lg shadow-orange-200 hover:bg-orange-600 transition-colors">
                                Finish Setup
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="complete"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.1, opacity: 0 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center"
                        >
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                                <CheckCircle2 size={48} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">All Done!</h3>
                            <p className="text-gray-500 mb-8">
                                Your profile is 100% complete. <br /> You're all set.
                            </p>
                            <button className="text-gray-400 hover:text-gray-600 font-medium" disabled>
                                No pending tasks
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </div>
    );
}
