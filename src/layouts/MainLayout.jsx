import React from 'react';
import { Sidebar } from '../components/ui/Sidebar';
import { Outlet } from 'react-router-dom';

export function MainLayout() {
    return (
        <div className="min-h-screen bg-[#D9D9D9] flex justify-center">
            <div className="flex w-full max-w-[1800px]">
                <Sidebar />
                <main className="flex-1 p-8 h-screen overflow-hidden flex flex-col justify-center">
                    <div className="w-full h-full max-h-[900px]">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}
