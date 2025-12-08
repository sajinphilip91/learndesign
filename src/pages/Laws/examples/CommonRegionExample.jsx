import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Bell, Lock, User, Shield, Smartphone, Mail, CreditCard, ToggleLeft, ToggleRight } from 'lucide-react';

const SettingItem = ({ icon: Icon, label, value }) => (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
        <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-50 rounded-lg text-gray-500">
                <Icon size={18} />
            </div>
            <span className="text-gray-700 font-medium">{label}</span>
        </div>
        <div className="text-gray-400">
            <ToggleRight size={24} className="text-blue-500" />
        </div>
    </div>
);

export default function CommonRegionExample() {
    const [isGrouped, setIsGrouped] = useState(false);

    return (
        <div className="min-h-[600px] w-full bg-[#f8fafc] p-8 flex flex-col items-center justify-center gap-8 relative overflow-hidden">

            {/* Header / Control */}
            <div className="flex flex-col items-center gap-4 z-10 max-w-lg text-center">
                <button
                    onClick={() => setIsGrouped(!isGrouped)}
                    className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
                >
                    {isGrouped ? <ToggleRight className="text-green-500" /> : <ToggleLeft className="text-gray-400" />}
                    {isGrouped ? "Common Region Applied" : "No Grouping"}
                </button>
                <p className="text-gray-500 text-sm">
                    {isGrouped
                        ? "Notice how borders and backgrounds create clear boundaries, making it easier to scan related items."
                        : "Without common regions, it's harder to distinguish between different categories of settings."}
                </p>
            </div>

            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative transition-all duration-500">
                {/* Fake Phone Header */}
                <div className="bg-gray-900 text-white p-6 pb-12">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold">9:41</span>
                        <div className="flex gap-2 text-xs">
                            <span>5G</span>
                            <span>100%</span>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold">Settings</h2>
                </div>

                <div className="p-6 -mt-6 bg-[#f8fafc] min-h-[400px] relative rounded-t-3xl">
                    <AnimatePresence mode="wait">
                        {isGrouped ? (
                            <motion.div
                                key="grouped"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col gap-6"
                            >
                                {/* Account Group */}
                                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">Account</h3>
                                    <SettingItem icon={User} label="Profile" />
                                    <SettingItem icon={Mail} label="Email" />
                                    <SettingItem icon={CreditCard} label="Billing" />
                                </div>

                                {/* Security Group */}
                                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">Security</h3>
                                    <SettingItem icon={Lock} label="Password" />
                                    <SettingItem icon={Shield} label="2FA" />
                                    <SettingItem icon={Smartphone} label="Devices" />
                                </div>

                                {/* Preferences Group */}
                                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">App Settings</h3>
                                    <SettingItem icon={Bell} label="Notifications" />
                                    <SettingItem icon={Settings} label="General" />
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="ungrouped"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
                            >
                                {/* Just a flat list */}
                                <SettingItem icon={User} label="Profile" />
                                <SettingItem icon={Mail} label="Email" />
                                <SettingItem icon={CreditCard} label="Billing" />
                                <SettingItem icon={Lock} label="Password" />
                                <SettingItem icon={Shield} label="2FA" />
                                <SettingItem icon={Smartphone} label="Devices" />
                                <SettingItem icon={Bell} label="Notifications" />
                                <SettingItem icon={Settings} label="General" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
