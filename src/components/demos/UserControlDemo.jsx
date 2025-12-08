import React, { useState } from 'react';
import './Demos.css';

const UserControlDemo = () => {
    const [emails, setEmails] = useState([
        { id: 1, subject: "Meeting Notes", sender: "Alice" },
        { id: 2, subject: "Project Update", sender: "Bob" },
        { id: 3, subject: "Lunch?", sender: "Charlie" }
    ]);
    const [deletedEmail, setDeletedEmail] = useState(null);
    const [showToast, setShowToast] = useState(false);

    const deleteEmail = (id) => {
        const emailToDelete = emails.find(e => e.id === id);
        setDeletedEmail(emailToDelete);
        setEmails(emails.filter(e => e.id !== id));
        setShowToast(true);

        // Hide toast after 3 seconds
        setTimeout(() => {
            setShowToast(false);
            // If we hide the toast, we might clear the deleted email reference, 
            // but strictly for undo we need to keep it until the toast is gone or user dismisses.
            // For this simple demo, we just hide the toast.
        }, 3000);
    };

    const undoDelete = () => {
        if (deletedEmail) {
            setEmails(prev => [...prev, deletedEmail].sort((a, b) => a.id - b.id));
            setDeletedEmail(null);
            setShowToast(false);
        }
    };

    return (
        <div className="demo-container">
            <div className="demo-box" style={{ minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <h4>Inbox</h4>
                    <div className="email-list">
                        {emails.length === 0 ? (
                            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '1rem' }}>Inbox is empty</p>
                        ) : (
                            emails.map(email => (
                                <div key={email.id} className="email-item">
                                    <div>
                                        <div style={{ fontWeight: 500 }}>{email.subject}</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{email.sender}</div>
                                    </div>
                                    <button
                                        className="btn"
                                        style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem', color: 'var(--accent-error)', borderColor: 'var(--accent-error)' }}
                                        onClick={() => deleteEmail(email.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {showToast && (
                    <div className="toast">
                        <span>Email deleted.</span>
                        <button className="undo-btn" onClick={undoDelete}>Undo</button>
                    </div>
                )}
            </div>
            <p className="demo-caption">
                <strong>Why it works:</strong> Users make mistakes. The "Undo" function acts as an emergency exit, allowing them to recover without stress.
            </p>
        </div>
    );
};

export default UserControlDemo;
