import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../../components/ui/Button';
import {
    Trash2, ShoppingCart, Calculator, Folder,
    FileText, Plus, Minus, Equal, Map, Navigation, Calendar
} from 'lucide-react';
import { cn } from '../../../lib/utils';

// --- Scenario 1: Trash Can (Metaphor) ---
const TrashScenario = () => {
    const [isDeleted, setIsDeleted] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center h-64">
            <AnimatePresence mode="wait">
                {!isDeleted ? (
                    <motion.div
                        key="file"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0, y: 50 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <div className="w-24 h-32 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col items-center justify-center relative group cursor-pointer hover:-translate-y-1 transition-transform">
                            <div className="absolute top-0 right-0 w-8 h-8 bg-gray-100 rounded-bl-lg" />
                            <FileText className="w-10 h-10 text-blue-500 mb-2" />
                            <span className="text-xs text-gray-500 font-medium">report.pdf</span>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" className="text-red-500 hover:text-red-600 hover:bg-red-50" onClick={() => setIsDeleted(true)}>
                                <Trash2 className="w-4 h-4 mr-2" />
                                Move to Trash
                            </Button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="trash"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-2">
                            <Trash2 className="w-12 h-12 text-gray-600" />
                        </div>
                        <p className="text-gray-600 font-medium">Item moved to Trash</p>
                        <Button variant="ghost" onClick={() => setIsDeleted(false)}>Undo</Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- Scenario 2: Shopping Cart (Familiarity) ---
const CartScenario = () => {
    const [cartCount, setCartCount] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const addToCart = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCartCount(c => c + 1);
            setIsAnimating(false);
        }, 500);
    };

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex justify-between items-center w-full mb-8 border-b border-gray-100 pb-4">
                <span className="font-bold text-lg">ShopApp</span>
                <div className="relative">
                    <ShoppingCart className="w-6 h-6 text-gray-700" />
                    <AnimatePresence>
                        {cartCount > 0 && (
                            <motion.span
                                key={cartCount}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full"
                            >
                                {cartCount}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="flex gap-4 items-center w-full">
                <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&auto=format&fit=crop" alt="Shoe" className="w-full h-full object-cover rounded-xl mix-blend-multiply" />
                </div>
                <div className="flex-1">
                    <h4 className="font-bold text-gray-900">Nike Air Max</h4>
                    <p className="text-gray-500 text-sm mb-3">$129.00</p>
                    <Button onClick={addToCart} disabled={isAnimating} className="w-full">
                        {isAnimating ? 'Adding...' : 'Add to Cart'}
                    </Button>
                </div>
            </div>

            {isAnimating && (
                <motion.div
                    initial={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                    animate={{ opacity: 0, y: -100, x: 100, scale: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="fixed z-50 pointer-events-none"
                    style={{ left: '50%', top: '50%' }}
                >
                    <div className="w-4 h-4 bg-black rounded-full" />
                </motion.div>
            )}
        </div>
    );
};

// --- Scenario 3: Calculator (Skeuomorphism) ---
const CalculatorScenario = () => {
    const [display, setDisplay] = useState('0');

    const handlePress = (val) => {
        setDisplay(prev => prev === '0' ? val : prev + val);
    };

    return (
        <div className="flex items-center justify-center h-64">
            <div className="bg-gray-900 p-4 rounded-2xl shadow-xl w-48">
                <div className="bg-gray-800 p-3 rounded-lg mb-4 text-right text-white font-mono text-xl overflow-hidden">
                    {display}
                </div>
                <div className="grid grid-cols-4 gap-2">
                    {['7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '-', 'C', '0', '=', '+'].map((btn) => (
                        <button
                            key={btn}
                            onClick={() => btn === 'C' ? setDisplay('0') : handlePress(btn)}
                            className={cn(
                                "h-8 rounded-md text-sm font-bold transition-colors flex items-center justify-center",
                                ['÷', '×', '-', '+', '='].includes(btn) ? "bg-orange-500 text-white hover:bg-orange-600" :
                                    btn === 'C' ? "bg-gray-600 text-white hover:bg-gray-700" :
                                        "bg-gray-700 text-white hover:bg-gray-600"
                            )}
                        >
                            {btn}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- Scenario 4: Folders (Organization) ---
const FolderScenario = () => {
    return (
        <div className="flex flex-col items-center justify-center h-64 w-full">
            <div className="grid grid-cols-3 gap-6">
                {['Documents', 'Images', 'Work'].map((name, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
                        <div className="w-16 h-14 bg-blue-100 rounded-lg border-2 border-blue-200 flex items-center justify-center relative group-hover:bg-blue-200 transition-colors">
                            <div className="absolute -top-2 left-0 w-6 h-3 bg-blue-200 rounded-t-md border-t-2 border-l-2 border-r-2 border-blue-200" />
                            <Folder className="w-8 h-8 text-blue-500" />
                        </div>
                        <span className="text-xs font-medium text-gray-600 group-hover:text-blue-600">{name}</span>
                    </div>
                ))}
            </div>
            <p className="mt-8 text-sm text-gray-500 text-center max-w-xs">
                Digital folders mimic physical manila folders, making file organization intuitive.
            </p>
        </div>
    );
};

// --- Scenario 5: Calendar (Visual Metaphor) ---
const CalendarScenario = () => {
    const [selectedDate, setSelectedDate] = useState(15);

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 w-64">
                <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-gray-900">October 2023</span>
                    <div className="flex gap-1">
                        <div className="w-6 h-6 flex items-center justify-center text-gray-400 hover:bg-gray-100 rounded cursor-pointer">←</div>
                        <div className="w-6 h-6 flex items-center justify-center text-gray-400 hover:bg-gray-100 rounded cursor-pointer">→</div>
                    </div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-gray-400 font-medium">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <div key={d}>{d}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-1 text-sm">
                    {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                        <div
                            key={day}
                            onClick={() => setSelectedDate(day)}
                            className={cn(
                                "h-8 flex items-center justify-center rounded-full cursor-pointer transition-colors",
                                day === selectedDate ? "bg-blue-600 text-white font-bold" : "hover:bg-gray-100 text-gray-700",
                                day === 15 && day !== selectedDate && "bg-blue-50 text-blue-600 font-medium"
                            )}
                        >
                            {day}
                        </div>
                    ))}
                </div>
            </div>
            <p className="mt-6 text-sm text-gray-500 text-center max-w-xs">
                Digital calendars use the familiar grid layout of physical wall calendars.
                Digital calendars adopt the standard grid layout of paper calendars, making date selection and scheduling intuitive.
            </p>
        </div >
    );
};

const scenarios = [
    {
        id: 'trash',
        label: 'Trash Can',
        component: TrashScenario,
        icon: Trash2,
        description: "Using a trash can icon for deleting files is a metaphor from the physical world.",
        whyItMatters: "Everyone knows what a trash can is for. 'Purge Database Record' would be confusing."
    },
    {
        id: 'calendar',
        label: 'Calendar',
        component: CalendarScenario,
        icon: Calendar,
        description: "Digital calendars adopt the standard grid layout of paper calendars, making date selection and scheduling intuitive.",
        whyItMatters: "Users don't need to learn a new way to visualize time; the grid is already familiar."
    },
    {
        id: 'calculator',
        label: 'Calculator',
        component: CalculatorScenario,
        icon: Calculator,
        description: "Digital calculators mimic the layout and button arrangement of handheld calculators.",
        whyItMatters: "Users don't need to relearn how to perform calculations because the interface is familiar."
    },
    {
        id: 'folder',
        label: 'Folder System',
        component: FolderScenario,
        icon: Folder,
        description: "Computer file systems use the folder metaphor to organize documents, just like a filing cabinet.",
        whyItMatters: "It makes abstract data storage understandable and manageable for non-technical users."
    },
    {
        id: 'cart',
        label: 'Shopping Cart',
        component: CartScenario,
        icon: ShoppingCart,
        description: "E-commerce sites use a shopping cart metaphor for collecting items before purchase.",
        whyItMatters: "It mirrors the physical experience of shopping in a store, making the process intuitive."
    },
];

export default function MatchSystemExample({ onScenarioChange }) {
    const [activeScenario, setActiveScenario] = useState(0);

    useEffect(() => {
        if (onScenarioChange) {
            onScenarioChange(scenarios[activeScenario]);
        }
    }, [activeScenario, onScenarioChange, scenarios]); // Added scenarios to dependency array for completeness.

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
