import React from 'react';

export function Header() {
    return (
        <header className="w-full px-8 pt-8 pb-0 flex items-center">
            <div className="flex flex-col ml-24">
                <img
                    src="/logo 2.png"
                    alt="Learn.design Logo"
                    className="h-12 w-auto object-contain"
                />
            </div>
        </header>
    );
}
