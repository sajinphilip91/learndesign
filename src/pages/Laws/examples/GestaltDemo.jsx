import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function GestaltDemo() {
    const [principle, setPrinciple] = useState('proximity'); // proximity, similarity

    return (
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <div className="flex justify-center mb-8">
                <div className="bg-gray-100 p-1 rounded-lg inline-flex">
                    <button
                        onClick={() => setPrinciple('proximity')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${principle === 'proximity' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        Proximity
                    </button>
                    <button
                        onClick={() => setPrinciple('similarity')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${principle === 'similarity' ? 'bg-white shadow-sm text-purple-600' : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        Similarity
                    </button>
                </div>
            </div>

            <div className="flex justify-center min-h-[200px] items-center">
                {principle === 'proximity' ? (
                    <div className="flex gap-12">
                        {/* Group 1 */}
                        <div className="grid grid-cols-2 gap-2">
                            {[1, 2, 3, 4].map(i => <div key={i} className="w-8 h-8 bg-blue-500 rounded-full" />)}
                        </div>
                        {/* Group 2 */}
                        <div className="grid grid-cols-2 gap-2">
                            {[1, 2, 3, 4].map(i => <div key={i} className="w-8 h-8 bg-blue-500 rounded-full" />)}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-4 gap-4">
                        {/* Row 1: Circles */}
                        {[1, 2, 3, 4].map(i => <div key={`c-${i}`} className="w-8 h-8 bg-purple-500 rounded-full" />)}
                        {/* Row 2: Squares */}
                        {[1, 2, 3, 4].map(i => <div key={`s-${i}`} className="w-8 h-8 bg-gray-300 rounded-none" />)}
                    </div>
                )}
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm text-gray-600 text-center">
                {principle === 'proximity' ? (
                    <p>
                        <strong>Law of Proximity:</strong> Objects that are close together are perceived as a group. You see two separate groups here because of the gap.
                    </p>
                ) : (
                    <p>
                        <strong>Law of Similarity:</strong> Objects that look alike are perceived as a group. You see rows of circles vs squares, not just random shapes.
                    </p>
                )}
            </div>
        </div>
    );
}
