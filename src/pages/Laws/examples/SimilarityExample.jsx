import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, List } from 'lucide-react';

const WIDGETS = [
    { id: 1, type: 'finance', label: 'Revenue', value: '$24k' },
    { id: 2, type: 'finance', label: 'Expenses', value: '$12k' },
    { id: 3, type: 'finance', label: 'Profit', value: '$12k' },
    { id: 4, type: 'social', label: 'Likes', value: '1.2k' },
    { id: 5, type: 'social', label: 'Shares', value: '340' },
    { id: 6, type: 'social', label: 'Comments', value: '85' },
    { id: 7, type: 'system', label: 'Storage', value: '45%' },
    { id: 8, type: 'system', label: 'CPU', value: '12%' },
    { id: 9, type: 'system', label: 'Memory', value: '34%' },
];

export default function SimilarityExample() {
    const [isConsistent, setIsConsistent] = useState(false);

    return (
        <div className="min-h-[600px] w-full bg-gray-50 p-8 flex flex-col items-center justify-center gap-8 relative overflow-hidden text-center">

            <div className="flex flex-col items-center gap-4 z-10 max-w-lg">
                <button
                    onClick={() => setIsConsistent(!isConsistent)}
                    className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
                >
                    {isConsistent ? <LayoutGrid className="text-blue-500" /> : <List className="text-gray-400" />}
                    {isConsistent ? "Similarity Applied" : "Random / Chaotic"}
                </button>
                <p className="text-gray-500 text-sm">
                    {isConsistent
                        ? "Items with the same color and shape are instantly perceived as related groups (Finance, Social, System)."
                        : "Without visual similarity, you have to read each label to understand the category."}
                </p>
            </div>

            <motion.div
                layout
                className="grid grid-cols-3 gap-4 w-full max-w-2xl bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
            >
                <AnimatePresence mode="popLayout">
                    {WIDGETS.map((widget) => {
                        // Styles based on state
                        let bgClass = "bg-gray-100";
                        let textClass = "text-gray-600";
                        let borderClass = "rounded-xl";

                        if (isConsistent) {
                            if (widget.type === 'finance') {
                                bgClass = "bg-green-100";
                                textClass = "text-green-700";
                                borderClass = "rounded-xl border-green-200";
                            } else if (widget.type === 'social') {
                                bgClass = "bg-blue-100";
                                textClass = "text-blue-700";
                                borderClass = "rounded-full border-blue-200"; // Different shape too
                            } else {
                                bgClass = "bg-purple-100";
                                textClass = "text-purple-700";
                                borderClass = "rounded-md border-purple-200";
                            }
                        } else {
                            // Chaotic random styling that explicitly breaks grouping
                            const randoms = [
                                "bg-orange-100 text-orange-800 rounded-full",
                                "bg-teal-100 text-teal-800 rounded-md",
                                "bg-pink-100 text-pink-800 rounded-xl"
                            ];
                            // Deterministic random based on ID so it doesn't flicker on re-render but looks scrambled
                            const styleIndex = (widget.id * 7) % 3;
                            const parts = randoms[styleIndex].split(' ');
                            bgClass = parts[0];
                            textClass = parts.slice(1, -1).join(' ');
                            borderClass = parts[parts.length - 1];
                        }

                        return (
                            <motion.div
                                key={widget.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className={`p-4 flex flex-col items-center justify-center gap-1 border-2 border-transparent ${bgClass} ${borderClass}`}
                            >
                                <span className={`text-xs font-bold uppercase tracking-wider opacity-60 ${textClass}`}>{widget.label}</span>
                                <span className={`text-2xl font-black ${textClass}`}>{widget.value}</span>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
