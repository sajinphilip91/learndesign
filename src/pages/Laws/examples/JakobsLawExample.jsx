import React, { useState } from 'react';
import { ShoppingCart, CreditCard, User, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Shared Components ---
const Input = ({ label, placeholder, type = "text", className = "" }) => (
    <div className={`mb-4 ${className}`}>
        <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
        />
    </div>
);

// --- Variant A: Standard (Familiar) ---
const StandardCheckout = () => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 w-full max-w-sm">
        <h3 className="font-bold text-gray-900 text-lg mb-6 flex items-center gap-2">
            <ShoppingCart size={20} className="text-blue-600" /> Checkout
        </h3>

        <div className="space-y-1">
            <h4 className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3 border-b pb-2">
                <User size={16} /> Contact Info
            </h4>
            <Input label="Email Address" placeholder="you@example.com" type="email" />

            <h4 className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3 mt-6 border-b pb-2">
                <MapPin size={16} /> Shipping Address
            </h4>
            <Input label="Full Name" placeholder="John Doe" />
            <Input label="Address" placeholder="123 Main St" />
            <div className="flex gap-2">
                <Input label="City" placeholder="New York" className="flex-1" />
                <Input label="Zip" placeholder="10001" className="w-24" />
            </div>

            <h4 className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3 mt-6 border-b pb-2">
                <CreditCard size={16} /> Payment
            </h4>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 mb-4 flex items-center gap-3">
                <div className="w-4 h-4 rounded-full border border-gray-400 bg-blue-600" />
                <span className="text-sm font-medium">Credit Card</span>
                <div className="ml-auto flex gap-1">
                    <div className="w-8 h-5 bg-gray-300 rounded" />
                    <div className="w-8 h-5 bg-gray-300 rounded" />
                </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 mt-2 transition-transform active:scale-95">
                Pay Now
            </button>
        </div>
    </div>
);

// --- Variant B: Non-Standard (Weird) ---
const WeirdCheckout = () => (
    <div className="bg-slate-800 rounded-none shadow-2xl border-4 border-yellow-400 p-6 w-full max-w-sm text-yellow-400 font-mono">
        <h3 className="font-bold text-2xl mb-8 flex flex-row-reverse justify-end gap-2 text-white">
            Checkout <ShoppingCart size={24} className="text-yellow-400" />
        </h3>

        <div className="space-y-4">
            {/* Weird Order: Payment First */}
            <div className="border border-dashed border-gray-600 p-4 relative">
                <div className="absolute -top-3 right-4 bg-slate-800 px-2 text-xs text-gray-400">Step 3?</div>
                <label className="block text-sm mb-2 text-white">Give Money:</label>
                <input type="text" placeholder="$$$" className="w-full bg-slate-900 border-b-2 border-yellow-400 p-2 text-white focus:outline-none" />
            </div>

            {/* Weird Order: Address Last */}
            <div className="border border-dashed border-gray-600 p-4 relative">
                <div className="absolute -top-3 right-4 bg-slate-800 px-2 text-xs text-gray-400">Step 1</div>
                <div className="flex flex-col-reverse gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-6 h-6 rounded-none accent-yellow-400" />
                        <span className="text-sm">I live here</span>
                    </label>
                    <input type="text" placeholder="Zip Code" className="w-full bg-slate-900 border border-gray-600 p-2" />
                    <input type="text" placeholder="House Number" className="w-full bg-slate-900 border border-gray-600 p-2" />
                </div>
            </div>

            {/* Weird Button */}
            <button className="w-full bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-4 rounded-full mt-4 flex justify-between px-8">
                <span>SUBMIT</span>
                <span>-&gt;</span>
            </button>
        </div>
    </div>
);


export default function JakobsLawExample() {
    return (
        <div className="w-full flex flex-col items-center gap-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-4xl px-4 items-start">

                {/* Variant A: Familiar */}
                <div className="flex flex-col items-center gap-4">
                    <div className="text-xs font-bold tracking-widest text-green-600 uppercase bg-green-100 py-1 px-3 rounded-full border border-green-200">
                        Jakob's Law Compliant
                    </div>
                    <StandardCheckout />
                    <p className="text-center text-xs text-gray-500 max-w-xs mt-2">
                        Users know exactly what to do because it follows standard mental models.
                    </p>
                </div>

                {/* Variant B: Weird */}
                <div className="flex flex-col items-center gap-4">
                    <div className="text-xs font-bold tracking-widest text-red-600 uppercase bg-red-100 py-1 px-3 rounded-full border border-red-200">
                        Violates Mental Model
                    </div>
                    <WeirdCheckout />
                    <p className="text-center text-xs text-gray-500 max-w-xs mt-2">
                        Breaking conventions forces users to re-learn how your site works. "Innovative" isn't always good.
                    </p>
                </div>

            </div>
        </div>
    );
}
