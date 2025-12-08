import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight,
    List, Image, Link, Smile, PieChart, Table, Quote, Code,
    Highlighter, Type, Save
} from 'lucide-react';

const FEATURES = [
    { id: 'bold', icon: Bold, label: 'Bold', usage: 85 },
    { id: 'italic', icon: Italic, label: 'Italic', usage: 60 },
    { id: 'underline', icon: Underline, label: 'Underline', usage: 30 },
    { id: 'left', icon: AlignLeft, label: 'Align Left', usage: 50 },
    { id: 'center', icon: AlignCenter, label: 'Align Center', usage: 40 },
    { id: 'right', icon: AlignRight, label: 'Align Right', usage: 10 },
    { id: 'list', icon: List, label: 'List', usage: 75 },
    { id: 'save', icon: Save, label: 'Save', usage: 95 }, // The 20%
    { id: 'img', icon: Image, label: 'Image', usage: 25 },
    { id: 'link', icon: Link, label: 'Link', usage: 45 },
    { id: 'emoji', icon: Smile, label: 'Emoji', usage: 15 },
    { id: 'chart', icon: PieChart, label: 'Chart', usage: 5 },
    { id: 'table', icon: Table, label: 'Table', usage: 8 },
    { id: 'quote', icon: Quote, label: 'Quote', usage: 12 },
    { id: 'code', icon: Code, label: 'Code', usage: 3 },
    { id: 'highlight', icon: Highlighter, label: 'Highlight', usage: 18 },
    { id: 'font', icon: Type, label: 'Font', usage: 20 },
];

export default function ParetoPrincipleExample() {
    const [showHeatmap, setShowHeatmap] = useState(false);
    const [clicks, setClicks] = useState({});

    const handleFeatureClick = (id) => {
        setClicks(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }));
    };

    return (
        <div className="min-h-[600px] w-full bg-slate-900 p-8 flex flex-col items-center justify-center gap-8 relative overflow-hidden text-center">

            <div className="flex flex-col items-center gap-4 z-10 max-w-lg">
                <button
                    onClick={() => setShowHeatmap(!showHeatmap)}
                    className={`px-8 py-3 rounded-full font-bold transition-all shadow-lg flex items-center gap-2
                        ${showHeatmap ? 'bg-orange-500 text-white shadow-orange-500/30' : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'}`}
                >
                    {showHeatmap ? 'Hide Usage Heatmap' : 'Show Usage Heatmap'}
                </button>
                <p className="text-slate-400 text-sm">
                    {showHeatmap
                        ? "Notice how roughly 20% of the buttons (Bold, Save, List) account for 80% of the potential actions."
                        : "Click around the toolbar. When you're ready, toggle the Heatmap to see the Pareto Principle in action."}
                </p>
            </div>

            <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden min-h-[300px] flex flex-col relative">
                {/* Toolbar */}
                <div className="bg-gray-100 border-b border-gray-200 p-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                    {FEATURES.map((feature) => {
                        const Icon = feature.icon;
                        const opacity = showHeatmap ? (feature.usage / 100) : 1;
                        const isVital = feature.usage >= 75; // The "Vital Few"

                        return (
                            <motion.button
                                key={feature.id}
                                onClick={() => handleFeatureClick(feature.id)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className={`
                                    relative p-3 rounded-lg border transition-all duration-500
                                    ${showHeatmap
                                        ? isVital
                                            ? 'bg-orange-100 border-orange-300 text-orange-600 shadow-md scale-110 z-10'
                                            : 'bg-gray-50 border-gray-100 text-gray-300 grayscale opacity-50 blur-[0.5px]'
                                        : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                                    }
                                `}
                            >
                                <Icon size={20} />
                                {showHeatmap && isVital && (
                                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                                        {feature.usage}%
                                    </div>
                                )}
                            </motion.button>
                        );
                    })}
                </div>

                {/* Editor Content */}
                <div className="flex-1 p-8 text-left bg-white relative">
                    {showHeatmap && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-slate-900/90 text-white p-6 rounded-2xl backdrop-blur-sm max-w-sm text-center borderBorder-slate-700 shadow-2xl"
                            >
                                <div className="text-4xl font-black text-orange-500 mb-2">20%</div>
                                <div className="text-lg font-medium">of the features drive</div>
                                <div className="text-4xl font-black text-white my-2">80%</div>
                                <div className="text-lg font-medium">of the value.</div>
                            </motion.div>
                        </div>
                    )}
                    <p className="text-gray-300 text-lg leading-relaxed select-none blur-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
    );
}
