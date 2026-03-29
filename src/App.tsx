/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#050505] selection:bg-[#ccff00] selection:text-black">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none"></div>
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ccff00] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="z-10 flex flex-col items-center text-center px-6 w-full max-w-4xl">
        
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 flex items-center gap-3 border border-white/10 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-sm"
        >
          <div className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse shadow-[0_0_10px_#ccff00]"></div>
          <span className="font-mono text-xs tracking-widest uppercase text-white/70 mt-[1px]">System Initializing</span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex flex-col items-center mb-8 w-full"
        >
          <h1 className="text-7xl md:text-9xl tracking-tighter font-bold mb-4 glitch-hover cursor-default">
            <span className="logo-text">gadfly</span>
            <span className="logo-accent">.</span>
          </h1>
          <div className="flex items-center gap-4 w-full max-w-xs md:max-w-md">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <span className="font-mono text-sm md:text-base tracking-[0.4em] text-white/50 uppercase ml-[0.4em]">
              Research
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
            Piloting a New Way to Align. <br className="hidden md:block" />
            Exploring alternatives to reward-based alignment through verified planning, structured imitation, and social development.
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 font-mono text-[10px] text-white/30 tracking-widest uppercase"
      >
        &copy; {new Date().getFullYear()} Gadfly Research. All rights reserved.
      </motion.div>
    </div>
  );
}
