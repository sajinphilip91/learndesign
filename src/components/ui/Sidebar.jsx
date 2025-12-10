import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, GraduationCap, Sparkles, Briefcase, Users, ShoppingBag, MoreHorizontal } from 'lucide-react';
import { cn } from '../../lib/utils';

const SidebarItem = ({ icon: Icon, to, label, isActive: forceActive }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    cn(
                        "flex items-center justify-center w-14 h-14 rounded-[20px] transition-all duration-200 mb-4 z-20 relative",
                        (isActive || forceActive)
                            ? "bg-[#1D1F27] text-white shadow-md shadow-black/10" // Active state
                            : "bg-[#E8E8E8] text-[#1D1F27]/60 hover:bg-[#F2F2F2] hover:text-[#1D1F27] hover:shadow-[0_2px_4px_rgba(0,0,0,0.08)]" // Default & Hover
                    )
                }
            >
                <Icon className="w-6 h-6" strokeWidth={2} />
            </NavLink>

            {isHovered && (
                <div className="absolute left-[calc(100%+12px)] top-0 bottom-4 my-auto h-fit z-10">
                    <div className="bg-[#1D1F27] text-white text-sm font-medium h-14 px-6 rounded-[20px] shadow-xl whitespace-nowrap flex items-center">
                        {label}
                    </div>
                </div>
            )}
        </div>
    );
};

export function Sidebar() {
    return (
        <aside className="h-full w-24 shrink-0 bg-[#D9D9D9] flex flex-col items-center justify-center py-8 z-50">
            {/* 1. Home */}
            <SidebarItem icon={Home} to="/" label="Home" />

            {/* 2. Learning */}
            <SidebarItem icon={GraduationCap} to="/learning" label="Learning" />

            {/* 3. AI & Design */}
            <SidebarItem icon={Sparkles} to="/ai-design" label="AI & Design" />

            {/* 4. Design Jobs */}
            <SidebarItem icon={Briefcase} to="/jobs" label="Design Jobs" />

            {/* 5. Mentorship */}
            <SidebarItem icon={Users} to="/mentorship" label="Mentorship" />

            {/* 6. Shop */}
            <SidebarItem icon={ShoppingBag} to="/shop" label="Shop" />

            {/* 7. More */}
            <SidebarItem icon={MoreHorizontal} to="/more" label="More" />
        </aside>
    );
}
