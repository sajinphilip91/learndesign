import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Layout, AlignLeft, Type, Menu, BarChart2,
    Star, Share2, ShoppingCart, Search, Bell, User,
    ChevronDown, Home, Settings, Mail, FileText,
    CreditCard, MapPin, Phone, Calendar, Filter,
    Eraser, MoveVertical, Zap
} from 'lucide-react';
import { cn } from '../../../lib/utils';
import { Button } from "../../../components/ui/Button";

// --- Scenario 1: Signal to Noise (Product Card) ---
const SignalScenario = () => {
    const [mode, setMode] = useState('cluttered');

    return (
        <div className="flex flex-col items-center justify-center h-80 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('cluttered')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'cluttered' ? "bg-orange-100 text-orange-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Cluttered</button>
                <button onClick={() => setMode('minimalist')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'minimalist' ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Minimalist</button>
            </div>

            <div className="w-full">
                <AnimatePresence mode="wait">
                    {mode === 'cluttered' ? (
                        <motion.div
                            key="cluttered"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-full border border-gray-300 bg-gray-50 p-4 rounded-lg space-y-3"
                        >
                            <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                                <h4 className="font-bold text-sm text-blue-800 underline">Product Details</h4>
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4].map(i => <Star key={i} className="w-3 h-3 text-yellow-500" />)}
                                    <Star className="w-3 h-3 text-gray-400" />
                                </div>
                            </div>
                            <p className="text-[10px] text-gray-500">SKU: 12345-XYZ | Cat: Audio | Stock: Yes</p>
                            <p className="text-xs leading-tight text-justify">
                                This is a really great product that you will love. It has many features that are useful.
                                Buy it now before it runs out. Free shipping &gt; $50.
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                                <button className="bg-blue-600 text-white p-1.5 text-[10px] font-bold uppercase border-2 border-blue-800">Buy Now</button>
                                <button className="bg-green-600 text-white p-1.5 text-[10px] font-bold uppercase border-2 border-green-800">Add Cart</button>
                                <button className="bg-gray-200 text-black p-1.5 text-[10px] border border-gray-400">Wishlist</button>
                                <button className="bg-gray-200 text-black p-1.5 text-[10px] border border-gray-400">Compare</button>
                            </div>
                            <div className="flex justify-around text-[10px] text-blue-600 underline">
                                <a href="#">FB</a><a href="#">Tw</a><a href="#">Pin</a><a href="#">Mail</a>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="minimalist"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-full border border-gray-100 bg-white p-6 rounded-2xl shadow-sm space-y-4"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-semibold text-lg text-gray-900">Headphones</h4>
                                    <p className="text-sm text-gray-500">$299.00</p>
                                </div>
                                <button className="p-2 hover:bg-gray-100 rounded-full text-gray-400">
                                    <Share2 className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-sm text-gray-600">High-fidelity audio with active noise cancellation.</p>
                            <Button className="w-full rounded-full h-9 text-sm">Add to Cart</Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <p className="mt-6 text-xs text-gray-400 text-center">
                {mode === 'minimalist' ? "Focusing on the essential action (buying) increases conversion." : "Too many competing calls-to-action confuse the user."}
            </p>
        </div>
    );
};

// --- Scenario 2: Form Design (Simplicity) ---
const FormScenario = () => {
    const [mode, setMode] = useState('cluttered');

    return (
        <div className="flex flex-col items-center justify-center h-80 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('cluttered')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'cluttered' ? "bg-orange-100 text-orange-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Cluttered</button>
                <button onClick={() => setMode('minimalist')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'minimalist' ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Minimalist</button>
            </div>

            <div className="w-full">
                <AnimatePresence mode="wait">
                    {mode === 'cluttered' ? (
                        <motion.div
                            key="cluttered"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="bg-white p-4 rounded-lg border border-gray-200 space-y-2"
                        >
                            <div className="grid grid-cols-2 gap-2">
                                <input type="text" placeholder="First Name" className="text-xs p-2 border rounded" />
                                <input type="text" placeholder="Last Name" className="text-xs p-2 border rounded" />
                            </div>
                            <input type="text" placeholder="Username" className="w-full text-xs p-2 border rounded" />
                            <input type="email" placeholder="Email Address" className="w-full text-xs p-2 border rounded" />
                            <input type="email" placeholder="Confirm Email" className="w-full text-xs p-2 border rounded" />
                            <input type="tel" placeholder="Phone (Home)" className="w-full text-xs p-2 border rounded" />
                            <input type="tel" placeholder="Phone (Mobile)" className="w-full text-xs p-2 border rounded" />
                            <div className="flex items-center gap-2">
                                <input type="checkbox" /> <span className="text-[10px] text-gray-500">Subscribe to newsletter</span>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="minimalist"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4"
                        >
                            <div className="space-y-3">
                                <input type="text" placeholder="Full Name" className="w-full text-sm p-2.5 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-blue-500" />
                                <input type="email" placeholder="Email" className="w-full text-sm p-2.5 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-blue-500" />
                                <input type="password" placeholder="Password" className="w-full text-sm p-2.5 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <Button className="w-full rounded-lg">Sign Up</Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <p className="mt-6 text-xs text-gray-400 text-center">
                {mode === 'minimalist' ? "Asking only for essential info reduces friction." : "Asking for too much information scares users away."}
            </p>
        </div>
    );
};

// --- Scenario 3: Visual Hierarchy (Readability) ---
const HierarchyScenario = () => {
    const [mode, setMode] = useState('cluttered');

    return (
        <div className="flex flex-col items-center justify-center h-80 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('cluttered')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'cluttered' ? "bg-orange-100 text-orange-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Flat</button>
                <button onClick={() => setMode('minimalist')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'minimalist' ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Hierarchical</button>
            </div>

            <div className="w-full bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-48 overflow-hidden">
                <AnimatePresence mode="wait">
                    {mode === 'cluttered' ? (
                        <motion.div
                            key="cluttered"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-sm text-gray-800 space-y-2"
                        >
                            <p>The Importance of Design</p>
                            <p>Design is not just what it looks like and feels like. Design is how it works. Good design is innovative. Good design makes a product useful. Good design is aesthetic. Good design makes a product understandable.</p>
                            <p>Principles of Design</p>
                            <p>Contrast, Balance, Emphasis, Proportion, Hierarchy, Repetition, Rhythm, Pattern, White Space, Movement, Variety, Unity.</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="minimalist"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-3"
                        >
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">The Importance of Design</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    "Design is not just what it looks like and feels like. Design is how it works."
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">Key Principles</h4>
                                <div className="flex flex-wrap gap-1">
                                    {['Contrast', 'Balance', 'Hierarchy', 'White Space'].map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] rounded-full">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <p className="mt-6 text-xs text-gray-400 text-center">
                {mode === 'minimalist' ? "Headings and spacing guide the eye to important info." : "Walls of text are hard to scan and digest."}
            </p>
        </div>
    );
};

// --- Scenario 4: Navigation (Information Architecture) ---
const NavScenario = () => {
    const [mode, setMode] = useState('cluttered');
    const links = ['Home', 'About', 'Services', 'Products', 'Blog', 'Contact', 'Team', 'Careers', 'FAQ', 'Support', 'Terms', 'Privacy'];

    return (
        <div className="flex flex-col items-center justify-center h-80 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('cluttered')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'cluttered' ? "bg-orange-100 text-orange-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Overwhelming</button>
                <button onClick={() => setMode('minimalist')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'minimalist' ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Simplified</button>
            </div>

            <div className="w-full bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden h-48">
                <div className="bg-gray-900 p-3 flex items-center justify-between">
                    <div className="w-4 h-4 rounded-full bg-blue-500" />
                    {mode === 'minimalist' && <Menu className="w-4 h-4 text-white" />}
                </div>

                <AnimatePresence mode="wait">
                    {mode === 'cluttered' ? (
                        <motion.div
                            key="cluttered"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="p-4 grid grid-cols-3 gap-2"
                        >
                            {links.map(l => (
                                <span key={l} className="text-[10px] text-blue-600 underline cursor-pointer hover:text-blue-800">{l}</span>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="minimalist"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="p-4 flex flex-col gap-3"
                        >
                            {['Products', 'Solutions', 'Resources'].map(l => (
                                <div key={l} className="flex items-center justify-between text-sm text-gray-700 cursor-pointer hover:bg-gray-50 p-1 rounded">
                                    <span>{l}</span>
                                    <ChevronDown className="w-3 h-3 text-gray-400" />
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <p className="mt-6 text-xs text-gray-400 text-center">
                {mode === 'minimalist' ? "Grouping links into categories reduces cognitive load." : "Showing everything at once overwhelms the user."}
            </p>
        </div>
    );
};

// --- Scenario 5: Dashboard (Data Presentation) ---
const DashboardScenario = () => {
    const [mode, setMode] = useState('cluttered');

    return (
        <div className="flex flex-col items-center justify-center h-80 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('cluttered')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'cluttered' ? "bg-orange-100 text-orange-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Noisy</button>
                <button onClick={() => setMode('minimalist')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'minimalist' ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Clean</button>
            </div>

            <div className="w-full bg-gray-50 rounded-xl border border-gray-200 overflow-hidden h-48">
                <AnimatePresence mode="wait">
                    {mode === 'cluttered' ? (
                        <motion.div
                            key="cluttered"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="p-2 grid grid-cols-4 gap-1"
                        >
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="bg-white p-1 rounded border border-gray-300">
                                    <div className="text-[8px] text-gray-500">Metric {i + 1}</div>
                                    <div className="text-xs font-bold">{Math.floor(Math.random() * 1000)}</div>
                                    <div className="h-1 w-full bg-red-200 mt-1"><div className="h-full bg-red-500 w-1/2"></div></div>
                                </div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="minimalist"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="p-4 space-y-3"
                        >
                            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <div className="text-xs text-gray-500">Total Revenue</div>
                                    <div className="text-lg font-bold text-gray-900">$24,500</div>
                                </div>
                                <div className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">+12%</div>
                            </div>
                            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <div className="text-xs text-gray-500">Active Users</div>
                                    <div className="text-lg font-bold text-gray-900">1,240</div>
                                </div>
                                <div className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">+5%</div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <p className="mt-6 text-xs text-gray-400 text-center">
                {mode === 'minimalist' ? "Highlighting key metrics helps users spot trends instantly." : "Too much data without hierarchy creates analysis paralysis."}
            </p>
        </div>
    );
};

const scenarios = [
    {
        id: 'clutter',
        label: 'Clutter Reduction',
        component: SignalScenario,
        icon: Eraser,
        description: "Removing unnecessary elements to focus on the content.",
        whyItMatters: "Users can scan and understand the content much faster when it's not buried in noise."
    },
    {
        id: 'whitespace',
        label: 'Whitespace',
        component: FormScenario,
        icon: Layout,
        description: "Using negative space to structure content.",
        whyItMatters: "Whitespace guides the eye and creates logical groupings without needing lines or boxes."
    },
    {
        id: 'hierarchy',
        label: 'Visual Hierarchy',
        component: HierarchyScenario,
        icon: MoveVertical,
        description: "Using size and weight to indicate importance.",
        whyItMatters: "It tells the user what is most important on the page at a glance."
    },
    {
        id: 'disclosure',
        label: 'Progressive Disclosure',
        component: NavScenario,
        icon: ChevronDown,
        description: "Hiding advanced options until they are needed.",
        whyItMatters: "Showing only what is needed at the moment keeps the interface clean and approachable."
    },
    {
        id: 'signal',
        label: 'Signal to Noise',
        component: DashboardScenario,
        icon: Zap,
        description: "Maximizing relevant information while minimizing decoration.",
        whyItMatters: "Every pixel should serve a purpose. Decorative elements shouldn't distract from the task."
    },
];

export default function MinimalistExample({ onScenarioChange }) {
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
