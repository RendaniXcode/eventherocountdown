
import React from 'react';
import { motion } from "framer-motion";
import Logo from '@/components/Logo';
import Countdown from '@/components/Countdown';
import SignupForm from '@/components/SignupForm';

const Index = () => {
  return (
    <div className="h-screen flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-[10%] w-96 h-96 rounded-full bg-neon-yellow/10 blur-[120px] animate-float"></div>
        <div className="absolute bottom-40 right-[15%] w-96 h-96 rounded-full bg-neon-yellow/10 blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-neon-yellow/5 blur-[120px]"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex flex-col relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center pt-4 animate-slide-up">
          <Logo />
          
          <a 
            href="#signup" 
            className="py-1.5 px-3 border border-neon-yellow/40 rounded-lg text-xs hover:bg-neon-yellow/5 transition-colors text-neon-yellow font-light"
          >
            Join Now
          </a>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  The Future of 
                  <span className="block mt-2 gradient-text from-neon-yellow via-neon-yellow2 to-neon-yellow4 font-extrabold">
                    Event Ticketing
                  </span>
                </h1>
              </motion.div>
              
              <motion.p 
                className="text-base md:text-lg text-white/80 max-w-lg font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                We're building the simplest way to discover, buy, and sell tickets to the events you love.
              </motion.p>
              
              <Countdown />
            </motion.div>
            
            <div id="signup" className="flex items-center justify-center">
              <SignupForm />
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="py-3 text-center text-white/60 text-xs animate-slide-up font-light" style={{ animationDelay: '0.8s' }}>
          <p>&copy; {new Date().getFullYear()} EventHero. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
