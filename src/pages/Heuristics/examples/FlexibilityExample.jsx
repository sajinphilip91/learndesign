import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Command, Copy, Scissors, Save, Sliders, Image,
    Layout, Move, Search, Filter, CheckSquare, Trash2,
    Zap, Settings, Plus, X, Keyboard
} from 'lucide-react';
import { cn } from '../../../lib/utils';

// --- Scenario 1: Keyboard Shortcuts (Accelerators) ---
const ShortcutsScenario = () => {
    const [mode, setMode] = useState('novice');
    const [lastAction, setLastAction] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (mode === 'expert' && (e.metaKey || e.ctrlKey)) {
                if (e.key === 'c') { e.preventDefault(); triggerAction('Copy'); }
                if (e.key === 'x') { e.preventDefault(); triggerAction('Cut'); }
                if (e.key === 's') { e.preventDefault(); triggerAction('Save'); }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [mode]);

    const triggerAction = (action) => {
        setLastAction(action);
        setTimeout(() => setLastAction(null), 1500);
    };

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('novice')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'novice' ? "bg-orange-100 text-orange-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Novice (Click)</button>
                <button onClick={() => setMode('expert')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'expert' ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Expert (Keys)</button>
            </div>

            <div className="flex gap-3 mb-8">
                <button onClick={() => triggerAction('Copy')} className="flex flex-col items-center justify-center w-20 h-20 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group">
                    <Copy className="w-5 h-5 mb-1 text-gray-500 group-hover:text-blue-600" />
                    <span className="text-xs font-medium text-gray-700">Copy</span>
                    {mode === 'expert' && <span className="text-[10px] text-gray-400 mt-1">⌘C</span>}
                </button>
                <button onClick={() => triggerAction('Cut')} className="flex flex-col items-center justify-center w-20 h-20 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group">
                    <Scissors className="w-5 h-5 mb-1 text-gray-500 group-hover:text-blue-600" />
                    <span className="text-xs font-medium text-gray-700">Cut</span>
                    {mode === 'expert' && <span className="text-[10px] text-gray-400 mt-1">⌘X</span>}
                </button>
                <button onClick={() => triggerAction('Save')} className="flex flex-col items-center justify-center w-20 h-20 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group">
                    <Save className="w-5 h-5 mb-1 text-gray-500 group-hover:text-blue-600" />
                    <span className="text-xs font-medium text-gray-700">Save</span>
                    {mode === 'expert' && <span className="text-[10px] text-gray-400 mt-1">⌘S</span>}
                </button>
            </div>

            <AnimatePresence>
                {lastAction && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute bottom-20 px-4 py-2 bg-gray-900 text-white rounded-full text-xs font-medium flex items-center gap-2 shadow-lg"
                    >
                        <Command className="w-3 h-3" />
                        {lastAction} Triggered!
                    </motion.div>
                )}
            </AnimatePresence>

            <p className="mt-8 text-xs text-gray-400 text-center">
                {mode === 'expert' ? "Shortcuts let experts work without moving the mouse." : "Visible buttons are essential for learning the interface."}
            </p>
        </div>
    );
};

// --- Scenario 2: Quick Presets (Macro Actions) ---
const PresetsScenario = () => {
    const [mode, setMode] = useState('novice');
    const [values, setValues] = useState({ brightness: 50, contrast: 50, saturation: 50 });

    const applyPreset = () => {
        setValues({ brightness: 75, contrast: 80, saturation: 65 });
    };

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('novice')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'novice' ? "bg-orange-100 text-orange-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Novice (Manual)</button>
                <button onClick={() => setMode('expert')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'expert' ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Expert (Preset)</button>
            </div>

            <div className="w-full space-y-4 px-4">
                <div className="space-y-3">
                    {['brightness', 'contrast', 'saturation'].map(key => (
                        <div key={key} className="flex items-center gap-3">
                            <span className="text-xs w-16 capitalize text-gray-500">{key}</span>
                            <input
                                type="range"
                                value={values[key]}
                                onChange={(e) => setValues({ ...values, [key]: parseInt(e.target.value) })}
                                className="flex-1 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                            />
                        </div>
                    ))}
                </div>

                {mode === 'expert' && (
                    <div className="pt-2 flex justify-center">
                        <button
                            onClick={applyPreset}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-medium hover:bg-blue-100 transition-colors"
                        >
                            <Zap className="w-3 h-3" />
                            Apply "Vivid" Preset
                        </button>
                    </div>
                )}
            </div>

            <p className="mt-8 text-xs text-gray-400 text-center">
                {mode === 'expert' ? "Presets save time by bundling multiple adjustments." : "Manual controls offer precision but are slower."}
            </p>
        </div>
    );
};

// --- Scenario 3: Customization (Personalization) ---
const CustomizationScenario = () => {
    const [mode, setMode] = useState('novice');
    const [pinned, setPinned] = useState(['wifi']);

    const features = [
        { id: 'wifi', icon: Zap, label: 'Wi-Fi' },
        { id: 'bluetooth', icon: Sliders, label: 'Bluetooth' },
        { id: 'dnd', icon: CheckSquare, label: 'Do Not Disturb' },
        { id: 'night', icon: Image, label: 'Night Mode' },
    ];

    const togglePin = (id) => {
        if (pinned.includes(id)) {
            setPinned(pinned.filter(p => p !== id));
        } else {
            setPinned([...pinned, id]);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('novice')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'novice' ? "bg-orange-100 text-orange-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Novice (Default)</button>
                <button onClick={() => setMode('expert')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'expert' ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Expert (Custom)</button>
            </div>

            <div className="w-full bg-gray-900 rounded-xl p-4 text-white shadow-lg">
                {/* Status Bar */}
                <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-2">
                    <span className="text-xs font-medium text-gray-400">Control Center</span>
                    <div className="flex gap-2">
                        {mode === 'expert' ? (
                            pinned.map(id => {
                                const f = features.find(f => f.id === id);
                                return <f.icon key={id} className="w-4 h-4 text-blue-400" />;
                            })
                        ) : (
                            <Zap className="w-4 h-4 text-gray-400" />
                        )}
                    </div>
                </div>

                {/* Customization Area */}
                {mode === 'expert' ? (
                    <div className="grid grid-cols-2 gap-2">
                        {features.map(f => (
                            <button
                                key={f.id}
                                onClick={() => togglePin(f.id)}
                                className={cn(
                                    "flex items-center gap-2 p-2 rounded-lg text-xs transition-colors",
                                    pinned.includes(f.id) ? "bg-blue-500/20 text-blue-300" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                                )}
                            >
                                <div className={cn("w-2 h-2 rounded-full", pinned.includes(f.id) ? "bg-blue-400" : "border border-gray-500")} />
                                <f.icon className="w-3 h-3" />
                                {f.label}
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-4 text-gray-500 text-xs">
                        <p>Standard layout.</p>
                        <p>Useful features are buried in menus.</p>
                    </div>
                )}
            </div>

            <p className="mt-8 text-xs text-gray-400 text-center">
                {mode === 'expert' ? "Pinning frequently used tools creates a personalized shortcut." : "Default layouts force everyone to use the same few tools."}
            </p>
        </div>
    );
};

// --- Scenario 4: Advanced Search (Progressive Disclosure) ---
const SearchScenario = () => {
    const [mode, setMode] = useState('novice');
    const [showAdvanced, setShowAdvanced] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('novice')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'novice' ? "bg-orange-100 text-orange-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Novice (Simple)</button>
                <button onClick={() => setMode('expert')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'expert' ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Expert (Advanced)</button>
            </div>

            <div className="w-full space-y-3">
                <div className="relative">
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {mode === 'expert' && (
                    <div>
                        <button
                            onClick={() => setShowAdvanced(!showAdvanced)}
                            className="text-xs text-blue-600 font-medium flex items-center gap-1 hover:underline"
                        >
                            <Filter className="w-3 h-3" />
                            {showAdvanced ? "Hide Filters" : "Advanced Filters"}
                        </button>

                        <AnimatePresence>
                            {showAdvanced && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-3 grid grid-cols-2 gap-2">
                                        <select className="text-xs border border-gray-200 rounded p-1.5 bg-white text-gray-600">
                                            <option>All Categories</option>
                                            <option>Books</option>
                                            <option>Electronics</option>
                                        </select>
                                        <input type="date" className="text-xs border border-gray-200 rounded p-1.5 text-gray-600" />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </div>

            <p className="mt-8 text-xs text-gray-400 text-center">
                {mode === 'expert' ? "Advanced options are available but hidden by default." : "Simple search satisfies most users without clutter."}
            </p>
        </div>
    );
};

// --- Scenario 5: Bulk Actions (Efficiency) ---
const BulkScenario = () => {
    const [mode, setMode] = useState('novice');
    const [items, setItems] = useState([
        { id: 1, label: 'Email from John', selected: false },
        { id: 2, label: 'Weekly Newsletter', selected: false },
        { id: 3, label: 'Project Update', selected: false },
    ]);

    const toggleSelect = (id) => {
        setItems(items.map(i => i.id === id ? { ...i, selected: !i.selected } : i));
    };

    const selectAll = () => {
        const allSelected = items.every(i => i.selected);
        setItems(items.map(i => ({ ...i, selected: !allSelected })));
    };

    const deleteSelected = () => {
        setItems(items.filter(i => !i.selected));
    };

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('novice')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'novice' ? "bg-orange-100 text-orange-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Novice (Single)</button>
                <button onClick={() => setMode('expert')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'expert' ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Expert (Bulk)</button>
            </div>

            <div className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
                {mode === 'expert' && (
                    <div className="p-2 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                        <button onClick={selectAll} className="text-xs font-medium text-gray-600 flex items-center gap-1.5 px-2 py-1 hover:bg-gray-200 rounded">
                            <CheckSquare className="w-3 h-3" /> Select All
                        </button>
                        {items.some(i => i.selected) && (
                            <button onClick={deleteSelected} className="text-xs font-medium text-red-600 flex items-center gap-1.5 px-2 py-1 hover:bg-red-50 rounded">
                                <Trash2 className="w-3 h-3" /> Delete
                            </button>
                        )}
                    </div>
                )}
                <div className="divide-y divide-gray-100">
                    {items.map(item => (
                        <div key={item.id} className="p-3 flex items-center justify-between hover:bg-gray-50">
                            <div className="flex items-center gap-3">
                                {mode === 'expert' && (
                                    <input
                                        type="checkbox"
                                        checked={item.selected}
                                        onChange={() => toggleSelect(item.id)}
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                )}
                                <span className="text-sm text-gray-700">{item.label}</span>
                            </div>
                            {mode === 'novice' && (
                                <button onClick={() => setItems(items.filter(i => i.id !== item.id))} className="text-gray-400 hover:text-red-500 p-1">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    ))}
                    {items.length === 0 && <div className="p-4 text-center text-xs text-gray-400">No items</div>}
                </div>
            </div>

            <p className="mt-8 text-xs text-gray-400 text-center">
                {mode === 'expert' ? "Bulk actions let experts manage many items at once." : "Deleting one by one is tedious for large lists."}
            </p>
        </div>
    );
};

const scenarios = [
    {
        id: 'shortcuts',
        label: 'Keyboard Shortcuts',
        component: ShortcutsScenario,
        icon: Keyboard,
        description: "Allowing users to use keyboard shortcuts (like Ctrl+C) instead of menus.",
        whyItMatters: "Shortcuts allow power users to work much faster than clicking through menus."
    },
    {
        id: 'custom',
        label: 'Customization',
        component: CustomizationScenario,
        icon: Sliders,
        description: "Letting users arrange their workspace or dashboard.",
        whyItMatters: "Allowing users to tailor the interface to their needs improves efficiency and satisfaction."
    },
    {
        id: 'macros',
        label: 'Macros',
        component: PresetsScenario,
        icon: Zap,
        description: "Recording a sequence of actions to replay later.",
        whyItMatters: "Automating repetitive tasks saves time and reduces boredom."
    },
    {
        id: 'bulk',
        label: 'Bulk Actions',
        component: BulkScenario,
        icon: CheckSquare,
        description: "Performing actions on multiple items at once.",
        whyItMatters: "Performing the same action on 50 items one-by-one is tedious. Bulk actions make it instant."
    },
    {
        id: 'search',
        label: 'Advanced Search',
        component: SearchScenario,
        icon: Search,
        description: "Providing filters and operators for expert users.",
        whyItMatters: "Power users need precise tools to find exactly what they want quickly."
    },
];

export default function FlexibilityExample({ onScenarioChange }) {
    const [activeScenario, setActiveScenario] = useState(0);

    useEffect(() => {
        if (onScenarioChange) {
            onScenarioChange(scenarios[activeScenario]);
        }
    }, [activeScenario, onScenarioChange]);

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
