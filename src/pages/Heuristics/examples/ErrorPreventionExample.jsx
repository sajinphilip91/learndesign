import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../../components/ui/Button';
import {
    Search, Lock, Trash2, Calendar, Mail,
    Check, X, AlertTriangle, ShieldCheck, AlertCircle,
    CheckCircle2, Type, Settings
} from 'lucide-react';
import { cn } from '../../../lib/utils';

// --- Scenario 1: Search Suggestions (Constraint) ---
const SearchScenario = () => {
    const [mode, setMode] = useState('error-prone');
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const items = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Blackberry', 'Blueberry'];

    useEffect(() => {
        if (mode === 'prevented' && query.length > 0) {
            setSuggestions(items.filter(i => i.toLowerCase().includes(query.toLowerCase())));
        } else {
            setSuggestions([]);
        }
    }, [query, mode]);

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('error-prone')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'error-prone' ? "bg-red-100 text-red-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Error Prone</button>
                <button onClick={() => setMode('prevented')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'prevented' ? "bg-green-100 text-green-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Prevented</button>
            </div>

            <div className="w-full relative">
                <div className="relative">
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search fruit..."
                        className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {mode === 'prevented' && suggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden z-10">
                        {suggestions.map(s => (
                            <button key={s} onClick={() => setQuery(s)} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-gray-700">
                                {s}
                            </button>
                        ))}
                    </div>
                )}

                {mode === 'error-prone' && query && !items.includes(query) && (
                    <div className="mt-4 text-center">
                        <p className="text-sm text-red-500 flex items-center justify-center gap-2">
                            <X className="w-4 h-4" /> No results found
                        </p>
                    </div>
                )}
                {mode === 'error-prone' && !query && (
                    <p className="text-xs text-gray-400 mt-2 text-center">
                        Without help, users are likely to make spelling errors.
                    </p>
                )}
                {mode === 'prevented' && !query && (
                    <p className="text-xs text-gray-400 mt-2 text-center">
                        Suggestions prevent typos and zero-result searches.
                    </p>
                )}
            </div>
        </div>
    );
};

// --- Scenario 2: Password Strength (Real-time Feedback) ---
const PasswordScenario = () => {
    const [mode, setMode] = useState('error-prone');
    const [password, setPassword] = useState('');

    const getStrength = (pass) => {
        if (pass.length === 0) return 0;
        if (pass.length < 4) return 1;
        if (pass.length < 8) return 2;
        return 3;
    };

    const strength = getStrength(password);

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('error-prone')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'error-prone' ? "bg-red-100 text-red-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Error Prone</button>
                <button onClick={() => setMode('prevented')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'prevented' ? "bg-green-100 text-green-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Prevented</button>
            </div>

            <div className="w-full space-y-3">
                <div className="relative">
                    <Lock className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="New Password"
                        className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {mode === 'prevented' && (
                    <div className="space-y-1">
                        <div className="flex gap-1 h-1">
                            <div className={cn("flex-1 rounded-full transition-colors", strength >= 1 ? "bg-red-400" : "bg-gray-100")} />
                            <div className={cn("flex-1 rounded-full transition-colors", strength >= 2 ? "bg-yellow-400" : "bg-gray-100")} />
                            <div className={cn("flex-1 rounded-full transition-colors", strength >= 3 ? "bg-green-400" : "bg-gray-100")} />
                        </div>
                        <p className="text-xs text-right text-gray-500">
                            {strength === 0 ? 'Enter password' : strength === 1 ? 'Weak' : strength === 2 ? 'Medium' : 'Strong'}
                        </p>
                    </div>
                )}

                {mode === 'error-prone' && password.length > 0 && (
                    <div className="p-3 bg-red-50 text-red-600 text-xs rounded-lg border border-red-100">
                        Error: Password too weak. Try again after submitting.
                    </div>
                )}
            </div>
            <p className="mt-6 text-xs text-gray-400 text-center">
                {mode === 'prevented' ? "Real-time feedback guides users to create valid passwords." : "Reporting errors only after submission frustrates users."}
            </p>
        </div>
    );
};

// --- Scenario 3: Delete Confirmation (Confirmation) ---
const DeleteScenario = () => {
    const [mode, setMode] = useState('error-prone');
    const [deleted, setDeleted] = useState(false);
    const [confirming, setConfirming] = useState(false);

    const handleDelete = () => {
        if (mode === 'prevented') {
            setConfirming(true);
        } else {
            setDeleted(true);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => { setMode('error-prone'); setDeleted(false); setConfirming(false); }} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'error-prone' ? "bg-red-100 text-red-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Error Prone</button>
                <button onClick={() => { setMode('prevented'); setDeleted(false); setConfirming(false); }} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'prevented' ? "bg-green-100 text-green-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Prevented</button>
            </div>

            <div className="relative w-full flex flex-col items-center">
                {!deleted ? (
                    confirming ? (
                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-lg w-full text-center space-y-3">
                            <AlertTriangle className="w-8 h-8 text-orange-500 mx-auto" />
                            <h4 className="font-bold text-gray-900 text-sm">Delete File?</h4>
                            <p className="text-xs text-gray-500">This action cannot be undone.</p>
                            <div className="flex gap-2 justify-center">
                                <Button size="sm" variant="outline" onClick={() => setConfirming(false)}>Cancel</Button>
                                <Button size="sm" className="bg-red-600 hover:bg-red-700" onClick={() => setDeleted(true)}>Delete</Button>
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={handleDelete}
                            className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-red-50 transition-colors border border-transparent hover:border-red-100"
                        >
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                                <Trash2 className="w-6 h-6 text-red-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-600 group-hover:text-red-700">Delete Project</span>
                        </button>
                    )
                ) : (
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                            <X className="w-6 h-6" />
                        </div>
                        <span className="text-sm">File Deleted</span>
                        <Button variant="link" size="sm" onClick={() => { setDeleted(false); setConfirming(false); }}>Reset</Button>
                    </div>
                )}
            </div>
            <p className="mt-6 text-xs text-gray-400 text-center">
                {mode === 'prevented' ? "Confirmation dialogs stop accidental destructive actions." : "Immediate deletion allows for easy mistakes."}
            </p>
        </div>
    );
};

// --- Scenario 4: Date Picker (Format Constraint) ---
const DateScenario = () => {
    const [mode, setMode] = useState('error-prone');
    const [date, setDate] = useState('');

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('error-prone')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'error-prone' ? "bg-red-100 text-red-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Error Prone</button>
                <button onClick={() => setMode('prevented')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'prevented' ? "bg-green-100 text-green-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Prevented</button>
            </div>

            <div className="w-full space-y-3">
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Travel Date</label>
                {mode === 'prevented' ? (
                    <div className="relative">
                        <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                        <input
                            type="date"
                            onClick={(e) => e.target.showPicker && e.target.showPicker()}
                            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                        />
                    </div>
                ) : (
                    <div className="space-y-2">
                        <input
                            type="text"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            placeholder="DD/MM/YYYY"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {date && !/^\d{2}\/\d{2}\/\d{4}$/.test(date) && (
                            <p className="text-xs text-red-500">Format must be DD/MM/YYYY</p>
                        )}
                    </div>
                )}
            </div>
            <p className="mt-6 text-xs text-gray-400 text-center">
                {mode === 'prevented' ? "Date pickers make it impossible to enter an invalid format." : "Free text input invites formatting errors."}
            </p>
        </div>
    );
};

// --- Scenario 5: Email Validation (Immediate Feedback) ---
const EmailScenario = () => {
    const [mode, setMode] = useState('error-prone');
    const [email, setEmail] = useState('');
    const [touched, setTouched] = useState(false);

    const isValid = email.includes('@') && email.includes('.');

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex gap-4 mb-6">
                <button onClick={() => setMode('error-prone')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'error-prone' ? "bg-red-100 text-red-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Error Prone</button>
                <button onClick={() => setMode('prevented')} className={cn("px-3 py-1.5 text-sm rounded-full transition-colors", mode === 'prevented' ? "bg-green-100 text-green-700 font-medium" : "text-gray-500 hover:bg-gray-100")}>Prevented</button>
            </div>

            <div className="w-full space-y-3">
                <div className="relative">
                    <Mail className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => setTouched(true)}
                        placeholder="Enter email"
                        className={cn(
                            "w-full pl-9 pr-10 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-colors",
                            mode === 'prevented' && touched
                                ? isValid ? "border-green-200 focus:ring-green-200" : "border-red-200 focus:ring-red-200"
                                : "border-gray-200 focus:ring-blue-500"
                        )}
                    />
                    {mode === 'prevented' && email && (
                        <div className="absolute right-3 top-2.5">
                            {isValid ? <Check className="w-4 h-4 text-green-500" /> : <AlertCircle className="w-4 h-4 text-red-500" />}
                        </div>
                    )}
                </div>

                {mode === 'error-prone' && (
                    <Button className="w-full" onClick={() => !isValid && alert("Invalid Email Format!")}>Submit</Button>
                )}

                {mode === 'prevented' && !isValid && touched && (
                    <p className="text-xs text-red-500 ml-1">Please enter a valid email address.</p>
                )}
            </div>
            <p className="mt-6 text-xs text-gray-400 text-center">
                {mode === 'prevented' ? "Validating as you type prevents submission errors." : "Waiting until submission to show errors wastes time."}
            </p>
        </div>
    );
};

const scenarios = [
    {
        id: 'constraints',
        label: 'Smart Constraints',
        component: DateScenario,
        icon: Calendar,
        description: "Using a date picker instead of a text field prevents formatting errors.",
        whyItMatters: "Typing 'Feb 30' is an error. Selecting it from a calendar is impossible."
    },
    {
        id: 'confirm',
        label: 'Confirmation',
        component: DeleteScenario,
        icon: AlertTriangle,
        description: "Asking for confirmation before destructive actions (e.g., delete).",
        whyItMatters: "Forcing a conscious choice prevents accidental data loss."
    },
    {
        id: 'validation',
        label: 'Real-time Validation',
        component: EmailScenario,
        icon: CheckCircle2,
        description: "Providing feedback as the user types, rather than after submission.",
        whyItMatters: "Catching errors as they happen is less frustrating than submitting a form and getting rejected."
    },
    {
        id: 'format',
        label: 'Forgiving Format',
        component: PasswordScenario,
        icon: Type,
        description: "Accepting multiple input formats (e.g., phone numbers with or without dashes).",
        whyItMatters: "Allowing multiple formats reduces friction and errors."
    },
    {
        id: 'defaults',
        label: 'Smart Defaults',
        component: SearchScenario,
        icon: Settings,
        description: "Pre-filling fields with the most likely values.",
        whyItMatters: "Smart defaults reduce the amount of data entry and the chance of making a mistake."
    },
];

export default function ErrorPreventionExample({ onScenarioChange }) {
    const [activeScenario, setActiveScenario] = useState(0);

    useEffect(() => {
        if (onScenarioChange) {
            onScenarioChange(scenarios[activeScenario]);
        }
    }, [activeScenario, onScenarioChange, scenarios]);

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
