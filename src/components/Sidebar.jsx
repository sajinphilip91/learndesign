import React from 'react';
import { heuristics } from '../data/heuristics';
import './Sidebar.css';

const Sidebar = ({ selectedId, onSelect }) => {
    return (
        <aside className="sidebar card">
            <h2 className="sidebar-title">Usability Heuristics</h2>
            <ul className="heuristic-list">
                {heuristics.map((heuristic) => (
                    <li key={heuristic.id}>
                        <button
                            className={`heuristic-item ${selectedId === heuristic.id ? 'active' : ''}`}
                            onClick={() => onSelect(heuristic.id)}
                        >
                            <span className="heuristic-number">{heuristic.id}</span>
                            <span className="heuristic-name">{heuristic.title}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
