import React, { useState, useEffect } from 'react';
import './Demos.css';

const SystemStatusDemo = () => {
    const [status, setStatus] = useState('idle'); // idle, uploading, success
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (status === 'uploading') {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setStatus('success');
                        return 100;
                    }
                    return prev + 2;
                });
            }, 50);
            return () => clearInterval(interval);
        }
    }, [status]);

    const startUpload = () => {
        setStatus('uploading');
        setProgress(0);
    };

    const reset = () => {
        setStatus('idle');
        setProgress(0);
    };

    return (
        <div className="demo-container">
            <div className="status-card">
                <h4>File Uploader</h4>

                {status === 'idle' && (
                    <div className="upload-zone">
                        <p>Ready to upload "project-final.pdf"</p>
                        <button className="btn btn-primary" onClick={startUpload}>
                            Start Upload
                        </button>
                    </div>
                )}

                {status === 'uploading' && (
                    <div className="progress-zone">
                        <div className="progress-info">
                            <span>Uploading...</span>
                            <span>{progress}%</span>
                        </div>
                        <div className="progress-bar-bg">
                            <div
                                className="progress-bar-fill"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <p className="helper-text">Please wait while we process your file.</p>
                    </div>
                )}

                {status === 'success' && (
                    <div className="success-zone">
                        <div className="success-icon">✓</div>
                        <p>Upload Complete!</p>
                        <button className="btn" onClick={reset}>Upload Another</button>
                    </div>
                )}
            </div>
            <p className="demo-caption">
                <strong>Why it works:</strong> The user is never left guessing. The progress bar and status text provide immediate, continuous feedback.
            </p>
        </div>
    );
};

export default SystemStatusDemo;
