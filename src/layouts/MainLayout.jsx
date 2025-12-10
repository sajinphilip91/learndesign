import React from 'react';
import { Sidebar } from '../components/ui/Sidebar';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export function MainLayout() {
    return (
        <div className="h-screen bg-[#D9D9D9] flex justify-center overflow-hidden">
            <div className="flex flex-col w-full max-w-[1800px] h-full">
                <Header />
                <div className="flex flex-1 overflow-hidden">
                    <Sidebar />
                    <main className="flex-1 p-8 h-full overflow-hidden flex flex-col">
                        <div className="w-full h-full">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
