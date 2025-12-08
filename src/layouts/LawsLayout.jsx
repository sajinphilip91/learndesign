import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { laws } from '../data/laws';
import { cn } from '../lib/utils';

export default function LawsLayout() {
    return (
        <div className="flex h-full gap-6">
            {/* Left Panel - Laws List */}
            <aside className="w-[380px] shrink-0 flex flex-col h-fit max-h-full bg-[#E2E2E2] rounded-[20px] shadow-sm border-[1px] border-[#ECECEC] py-8 overflow-hidden">
                <div className="mb-6 px-7">
                    <h2 className="text-2xl font-bold text-[#1A1A1A]">UX Laws & Principles</h2>
                </div>

                <nav className="flex flex-col flex-1 overflow-y-auto no-scrollbar">
                    {laws.map((law, index) => (
                        <NavLink
                            key={law.id}
                            to={`/laws/${law.id}`}
                            className={({ isActive }) =>
                                cn(
                                    "group flex items-center gap-4 w-full min-h-[60px] py-6 px-7 border-b border-[#D7D7D7] last:border-b-0 transition-all duration-200",
                                    isActive
                                        ? "active bg-[#EDEDED] shadow-sm border-transparent" // Active state
                                        : "bg-transparent hover:bg-[#F7F7F7]" // Default state
                                )
                            }
                        >
                            {/* Number Badge */}
                            <div className={cn(
                                "shrink-0 flex items-center justify-center px-2.5 py-1.5 rounded-[12px] text-[15px] font-medium transition-colors",
                                "bg-[#F4F4F4] text-black group-hover:bg-[#2C2F38] group-hover:text-white group-[.active]:bg-[#2C2F38] group-[.active]:text-white"
                            )}>
                                {(index + 1).toString().padStart(2, '0')}
                            </div>

                            {/* Title */}
                            <span className={cn(
                                "text-[18px] font-medium leading-tight transition-colors",
                                "text-[#1A1A1A]"
                            )}>
                                {law.title.split('. ')[1]}
                            </span>
                        </NavLink>
                    ))}
                </nav>
            </aside>

            {/* Right Content - Detail View */}
            <main className="flex-1 min-w-0">
                <div className="h-full bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-y-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
