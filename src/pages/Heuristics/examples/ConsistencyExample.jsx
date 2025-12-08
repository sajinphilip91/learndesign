import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../../components/ui/Button';
import {
    Home, Search, Settings, User, Bell, Menu,
    Check, X, AlertTriangle, LogIn, ExternalLink,
    Database, FileSearch, Cpu, LayoutTemplate, HelpCircle,
    Type, Smartphone, Palette
} from 'lucide-react';
import { cn } from '../../../lib/utils';

// --- Scenario 1: Standard Icons (Visual Language) ---
const IconsScenario = () => {
    const [mode, setMode] = useState('inconsistent');

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full">
            <div className="flex gap-4 mb-6">
                <button
                    onClick={() => setMode('inconsistent')}
                    className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'inconsistent' ? "bg-red-100 text-red-700 font-medium" : "text-gray-500 hover:bg-gray-100")}
                >
                    System-Centric
                </button>
                <button
                    onClick={() => setMode('consistent')}
                    className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'consistent' ? "bg-green-100 text-green-700 font-medium" : "text-gray-500 hover:bg-gray-100")}
                >
                    Standard
                </button>
            </div>

            <div className="flex gap-8 items-center">
                {mode === 'consistent' ? (
                    <>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                                <Home className="w-6 h-6 text-gray-700" />
                            </div>
                            <span className="text-xs text-gray-500">Home</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                                <Search className="w-6 h-6 text-gray-700" />
                            </div>
                            <span className="text-xs text-gray-500">Search</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                                <Settings className="w-6 h-6 text-gray-700" />
                            </div>
                            <span className="text-xs text-gray-500">Settings</span>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                                <Database className="w-6 h-6 text-gray-700" />
                            </div>
                            <span className="text-xs text-gray-500">Root</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                                <FileSearch className="w-6 h-6 text-gray-700" />
                            </div>
                            <span className="text-xs text-gray-500">Query</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                                <Cpu className="w-6 h-6 text-gray-700" />
                            </div>
                            <span className="text-xs text-gray-500">Config</span>
                        </div>
                    </>
                )}
            </div>
            <p className="mt-6 text-sm text-gray-500 text-center max-w-xs">
                {mode === 'consistent'
                    ? "Standard icons (Home, Search, Settings) match user expectations."
                    : "System-centric icons (Database, Query, Config) confuse users who don't know the implementation details."}
            </p>
        </div>
    );
};

// --- Scenario 2: Button Colors (Action Hierarchy) ---
const ButtonsScenario = () => {
    const [mode, setMode] = useState('inconsistent');

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-8">
                <button onClick={() => setMode('inconsistent')} className={cn("px-3 py-1.5 text-sm rounded-full", mode === 'inconsistent' ? "bg-red-100 text-red-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Confusing</button>
                <button onClick={() => setMode('consistent')} className={cn("px-3 py-1.5 text-sm rounded-full", mode === 'consistent' ? "bg-green-100 text-green-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Standard</button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm w-full">
                <h4 className="font-bold text-gray-900 mb-2">Save Changes?</h4>
                <p className="text-sm text-gray-500 mb-6">Do you want to save your progress?</p>

                <div className={cn("flex gap-3", mode === 'inconsistent' && "flex-row-reverse")}>
                    {mode === 'consistent' ? (
                        <>
                            <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Save</Button>
                            <Button variant="outline" className="flex-1">Cancel</Button>
                        </>
                    ) : (
                        <>
                            <button className="flex-1 py-2 px-4 bg-gray-200 text-gray-800 rounded-md font-medium hover:bg-gray-300">Save</button>
                            <button className="flex-1 py-2 px-4 bg-red-500 text-white rounded-md font-medium hover:bg-red-600">Cancel</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

// --- Scenario 3: Login Form (Layout Conventions) ---
const LoginScenario = () => {
    const [mode, setMode] = useState('inconsistent');

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('inconsistent')} className={cn("px-3 py-1.5 text-sm rounded-full", mode === 'inconsistent' ? "bg-red-100 text-red-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Unconventional</button>
                <button onClick={() => setMode('consistent')} className={cn("px-3 py-1.5 text-sm rounded-full", mode === 'consistent' ? "bg-green-100 text-green-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Standard</button>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm w-64 space-y-3">
                {mode === 'consistent' ? (
                    <>
                        <input type="text" placeholder="Email" className="w-full p-2 border border-gray-300 rounded text-sm" disabled />
                        <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded text-sm" disabled />
                        <Button className="w-full">Log In</Button>
                        <div className="text-center">
                            <span className="text-xs text-blue-600 cursor-pointer hover:underline">Forgot Password?</span>
                        </div>
                    </>
                ) : (
                    <>
                        <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded text-sm" disabled />
                        <input type="text" placeholder="Username" className="w-full p-2 border border-gray-300 rounded text-sm" disabled />
                        <div className="flex justify-start">
                            <Button className="bg-gray-800 hover:bg-gray-900 px-8">Sign In</Button>
                        </div>
                        <div className="text-left">
                            <span className="text-xs text-gray-500 cursor-pointer hover:underline">Need help?</span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

// --- Scenario 4: Terminology (Labeling) ---
const TerminologyScenario = () => {
    const [mode, setMode] = useState('inconsistent');

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('inconsistent')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'inconsistent' ? "bg-red-100 text-red-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Mixed</button>
                <button onClick={() => setMode('consistent')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'consistent' ? "bg-green-100 text-green-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Standard</button>
            </div>

            <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden p-4">
                <div className="space-y-3">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gray-200 rounded-md" />
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-gray-700">Product {item}</span>
                                    <span className="text-[10px] text-gray-500">$10.00</span>
                                </div>
                            </div>
                            <Button size="sm" variant="outline" className="h-7 text-xs px-3">
                                {mode === 'consistent'
                                    ? "Add to Cart"
                                    : item === 1 ? "Add to Cart" : item === 2 ? "Buy Now" : "Get It"}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
            <p className="mt-4 text-xs text-gray-400 text-center">
                {mode === 'consistent' ? "Using the same term ('Add to Cart') everywhere reduces cognitive load." : "Using different words for the same action confuses users."}
            </p>
        </div>
    );
};

// --- Scenario 5: Link Styling (Affordance) ---
const LinksScenario = () => {
    const [mode, setMode] = useState('inconsistent');

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('inconsistent')} className={cn("px-3 py-1.5 text-sm rounded-full", mode === 'inconsistent' ? "bg-red-100 text-red-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Ambiguous</button>
                <button onClick={() => setMode('consistent')} className={cn("px-3 py-1.5 text-sm rounded-full", mode === 'consistent' ? "bg-green-100 text-green-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Standard</button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm w-full text-sm leading-relaxed">
                <p className="mb-4">
                    To learn more about our services, please visit our{' '}
                    {mode === 'consistent' ? (
                        <span className="text-blue-600 underline cursor-pointer hover:text-blue-800 font-medium">
                            pricing page
                        </span>
                    ) : (
                        <span className="text-gray-900 font-bold cursor-pointer">
                            pricing page
                        </span>
                    )}
                    {' '}for details.
                </p>
                <p>
                    You can also{' '}
                    {mode === 'consistent' ? (
                        <span className="text-blue-600 underline cursor-pointer hover:text-blue-800 font-medium">
                            contact support
                        </span>
                    ) : (
                        <span className="text-red-500 cursor-pointer">
                            contact support
                        </span>
                    )}
                    {' '}if you need help.
                </p>
            </div>
            <p className="mt-4 text-xs text-gray-400 text-center">
                {mode === 'consistent' ? "Blue, underlined text clearly indicates a clickable link." : "Users might miss links if they look like normal text."}
            </p>
        </div>
    );
};

const scenarios = [
    {
        id: 'buttons',
        label: 'Button Placement',
        component: ButtonsScenario,
        icon: LayoutTemplate,
        description: "Standard button placement and styling reduces cognitive load.",
        whyItMatters: "If 'Submit' is red and on the left, users will be confused because standard convention is blue/primary and on the right."
    },
    {
        id: 'icons',
        label: 'Icon Usage',
        component: IconsScenario,
        icon: HelpCircle,
        description: "Using standard icons for common actions (e.g., gear for settings).",
        whyItMatters: "Using standard icons reduces the learning curve and makes the interface instantly understandable."
    },
    {
        id: 'terminology',
        label: 'Terminology',
        component: TerminologyScenario,
        icon: Type,
        description: "Using consistent terms throughout the application (e.g., 'Delete' vs 'Remove').",
        whyItMatters: "Consistent language prevents confusion and helps users build a mental model of the system."
    },
    {
        id: 'platform',
        label: 'Platform Standards',
        component: LoginScenario,
        icon: Smartphone,
        description: "Adhering to platform-specific guidelines (iOS vs. Android).",
        whyItMatters: "Following iOS/Android guidelines ensures the app behaves as users expect on their device."
    },
    {
        id: 'brand',
        label: 'Brand Consistency',
        component: LinksScenario,
        icon: Palette,
        description: "Maintaining consistent colors, fonts, and styles across all pages.",
        whyItMatters: "Consistent colors and fonts build brand recognition and trust."
    },
];

export default function ConsistencyExample({ onScenarioChange }) {
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
