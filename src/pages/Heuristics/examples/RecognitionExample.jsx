import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../../components/ui/Button';
import {
    Search, Clock, Type, Terminal, MousePointer2,
    Palette, Hash, Image, Tag, HelpCircle,
    Bold, Italic, Underline, AlignLeft
} from 'lucide-react';
import { cn } from '../../../lib/utils';

// --- Scenario 1: Search History (Recent Items) ---
const SearchScenario = () => {
    const [mode, setMode] = useState('recall');
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const recentSearches = ["User Experience", "Heuristics", "Accessibility"];

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('recall')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'recall' ? "bg-orange-100 text-orange-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Recall (Hard)</button>
                <button onClick={() => setMode('recognition')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'recognition' ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Recognition (Easy)</button>
            </div>

            <div className="w-full relative">
                <div className="relative">
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                        placeholder="Search..."
                        className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <AnimatePresence>
                    {mode === 'recognition' && isFocused && !query && (
                        <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden z-10"
                        >
                            <div className="p-2 bg-gray-50 border-b border-gray-100">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Recent</span>
                            </div>
                            {recentSearches.map(s => (
                                <button key={s} onClick={() => setQuery(s)} className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 text-gray-700 flex items-center gap-2">
                                    <Clock className="w-3 h-3 text-gray-400" />
                                    {s}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
                {mode === 'recall' && !query && (
                    <p className="text-xs text-gray-400 mt-2 text-center">
                        Empty search boxes force users to remember what they were looking for.
                    </p>
                )}
                {mode === 'recognition' && !query && (
                    <p className="text-xs text-gray-400 mt-2 text-center">
                        Showing recent searches lets users click instead of typing.
                    </p>
                )}
            </div>
        </div>
    );
};

// --- Scenario 2: Font Picker (Visual Preview) ---
const FontScenario = () => {
    const [mode, setMode] = useState('recall');
    const [selectedFont, setSelectedFont] = useState('Inter');
    const [isOpen, setIsOpen] = useState(false);

    const fonts = [
        { name: 'Inter', style: 'font-sans' },
        { name: 'Serif', style: 'font-serif' },
        { name: 'Mono', style: 'font-mono' },
        { name: 'Cursive', style: 'italic' }
    ];

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('recall')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'recall' ? "bg-orange-100 text-orange-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Recall (Hard)</button>
                <button onClick={() => setMode('recognition')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'recognition' ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Recognition (Easy)</button>
            </div>

            <div className="w-full relative">
                <label className="text-xs font-medium text-gray-500 mb-1.5 block">Choose Font</label>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between px-3 py-2 border border-gray-200 rounded-lg bg-white text-sm"
                >
                    <span className={mode === 'recognition' ? fonts.find(f => f.name === selectedFont)?.style : ''}>
                        {selectedFont}
                    </span>
                    <Type className="w-4 h-4 text-gray-400" />
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden z-10"
                        >
                            {fonts.map(f => (
                                <button
                                    key={f.name}
                                    onClick={() => { setSelectedFont(f.name); setIsOpen(false); }}
                                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-gray-700"
                                >
                                    {mode === 'recognition' ? (
                                        <span className={f.style}>{f.name}</span>
                                    ) : (
                                        <span>{f.name}</span>
                                    )}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
                <p className="text-xs text-gray-400 mt-2 text-center">
                    {mode === 'recognition' ? "Seeing the font style helps users choose the right look." : "Just seeing the font name forces users to guess what it looks like."}
                </p>
            </div>
        </div>
    );
};

// --- Scenario 3: Command vs GUI (Visible Actions) ---
const CommandScenario = () => {
    const [mode, setMode] = useState('recall');
    const [output, setOutput] = useState('');

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('recall')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'recall' ? "bg-orange-100 text-orange-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Recall (Hard)</button>
                <button onClick={() => setMode('recognition')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'recognition' ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Recognition (Easy)</button>
            </div>

            <div className="w-full h-32 bg-gray-900 rounded-lg p-4 font-mono text-xs text-green-400 relative overflow-hidden flex flex-col">
                <div className="flex-1">
                    <p>$ status_check</p>
                    <p className="text-white/80">{output || "Ready..."}</p>
                </div>

                {mode === 'recognition' ? (
                    <div className="mt-auto flex gap-2 pt-2 border-t border-gray-700">
                        <button onClick={() => setOutput("System OK")} className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-white text-[10px]">Check Status</button>
                        <button onClick={() => setOutput("Logs cleared")} className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-white text-[10px]">Clear Logs</button>
                    </div>
                ) : (
                    <div className="mt-auto flex gap-2 pt-2 border-t border-gray-700 items-center">
                        <span className="text-gray-500">$</span>
                        <input
                            type="text"
                            placeholder="Type command..."
                            className="bg-transparent border-none outline-none text-white w-full placeholder:text-gray-600"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    setOutput(`Command not found: ${e.target.value}`);
                                    e.target.value = '';
                                }
                            }}
                        />
                    </div>
                )}
            </div>
            <p className="mt-4 text-xs text-gray-400 text-center">
                {mode === 'recognition' ? "Visible buttons show users what they can do." : "Command lines require users to memorize exact commands."}
            </p>
        </div>
    );
};

// --- Scenario 4: Color Picker (Visual Selection) ---
const ColorScenario = () => {
    const [mode, setMode] = useState('recall');
    const [color, setColor] = useState('#3B82F6');

    const colors = ['#EF4444', '#F97316', '#EAB308', '#22C55E', '#3B82F6', '#A855F7', '#EC4899', '#64748B'];

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('recall')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'recall' ? "bg-orange-100 text-orange-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Recall (Hard)</button>
                <button onClick={() => setMode('recognition')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'recognition' ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Recognition (Easy)</button>
            </div>

            <div className="flex gap-6 items-center w-full justify-center">
                <div
                    className="w-20 h-20 rounded-xl shadow-sm border border-gray-200 transition-colors"
                    style={{ backgroundColor: color }}
                />

                <div className="flex-1 max-w-[180px]">
                    {mode === 'recognition' ? (
                        <div className="grid grid-cols-4 gap-2">
                            {colors.map(c => (
                                <button
                                    key={c}
                                    onClick={() => setColor(c)}
                                    className={cn(
                                        "w-8 h-8 rounded-full border-2 transition-transform hover:scale-110",
                                        color === c ? "border-gray-900" : "border-transparent"
                                    )}
                                    style={{ backgroundColor: c }}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-2">
                            <label className="text-xs text-gray-500">Enter Hex Code</label>
                            <div className="relative">
                                <Hash className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                    className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm font-mono uppercase"
                                />
                            </div>
                            <p className="text-[10px] text-gray-400">e.g., #3B82F6</p>
                        </div>
                    )}
                </div>
            </div>
            <p className="mt-8 text-xs text-gray-400 text-center">
                {mode === 'recognition' ? "Picking a color visually is intuitive." : "Memorizing hex codes is impossible for most users."}
            </p>
        </div>
    );
};

// --- Scenario 5: Icon Labels (Labeled vs Abstract) ---
const IconsScenario = () => {
    const [mode, setMode] = useState('recall');

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('recall')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'recall' ? "bg-orange-100 text-orange-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Recall (Hard)</button>
                <button onClick={() => setMode('recognition')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'recognition' ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Recognition (Easy)</button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-1 group cursor-pointer">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                            <Bold className="w-5 h-5 text-gray-700" />
                        </div>
                        {mode === 'recognition' && <span className="text-[10px] font-medium text-gray-600">Bold</span>}
                    </div>
                    <div className="flex flex-col items-center gap-1 group cursor-pointer">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                            <Italic className="w-5 h-5 text-gray-700" />
                        </div>
                        {mode === 'recognition' && <span className="text-[10px] font-medium text-gray-600">Italic</span>}
                    </div>
                    <div className="flex flex-col items-center gap-1 group cursor-pointer">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                            <Underline className="w-5 h-5 text-gray-700" />
                        </div>
                        {mode === 'recognition' && <span className="text-[10px] font-medium text-gray-600">Underline</span>}
                    </div>
                    <div className="flex flex-col items-center gap-1 group cursor-pointer">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                            <AlignLeft className="w-5 h-5 text-gray-700" />
                        </div>
                        {mode === 'recognition' && <span className="text-[10px] font-medium text-gray-600">Align</span>}
                    </div>
                </div>
            </div>
            <p className="mt-8 text-xs text-gray-400 text-center">
                {mode === 'recognition' ? "Labels help users recognize what icons do." : "Abstract icons force users to remember their meaning."}
            </p>
        </div>
    );
};

const scenarios = [
    {
        id: 'recent',
        label: 'Recent Searches',
        component: SearchScenario,
        icon: Clock,
        description: "Showing recent searches helps users pick up where they left off without typing.",
        whyItMatters: "Users don't have to remember what they were looking for; they just see it and click."
    },
    {
        id: 'menu',
        label: 'Visual Menus',
        component: FontScenario,
        icon: Type,
        description: "Using icons and images to represent categories or items.",
        whyItMatters: "Icons and images are recognized faster than text labels."
    },
    {
        id: 'autocomplete',
        label: 'Autocomplete',
        component: CommandScenario,
        icon: MousePointer2,
        description: "Suggesting completions as the user types.",
        whyItMatters: "It reduces the cognitive load of recalling exact spellings or terms."
    },
    {
        id: 'status',
        label: 'Visible Status',
        component: ColorScenario,
        icon: Palette,
        description: "Showing key information (like login status) directly on the screen.",
        whyItMatters: "Users shouldn't have to dig through menus to find out if they are logged in or online."
    },
    {
        id: 'history',
        label: 'Browsing History',
        component: IconsScenario,
        icon: Tag,
        description: "Keeping a visible log of visited pages or items.",
        whyItMatters: "It allows users to retrace their steps without relying on memory."
    },
];

export default function RecognitionExample({ onScenarioChange }) {
    const [activeScenario, setActiveScenario] = useState(0);

    useEffect(() => {
        if (onScenarioChange) {
            onScenarioChange(scenarios[activeScenario]);
        }
    }, [activeScenario, onScenarioChange, scenarios]); // Added scenarios to dependency array for completeness

    const ActiveComponent = scenarios[activeScenario].component;

    return (
        <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-[600px]">
            {/* Top Navigation Tabs */}
            <div className="w-full bg-gray-50 border-b border-gray-200 p-2 flex gap-1 overflow-x-auto no-scrollbar">
                {scenarios.map((s, idx) => (
                    <button
                        key={s.id}
                        onClick={() => setActiveScenario(idx)}
                        className={cn(
                            "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap flex-1 justify-center",
                            activeScenario === idx
                                ? "bg-white text-black shadow-sm"
                                : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                        )}
                    >
                        <s.icon className="w-4 h-4 shrink-0" />
                        {s.label}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 p-8 flex flex-col min-h-0">
                <div className="mb-6 shrink-0">
                    <h3 className="text-xl font-bold text-gray-900">{scenarios[activeScenario].label}</h3>
                    <p className="text-gray-500 text-[16px] mt-1 leading-snug">{scenarios[activeScenario].description}</p>
                </div>

                <div className="flex-1 flex items-center justify-center bg-gray-50/50 rounded-xl border border-gray-100/50 p-6 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeScenario}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="w-full"
                        >
                            <ActiveComponent />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
