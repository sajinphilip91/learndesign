import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MapPin, Phone, CreditCard, Calendar, Sliders } from 'lucide-react';

export default function ProximityExample() {
    const [groupSpacing, setGroupSpacing] = useState(8); // low default
    const [labelSpacing, setLabelSpacing] = useState(2); // standard

    const spacingClasses = {
        0: 'gap-0',
        2: 'gap-2',
        4: 'gap-4',
        8: 'gap-8',
        12: 'gap-12'
    };

    return (
        <div className="min-h-[600px] w-full bg-gray-50 p-8 flex flex-col items-center justify-center gap-8 relative overflow-hidden">

            {/* Controls */}
            <div className="flex flex-col gap-4 w-full max-w-lg z-10">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-700">Group Spacing (Separation)</label>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{groupSpacing * 4}px</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="12"
                        step="4"
                        value={groupSpacing}
                        onChange={(e) => setGroupSpacing(Number(e.target.value))}
                        className="w-full accent-blue-500"
                    />
                    <p className="text-xs text-gray-500">Increase to separate distinct sections (Personal vs. Payment).</p>
                </div>
            </div>

            {/* Form Container */}
            <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-lg border border-gray-200 transition-all duration-300">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">Checkout</h2>

                <div className={`flex flex-col transition-all duration-500 gap-[${groupSpacing * 4}px]`} style={{ gap: `${groupSpacing * 4}px` }}>

                    {/* Personal Info Group */}
                    <div className="flex flex-col gap-4 transition-all duration-300 bg-blue-50/50 p-4 rounded-xl border border-blue-50">
                        <h3 className="font-semibold text-blue-900 flex items-center gap-2">
                            <User size={18} /> Personal Information
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-medium text-gray-500 uppercase">First Name</label>
                                <input type="text" defaultValue="Alex" className="w-full p-2 border border-gray-200 rounded-lg bg-white" readOnly />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-medium text-gray-500 uppercase">Last Name</label>
                                <input type="text" defaultValue="Morgan" className="w-full p-2 border border-gray-200 rounded-lg bg-white" readOnly />
                            </div>
                            <div className="col-span-2 flex flex-col gap-1">
                                <label className="text-xs font-medium text-gray-500 uppercase">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-2.5 text-gray-400" size={16} />
                                    <input type="email" defaultValue="alex@example.com" className="w-full p-2 pl-10 border border-gray-200 rounded-lg bg-white" readOnly />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shipping Address Group */}
                    <div className="flex flex-col gap-4 transition-all duration-300 bg-green-50/50 p-4 rounded-xl border border-green-50">
                        <h3 className="font-semibold text-green-900 flex items-center gap-2">
                            <MapPin size={18} /> Shipping Address
                        </h3>
                        <div className="col-span-2 flex flex-col gap-1">
                            <label className="text-xs font-medium text-gray-500 uppercase">Street Address</label>
                            <input type="text" defaultValue="123 Design Lane" className="w-full p-2 border border-gray-200 rounded-lg bg-white" readOnly />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-medium text-gray-500 uppercase">City</label>
                                <input type="text" defaultValue="Pixel City" className="w-full p-2 border border-gray-200 rounded-lg bg-white" readOnly />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-medium text-gray-500 uppercase">Zip Code</label>
                                <input type="text" defaultValue="90210" className="w-full p-2 border border-gray-200 rounded-lg bg-white" readOnly />
                            </div>
                        </div>
                    </div>

                    {/* Payment Group */}
                    <div className="flex flex-col gap-4 transition-all duration-300 bg-purple-50/50 p-4 rounded-xl border border-purple-50">
                        <h3 className="font-semibold text-purple-900 flex items-center gap-2">
                            <CreditCard size={18} /> Payment
                        </h3>
                        <div className="col-span-2 flex flex-col gap-1">
                            <label className="text-xs font-medium text-gray-500 uppercase">Card Number</label>
                            <div className="relative">
                                <CreditCard className="absolute left-3 top-2.5 text-gray-400" size={16} />
                                <input type="text" defaultValue="**** **** **** 4242" className="w-full p-2 pl-10 border border-gray-200 rounded-lg bg-white" readOnly />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
