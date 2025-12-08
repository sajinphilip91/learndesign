import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export const Tabs = ({ tabs, activeTab, onChange, className }) => {
    return (
        <div className={cn("inline-flex h-10 items-center justify-center rounded-full bg-secondary p-1 text-muted-foreground", className)}>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onChange(tab.id)}
                    className={cn(
                        "relative inline-flex items-center justify-center whitespace-nowrap rounded-full px-6 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                        activeTab === tab.id ? "text-foreground" : "hover:text-foreground/70"
                    )}
                >
                    {activeTab === tab.id && (
                        <motion.div
                            layoutId="active-tab"
                            className="absolute inset-0 bg-white rounded-full shadow-sm"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                </button>
            ))}
        </div>
    );
};
