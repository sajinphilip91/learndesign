import React from 'react';

const SectionSidebar = ({ title, items, selectedId, onSelect }) => {
    return (
        <aside style={{
            width: '300px',
            backgroundColor: '#e5e5e5', // Exact match from design
            display: 'flex',
            flexDirection: 'column',
            borderRight: '1px solid rgba(0,0,0,0.05)',
            overflow: 'hidden'
        }}>
            <div style={{ padding: '2.5rem 2rem 1.5rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#111827', letterSpacing: '-0.02em', margin: 0 }}>{title}</h2>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '0 1rem 1rem' }}>
                {items.map((item, index) => (
                    <button
                        key={item.id}
                        onClick={() => onSelect(item.id)}
                        style={{
                            width: '100%',
                            textAlign: 'left',
                            padding: '1rem 1.25rem',
                            border: 'none',
                            background: selectedId === item.id ? 'rgba(0,0,0,0.05)' : 'transparent',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '1rem',
                            marginBottom: '0.25rem',
                            transition: 'all 0.2s',
                            position: 'relative'
                        }}
                    >
                        {/* Active indicator line on left */}
                        {selectedId === item.id && (
                            <div style={{
                                position: 'absolute',
                                left: '0',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '4px',
                                height: '24px',
                                background: '#111827',
                                borderTopRightRadius: '4px',
                                borderBottomRightRadius: '4px'
                            }} />
                        )}

                        <span style={{
                            fontWeight: '700',
                            fontSize: '0.75rem',
                            color: selectedId === item.id ? 'white' : '#6b7280',
                            background: selectedId === item.id ? '#111827' : '#d1d5db',
                            minWidth: '24px',
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '6px',
                            marginTop: '2px'
                        }}>
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        <span style={{
                            fontSize: '0.9rem',
                            color: '#374151',
                            fontWeight: selectedId === item.id ? '600' : '500',
                            lineHeight: '1.5'
                        }}>
                            {item.title}
                        </span>
                    </button>
                ))}
            </div>
        </aside>
    );
};

export default SectionSidebar;
