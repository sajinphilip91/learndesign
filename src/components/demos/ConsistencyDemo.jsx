import React from 'react';
import './Demos.css';

const ConsistencyDemo = () => {
    return (
        <div className="demo-container">
            <div className="demo-box">
                <h4>Standard Layout</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    Where would you expect to find the search bar?
                </p>

                <div className="consistency-layout">
                    <div className="nav-bar">
                        <span className="logo-placeholder">LOGO</span>
                        <span className="search-placeholder">🔍 Search...</span>
                        <div className="btn-group">
                            <button className="btn-standard">Login</button>
                            <button className="btn-standard btn-primary-sm">Sign Up</button>
                        </div>
                    </div>

                    <div style={{ height: '100px', background: 'var(--bg-color)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                        Content Area
                    </div>
                </div>
            </div>
            <p className="demo-caption">
                <strong>Why it works:</strong> By placing the logo on the left and search/profile on the right, we follow established web standards. Users don't have to relearn how to navigate.
            </p>
        </div>
    );
};

export default ConsistencyDemo;
