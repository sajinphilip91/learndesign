import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Calendar, MapPin, Users, ArrowRight, X, Briefcase, Tag, Search } from 'lucide-react';

export default function OccamsRazorExample() {
    const [isSimple, setIsSimple] = useState(true);

    return (
        <div className="min-h-[600px] w-full bg-blue-50/50 p-8 flex flex-col items-center justify-center gap-8 relative overflow-hidden">

            <div className="flex flex-col items-center gap-4 z-10 max-w-lg text-center">
                <div className="bg-white p-1 rounded-full shadow-sm border border-gray-200 flex">
                    <button
                        onClick={() => setIsSimple(false)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isSimple ? 'bg-red-100 text-red-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Complex / Bloated
                    </button>
                    <button
                        onClick={() => setIsSimple(true)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${isSimple ? 'bg-blue-100 text-blue-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Simple (Occam's Razor)
                    </button>
                </div>
                <p className="text-gray-500 text-sm max-w-md">
                    {isSimple
                        ? "Occam's Razor suggests removing unnecessary entities. The simple form assumes less about the user's specific needs upfront."
                        : "The complex form makes too many assumptions, overwhelming the user with optional fields that could be progressively disclosed later."}
                </p>
            </div>

            <AnimatePresence mode="wait">
                {isSimple ? (
                    <motion.div
                        key="simple"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-full max-w-3xl bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                        {/* Simple Header */}
                        <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
                            <h2 className="text-2xl font-bold flex items-center gap-2"><Plane className="rotate-[-45deg]" /> SkyHigh Airlines</h2>
                        </div>

                        {/* Simple Form Body */}
                        <div className="p-8 flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 cursor-pointer group transition-colors">
                                    <label className="text-xs font-bold text-gray-400 uppercase block mb-1">From</label>
                                    <div className="flex items-center gap-2 text-gray-800 font-medium group-hover:text-blue-600">
                                        <MapPin size={18} /> New York (JFK)
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 cursor-pointer group transition-colors">
                                    <label className="text-xs font-bold text-gray-400 uppercase block mb-1">To</label>
                                    <div className="flex items-center gap-2 text-gray-800 font-medium group-hover:text-blue-600">
                                        <MapPin size={18} /> London (LHR)
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 cursor-pointer group transition-colors">
                                    <label className="text-xs font-bold text-gray-400 uppercase block mb-1">Date</label>
                                    <div className="flex items-center gap-2 text-gray-800 font-medium group-hover:text-blue-600">
                                        <Calendar size={18} /> Oct 24
                                    </div>
                                </div>
                            </div>
                            <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
                                <Search size={20} /> Search Flights
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="complex"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-full max-w-3xl bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative"
                    >
                        {/* Complex Header */}
                        <div className="bg-slate-800 p-6 text-white flex justify-between items-center">
                            <h2 className="text-xl font-bold flex items-center gap-2 text-gray-300"><Plane className="rotate-[-45deg]" /> BloatedAir</h2>
                        </div>

                        {/* Complex Form Body */}
                        <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div className="col-span-2 md:col-span-2 p-3 border rounded-lg bg-gray-50">
                                <label className="block text-xs text-gray-500 mb-1">Departure City</label>
                                <input type="text" value="New York" className="w-full bg-transparent font-medium" readOnly />
                            </div>
                            <div className="col-span-2 md:col-span-2 p-3 border rounded-lg bg-gray-50">
                                <label className="block text-xs text-gray-500 mb-1">Arrival City</label>
                                <input type="text" value="London" className="w-full bg-transparent font-medium" readOnly />
                            </div>
                            <div className="col-span-2 md:col-span-1 p-3 border rounded-lg bg-gray-50">
                                <label className="block text-xs text-gray-500 mb-1">Depart Date</label>
                                <input type="text" value="10/24/2024" className="w-full bg-transparent" readOnly />
                            </div>
                            <div className="col-span-2 md:col-span-1 p-3 border rounded-lg bg-gray-50">
                                <label className="block text-xs text-gray-500 mb-1">Return Date</label>
                                <input type="text" value="Select Date" className="w-full bg-transparent text-gray-400" readOnly />
                            </div>
                            <div className="col-span-1 p-3 border rounded-lg bg-gray-50">
                                <label className="block text-xs text-gray-500 mb-1">Adults (18+)</label>
                                <select className="w-full bg-transparent"><option>1</option></select>
                            </div>
                            <div className="col-span-1 p-3 border rounded-lg bg-gray-50">
                                <label className="block text-xs text-gray-500 mb-1">Children</label>
                                <select className="w-full bg-transparent"><option>0</option></select>
                            </div>

                            {/* Unnecessary Fields */}
                            <div className="col-span-2 md:col-span-2 p-3 border rounded-lg bg-red-50 border-red-100">
                                <label className="block text-xs text-red-400 mb-1 flex items-center gap-1"><Briefcase size={10} /> Trip Type</label>
                                <div className="flex gap-2 text-xs">
                                    <label className="flex items-center gap-1"><input type="radio" checked readOnly /> Business</label>
                                    <label className="flex items-center gap-1"><input type="radio" /> Leisure</label>
                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-2 p-3 border rounded-lg bg-red-50 border-red-100">
                                <label className="block text-xs text-red-400 mb-1 flex items-center gap-1"><Tag size={10} /> Class</label>
                                <select className="w-full bg-transparent text-xs"><option>Economy Plus</option></select>
                            </div>
                            <div className="col-span-2 md:col-span-4 p-3 border rounded-lg bg-red-50 border-red-100">
                                <label className="block text-xs text-red-400 mb-1">Promo Code / Voucher / ID</label>
                                <input type="text" placeholder="Optional" className="w-full bg-transparent text-xs" />
                            </div>
                            <div className="col-span-2 md:col-span-4 flex items-center gap-2 text-xs text-gray-500">
                                <input type="checkbox" /> Flexible Dates (+/- 3 days)
                            </div>

                            <div className="col-span-2 md:col-span-4 mt-2">
                                <button className="w-full bg-slate-800 text-white font-bold py-3 rounded-lg hover:bg-slate-700 transition-colors">
                                    Analyze & Search Routes
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
