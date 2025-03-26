
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "You're on the list!",
        description: "We'll notify you when EventHero launches.",
        duration: 5000,
      });
      
      setFormData({
        firstName: '',
        lastName: '',
        email: ''
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md animate-slide-up" style={{ animationDelay: '0.6s' }}>
      <div className="glass-card rounded-2xl p-6 border border-neon-yellow/30">
        <h3 className="text-xl font-medium mb-4 text-center">Get early access</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                className="form-input bg-black/60 text-white border-neon-yellow/30 focus:border-neon-yellow focus:ring-neon-yellow"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                className="form-input bg-black/60 text-white border-neon-yellow/30 focus:border-neon-yellow focus:ring-neon-yellow"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="form-input bg-black/60 text-white border-neon-yellow/30 focus:border-neon-yellow focus:ring-neon-yellow"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-black border border-neon-yellow rounded-lg font-medium transition-all duration-300 button-glow hover:text-neon-yellow disabled:opacity-50 disabled:pointer-events-none text-white"
          >
            {loading ? "Joining..." : "Join the Waitlist"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
