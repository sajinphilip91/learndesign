import React from 'react';
import * as Demos from './demos/index.jsx';

const ExampleCard = ({ example, index, total, type }) => {
    // Dynamically load demo if it exists
    const DemoComponent = type === 'digital' && example.componentName
        ? (Demos[example.componentName] || (() => <div style={{ padding: '2rem', color: '#9ca3af', textAlign: 'center' }}>Interactive Demo Placeholder</div>))
        : null;

    return (
        <div style={{
            minWidth: '340px',
            maxWidth: '340px',
            height: '100%',
            background: 'white',
            borderRadius: '24px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            flexShrink: 0,
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
        }}>
            <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '500', color: '#111827', marginBottom: '0.5rem' }}>
                    {index + 1}/{total}
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 0.5rem 0', color: '#111827' }}>
                    {example.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                    {type === 'digital' ? 'Interact with the component below.' : 'Real world example.'}
                </p>
            </div>

            <div style={{
                flex: 1,
                background: '#f9fafb',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                border: '1px solid #f3f4f6'
            }}>
                {type === 'digital' ? (
                    DemoComponent ? <DemoComponent /> : null
                ) : (
                    <div style={{ fontSize: '3rem' }}>
                        {/* Placeholder for real world images */}
                        📷
                    </div>
                )}
            </div>

            <p style={{
                fontSize: '0.95rem',
                color: '#374151',
                textAlign: 'center',
                lineHeight: '1.6',
                fontWeight: '500'
            }}>
                "{example.description}"
            </p>
        </div>
    );
};

export default ExampleCard;
