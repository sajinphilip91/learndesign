import React, { useState, useEffect, useRef } from 'react';
import { Send, Clock, Zap, User, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Shared Components ---
const MessageBubble = ({ text, isUser, isTyping = false }) => (
    <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
        <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${isUser
            ? 'bg-blue-600 text-white rounded-tr-none'
            : 'bg-gray-200 text-gray-900 rounded-tl-none'
            } shadow-sm relative`}
        >
            {isTyping ? (
                <div className="flex gap-1 h-6 items-center px-2">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 bg-gray-400 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-gray-400 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-gray-400 rounded-full" />
                </div>
            ) : (
                <p className="text-sm leading-relaxed">{text}</p>
            )}
        </div>
    </motion.div>
);

// --- Variant A: Slow Application (Violates Doherty Threshold) ---
const SlowChat = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Welcome to SlowChat 1.0. How can I help?", isUser: false }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [isSystemThinking, setIsSystemThinking] = useState(false);
    const chatEndRef = useRef(null);

    const handleSend = async () => {
        if (!inputValue.trim() || isSending || isSystemThinking) return;

        const userText = inputValue;
        setInputValue(""); // Clear input but don't show message yet
        setIsSending(true); // Artificial "Network Lag"

        // SIMULATED LAG: 1.5s to "process" the send request
        await new Promise(r => setTimeout(r, 1500));

        setMessages(prev => [...prev, { id: Date.now(), text: userText, isUser: true }]);
        setIsSending(false);
        setIsSystemThinking(true);

        // SIMULATED LAG: 3s for system to "think" and reply
        await new Promise(r => setTimeout(r, 3000));

        setMessages(prev => [...prev, { id: Date.now() + 1, text: "I have received your message. Please wait while I process it...", isUser: false }]);
        setIsSystemThinking(false);
    };

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isSending, isSystemThinking]);

    return (
        <div className="w-full h-[450px] bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-gray-100 p-4 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                        <Clock size={16} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800 text-sm">Slow Chat v1.0</h3>
                        <p className="text-xs text-red-500 font-medium">&gt; 400ms Latency</p>
                    </div>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                {messages.map(m => (
                    <MessageBubble key={m.id} text={m.text} isUser={m.isUser} />
                ))}
                {isSending && (
                    <div className="flex justify-end mb-4 opacity-50">
                        <div className="flex items-center gap-2 text-xs text-gray-500 bg-white px-3 py-1 rounded-full border">
                            <Loader2 size={12} className="animate-spin" /> Sending...
                        </div>
                    </div>
                )}
                {isSystemThinking && !isSending && (
                    <div className="flex justify-start mb-4 opacity-50">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            Thinking...
                        </div>
                    </div>
                )}
                <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-200">
                <div className="flex gap-2 relative">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        disabled={isSending || isSystemThinking}
                        placeholder={isSending ? "Please wait..." : "Type a message..."}
                        className="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50"
                    />
                    <button
                        onClick={handleSend}
                        disabled={isSending || isSystemThinking || !inputValue.trim()}
                        className="bg-gray-800 hover:bg-gray-900 text-white rounded-lg px-3 py-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {isSending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                    </button>

                    {/* Annoying Overlay when busy */}
                    {(isSending || isSystemThinking) && (
                        <div className="absolute inset-0 bg-white/50 cursor-wait z-10" />
                    )}
                </div>
            </div>
        </div>
    );
};

// --- Variant B: Fast Application (Doherty Threshold Compliant) ---
const FastChat = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Welcome to ZapChat. I'm ready!", isUser: false }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef(null);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userText = inputValue;
        setInputValue(""); // OPTIMISTIC UI: Clear immediately

        // OPTIMISTIC UI: Show message immediately
        setMessages(prev => [...prev, { id: Date.now(), text: userText, isUser: true }]);

        // FEEDBACK: Immediate response (<400ms)
        setIsTyping(true);

        // Simulated quick processing
        await new Promise(r => setTimeout(r, 600)); // Short delay to feel natural but fast

        setIsTyping(false);
        setMessages(prev => [...prev, { id: Date.now() + 1, text: "Got it! Processed instantly.", isUser: false }]);
    };

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    return (
        <div className="w-full h-[450px] bg-white rounded-xl shadow-lg border-2 border-green-500/20 flex flex-col overflow-hidden relative">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                        <Zap size={18} fill="currentColor" />
                    </div>
                    <div>
                        <h3 className="font-bold text-shadow-sm text-sm">ZapChat</h3>
                        <p className="text-xs text-white/80 font-medium">{'<'} 400ms (Optimized)</p>
                    </div>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-green-50/30">
                <AnimatePresence initial={false}>
                    {messages.map(m => (
                        <MessageBubble key={m.id} text={m.text} isUser={m.isUser} />
                    ))}
                    {isTyping && (
                        <MessageBubble isUser={false} isTyping={true} />
                    )}
                </AnimatePresence>
                <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-100">
                <div className="flex gap-2">
                    <motion.input
                        layout
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type a message..."
                        className="flex-1 bg-gray-100 border-0 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSend}
                        disabled={!inputValue.trim()}
                        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md disabled:opacity-50 disabled:shadow-none transition-all"
                    >
                        <Send size={18} className={inputValue.trim() ? "ml-0.5" : ""} />
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

// --- Main Container ---
export default function DohertyThresholdExample() {
    return (
        <div className="auto min-h-[600px] w-full bg-slate-50 rounded-2xl p-4 md:p-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            />

            {/* Slow Example */}
            <div className="flex flex-col items-center gap-4 w-full md:w-1/2 max-w-sm z-10">
                <SlowChat />
                <div className="text-center">
                    <h4 className="font-bold text-gray-900">Violates Threshold</h4>
                    <p className="text-gray-500 text-xs mt-1">
                        Laggy inputs and slow feedback (&gt;400ms) break the user's flow and cause frustration.
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="hidden md:flex flex-col items-center justify-center h-64 gap-2 text-gray-300">
                <div className="w-px h-full bg-gray-300" />
                <span className="text-xs font-bold bg-slate-50 py-2 z-10">VS</span>
                <div className="w-px h-full bg-gray-300" />
            </div>

            {/* Fast Example */}
            <div className="flex flex-col items-center gap-4 w-full md:w-1/2 max-w-sm z-10">
                <FastChat />
                <div className="text-center">
                    <h4 className="font-bold text-green-700">Doherty Threshold</h4>
                    <p className="text-gray-500 text-xs mt-1">
                        Feedback under 400ms keeps the user engaged. Optimistic UI makes it feel instant.
                    </p>
                </div>
            </div>

        </div>
    );
}
