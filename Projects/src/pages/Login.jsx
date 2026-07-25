import { useState } from 'react';
import { Zap, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    navigate('/');
  };

  return (
    <div className="flex min-h-screen bg-[#111111] text-white font-sans">
      
      <div className="hidden lg:flex w-1/2 flex-col justify-between p-12 border-r border-gray-800">
        <div>
          <div className="flex items-center gap-2 mb-24">
            <div className="bg-[#a3e635] text-black p-1 rounded-full">
              <Zap size={24} fill="currentColor" />
            </div>
            <span className="text-xl font-bold tracking-wide">
              Sky<span className="text-[#a3e635]">Mart</span>
            </span>
          </div>

          <div className="max-w-md">
            <p className="text-[#a3e635] text-sm font-semibold tracking-widest mb-4 uppercase">Welcome Back</p>
            <h1 className="text-6xl font-bold leading-tight mb-4">
              Shop the future.<br />
              <span className="text-[#a3e635]">Today.</span>
            </h1>
            <p className="text-gray-400 text-lg mb-12">
              Thousands of products, lightning-fast delivery, and prices that make your wallet happy.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-lg">
          <div className="border border-gray-700 rounded-xl p-4 flex flex-col items-center justify-center">
            <span className="text-[#a3e635] font-bold text-xl mb-1">20K+</span>
            <span className="text-gray-400 text-xs">Products</span>
          </div>
          <div className="border border-gray-700 rounded-xl p-4 flex flex-col items-center justify-center">
            <span className="text-[#a3e635] font-bold text-xl mb-1">50K+</span>
            <span className="text-gray-400 text-xs">Users</span>
          </div>
          <div className="border border-gray-700 rounded-xl p-4 flex flex-col items-center justify-center">
            <span className="text-[#a3e635] font-bold text-xl mb-1">4.9★</span>
            <span className="text-gray-400 text-xs">Rating</span>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#0a0a0a]">
        <div className="w-full max-w-md bg-[#161616] p-8 rounded-2xl border border-gray-800 shadow-2xl">
          <h2 className="text-2xl font-bold mb-2">Sign in</h2>
          <p className="text-gray-400 text-sm mb-8">Enter your credentials to continue</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-500" size={20} />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address" 
                className="w-full bg-[#111111] border border-gray-800 text-white rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:border-[#a3e635] transition-colors"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-500" size={20} />
              <input 
                type={showPassword ? 'text' : 'password'} 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" 
                className="w-full bg-[#111111] border border-gray-800 text-white rounded-lg py-3 pl-10 pr-10 focus:outline-none focus:border-[#a3e635] transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-300 focus:outline-none cursor-pointer"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#5f7a2a] hover:bg-[#6e8e31] text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors mt-2 cursor-pointer"
            >
              Sign in <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-8 text-center flex flex-col gap-3">
             <p className="text-gray-400 text-sm">
               Don't have an account? <a href="#" className="text-[#a3e635] hover:underline font-semibold">Create one</a>
             </p>
             <Link to="/" className="text-xs text-gray-500 hover:text-white underline transition-colors">
               ← Back to Home Page
             </Link>
          </div>
        </div>
      </div>

    </div>
  );
}