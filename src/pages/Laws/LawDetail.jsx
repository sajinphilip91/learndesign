import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { laws } from '../../data/laws';
import { motion, AnimatePresence } from 'framer-motion';

import AestheticUsabilityExample from './examples/AestheticUsabilityExample';
import DohertyThresholdExample from './examples/DohertyThresholdExample';
import FittsLawExample from './examples/FittsLawExample';
import GoalGradientExample from './examples/GoalGradientExample';
import HicksLawExample from './examples/HicksLawExample';
import JakobsLawExample from './examples/JakobsLawExample';
import CommonRegionExample from './examples/CommonRegionExample';
import ProximityExample from './examples/ProximityExample';
import PragnanzExample from './examples/PragnanzExample';
import SimilarityExample from './examples/SimilarityExample';
import UniformConnectednessExample from './examples/UniformConnectednessExample';
import MillersLawExample from './examples/MillersLawExample';
import OccamsRazorExample from './examples/OccamsRazorExample';
import ParetoPrincipleExample from './examples/ParetoPrincipleExample';
import ParkinsonsLawExample from './examples/ParkinsonsLawExample';
import PeakEndRuleExample from './examples/PeakEndRuleExample';
import PostelsLawExample from './examples/PostelsLawExample';
import SerialPositionExample from './examples/SerialPositionExample';
import TeslersLawExample from './examples/TeslersLawExample';
import VonRestorffExample from './examples/VonRestorffExample';
import ZeigarnikExample from './examples/ZeigarnikExample';

const ExampleMap = {
    "aesthetic-usability-effect": AestheticUsabilityExample,
    "doherty-threshold": DohertyThresholdExample,
    "fitts-law": FittsLawExample,
    "goal-gradient-effect": GoalGradientExample,
    "hicks-law": HicksLawExample,
    "jakobs-law": JakobsLawExample,
    "law-of-common-region": CommonRegionExample,
    "law-of-proximity": ProximityExample,
    "law-of-pragnanz": PragnanzExample,
    "law-of-similarity": SimilarityExample,
    "law-of-uniform-connectedness": UniformConnectednessExample,
    "millers-law": MillersLawExample,
    "occams-razor": OccamsRazorExample,
    "pareto-principle": ParetoPrincipleExample,
    "parkinsons-law": ParkinsonsLawExample,
    "peak-end-rule": PeakEndRuleExample,
    "postels-law": PostelsLawExample,
    "serial-position-effect": SerialPositionExample,
    "teslers-law": TeslersLawExample,
    "von-restorff-effect": VonRestorffExample,
    "zeigarnik-effect": ZeigarnikExample,
};

export default function LawDetail() {
    const { id } = useParams();
    const law = laws.find(h => h.id === id);
    const [activeTab, setActiveTab] = useState('digital');

    if (!law) return <div>Law not found</div>;

    const MappedComponent = ExampleMap[id];

    const DigitalComponent = () => {
        if (MappedComponent) {
            return <MappedComponent />;
        }

        return (
            <div className="flex flex-col items-center justify-center p-12 text-center h-full bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🚧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Demo Coming Soon</h3>
                <p className="text-gray-500 max-w-md">
                    We are currently building a specialized interactive demonstration for {law.title.split('. ')[1]}. Check back soon!
                </p>
            </div>
        );
    };

    return (
        <div className="h-full flex flex-col animate-in fade-in duration-500 overflow-hidden">
            {/* Header Section */}
            <div className="flex items-start justify-between mb-8 p-8 pb-0">
                <div className="space-y-2 max-w-2xl">
                    <h1 className="text-4xl font-bold text-gray-900">{law.title.split('. ')[1]}</h1>
                    <p className="text-xl text-gray-600 leading-snug">"{law.description}"</p>
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
                <div className={`flex flex-col lg:flex-row gap-6 h-fit px-8 pb-8`}>
                    {/* Main Example Card */}
                    <div className="w-full lg:w-[80%] flex flex-col items-center justify-center relative overflow-hidden group shrink-0">
                        <AnimatePresence mode="wait">
                            {activeTab === 'digital' ? (
                                <motion.div
                                    key="digital"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full min-h-[600px] flex flex-col items-center"
                                >
                                    <div className="w-full h-full">
                                        {MappedComponent ? (
                                            <div className="w-full h-full bg-gray-50 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                                <DigitalComponent />
                                            </div>
                                        ) : (
                                            <div className="w-full h-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col">
                                                <div className="mb-6">
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{law.digitalExample.title}</h3>
                                                    <p className="text-lg text-gray-600">{law.digitalExample.description}</p>
                                                </div>
                                                <div className="flex-1">
                                                    <DigitalComponent />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="real-world"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full min-h-[600px] relative rounded-2xl overflow-hidden group"
                                >
                                    <img
                                        src={law.realWorldExample.image}
                                        alt={law.realWorldExample.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end text-white">
                                        <span className="text-sm font-medium text-white/60 uppercase tracking-wider mb-1">Real World Analogy</span>
                                        <h3 className="text-3xl font-bold mb-2">{law.realWorldExample.title}</h3>
                                        <p className="text-white/90 text-lg">{law.realWorldExample.description}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Explanation / Context Column - 20% width */}
                    <div className="w-full lg:w-[20%] flex flex-col gap-4">
                        <div className="bg-gray-50 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Why it matters</h3>
                            <p className="text-gray-600 leading-relaxed text-base font-medium">
                                {activeTab === 'digital' ? law.digitalExample.whyItMatters : law.realWorldExample.whyItMatters}
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6 flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Best Practices</h3>
                            <ul className="space-y-4">
                                {law.bestPractices.map((practice, index) => (
                                    <li key={index} className="flex gap-3 items-start">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-xs font-bold mt-0.5">
                                            {index + 1}
                                        </span>
                                        <span className="text-gray-600 leading-relaxed text-base font-medium">{practice}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
