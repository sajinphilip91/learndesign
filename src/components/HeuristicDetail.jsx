import React, { useState } from 'react';
import './HeuristicDetail.css';
import * as Demos from './demos/index.jsx';

const HeuristicDetail = ({ heuristic }) => {
    const [mode, setMode] = useState('digital'); // 'digital' or 'realWorld'

    // Dynamically get the demo component
    const DemoComponent = Demos[heuristic.componentName] || (() => <div className="placeholder-demo">Demo coming soon</div>);

    return (
        <main className="heuristic-detail fade-in" key={heuristic.id}>
            <header className="detail-header">
                <div className="header-content">
                    <span className="detail-number">Heuristic #{heuristic.id}</span>
                    <h1 className="detail-title">{heuristic.title}</h1>
                    <p className="detail-definition">{heuristic.definition}</p>
                </div>
            </header>

            <section className="demo-card card">
                <div className="demo-header">
                    <h3>Interactive Playground</h3>
                    <span className="badge">Try it out</span>
                </div>
                <div className="demo-canvas">
                    <DemoComponent />
                </div>
            </section>
        </main>
    );
};

export default HeuristicDetail;
