import React from 'react';
import { Card } from '../components/ui/Card';
import { Link } from 'react-router-dom';
import { Monitor, Shield, Trophy, ArrowRight, Brain, Sparkles, Briefcase, Users } from 'lucide-react';

const ModuleCard = ({ title, description, icon: Icon, to, colorClass, delay }) => (
    <Link to={to} className="group h-full">
        <Card className={`h-full p-8 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white border-transparent hover:border-black/5`}>
            <div className={`w-14 h-14 rounded-2xl ${colorClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={28} className="text-white" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {title}
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                {description}
            </p>

            <div className="flex items-center text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors mt-auto">
                Start Module <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
        </Card>
    </Link>
);

const Learning = () => {
    return (
        <div className="w-full h-full overflow-y-auto">
            <div className="max-w-[1200px] mx-auto p-8 pb-20">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Learning Dashboard</h1>
                    <p className="text-xl text-gray-600 max-w-2xl">
                        Explore our comprehensive curriculum designed to help you master UI/UX principles through interactive practice.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Module 1: Usability Heuristics */}
                    <div className="h-[400px]">
                        <ModuleCard
                            title="Usability Heuristics"
                            description="Master Nielsen's 10 principles with interactive digital examples and real-world analogies."
                            icon={Monitor}
                            to="/heuristics"
                            colorClass="bg-blue-500"
                        />
                    </div>

                    {/* Module 2: UX Laws & Principles */}
                    <div className="h-[400px]">
                        <ModuleCard
                            title="UX Laws & Principles"
                            description="Understand the psychology behind design with demos for Hick's Law, Fitts's Law, and more."
                            icon={Shield}
                            to="/laws"
                            colorClass="bg-purple-500"
                        />
                    </div>

                    {/* Module 3: Quiz */}
                    <div className="h-[400px]">
                        <ModuleCard
                            title="Test your Knowledge"
                            description="Test your knowledge with our AI-powered quiz engine and get instant feedback."
                            icon={Brain}
                            to="/quiz"
                            colorClass="bg-yellow-500"
                        />
                    </div>
                </div>

                {/* Future modules section or banner could go here */}
                <div className="mt-16 p-8 rounded-3xl bg-white border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">More content on the way!</h2>
                        <p className="text-gray-600">We are constantly adding new modules on AI, Behavioral Psychology, and Career growth.</p>
                    </div>
                    <div className="flex -space-x-4">
                        <span className="w-12 h-12 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-gray-400">
                            <Sparkles size={20} />
                        </span>
                        <span className="w-12 h-12 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-gray-400">
                            <Briefcase size={20} />
                        </span>
                        <span className="w-12 h-12 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-gray-400">
                            <Users size={20} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Learning;
