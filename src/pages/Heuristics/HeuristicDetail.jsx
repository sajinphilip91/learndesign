import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { heuristics } from '../../data/heuristics';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, ChevronRight } from 'lucide-react';

// Dynamic imports
import VisibilityExample from './examples/VisibilityExample';
import MatchSystemExample from './examples/MatchSystemExample';
import UserControlExample from './examples/UserControlExample';
import ConsistencyExample from './examples/ConsistencyExample';
import ErrorPreventionExample from './examples/ErrorPreventionExample';
import RecognitionExample from './examples/RecognitionExample';
import FlexibilityExample from './examples/FlexibilityExample';
import MinimalistExample from './examples/MinimalistExample';
import ErrorRecoveryExample from './examples/ErrorRecoveryExample';
import HelpExample from './examples/HelpExample';

const ExampleMap = {
    "visibility-of-system-status": VisibilityExample,
    "match-between-system-and-real-world": MatchSystemExample,
    "user-control-and-freedom": UserControlExample,
    "consistency-and-standards": ConsistencyExample,
    "error-prevention": ErrorPreventionExample,
    "recognition-rather-than-recall": RecognitionExample,
    "flexibility-and-efficiency-of-use": FlexibilityExample,
    "aesthetic-and-minimalist-design": MinimalistExample,
    "help-users-recognize-diagnose-and-recover-from-errors": ErrorRecoveryExample,
    "help-and-documentation": HelpExample,
};

export default function HeuristicDetail() {
    const { id } = useParams();
    const heuristic = heuristics.find(h => h.id === id);
    const [activeTab, setActiveTab] = useState('digital');
    const [activeRealWorldIndex, setActiveRealWorldIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const [dynamicContent, setDynamicContent] = useState(null);

    if (!heuristic) return <div>Heuristic not found</div>;

    const DigitalComponent = ExampleMap[id] || (() => <div className="p-8 text-center text-muted-foreground">Example coming soon</div>);

    const isRealWorldArray = Array.isArray(heuristic.realWorldExample);
    const currentRealWorld = isRealWorldArray ? heuristic.realWorldExample[activeRealWorldIndex] : heuristic.realWorldExample;

    const nextRealWorld = () => {
        if (isRealWorldArray) {
            setActiveRealWorldIndex((prev) => (prev + 1) % heuristic.realWorldExample.length);
        }
    };

    const prevRealWorld = () => {
        if (isRealWorldArray) {
            setActiveRealWorldIndex((prev) => (prev - 1 + heuristic.realWorldExample.length) % heuristic.realWorldExample.length);
        }
    };

    return (
        <div className="h-full flex flex-col animate-in fade-in duration-500 overflow-hidden">
            {/* Header Section */}
            <div className="flex items-start justify-between mb-8 p-8 pb-0">
                <div className="space-y-2 max-w-2xl">
                    <h1 className="text-4xl font-bold text-gray-900">{heuristic.title.split('. ')[1]}</h1>
                    <p className="text-xl text-gray-600 leading-snug">"{heuristic.description}"</p>
                </div>

                {/* Custom Toggle Switch */}
                <div className="bg-gray-100 p-1 rounded-lg inline-flex shrink-0">
                    <button
                        onClick={() => setActiveTab('digital')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === 'digital'
                            ? 'bg-white text-black shadow-sm'
                            : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        Digital
                    </button>
                    <button
                        onClick={() => setActiveTab('real-world')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === 'real-world'
                            ? 'bg-white text-black shadow-sm'
                            : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        Real world
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 min-h-0 overflow-y-auto">
                <div className={`flex flex-col lg:flex-row ${activeTab === 'digital' ? 'gap-2 h-fit px-8 pb-8' : 'h-full'}`}>
                    {/* Main Example Card */}
                    <div className={`w-full ${activeTab === 'digital' ? 'lg:w-[70%]' : 'lg:w-full'} flex flex-col items-center justify-center relative overflow-hidden group shrink-0`}>
                        <AnimatePresence mode="wait">
                            {activeTab === 'digital' ? (
                                <motion.div
                                    key="digital"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full flex flex-col items-center"
                                >

                                    <div className="w-full">
                                        <DigitalComponent onScenarioChange={setDynamicContent} />
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="real-world"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full relative group/scroll"
                                >
                                    <div
                                        ref={scrollContainerRef}
                                        className={`w-full h-full flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar scroll-smooth ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab'}`}
                                        onMouseDown={handleMouseDown}
                                        onMouseLeave={handleMouseLeave}
                                        onMouseUp={handleMouseUp}
                                        onMouseMove={handleMouseMove}
                                    >
                                        {isRealWorldArray ? (
                                            heuristic.realWorldExample.map((example, index) => (
                                                <div
                                                    key={index}
                                                    className={`w-[40%] flex-shrink-0 h-full relative rounded-2xl overflow-hidden snap-center select-none ${index === 0 ? 'ml-8' : ''}`}
                                                >
                                                    <img
                                                        src={example.image}
                                                        alt={example.title}
                                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 pointer-events-none"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end text-white pointer-events-none">

                                                        <h3 className="text-3xl font-bold mb-2">{example.title}</h3>
                                                        <p className="text-white/90 text-lg">{example.description}</p>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="w-full h-full relative rounded-2xl overflow-hidden">
                                                <img
                                                    src={heuristic.realWorldExample.image}
                                                    alt={heuristic.realWorldExample.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end text-white">
                                                    <span className="text-sm font-medium text-white/60 uppercase tracking-wider mb-1">Real World Analogy</span>
                                                    <h3 className="text-3xl font-bold mb-2">{heuristic.realWorldExample.title}</h3>
                                                    <p className="text-white/90 text-lg">{heuristic.realWorldExample.description}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {isRealWorldArray && (
                                        <>
                                            <button
                                                onClick={() => scrollContainerRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover/scroll:opacity-100 z-10"
                                            >
                                                <ChevronRight className="w-6 h-6 rotate-180" />
                                            </button>
                                            <button
                                                onClick={() => scrollContainerRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover/scroll:opacity-100 z-10"
                                            >
                                                <ChevronRight className="w-6 h-6" />
                                            </button>
                                        </>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Explanation / Context Column - 30% width */}
                    {activeTab === 'digital' && (
                        <div className="w-full lg:w-[30%] flex flex-col gap-2">
                            <div className="bg-gray-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Why it matters</h3>
                                <p className="text-gray-600 leading-relaxed text-base font-medium">
                                    {dynamicContent?.whyItMatters || heuristic.digitalExample.whyItMatters}
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-6 flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Designer Takeaways</h3>
                                <ul className="space-y-4">
                                    {heuristic.designerNotes.map((note, index) => (
                                        <li key={index} className="flex gap-3 items-start">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-xs font-bold mt-0.5">
                                                {index + 1}
                                            </span>
                                            <span className="text-gray-600 leading-relaxed text-base font-medium">{note}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
