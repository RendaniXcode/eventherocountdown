
import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import Logo from '@/components/Logo';
import Countdown from '@/components/Countdown';
import SignupForm from '@/components/SignupForm';

<lov-add-dependency>framer-motion@latest</lov-add-dependency>

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-[10%] w-96 h-96 rounded-full bg-neon-purple/10 blur-[120px] animate-float"></div>
        <div className="absolute bottom-40 right-[15%] w-96 h-96 rounded-full bg-neon-blue/10 blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-neon-pink/5 blur-[120px]"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-12 flex-1 flex flex-col relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-16 md:mb-24 animate-slide-up">
          <Logo />
          
          <a 
            href="#signup" 
            className="py-2 px-4 border border-white/20 rounded-lg text-sm hover:bg-white/5 transition-colors"
          >
            Join Now
          </a>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto text-center space-y-12 md:space-y-16 pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                The Future of 
                <span className="block mt-2 gradient-text from-neon-blue via-neon-pink to-neon-purple">
                  Event Ticketing
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              We're building the simplest way to discover, buy, and sell tickets to the events you love.
            </motion.p>
          </motion.div>
          
          <Countdown />
          
          <div id="signup" className="w-full">
            <SignupForm />
          </div>
        </main>
        
        {/* Footer */}
        <footer className="py-8 text-center text-white/60 text-sm animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <p>&copy; {new Date().getFullYear()} EventHero. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
