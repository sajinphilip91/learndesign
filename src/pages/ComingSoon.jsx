import React from 'react';
import { Construction } from 'lucide-react';
import { Card } from '../components/ui/Card';

const ComingSoon = ({ title, subtitle, icon: Icon = Construction }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#D9D9D9]">
            <Card className="max-w-md w-full p-12 flex flex-col items-center text-center bg-white/80 backdrop-blur-sm border-white/50 shadow-xl">
                <div className="w-20 h-20 rounded-3xl bg-[#1D1F27] flex items-center justify-center mb-6 shadow-lg rotate-3 transition-transform hover:rotate-6">
                    <Icon className="w-10 h-10 text-white" />
                </div>

                <h1 className="text-3xl font-bold text-[#1D1F27] mb-3">{title}</h1>
                <p className="text-[#1D1F27]/60 text-lg leading-relaxed mb-8">
                    {subtitle || "This module is currently under construction. Stay tuned for updates!"}
                </p>

                <div className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium border border-blue-100">
                    Coming Soon
                </div>
            </Card>
        </div>
    );
};

export default ComingSoon;
