import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingCart, CreditCard, CheckCircle } from 'lucide-react';

const STEPS = [
    { id: 1, label: "Cart", icon: ShoppingCart },
    { id: 2, label: "Details", icon: CreditCard },
    { id: 3, label: "Review", icon: CheckCircle },
    { id: 4, label: "Done", icon: Check },
];

export default function UniformConnectednessExample() {
    const [isConnected, setIsConnected] = useState(false);

    return (
        <div className="min-h-[600px] w-full bg-gray-50 p-8 flex flex-col items-center justify-center gap-12 relative overflow-hidden text-center">

            <div className="flex flex-col items-center gap-4 z-10 max-w-lg">
                <button
                    onClick={() => setIsConnected(!isConnected)}
                    className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
                >
                    <div className={`w-4 h-4 rounded-full border-2 ${isConnected ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`} />
                    {isConnected ? "Connectedness Applied" : "No Connection"}
                </button>
                <p className="text-gray-500 text-sm">
                    {isConnected
                        ? "Lines and a common background create a clear visual path, indicating a sequence."
                        : "Without connections, these look like independent buttons, not a step-by-step process."}
                </p>
            </div>

            <div className="w-full max-w-3xl relative">
                {/* Background Container Law (Common Region/Connectedness overlap) */}
                <motion.div
                    animate={{
                        opacity: isConnected ? 1 : 0,
                        scaleX: isConnected ? 1 : 0.8
                    }}
                    className="absolute inset-0 bg-white rounded-2xl shadow-xl -z-10"
                />

                <div className={`flex justify-between items-center relative ${isConnected ? 'p-12' : 'p-0'}`}>

                    {/* The Connecting Line */}
                    <motion.div
                        animate={{
                            opacity: isConnected ? 1 : 0,
                            scaleX: isConnected ? 1 : 0
                        }}
                        initial={{ scaleX: 0 }}
                        className="absolute top-1/2 left-16 right-16 h-1 bg-gray-200 -translate-y-1/2 -z-1 origin-left"
                    />

                    {STEPS.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={step.id} className="relative flex flex-col items-center gap-4">
                                <motion.div
                                    layout
                                    className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-500 z-10
                                        ${isConnected
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                            : 'bg-white text-gray-400 border-2 border-gray-200'
                                        }`}
                                >
                                    <Icon size={24} />
                                </motion.div>
                                <motion.span
                                    layout
                                    className={`text-sm font-medium transition-colors duration-500 ${isConnected ? 'text-gray-800' : 'text-gray-400'}`}
                                >
                                    {step.label}
                                </motion.span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Simulated Content Area to show Context */}
            <motion.div
                animate={{ opacity: isConnected ? 1 : 0, y: isConnected ? 0 : 20 }}
                className="w-full max-w-md bg-white p-8 rounded-2xl border border-dashed border-gray-300 text-gray-400 text-sm"
            >
                Step Content Area (Visually connected to the stepper above)
            </motion.div>
        </div>
    );
}
