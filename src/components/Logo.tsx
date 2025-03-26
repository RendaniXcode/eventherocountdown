
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <div className="text-3xl md:text-4xl font-extrabold tracking-tighter">
          <span className="text-white">Event</span>
          <span className="gradient-text from-neon-yellow via-neon-yellow2 to-neon-yellow3">Hero</span>
        </div>
        <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-neon-yellow via-neon-yellow2 to-neon-yellow3"></div>
      </div>
    </div>
  );
};

export default Logo;
