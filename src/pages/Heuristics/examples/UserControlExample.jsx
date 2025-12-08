import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../../components/ui/Button';
import {
    Undo2, X, ArrowLeft, Trash2, Mail, Loader2,
    AlertCircle, Save, Edit2, Check, LogOut, XCircle, Edit3
} from 'lucide-react';
import { cn } from '../../../lib/utils';

// --- Scenario 1: Undo Delete (Action Reversal) ---
const UndoScenario = () => {
    const [emails, setEmails] = useState([
        { id: 1, subject: "Project Update", sender: "Alice" },
        { id: 2, subject: "Meeting Notes", sender: "Bob" },
    ]);
    const [deletedEmail, setDeletedEmail] = useState(null);
    const [showToast, setShowToast] = useState(false);

    const handleDelete = (id) => {
        const email = emails.find(e => e.id === id);
        setDeletedEmail(email);
        setEmails(emails.filter(e => e.id !== id));
        setShowToast(true);
    };

    const handleUndo = () => {
        if (deletedEmail) {
            setEmails(prev => [...prev, deletedEmail].sort((a, b) => a.id - b.id));
            setDeletedEmail(null);
            setShowToast(false);
        }
    };

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
                setDeletedEmail(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    return (
        <div className="flex flex-col h-64 w-full max-w-sm mx-auto relative overflow-hidden bg-gray-50 rounded-xl border border-gray-200">
            <div className="p-3 border-b border-gray-200 bg-white font-medium text-sm">Inbox</div>
            <div className="p-3 space-y-2">
                <AnimatePresence mode="popLayout">
                    {emails.map(email => (
                        <motion.div
                            key={email.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex justify-between items-center"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div className="text-sm">
                                    <div className="font-medium">{email.subject}</div>
                                    <div className="text-xs text-gray-500">{email.sender}</div>
                                </div>
                            </div>
                            <button onClick={() => handleDelete(email.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
                {emails.length === 0 && (
                    <div className="text-center py-8 text-gray-400 text-sm">No emails</div>
                )}
            </div>
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        className="absolute bottom-4 left-4 right-4 bg-gray-900 text-white p-3 rounded-lg shadow-lg flex justify-between items-center text-sm"
                    >
                        <span>Deleted</span>
                        <button onClick={handleUndo} className="text-blue-400 font-medium hover:text-blue-300 flex items-center gap-1">
                            <Undo2 className="w-4 h-4" /> Undo
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- Scenario 2: Cancel Upload (Process Control) ---
const CancelUploadScenario = () => {
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (uploading) {
            const interval = setInterval(() => {
                setProgress(p => {
                    if (p >= 100) {
                        setUploading(false);
                        return 0;
                    }
                    return p + 1;
                });
            }, 50);
            return () => clearInterval(interval);
        }
    }, [uploading]);

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            {!uploading ? (
                <Button onClick={() => { setUploading(true); setProgress(0); }}>
                    Start Large Upload
                </Button>
            ) : (
                <div className="w-full space-y-4">
                    <div className="flex justify-between text-sm font-medium">
                        <span>Uploading 4.2 GB...</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-blue-600"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                        />
                    </div>
                    <Button variant="outline" className="w-full text-red-600 hover:text-red-700 hover:bg-red-50" onClick={() => setUploading(false)}>
                        <X className="w-4 h-4 mr-2" />
                        Cancel Upload
                    </Button>
                </div>
            )}
        </div>
    );
};

// --- Scenario 3: Go Back (Navigation) ---
const GoBackScenario = () => {
    const [page, setPage] = useState(1);

    return (
        <div className="flex flex-col h-64 w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-200 p-3 flex items-center gap-3">
                <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="p-1.5 rounded hover:bg-gray-200 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                </button>
                <div className="text-sm font-medium text-gray-600">Page {page} of 3</div>
            </div>
            <div className="flex-1 flex items-center justify-center p-6 text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={page}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                    >
                        <h4 className="text-xl font-bold">Step {page}</h4>
                        <p className="text-gray-500 text-sm">
                            {page === 1 ? "Start here." : page === 2 ? "Keep going." : "Almost done."}
                        </p>
                        {page < 3 && (
                            <Button size="sm" onClick={() => setPage(p => p + 1)}>Next Step</Button>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

// --- Scenario 4: Close Modal (Exit) ---
const CloseModalScenario = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-center h-64 w-full relative">
            <Button onClick={() => setIsOpen(true)}>Open Settings</Button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-xl"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="absolute bg-white p-6 rounded-xl shadow-xl w-64 text-center space-y-4"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                            >
                                <X className="w-4 h-4" />
                            </button>
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                                <AlertCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold">Settings</h4>
                                <p className="text-xs text-gray-500 mt-1">Adjust your preferences here.</p>
                            </div>
                            <div className="flex gap-2">
                                <Button size="sm" variant="outline" className="flex-1" onClick={() => setIsOpen(false)}>Cancel</Button>
                                <Button size="sm" className="flex-1" onClick={() => setIsOpen(false)}>Save</Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- Scenario 5: Edit Form (Cancel Changes) ---
const EditFormScenario = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("John Doe");
    const [tempName, setTempName] = useState("");

    const startEdit = () => {
        setTempName(name);
        setIsEditing(true);
    };

    const save = () => {
        setName(tempName);
        setIsEditing(false);
    };

    const cancel = () => {
        setIsEditing(false);
    };

    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm w-full">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-gray-900">Profile</h4>
                    {!isEditing && (
                        <button onClick={startEdit} className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                            <Edit2 className="w-3 h-3" /> Edit
                        </button>
                    )}
                </div>

                {isEditing ? (
                    <div className="space-y-4">
                        <div>
                            <label className="text-xs font-medium text-gray-500 uppercase">Full Name</label>
                            <input
                                type="text"
                                value={tempName}
                                onChange={(e) => setTempName(e.target.value)}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                autoFocus
                            />
                        </div>
                        <div className="flex gap-2">
                            <Button size="sm" variant="ghost" className="flex-1" onClick={cancel}>Cancel</Button>
                            <Button size="sm" className="flex-1" onClick={save}>Save</Button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="text-xs font-medium text-gray-500 uppercase">Full Name</div>
                        <div className="text-lg font-medium text-gray-900 mt-1">{name}</div>
                    </div>
                )}
            </div>
            <p className="mt-4 text-xs text-gray-400 text-center">
                "Cancel" lets users revert changes without saving.
            </p>
        </div>
    );
};

const scenarios = [
    {
        id: 'undo',
        label: 'Undo Delete',
        component: UndoScenario,
        icon: Undo2,
        description: "Allowing users to undo a destructive action immediately.",
        whyItMatters: "Mistakes happen. 'Undo' saves users from the fear of permanent error."
    },
    {
        id: 'exit',
        label: 'Emergency Exit',
        component: CloseModalScenario,
        icon: LogOut,
        description: "A clearly marked way to leave a process without completing it.",
        whyItMatters: "It provides a safe way out without requiring complex procedures or permission."
    },
    {
        id: 'cancel',
        label: 'Cancel Button',
        component: CancelUploadScenario,
        icon: XCircle,
        description: "Providing a clear way to cancel an operation in progress.",
        whyItMatters: "Users feel safer filling out forms knowing they can back out at any time."
    },
    {
        id: 'back',
        label: 'Back Button',
        component: GoBackScenario,
        icon: ArrowLeft,
        description: "Ensuring the back button works as expected within the app flow.",
        whyItMatters: "It supports the user's freedom to explore without getting trapped in a dead end."
    },
    {
        id: 'edit',
        label: 'Edit Profile',
        component: EditFormScenario,
        icon: Edit3,
        description: "Allowing users to change their data after it has been entered.",
        whyItMatters: "Users need the ability to update their information as their life circumstances change."
    },
];

export default function UserControlExample({ onScenarioChange }) {
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
