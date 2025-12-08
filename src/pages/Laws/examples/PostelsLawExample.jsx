import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Search, AlertCircle, CheckCircle } from 'lucide-react';
import { format, parse, isValid } from 'date-fns';

export default function PostelsLawExample() {
    const [isStrict, setIsStrict] = useState(false);
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null); // { status: 'success' | 'error', message: string, date?: string }

    const handleSearch = (e) => {
        e.preventDefault();

        if (!input.trim()) {
            setResult(null);
            return;
        }

        if (isStrict) {
            // Strict Mode: Only accepts YYYY-MM-DD
            const regex = /^\d{4}-\d{2}-\d{2}$/;
            if (regex.test(input)) {
                setResult({
                    status: 'success',
                    message: "Valid format accepted.",
                    date: format(new Date(input), 'MMMM do, yyyy')
                });
            } else {
                setResult({ status: 'error', message: "Error: Invalid format. Please use YYYY-MM-DD." });
            }
        } else {
            // Postel's Law (Liberal Mode)
            // Try to parse various formats
            const cleanInput = input.toLowerCase().trim();
            let parsedDate = null;

            // Basic natural language simulation
            const today = new Date();

            if (cleanInput === 'today') parsedDate = today;
            else if (cleanInput === 'tomorrow') {
                const tmrw = new Date(today);
                tmrw.setDate(tmrw.getDate() + 1);
                parsedDate = tmrw;
            } else {
                // Try guessing formats
                const formats = ['yyyy-MM-dd', 'MM/dd/yyyy', 'MM-dd-yyyy', 'MMM do', 'MMM dd'];
                for (let f of formats) {
                    const d = parse(input, f, new Date());
                    if (isValid(d)) {
                        parsedDate = d;
                        break;
                    }
                }
            }

            // Fallback for just "Oct 5" style that date-fns might miss depending on locale config or exact string match
            if (!parsedDate && !isNaN(Date.parse(input))) {
                parsedDate = new Date(input);
            }

            if (parsedDate && isValid(parsedDate)) {
                setResult({
                    status: 'success',
                    message: "Input understood.",
                    date: format(parsedDate, 'MMMM do, yyyy')
                });
            } else {
                setResult({ status: 'error', message: "Sorry, we couldn't figure that date out." });
            }
        }
    };

    return (
        <div className="min-h-[600px] w-full bg-slate-50 p-8 flex flex-col items-center justify-center gap-8 relative overflow-hidden">

            <div className="flex flex-col items-center gap-4 z-10 max-w-lg text-center">
                <div className="bg-white p-1 rounded-full shadow-sm border border-gray-200 flex">
                    <button
                        onClick={() => { setIsStrict(true); setResult(null); setInput(''); }}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${isStrict ? 'bg-red-100 text-red-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Strict System
                    </button>
                    <button
                        onClick={() => { setIsStrict(false); setResult(null); setInput(''); }}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isStrict ? 'bg-green-100 text-green-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Postel's Law (Liberal)
                    </button>
                </div>
                <p className="text-gray-500 text-sm max-w-md">
                    {isStrict
                        ? "The strict system requires exact formatting. This frustrates users who don't know the specific rules."
                        : "Postel's Law: Be liberal in what you accept. The system tries to understand 'today', 'Oct 5', or '10/05/2024'."}
                </p>
            </div>

            <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <label className="block text-sm font-bold text-gray-700 mb-2">Book a Flight</label>
                <form onSubmit={handleSearch} className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={isStrict ? "YYYY-MM-DD" : "e.g., Tomorrow, Oct 5, 10/24..."}
                        className={`w-full p-4 pl-12 rounded-xl border-2 outline-none transition-colors font-medium
                            ${result?.status === 'error'
                                ? 'border-red-100 bg-red-50 text-red-900 focus:border-red-300'
                                : 'border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50'
                            }`}
                    />
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white p-2 rounded-lg hover:bg-black transition-colors"
                    >
                        <Search size={20} />
                    </button>
                </form>

                <AnimatePresence mode="wait">
                    {result && (
                        <motion.div
                            key={result.status + result.message}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className={`mt-4 p-4 rounded-xl flex items-start gap-3 text-sm
                                ${result.status === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
                        >
                            {result.status === 'success' ? <CheckCircle size={20} className="shrink-0 mt-0.5" /> : <AlertCircle size={20} className="shrink-0 mt-0.5" />}
                            <div>
                                <p className="font-bold">{result.message}</p>
                                {result.date && (
                                    <p className="font-mono mt-1 text-base bg-white/50 inline-block px-2 py-0.5 rounded border border-black/5">
                                        Parsed Date: {result.date}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-3">Try typing:</p>
                    <div className="flex flex-wrap gap-2">
                        {['2024-12-25', 'Oct 31', 'Tomorrow', 'next friday', '12/25/2024'].map(ex => (
                            <button
                                key={ex}
                                onClick={() => { setInput(ex); setResult(null); }}
                                className="text-xs bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full hover:bg-gray-100 hover:border-gray-300 transition-colors"
                            >
                                {ex}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
