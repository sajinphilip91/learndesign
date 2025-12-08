export { default as SystemStatusDemo } from './SystemStatusDemo';
export { default as RealWorldMatchDemo } from './RealWorldMatchDemo';
export { default as UserControlDemo } from './UserControlDemo';
export { default as ConsistencyDemo } from './ConsistencyDemo';
export { default as ErrorPreventionDemo } from './ErrorPreventionDemo';

// Simple placeholders for the rest to ensure the app works fully
import React from 'react';

const Placeholder = ({ title, text }) => (
    <div className="demo-container">
        <div className="demo-box" style={{ padding: '3rem 1rem' }}>
            <h4>{title}</h4>
            <p style={{ color: 'var(--text-secondary)' }}>{text}</p>
        </div>
    </div>
);

export const RecognitionDemo = () => <Placeholder title="Recognition vs Recall" text="Imagine a 'Recently Viewed' list here. It helps you recognize items instead of recalling their names." />;
export const FlexibilityDemo = () => <Placeholder title="Flexibility & Efficiency" text="Imagine a keyboard shortcut (Ctrl+S) working alongside a 'Save' button." />;
export const AestheticDemo = () => <Placeholder title="Aesthetic & Minimalist" text="Compare a cluttered interface vs a clean one. Less is more." />;
export const ErrorRecoveryDemo = () => <Placeholder title="Error Recovery" text="Imagine a form field saying 'Please include an @ in your email' instead of 'Invalid Input'." />;
export const HelpDemo = () => <Placeholder title="Help & Documentation" text="Imagine a tooltip appearing when you hover over a complex feature." />;
