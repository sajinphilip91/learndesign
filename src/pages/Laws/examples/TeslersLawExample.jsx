import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Calendar } from 'lucide-react';

export default function TeslersLawExample() {
    // 0 = Full User Burden (Manual), 100 = Full System Burden (Automated)
    const [complexityShift, setComplexityShift] = useState(50);

    return (
        <div className="min-h-[600px] w-full bg-slate-50 p-8 flex flex-col items-center justify-center gap-8 relative overflow-hidden">

            <div className="w-full max-w-2xl text-center z-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Conservation of Complexity</h2>
                <p className="text-gray-500 text-sm mb-6 max-w-lg mx-auto">
                    Every application has an inherent amount of complexity that cannot be removed. <br />
                    The only question is: <strong>Who handles it?</strong>
                </p>

                {/* The Slider Control */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-8">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-4">
                        <span className={complexityShift < 50 ? "text-red-500" : "text-gray-400"}>User's Burden</span>
                        <span className={complexityShift > 50 ? "text-blue-500" : "text-gray-400"}>System's Burden</span>
                    </div>
                    <input
                        type="range"
                        min="0" max="100" step="10"
                        value={complexityShift}
                        onChange={(e) => setComplexityShift(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                        <span>Hard for User</span>
                        <span>Hard for Devs</span>
                    </div>
                </div>
            </div>

            {/* The Interface Demo */}
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
                <div className="bg-slate-900 text-white p-4 font-bold text-center">
                    Flight Search UI
                </div>

                <div className="p-8 flex flex-col gap-6 min-h-[300px] justify-center">

                    {/* AIRPORT INPUT */}
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Destination</label>
                        {complexityShift < 40 ? (
                            // Low System Complexity -> High User Complexity (Raw Text)
                            <div className="space-y-2">
                                <input type="text" placeholder="Airport Code (e.g. LHR)" className="w-full p-3 border-2 border-red-100 bg-red-50 rounded-lg text-sm" />
                                <p className="text-xs text-red-500 font-medium">Create Logic: User must valid codes manually.</p>
                            </div>
                        ) : (
                            // High System Complexity -> Low User Complexity (Autocomplete)
                            <div className="relative group">
                                <div className="w-full p-3 border-2 border-blue-100 bg-blue-50 rounded-lg flex items-center justify-between cursor-pointer">
                                    <span className="font-medium text-blue-900">London Heathrow (LHR)</span>
                                    <Plane size={16} className="text-blue-400" />
                                </div>
                                <p className="text-xs text-blue-500 font-medium mt-2">backend Logic: Auto-suggest, fuzzy search, validation.</p>
                            </div>
                        )}
                    </div>

                    {/* DATE INPUT */}
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Travel Date</label>
                        {complexityShift < 60 ? (
                            // User types date string
                            <div className="space-y-2">
                                <input type="text" placeholder="DD/MM/YYYY" className="w-full p-3 border-2 border-red-100 bg-red-50 rounded-lg text-sm" />
                                <p className="text-xs text-red-500 font-medium">User must know format & check calendar.</p>
                            </div>
                        ) : (
                            // System provides picker
                            <div className="relative">
                                <div className="w-full p-3 border-2 border-blue-100 bg-blue-50 rounded-lg flex items-center justify-between cursor-pointer">
                                    <span className="font-medium text-blue-900">Oct 24, 2024</span>
                                    <Calendar size={16} className="text-blue-400" />
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>

        </div>
    );
}
