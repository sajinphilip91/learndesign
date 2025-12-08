import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HelpCircle, Info, Settings, Shield, Search,
    BookOpen, MessageCircle, FileText, ChevronRight,
    Plus, ArrowRight, X, Sparkles, Book, FileQuestion
} from 'lucide-react';
import { cn } from '../../../lib/utils';
import { Button } from '../../../components/ui/Button';

// --- Scenario 1: Tooltips (Contextual Help) ---
const Tooltip = ({ id, activeId, onShow, onHide, children, text }) => (
    <div
        className="relative inline-block"
        onMouseEnter={() => onShow(id)}
        onMouseLeave={onHide}
    >
        {children}
        <AnimatePresence>
            {activeId === id && (
                <motion.div
                    initial={{ opacity: 0, y: 5, scale: 0.9, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                    exit={{ opacity: 0, y: 5, scale: 0.9, x: "-50%" }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-full left-1/2 mb-3 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg shadow-xl whitespace-nowrap z-50"
                >
                    {text}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const TooltipScenario = () => {
    const [mode, setMode] = useState('bad');
    const [activeTooltip, setActiveTooltip] = useState(null);

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('bad')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'bad' ? "bg-red-100 text-red-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Bad (Guess)</button>
                <button onClick={() => setMode('good')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'good' ? "bg-green-100 text-green-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Good (Tooltip)</button>
            </div>

            <div className="flex gap-6 items-center justify-center bg-white p-6 rounded-xl border border-gray-200 shadow-sm w-full relative z-0">
                {mode === 'bad' ? (
                    <>
                        <button className="p-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                            <Shield className="w-6 h-6" />
                        </button>
                        <button className="p-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                            <Settings className="w-6 h-6" />
                        </button>
                        <button className="p-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                            <HelpCircle className="w-6 h-6" />
                        </button>
                    </>
                ) : (
                    <>
                        <Tooltip
                            id="privacy"
                            text="Privacy Settings"
                            activeId={activeTooltip}
                            onShow={setActiveTooltip}
                            onHide={() => setActiveTooltip(null)}
                        >
                            <button className="p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                                <Shield className="w-6 h-6" />
                            </button>
                        </Tooltip>
                        <Tooltip
                            id="account"
                            text="Account Config"
                            activeId={activeTooltip}
                            onShow={setActiveTooltip}
                            onHide={() => setActiveTooltip(null)}
                        >
                            <button className="p-3 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors">
                                <Settings className="w-6 h-6" />
                            </button>
                        </Tooltip>
                        <Tooltip
                            id="help"
                            text="Help Center"
                            activeId={activeTooltip}
                            onShow={setActiveTooltip}
                            onHide={() => setActiveTooltip(null)}
                        >
                            <button className="p-3 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-colors">
                                <HelpCircle className="w-6 h-6" />
                            </button>
                        </Tooltip>
                    </>
                )}
            </div>

            <p className="mt-8 text-xs text-gray-400 text-center">
                {mode === 'good' ? "Tooltips explain icons without cluttering the interface." : "Without labels, users have to guess what icons do."}
            </p>
        </div>
    );
};

// --- Scenario 2: Onboarding (Walkthrough) ---
const OnboardingScenario = () => {
    const [mode, setMode] = useState('bad');
    const [step, setStep] = useState(0);

    const nextStep = () => setStep((s) => (s + 1) % 3);

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('bad')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'bad' ? "bg-red-100 text-red-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Bad (Empty)</button>
                <button onClick={() => { setMode('good'); setStep(0); }} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'good' ? "bg-green-100 text-green-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Good (Tour)</button>
            </div>

            <div className="w-full h-40 bg-gray-900 rounded-xl relative overflow-hidden flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full px-8 opacity-30">
                    <div className="h-12 bg-gray-700 rounded-lg"></div>
                    <div className="h-12 bg-gray-700 rounded-lg"></div>
                    <div className="h-24 bg-gray-700 rounded-lg col-span-2"></div>
                </div>

                <AnimatePresence mode="wait">
                    {mode === 'good' && (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute inset-x-4 bottom-4 bg-blue-600 text-white p-3 rounded-lg shadow-lg"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-xs font-bold">
                                    {step === 0 && "Welcome!"}
                                    {step === 1 && "Create Projects"}
                                    {step === 2 && "Invite Team"}
                                </h4>
                                <button onClick={nextStep} className="text-blue-200 hover:text-white">
                                    <ArrowRight className="w-3 h-3" />
                                </button>
                            </div>
                            <p className="text-[10px] text-blue-100 leading-tight">
                                {step === 0 && "Let's take a quick tour of your new dashboard."}
                                {step === 1 && "Click the + button to start your first project."}
                                {step === 2 && "Add your team members to collaborate in real-time."}
                            </p>
                            <div className="flex gap-1 mt-2 justify-center">
                                {[0, 1, 2].map(i => (
                                    <div key={i} className={cn("w-1 h-1 rounded-full", i === step ? "bg-white" : "bg-blue-400")} />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <p className="mt-8 text-xs text-gray-400 text-center">
                {mode === 'good' ? "Onboarding guides new users through key features." : "Dropping users into a complex UI without help is overwhelming."}
            </p>
        </div>
    );
};

// --- Scenario 3: Inline Help (Hints) ---
const InlineHelpScenario = () => {
    const [mode, setMode] = useState('bad');

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('bad')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'bad' ? "bg-red-100 text-red-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Bad (None)</button>
                <button onClick={() => setMode('good')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'good' ? "bg-green-100 text-green-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Good (Hints)</button>
            </div>

            <div className="w-full space-y-4">
                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Password</label>
                    <input type="password" placeholder="••••••••" className="w-full text-xs p-2 border rounded-lg" />
                    {mode === 'good' && (
                        <p className="text-[10px] text-gray-500 mt-1 flex items-center gap-1">
                            <Info className="w-3 h-3" />
                            Must be at least 8 characters with 1 number.
                        </p>
                    )}
                </div>
                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">CVV</label>
                    <div className="flex gap-2">
                        <input type="text" placeholder="123" className="w-20 text-xs p-2 border rounded-lg" />
                        {mode === 'good' && (
                            <div className="text-[10px] text-gray-400 flex items-center bg-gray-50 px-2 rounded border border-gray-100">
                                The 3 digits on the back
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <p className="mt-8 text-xs text-gray-400 text-center">
                {mode === 'good' ? "Inline hints prevent errors before they happen." : "Users shouldn't have to guess format requirements."}
            </p>
        </div>
    );
};

// --- Scenario 4: Searchable Docs (Knowledge Base) ---
const DocsScenario = () => {
    const [mode, setMode] = useState('bad');
    const [query, setQuery] = useState('');

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('bad')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'bad' ? "bg-red-100 text-red-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Bad (List)</button>
                <button onClick={() => setMode('good')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'good' ? "bg-green-100 text-green-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Good (Search)</button>
            </div>

            <div className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden h-40 flex flex-col">
                {mode === 'good' && (
                    <div className="p-3 border-b border-gray-100 bg-gray-50">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2 w-3.5 h-3.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="How do I..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded-md focus:outline-none focus:border-blue-400"
                            />
                        </div>
                    </div>
                )}

                <div className="flex-1 overflow-y-auto p-2">
                    {mode === 'bad' ? (
                        <div className="space-y-1">
                            <h4 className="text-xs font-bold text-gray-900 px-2 mb-2">All Articles</h4>
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="text-[10px] text-blue-600 hover:underline px-2 py-1 cursor-pointer truncate">
                                    Article #{i + 1}: Detailed explanation of feature X...
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-1">
                            {query ? (
                                <div className="text-[10px] text-gray-500 px-2 py-1">Searching for "{query}"...</div>
                            ) : (
                                <>
                                    <div className="text-[10px] font-medium text-gray-500 px-2 uppercase tracking-wider mb-1">Suggested</div>
                                    {['Reset Password', 'Billing FAQ', 'Contact Support'].map(item => (
                                        <div key={item} className="flex items-center justify-between text-xs text-gray-700 hover:bg-gray-50 px-2 py-1.5 rounded cursor-pointer group">
                                            {item}
                                            <ChevronRight className="w-3 h-3 text-gray-300 group-hover:text-gray-500" />
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <p className="mt-8 text-xs text-gray-400 text-center">
                {mode === 'good' ? "Searchable docs help users find specific answers quickly." : "Long lists of articles are hard to browse."}
            </p>
        </div>
    );
};

// --- Scenario 5: Empty States (Guidance) ---
const EmptyStateScenario = () => {
    const [mode, setMode] = useState('bad');

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('bad')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'bad' ? "bg-red-100 text-red-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Bad (Blank)</button>
                <button onClick={() => setMode('good')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'good' ? "bg-green-100 text-green-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Good (Guide)</button>
            </div>

            <div className="w-full h-40 bg-gray-50 rounded-xl border border-gray-200 border-dashed flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {mode === 'bad' ? (
                        <motion.div
                            key="bad"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-xs text-gray-400"
                        >
                            No items found.
                        </motion.div>
                    ) : (
                        <motion.div
                            key="good"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="text-center p-4"
                        >
                            <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                                <Plus className="w-4 h-4" />
                            </div>
                            <h4 className="text-xs font-bold text-gray-900">No projects yet</h4>
                            <p className="text-[10px] text-gray-500 mb-3 max-w-[150px] mx-auto">Get started by creating your first project.</p>
                            <Button size="sm" className="h-7 text-xs">Create Project</Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <p className="mt-8 text-xs text-gray-400 text-center">
                {mode === 'good' ? "Empty states are an opportunity to teach and guide." : "Blank screens leave users wondering what to do next."}
            </p>
        </div>
    );
};

const scenarios = [
    {
        id: 'tooltips',
        label: 'Tooltips',
        component: TooltipScenario,
        icon: HelpCircle,
        description: "Providing help right where the user needs it, instead of forcing them to read a manual.",
        whyItMatters: "Users don't want to leave their task to find answers. Tooltips provide instant clarification."
    },
    {
        id: 'onboarding',
        label: 'Onboarding',
        component: OnboardingScenario,
        icon: Sparkles,
        description: "Guiding new users through the key features of the application.",
        whyItMatters: "A quick tour helps new users understand the value proposition and key features immediately."
    },
    {
        id: 'docs',
        label: 'Searchable Docs',
        component: DocsScenario,
        icon: Book,
        description: "A comprehensive knowledge base that is easy to search.",
        whyItMatters: "When users have a specific problem, they want to find the answer instantly."
    },
    {
        id: 'inline',
        label: 'Inline Hints',
        component: InlineHelpScenario,
        icon: Info,
        description: "Showing hints next to fields to prevent errors.",
        whyItMatters: "Inline hints prevent errors before they happen, saving frustration."
    },
    {
        id: 'empty',
        label: 'Empty States',
        component: EmptyStateScenario,
        icon: FileQuestion,
        description: "Using empty states to guide users on what to do next.",
        whyItMatters: "Empty states are an opportunity to teach and guide, rather than just saying 'No items'."
    },
];

export default function HelpExample({ onScenarioChange }) {
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

                <div className="flex-1 flex items-center justify-center bg-gray-50/50 rounded-xl border border-gray-100/50 p-6 relative">
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
