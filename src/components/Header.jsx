import React from 'react';

export function Header() {
    return (
        <header className="w-full px-8 pt-8 pb-0 flex items-center">
            <div className="flex flex-col ml-24">
                <h1 className="text-3xl font-bold text-gray-900 leading-none tracking-tight">Learn.design</h1>
                <span className="text-base text-blue-600 font-medium">by Sajin Philip</span>
            </div>
        </header>
    );
}
