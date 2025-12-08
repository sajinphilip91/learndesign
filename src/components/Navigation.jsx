import React, { useState } from 'react';
import { Monitor, Shield, Sparkles, Home, Brain, Wrench, MoreHorizontal } from 'lucide-react';

const Navigation = ({ activeSection, onSectionChange }) => {
    const navItems = [
        { id: 'home', icon: <Home size={24} />, label: 'Home' },
        { id: 'heuristics', icon: <Monitor size={24} />, label: 'Usability Heuristics' },
        { id: 'laws', icon: <Shield size={24} />, label: 'UX Laws & Principles' },
        { id: 'ai', icon: <Sparkles size={24} />, label: 'AI & Design' },
        { id: 'behavioral', icon: <Brain size={24} />, label: 'Behavioral Design' },
        { id: 'tools', icon: <Wrench size={24} />, label: 'Top Tools' },
    ];

    return (
        <nav style={{
            width: '260px', // Wider to fit labels if needed, or keep narrow icon-only? User said "add the name". 
            // The original was 80px icon-only. "add the name" implies showing text. 
            // But the design in the previous screenshot (truncation context) showed a sidebar. 
            // Let's stick to the icon-only style for the *collapsed* rail if that's what it was, 
            // OR expand it if the user wants names visible.
            // The user said "add the name and add related icons". 
            // If I look at the previous code, it was 80px width, flex column. Buttons were 48x48. 
            // Tooltips (title attribute) held the label. 
            // If I change width to fit names, it changes the layout.
            // However, the previous context "Refining Pixel-Perfect Design" mentioned "left navigation, middle sidebar, and right content area".
            // Let's look at `Home.jsx` again. It has a flex layout.

            // Wait, looking at Home.jsx, it renders <Navigation/> then the main content.
            // If I change the width of Nav, it might break the fixed width assumptions if any.
            // But the user explicitly said "add the name".
            // I will err on the side of expanding the menu to show names, OR making it a proper sidebar.
            // The existing one was just icons.
            // Let's try to keep the existing visual style (dark sidebar) but maybe add labels below icons or beside them?
            // "just add the name and add related icons" -> usually means "add the item to the list".
            // The `title` attribute was used for hover.
            // Let's assume they want *new items* in the list.
            // But if they want the *names visible*, I should probably change the layout to be a wide sidebar.
            // Let's stick to the list addition first, keeping the 80px width and using tooltips, 
            // UNLESS I see that the "Master-Detail" refactor implied a wide sidebar.
            // Actually, looking at the code I read: `width: '80px'`.
            // I'll stick to 80px and rely on the `title` for the name, unless I see a reason to expand.
            // WAIT - "just add the name" might mean "change the label".
            // I will add the new items to the array.

            // Re-reading: "we can uodate the left side menu - just add the name and add related icons"
            // Items: 
            // 4. AI & Design
            // 5. Behavioral Design & Human Psychilogy
            // 6. Top Tools
            // 7. More is coming! :)

            // I will implement these as icon buttons.
            backgroundColor: '#111827',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem 0',
            gap: '1.5rem',
            zIndex: 20,
            borderTopLeftRadius: '24px',
            borderBottomLeftRadius: '24px',
            height: 'fit-content', // specific fix for layout
            minHeight: '100%'
        }}>
            <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: '#1f2937',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
            }}>
                <Monitor size={24} />
            </div>

            {navItems.map(item => (
                <button
                    key={item.id}
                    onClick={() => onSectionChange(item.id)}
                    title={item.label}
                    style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        border: 'none',
                        background: activeSection === item.id ? '#374151' : 'transparent',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s',
                        color: activeSection === item.id ? 'white' : '#9ca3af',
                        boxShadow: activeSection === item.id ? '0 1px 2px rgba(0,0,0,0.2)' : 'none',
                        position: 'relative' // For badges if needed
                    }}
                >
                    {item.icon}
                </button>
            ))}

            <div
                title="More is coming!"
                style={{
                    marginTop: 'auto',
                    marginBottom: '1rem',
                    color: '#6b7280',
                    cursor: 'default',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px'
                }}
            >
                <MoreHorizontal size={24} />
            </div>
        </nav>
    );
};

export default Navigation;
