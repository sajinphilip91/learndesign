import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Heart, MoreHorizontal, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SongData = {
    title: "Midnight City",
    artist: "M83",
    album: "Hurry Up, We're Dreaming",
    duration: 243, // seconds
    cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2670&auto=format&fit=crop"
};

// --- Variant A: Low Aesthetic (The "Ugly" Version) ---
const UglyPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(30);

    return (
        <div className="w-full max-w-sm p-4 border-2 border-black bg-gray-200 font-serif">
            <h3 style={{ textDecoration: 'underline', marginBottom: '10px' }}>Music Player v1.0</h3>

            <div className="bg-white border border-gray-400 p-2 mb-4">
                <img src={SongData.cover} alt="Album" style={{ width: '100px', height: '100px', objectFit: 'cover', display: 'block', margin: '0 auto' }} />
                <div style={{ textAlign: 'center', marginTop: '5px' }}>
                    <div>Song: {SongData.title}</div>
                    <div>Artist: {SongData.artist}</div>
                </div>
            </div>

            <div className="mb-4">
                <div>Time: 1:12 / 4:03</div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={(e) => setProgress(e.target.value)}
                    style={{ width: '100%' }}
                />
            </div>

            <div className="flex gap-2 justify-center">
                <button className="border border-gray-600 bg-gray-100 px-2 py-1 text-sm active:bg-gray-300">Prev</button>
                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="border border-gray-600 bg-gray-100 px-4 py-1 text-sm font-bold active:bg-gray-300"
                >
                    {isPlaying ? "STOP" : "PLAY"}
                </button>
                <button className="border border-gray-600 bg-gray-100 px-2 py-1 text-sm active:bg-gray-300">Next</button>
            </div>

            <div className="mt-4 border-t border-gray-400 pt-2 text-xs">
                <button>[Like]</button> <button>[Menu]</button> <button>[Vol]</button>
            </div>
        </div>
    );
};

// --- Variant B: High Aesthetic (The "Beautiful" Version) ---
const BeautifulPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [progress, setProgress] = useState(30);

    // Simulate progress
    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setProgress(p => (p >= 100 ? 0 : p + 0.5));
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    return (
        <div className="w-full max-w-sm relative group">
            {/* Background Glow/Blur Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 blur-3xl rounded-[40px] opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Glassmorphism Card */}
            <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[40px] p-8 shadow-2xl overflow-hidden text-white">

                {/* Header */}
                <div className="flex justify-between items-center mb-8 opacity-80">
                    <button className="hover:bg-white/10 p-2 rounded-full transition-colors"><MoreHorizontal size={20} /></button>
                    <span className="text-xs font-semibold tracking-widest uppercase text-white/60">Now Playing</span>
                    <button onClick={() => setIsLiked(!isLiked)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
                        <motion.div whileTap={{ scale: 0.8 }}>
                            <Heart size={20} className={isLiked ? "fill-rose-500 text-rose-500" : ""} />
                        </motion.div>
                    </button>
                </div>

                {/* Album Art */}
                <div className="relative aspect-square rounded-[30px] overflow-hidden mb-8 shadow-lg shadow-purple-900/20">
                    <motion.img
                        src={SongData.cover}
                        alt="Album"
                        className="w-full h-full object-cover"
                        animate={{ scale: isPlaying ? 1.05 : 1 }}
                        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    />
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                </div>

                {/* Song Info */}
                <div className="mb-8">
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl font-bold mb-1 truncate"
                    >
                        {SongData.title}
                    </motion.h3>
                    <p className="text-white/60 font-medium truncate">{SongData.artist}</p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8 group/progress cursor-pointer">
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-white rounded-full relative"
                            style={{ width: `${progress}%` }}
                            layoutId="progressBar"
                        >
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100 transition-opacity" />
                        </motion.div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs font-medium text-white/40">
                        <span>1:12</span>
                        <span>4:03</span>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between mb-4">
                    <button className="text-white/60 hover:text-white transition-colors"><Volume2 size={20} /></button>

                    <div className="flex items-center gap-6">
                        <button className="text-white hover:text-white/80 transition-colors">
                            <SkipBack size={28} fill="currentColor" className="opacity-80" />
                        </button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black shadow-lg shadow-white/10"
                        >
                            {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
                        </motion.button>

                        <button className="text-white hover:text-white/80 transition-colors">
                            <SkipForward size={28} fill="currentColor" className="opacity-80" />
                        </button>
                    </div>

                    <div className="w-5" /> {/* Spacer for symmetry */}
                </div>
            </div>
        </div>
    );
};

// --- Main Container ---
export default function AestheticUsabilityExample() {
    return (
        <div className="min-h-[600px] w-full bg-gradient-to-br from-[#121212] to-[#1E1E2E] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 overflow-hidden relative">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #333 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />

            {/* Label: Low Aesthetic */}
            <div className="flex flex-col items-center gap-4 z-10 w-full md:w-auto">
                <div className="text-xs font-bold tracking-widest text-white/40 uppercase bg-white/5 py-1 px-3 rounded-full border border-white/5">
                    Low Aesthetic
                </div>
                <UglyPlayer />
                <p className="text-gray-400 text-sm text-center max-w-[250px] mt-2 italic">
                    "It works, but it feels clunky and broken."
                </p>
            </div>

            {/* Divider (Desktop) */}
            <div className="hidden md:block w-px h-64 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            {/* Label: High Aesthetic */}
            <div className="flex flex-col items-center gap-4 z-10 w-full md:w-auto">
                <div className="text-xs font-bold tracking-widest text-[#A855F7] uppercase bg-[#A855F7]/10 py-1 px-3 rounded-full border border-[#A855F7]/20 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                    High Aesthetic
                </div>
                <BeautifulPlayer />
                <p className="text-gray-400 text-sm text-center max-w-[250px] mt-2 italic">
                    "It works equally well, but feels intuitive and premium."
                </p>
            </div>

        </div>
    );
}
