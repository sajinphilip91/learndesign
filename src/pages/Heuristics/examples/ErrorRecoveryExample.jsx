import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    AlertTriangle, CheckCircle, XCircle, RefreshCw,
    WifiOff, Wifi, Search, ArrowLeft, RotateCcw,
    Trash2, Lock, Mail, FileWarning, AlertOctagon,
    MessageSquare, AlertCircle, Lightbulb
} from 'lucide-react';
import { cn } from '../../../lib/utils';
import { Button } from '../../../components/ui/Button';

// --- Scenario 1: Form Validation (Specific vs Generic) ---
const FormScenario = () => {
    const [mode, setMode] = useState('bad');
    const [email, setEmail] = useState('sayhello-sajinphilip.com');
    const [submitted, setSubmitted] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('bad')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'bad' ? "bg-red-100 text-red-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Bad (Generic)</button>
                <button onClick={() => setMode('good')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'good' ? "bg-green-100 text-green-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Good (Specific)</button>
            </div>

            <div className="w-full space-y-4">
                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                        type="text"
                        value={email}
                        readOnly
                        className={cn(
                            "w-full p-2 text-sm border rounded-lg",
                            "border-red-300 bg-red-50 text-red-900"
                        )}
                    />
                    <AnimatePresence mode="wait">
                        {mode === 'bad' ? (
                            <motion.p
                                key="bad"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xs text-red-600 mt-1 font-medium"
                            >
                                Invalid input.
                            </motion.p>
                        ) : (
                            <motion.p
                                key="good"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium"
                            >
                                <XCircle className="w-3 h-3" />
                                Please include an '@' in the email address.
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
                <Button className="w-full" disabled>Submit</Button>
            </div>

            <p className="mt-8 text-xs text-gray-400 text-center">
                {mode === 'good' ? "Specific error messages help users fix the problem immediately." : "Generic errors leave users guessing what went wrong."}
            </p>
        </div>
    );
};

// --- Scenario 2: 404 Page (Dead End vs Helpful) ---
const NotFoundScenario = () => {
    const [mode, setMode] = useState('bad');

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('bad')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'bad' ? "bg-red-100 text-red-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Bad (Dead End)</button>
                <button onClick={() => setMode('good')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'good' ? "bg-green-100 text-green-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Good (Helpful)</button>
            </div>

            <div className="w-full bg-gray-50 rounded-xl border border-gray-200 p-6 text-center">
                <AnimatePresence mode="wait">
                    {mode === 'bad' ? (
                        <motion.div
                            key="bad"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="space-y-2"
                        >
                            <h1 className="text-4xl font-bold text-gray-300">404</h1>
                            <p className="text-sm text-gray-500">Not Found</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="good"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="space-y-4"
                        >
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold text-gray-900">Page not found</h3>
                                <p className="text-xs text-gray-500">We couldn't find that page. Try searching?</p>
                            </div>
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2 w-3.5 h-3.5 text-gray-400" />
                                <input type="text" placeholder="Search..." className="w-full pl-8 pr-3 py-1.5 text-xs border border-gray-300 rounded-md" />
                            </div>
                            <button className="text-xs text-blue-600 font-medium flex items-center justify-center gap-1 hover:underline">
                                <ArrowLeft className="w-3 h-3" /> Go Home
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <p className="mt-8 text-xs text-gray-400 text-center">
                {mode === 'good' ? "Helpful 404 pages guide users back to safety." : "Dead ends frustrate users and increase bounce rates."}
            </p>
        </div>
    );
};

// --- Scenario 3: Login Failure (Blame vs Support) ---
const LoginScenario = () => {
    const [mode, setMode] = useState('bad');

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('bad')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'bad' ? "bg-red-100 text-red-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Bad (Vague)</button>
                <button onClick={() => setMode('good')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'good' ? "bg-green-100 text-green-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Good (Supportive)</button>
            </div>

            <div className="w-full space-y-3">
                <AnimatePresence mode="wait">
                    {mode === 'bad' ? (
                        <motion.div
                            key="bad"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-red-100 border border-red-200 text-red-700 px-3 py-2 rounded text-xs font-medium flex items-center gap-2"
                        >
                            <AlertOctagon className="w-4 h-4" />
                            Login Failed.
                        </motion.div>
                    ) : (
                        <motion.div
                            key="good"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-red-50 border border-red-100 text-red-800 px-3 py-2 rounded text-xs"
                        >
                            <div className="flex items-center gap-2 font-medium mb-1">
                                <AlertTriangle className="w-3.5 h-3.5" />
                                Incorrect password
                            </div>
                            <a href="#" className="text-blue-600 hover:underline ml-5.5">Forgot password?</a>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="space-y-2 opacity-50 pointer-events-none">
                    <input type="email" value="user@example.com" readOnly className="w-full text-xs p-2 border rounded bg-gray-50" />
                    <input type="password" value="wrongpass" readOnly className="w-full text-xs p-2 border rounded bg-gray-50" />
                    <Button className="w-full">Sign In</Button>
                </div>
            </div>

            <p className="mt-8 text-xs text-gray-400 text-center">
                {mode === 'good' ? "Diagnose the problem and offer a recovery path (reset password)." : "Vague errors leave users wondering if they mistyped or if the system is broken."}
            </p>
        </div>
    );
};

// --- Scenario 4: Connection Error (Technical vs Actionable) ---
const ConnectionScenario = () => {
    const [mode, setMode] = useState('bad');
    const [isRetrying, setIsRetrying] = useState(false);

    const handleRetry = () => {
        setIsRetrying(true);
        setTimeout(() => setIsRetrying(false), 1000);
    };

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('bad')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'bad' ? "bg-red-100 text-red-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Bad (Code)</button>
                <button onClick={() => setMode('good')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'good' ? "bg-green-100 text-green-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Good (Actionable)</button>
            </div>

            <div className="w-full">
                <AnimatePresence mode="wait">
                    {mode === 'bad' ? (
                        <motion.div
                            key="bad"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-xs shadow-lg"
                        >
                            <p>Error: 503 Service Unavailable</p>
                            <p>at /api/v1/data.json:42:12</p>
                            <p>Stack trace: ...</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="good"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm text-center"
                        >
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 text-gray-500">
                                <WifiOff className="w-5 h-5" />
                            </div>
                            <h4 className="font-semibold text-gray-900 text-sm mb-1">No Internet Connection</h4>
                            <p className="text-xs text-gray-500 mb-4">Please check your network settings.</p>
                            <Button
                                onClick={handleRetry}
                                size="sm"
                                variant="outline"
                                className="w-full gap-2"
                            >
                                <RefreshCw className={cn("w-3 h-3", isRetrying && "animate-spin")} />
                                {isRetrying ? "Retrying..." : "Try Again"}
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <p className="mt-8 text-xs text-gray-400 text-center">
                {mode === 'good' ? "Translate technical failures into plain language with a 'Try Again' button." : "Technical error codes scare non-technical users."}
            </p>
        </div>
    );
};

// --- Scenario 5: Undo Action (Destructive vs Reversible) ---
// --- Scenario 5: Undo Action (Email Send) ---
const EmailUndoScenario = () => {
    const [mode, setMode] = useState('bad');
    const [status, setStatus] = useState('composing'); // composing, sending, sent

    useEffect(() => {
        setStatus('composing');
    }, [mode]);

    const handleSend = () => {
        setStatus('sending');
        setTimeout(() => {
            setStatus('sent');
        }, 1000);
    };

    const handleUndo = () => {
        setStatus('composing');
    };

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('bad')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'bad' ? "bg-red-100 text-red-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Bad (No Undo)</button>
                <button onClick={() => setMode('good')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'good' ? "bg-green-100 text-green-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Good (Undo Send)</button>
            </div>

            <div className="w-full h-40 relative bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <AnimatePresence mode="wait">
                    {status === 'composing' && (
                        <motion.div
                            key="compose"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="p-4 space-y-2 h-full flex flex-col"
                        >
                            <div className="text-xs font-medium text-gray-500 border-b pb-1">New Message</div>
                            <div className="flex-1 bg-white rounded border border-gray-200 p-2 text-xs text-gray-400">
                                Hey, checking in on the project...
                            </div>
                            <div className="flex justify-end">
                                <Button size="sm" onClick={handleSend} className="h-7 text-xs px-3">Send</Button>
                            </div>
                        </motion.div>
                    )}

                    {status === 'sending' && (
                        <motion.div
                            key="sending"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-10"
                        >
                            <RefreshCw className="w-5 h-5 animate-spin text-blue-500" />
                        </motion.div>
                    )}

                    {status === 'sent' && (
                        <motion.div
                            key="sent"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute inset-0 flex items-center justify-center p-4"
                        >
                            {mode === 'bad' ? (
                                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm">
                                    <CheckCircle className="w-4 h-4" />
                                    <span className="text-xs font-medium">Message sent.</span>
                                </div>
                            ) : (
                                <div className="bg-gray-900 text-white px-4 py-3 rounded-lg flex items-center gap-4 shadow-lg min-w-[200px] justify-between">
                                    <span className="text-xs">Message sent.</span>
                                    <button
                                        onClick={handleUndo}
                                        className="text-xs font-bold text-blue-400 hover:text-blue-300 uppercase tracking-wide"
                                    >
                                        Undo
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <p className="mt-6 text-xs text-gray-400 text-center">
                {mode === 'good' ? "Undo Send gives users a safety net for accidental clicks." : "Once sent, the user loses control and cannot recover errors."}
            </p>
        </div>
    );
};

const scenarios = [
    {
        id: 'messages',
        label: 'Helpful Messages',
        component: LoginScenario,
        icon: MessageSquare,
        description: "Comparing a generic error code with a helpful, actionable message.",
        whyItMatters: "Telling users 'Error 500' is useless. Telling them 'Server is busy, try again in 5 mins' is helpful."
    },
    {
        id: 'inline',
        label: 'Inline Validation',
        component: FormScenario,
        icon: AlertCircle,
        description: "Showing errors next to the field that caused them.",
        whyItMatters: "Pointing out exactly which field is wrong saves the user from hunting for the error."
    },
    {
        id: 'suggestions',
        label: 'Suggestions',
        component: NotFoundScenario,
        icon: Lightbulb,
        description: "Offering alternative solutions when a search fails.",
        whyItMatters: "Don't just say 'Not Found'. Suggest similar items or a search."
    },
    {
        id: 'restore',
        label: 'Restore Deleted',
        component: EmailUndoScenario,
        icon: Trash2,
        description: "Allowing users to recover accidentally deleted items.",
        whyItMatters: "Accidents happen. A 'Trash' folder allows for easy recovery."
    },
    {
        id: 'retry',
        label: 'Connection Retry',
        component: ConnectionScenario,
        icon: RefreshCw,
        description: "Automatically attempting to reconnect after a network failure.",
        whyItMatters: "Automatically retrying a failed connection saves the user from manual refreshing."
    },
];

export default function ErrorRecoveryExample({ onScenarioChange }) {
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
