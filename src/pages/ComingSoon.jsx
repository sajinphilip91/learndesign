import React, { useState } from 'react';
import { Sparkles, Brain, Wrench, Mail, Bell } from 'lucide-react';

const ICONS = {
    sparkles: Sparkles,
    brain: Brain,
    wrench: Wrench
};

export default function ComingSoon({ title = "Coming Soon", subtitle = "We're crafting something extraordinary.", icon = "sparkles" }) {
    const Icon = ICONS[icon] || Sparkles;
    const [email, setEmail] = useState('');
    const [notified, setNotified] = useState(false);

    const handleNotify = (e) => {
        e.preventDefault();
        if (!email) return;
        setNotified(true);
    };

    return (
        <div className="h-full w-full flex items-center justify-center p-8 font-sans">
            <div className="bg-[#F8F9FA] rounded-[32px] p-16 w-full max-w-[640px] text-center flex flex-col items-center">

                {/* Icon (No Background) */}
                <div className="mb-6">
                    <Icon size={48} strokeWidth={2} className="text-[#3B82F6]" />
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-[#111827] mb-4 tracking-tight">
                    {title}
                </h1>

                {/* Subtitle */}
                <p className="text-[#6B7280] text-base mb-10 max-w-sm leading-relaxed">
                    {subtitle}
                </p>

                {/* Input Form */}
                {!notified ? (
                    <form onSubmit={handleNotify} className="w-full flex items-center gap-3 mb-12">
                        <div className="relative flex-1">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <Mail size={18} />
                            </div>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400 text-gray-900"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#111827] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-black transition-colors flex items-center gap-2 shrink-0 shadow-lg shadow-gray-900/10"
                        >
                            Notify Me <Bell size={16} />
                        </button>
                    </form>
                ) : (
                    <div className="mb-12 py-3 px-6 bg-green-50 text-green-700 rounded-xl font-medium text-sm w-full">
                        Thanks! You'll be the first to know.
                    </div>
                )}

                {/* Progress Section */}
                <div className="flex items-center w-full gap-4 max-w-xs mx-auto">
                    <span className="text-[10px] font-bold text-[#9CA3AF] tracking-widest uppercase shrink-0">
                        Progress
                    </span>
                    <div className="h-2 flex-grow bg-blue-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-[70%]"
                        />
                    </div>
                    <span className="text-[10px] font-bold text-[#6366F1] shrink-0">
                        70%
                    </span>
                </div>

            </div>
        </div>
    );
}
