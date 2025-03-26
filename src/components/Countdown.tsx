
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  const targetDate = new Date('April 1, 2025 00:00:00').getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;
  
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  }
  
  return timeLeft;
};

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearTimeout(timer);
  });
  
  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];
  
  return (
    <div className="flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
      <h2 className="text-xl font-light mb-6 text-center">
        <span className="opacity-80">Launching</span>
        <span className="ml-2 text-glow text-neon-blue">April 1, 2025</span>
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {timeUnits.map((unit, index) => (
          <div 
            key={unit.label} 
            className="flex flex-col items-center"
            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
          >
            <div className="glass-card w-20 h-20 md:w-24 md:h-24 rounded-xl flex items-center justify-center animate-slide-up">
              <span className="text-3xl md:text-4xl font-bold">
                {unit.value.toString().padStart(2, '0')}
              </span>
            </div>
            <span className="mt-2 text-xs text-white/70 uppercase tracking-wider">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
