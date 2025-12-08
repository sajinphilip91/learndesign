import React, { useState } from 'react';
import './Demos.css';

const ErrorPreventionDemo = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    // Generate a simple calendar grid for current month
    const days = Array.from({ length: 30 }, (_, i) => i + 1);
    const today = 15; // Assume today is the 15th

    return (
        <div className="demo-container">
            <div className="demo-box">
                <h4>Flight Booking: Return Date</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    Try to select a date before today (15th).
                </p>

                <div className="date-picker-mock">
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                        <span>&lt;</span>
                        <span>October</span>
                        <span>&gt;</span>
                    </div>
                    <div className="date-grid">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                            <div key={d} style={{ fontSize: '0.7rem', fontWeight: 'bold', color: 'var(--text-secondary)' }}>{d}</div>
                        ))}
                        {days.map(day => {
                            const isDisabled = day < today;
                            const isSelected = selectedDate === day;
                            return (
                                <div
                                    key={day}
                                    className={`date-cell ${isDisabled ? 'disabled' : ''} ${isSelected ? 'selected' : ''}`}
                                    onClick={() => !isDisabled && setSelectedDate(day)}
                                    title={isDisabled ? "Cannot select past date" : "Select date"}
                                >
                                    {day}
                                </div>
                            );
                        })}
                    </div>
                </div>
                {selectedDate && (
                    <p style={{ marginTop: '1rem', color: 'var(--accent-success)', fontSize: '0.9rem' }}>
                        Selected: October {selectedDate}
                    </p>
                )}
            </div>
            <p className="demo-caption">
                <strong>Why it works:</strong> Instead of letting the user pick an invalid date and <em>then</em> showing an error, the interface simply disables invalid options.
            </p>
        </div>
    );
};

export default ErrorPreventionDemo;
