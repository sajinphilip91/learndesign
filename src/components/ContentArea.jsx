import React, { useState } from 'react';
import ExampleCard from './ExampleCard';

const ContentArea = ({ item, type, onTypeChange }) => {
    if (!item) return null;

    const examples = type === 'digital' ? item.digitalExamples : item.realWorldExamples;

    return (
        <main style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem',
            overflow: 'hidden',
            background: '#f3f4f6'
        }}>
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '3rem'
            }}>
                <div style={{ maxWidth: '600px' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                        {item.title}
                    </h1>
                    <p style={{ fontSize: '1rem', color: '#4b5563', lineHeight: '1.6', fontWeight: '500' }}>
                        "{item.definition}"
                    </p>
                </div>

                <div style={{
                    background: 'white',
                    padding: '4px',
                    borderRadius: '8px',
                    display: 'flex',
                    gap: '4px',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                }}>
                    <button
                        onClick={() => onTypeChange('digital')}
                        style={{
                            padding: '0.5rem 1rem',
                            border: 'none',
                            background: type === 'digital' ? '#111827' : 'transparent',
                            color: type === 'digital' ? 'white' : '#6b7280',
                            borderRadius: '6px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontSize: '0.875rem',
                            boxShadow: type === 'digital' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none',
                            transition: 'all 0.2s'
                        }}
                    >
                        Digital
                    </button>
                    <button
                        onClick={() => onTypeChange('realWorld')}
                        style={{
                            padding: '0.5rem 1rem',
                            border: 'none',
                            background: type === 'realWorld' ? '#111827' : 'transparent',
                            color: type === 'realWorld' ? 'white' : '#6b7280',
                            borderRadius: '6px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontSize: '0.875rem',
                            boxShadow: type === 'realWorld' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none',
                            transition: 'all 0.2s'
                        }}
                    >
                        Real world
                    </button>
                </div>
            </header>

            <div style={{
                flex: 1,
                overflowX: 'auto',
                overflowY: 'hidden',
                display: 'flex',
                gap: '1.5rem',
                paddingBottom: '1rem', // Space for scrollbar
                alignItems: 'stretch'
            }}>
                {examples && examples.map((example, index) => (
                    <ExampleCard
                        key={example.id || index}
                        example={example}
                        index={index}
                        total={examples.length}
                        type={type}
                    />
                ))}
                {/* Spacer for right padding */}
                <div style={{ minWidth: '1px' }} />
            </div>

            {/* Footer hint */}
            <div style={{ marginTop: '1rem', textAlign: 'center', color: '#9ca3af', fontSize: '0.8rem', fontStyle: 'italic' }}>
                Try it out: Click the tabs above to explore different ways this heuristic is applied in real interfaces.
            </div>
        </main>
    );
};

export default ContentArea;
