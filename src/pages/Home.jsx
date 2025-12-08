import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Scale, Brain, ArrowRight, Star } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function Home() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8;
        }
    }, []);

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Hero Section */}
                <div className="lg:col-span-3 relative overflow-hidden rounded-[20px] p-12 group">
                    {/* Background Video */}
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover z-0"
                    >
                        <source src="/bg video 01.mp4" type="video/mp4" />
                    </video>

                    {/* White Overlay with Blur */}
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-xl z-0" />

                    {/* Content */}
                    <div className="relative z-10 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 text-sm font-medium backdrop-blur-sm border border-black/5 shadow-sm text-gray-800">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span>New: AI-Powered Quizzes</span>
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight leading-none text-gray-900 max-w-3xl">
                            Experience UI/UX Learning Like Never Before — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Interactive. Practical. Real.</span>
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed font-medium max-w-2xl">
                            Learn Usability Heuristics, UX Laws, and Psychology principles with hyper-realistic examples and hands-on demos.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Link to="/heuristics">
                                <Button size="lg" className="bg-gray-900 text-white hover:bg-black border-0">
                                    Start Learning
                                </Button>
                            </Link>
                            <Link to="/quiz">
                                <Button size="lg" variant="outline" className="border-gray-300 hover:bg-white/50 text-gray-900 bg-white/30 backdrop-blur-sm">
                                    Test your Knowledge
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Site Visit Counter Section */}
                <div className="lg:col-span-1 h-full">
                    <div className="h-full bg-white rounded-[20px] p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                            <div className="relative flex h-6 w-6">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-6 w-6 bg-blue-500"></span>
                            </div>
                        </div>
                        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Total Site Visits</div>
                        <div className="text-5xl font-bold text-gray-900 mb-4 font-mono">
                            24,583
                        </div>
                        <div className="inline-flex items-center gap-2 text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">
                            <ArrowRight className="w-4 h-4 rotate-[-45deg]" />
                            +124 this week
                        </div>
                    </div>
                </div>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/heuristics" className="group">
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-transparent hover:border-blue-100 bg-white">
                        <CardHeader>
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <CardTitle className="group-hover:text-blue-700 transition-colors">Usability Heuristics</CardTitle>
                            <CardDescription>
                                Master Nielsen's 10 principles with interactive digital examples and real-world analogies.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center text-sm font-medium text-blue-600">
                                Explore 10 Modules <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>

                <Link to="/laws" className="group">
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-transparent hover:border-purple-100 bg-white">
                        <CardHeader>
                            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 text-purple-600 group-hover:scale-110 transition-transform">
                                <Scale className="w-6 h-6" />
                            </div>
                            <CardTitle className="group-hover:text-purple-700 transition-colors">UX Laws & Principles</CardTitle>
                            <CardDescription>
                                Understand the psychology behind design with demos for Hick's Law, Fitts's Law, and more.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center text-sm font-medium text-purple-600">
                                Explore Laws <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>

                <Link to="/quiz" className="group">
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-transparent hover:border-yellow-100 bg-white">
                        <CardHeader>
                            <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4 text-yellow-600 group-hover:scale-110 transition-transform">
                                <Brain className="w-6 h-6" />
                            </div>
                            <CardTitle className="group-hover:text-yellow-700 transition-colors">AI Knowledge Test</CardTitle>
                            <CardDescription>
                                Test your knowledge with our AI-powered quiz engine and get instant feedback.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center text-sm font-medium text-yellow-600">
                                Start Quiz <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </div>
    );
}
