import React from 'react';
import './Demos.css';

const RealWorldMatchDemo = () => {
    return (
        <div className="demo-container">
            <div className="demo-box">
                <h4>Familiar Icons</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    Which icons are easier to understand?
                </p>

                <div className="icon-grid">
                    <div className="icon-item">
                        <span className="icon-symbol">🗑️</span>
                        <span className="icon-label">Trash</span>
                    </div>
                    <div className="icon-item">
                        <span className="icon-symbol">📁</span>
                        <span className="icon-label">Folder</span>
                    </div>
                    <div className="icon-item">
                        <span className="icon-symbol">🔍</span>
                        <span className="icon-label">Search</span>
                    </div>
                    <div className="icon-item">
                        <span className="icon-symbol">🏠</span>
                        <span className="icon-label">Home</span>
                    </div>
                    <div className="icon-item">
                        <span className="icon-symbol">⚙️</span>
                        <span className="icon-label">Settings</span>
                    </div>
                    <div className="icon-item">
                        <span className="icon-symbol">🔒</span>
                        <span className="icon-label">Security</span>
                    </div>
                </div>
            </div>
            <p className="demo-caption">
                <strong>Why it works:</strong> These icons mimic real-world objects (a physical trash can, a paper folder), making their digital function instantly intuitive.
            </p>
        </div>
    );
};

export default RealWorldMatchDemo;
