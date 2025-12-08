import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../../components/ui/Button';
import {
    Check, Loader2, Upload, X, Battery, Wifi, Signal,
    Save, RefreshCw, ChevronRight, FileText, Layout
} from 'lucide-react';
import { cn } from '../../../lib/utils';

// --- Scenario 1: File Upload ---
const FileUploadScenario = () => {
    const [status, setStatus] = useState('idle');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (status === 'uploading') {
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setStatus('success');
                        return 100;
                    }
                    return prev + 5;
                });
            }, 100);
            return () => clearInterval(interval);
        }
    }, [status]);

    const reset = () => { setStatus('idle'); setProgress(0); };

    return (
        <div className="flex flex-col items-center justify-center h-64">
            <AnimatePresence mode="wait">
                {status === 'idle' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Upload className="w-8 h-8" />
                        </div>
                        <Button onClick={() => setStatus('uploading')}>Upload File</Button>
                    </motion.div>
                )}
                {status === 'uploading' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full max-w-xs">
                        <div className="flex justify-between text-sm mb-2 font-medium">
                            <span>Uploading...</span>
                            <span>{progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div className="h-full bg-blue-600" initial={{ width: 0 }} animate={{ width: `${progress}%` }} />
                        </div>
                        <Button variant="ghost" size="sm" className="mt-4 w-full text-red-500" onClick={reset}>Cancel</Button>
                    </motion.div>
                )}
                {status === 'success' && (
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
                        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Check className="w-8 h-8" />
                        </div>
                        <h4 className="font-bold text-green-900 mb-1">Upload Complete</h4>
                        <Button variant="outline" onClick={reset} className="mt-4">Done</Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- Scenario 2: System Status ---
const SystemStatusScenario = () => {
    const [charging, setCharging] = useState(false);
    const [wifi, setWifi] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center h-64 space-y-8">
            <div className="flex gap-8">
                {/* Battery */}
                <div className="flex flex-col items-center gap-2">
                    <div className={cn("w-16 h-24 border-4 rounded-xl flex flex-col justify-end p-1 relative transition-colors", charging ? "border-green-500" : "border-gray-800")}>
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-2 bg-gray-800 rounded-sm" />
                        <motion.div
                            className={cn("w-full rounded-sm", charging ? "bg-green-500" : "bg-gray-800")}
                            animate={{ height: charging ? ["20%", "100%"] : "40%" }}
                            transition={charging ? { repeat: Infinity, duration: 1.5 } : {}}
                        />
                        {charging && <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">⚡</div>}
                    </div>
                    <span className="text-sm font-medium text-gray-600">{charging ? "Charging" : "40%"}</span>
                </div>

                {/* Wifi */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-24 h-24 flex items-center justify-center bg-gray-50 rounded-2xl">
                        {wifi ? <Wifi className="w-12 h-12 text-blue-600" /> : <div className="relative"><Wifi className="w-12 h-12 text-gray-300" /><X className="w-6 h-6 text-red-500 absolute bottom-0 right-0" /></div>}
                    </div>
                    <span className="text-sm font-medium text-gray-600">{wifi ? "Connected" : "No Internet"}</span>
                </div>
            </div>

            <div className="flex gap-4">
                <Button variant="outline" size="sm" onClick={() => setCharging(!charging)}>Toggle Charger</Button>
                <Button variant="outline" size="sm" onClick={() => setWifi(!wifi)}>Toggle Wifi</Button>
            </div>
        </div>
    );
};

// --- Scenario 3: Stepper ---
const StepperScenario = () => {
    const [step, setStep] = useState(1);
    return (
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-sm mx-auto">
            <div className="flex items-center w-full mb-8">
                {[1, 2, 3].map((s) => (
                    <React.Fragment key={s}>
                        <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors",
                            step >= s ? "bg-black text-white" : "bg-gray-100 text-gray-400")}>
                            {step > s ? <Check className="w-4 h-4" /> : s}
                        </div>
                        {s < 3 && <div className={cn("flex-1 h-1 mx-2 rounded-full transition-colors", step > s ? "bg-black" : "bg-gray-100")} />}
                    </React.Fragment>
                ))}
            </div>

            <div className="text-center mb-8">
                <h4 className="text-xl font-bold mb-2">Step {step}: {step === 1 ? "Account" : step === 2 ? "Personal" : "Review"}</h4>
                <p className="text-gray-500 text-sm">Please fill in your details.</p>
            </div>

            <div className="flex gap-4 w-full">
                <Button variant="outline" className="flex-1" disabled={step === 1} onClick={() => setStep(s => s - 1)}>Back</Button>
                <Button className="flex-1" onClick={() => setStep(s => s === 3 ? 1 : s + 1)}>
                    {step === 3 ? "Finish" : "Next"}
                </Button>
            </div>
        </div>
    );
};

// --- Scenario 4: Loading State ---
const LoadingScenario = () => {
    const [loading, setLoading] = useState(false);

    const loadData = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <div className="flex flex-col h-64 w-full">
            <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold">Dashboard</h4>
                <Button size="sm" variant="ghost" onClick={loadData} disabled={loading}>
                    <RefreshCw className={cn("w-4 h-4 mr-2", loading && "animate-spin")} />
                    Refresh
                </Button>
            </div>

            <div className="space-y-4">
                {loading ? (
                    <>
                        <div className="h-32 bg-gray-100 rounded-xl animate-pulse" />
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-100 rounded w-3/4 animate-pulse" />
                            <div className="h-4 bg-gray-100 rounded w-1/2 animate-pulse" />
                        </div>
                    </>
                ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                        <div className="h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 p-4 flex items-end">
                            <div className="w-full">
                                <div className="text-sm text-blue-600 font-medium mb-1">Total Revenue</div>
                                <div className="text-3xl font-bold text-blue-900">$24,500</div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-50 rounded w-3/4" />
                            <div className="h-4 bg-gray-50 rounded w-1/2" />
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

// --- Scenario 5: Auto-save ---
const AutoSaveScenario = () => {
    const [saveStatus, setSaveStatus] = useState('saved'); // saved, saving, unsaved
    const [text, setText] = useState("Start typing here...");

    useEffect(() => {
        const timer = setTimeout(() => {
            if (saveStatus === 'unsaved') {
                setSaveStatus('saving');
                setTimeout(() => setSaveStatus('saved'), 800);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [text, saveStatus]);

    const handleChange = (e) => {
        setText(e.target.value);
        setSaveStatus('unsaved');
    };

    return (
        <div className="flex flex-col h-64 w-full">
            <div className="flex justify-between items-center mb-2 border-b border-gray-100 pb-2">
                <div className="flex items-center gap-2 text-gray-500">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm font-medium">Untitled Doc</span>
                </div>
                <div className="text-xs font-medium text-gray-400 flex items-center gap-1.5">
                    {saveStatus === 'saving' && <Loader2 className="w-3 h-3 animate-spin" />}
                    {saveStatus === 'saved' && <Check className="w-3 h-3 text-green-500" />}
                    {saveStatus === 'unsaved' ? 'Unsaved changes' : saveStatus === 'saving' ? 'Saving...' : 'Saved to cloud'}
                </div>
            </div>
            <textarea
                className="flex-1 w-full resize-none outline-none text-gray-600 leading-relaxed bg-transparent"
                value={text}
                onChange={handleChange}
            />
        </div>
    );
};

const scenarios = [
    {
        id: 'upload',
        label: 'File Upload',
        component: FileUploadScenario,
        icon: Upload,
        description: "A progress bar provides immediate, visual feedback on the system's current action, assuring the user that the file is being processed and hasn't stalled.",
        whyItMatters: "Without this, users might think the app has frozen or failed."
    },
    {
        id: 'status',
        label: 'System Status',
        component: SystemStatusScenario,
        icon: Battery,
        description: "Battery and connectivity icons keep users informed about the device's state, preventing unexpected shutdowns or connection failures during critical tasks.",
        whyItMatters: "Knowing battery and connection status prevents unexpected shutdowns or data loss during critical tasks."
    },
    {
        id: 'stepper',
        label: 'Stepper',
        component: StepperScenario,
        icon: Layout,
        description: "Step indicators show users where they are in a process, how much is left, and what has been completed, reducing anxiety in long forms.",
        whyItMatters: "It helps users understand the scope of the process and manage their time and effort expectations."
    },
    {
        id: 'loading',
        label: 'Loading',
        component: LoadingScenario,
        icon: Loader2,
        description: "Skeleton screens or spinners indicate that content is being fetched, managing user expectations and reducing perceived wait time compared to a blank screen.",
        whyItMatters: "It reassures users that the system is working and reduces the perception of waiting time."
    },
    {
        id: 'autosave',
        label: 'Auto-save',
        component: AutoSaveScenario,
        icon: Save,
        description: "Real-time 'Saving...' and 'Saved' indicators confirm that work is preserved, eliminating the fear of data loss and the need for manual saving.",
        whyItMatters: "It eliminates the anxiety of losing work and allows users to focus on creating rather than managing files."
    },
];

export default function VisibilityExample({ onScenarioChange }) {
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
