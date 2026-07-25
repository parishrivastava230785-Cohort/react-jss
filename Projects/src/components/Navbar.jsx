import { NavLink } from 'react-router-dom';
import { Home, Info, ShoppingBag, LogIn } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
      
      {/* Logo Section */}
      <div className="text-2xl font-extrabold tracking-wider cursor-pointer flex items-center gap-2">
        LOGO
      </div>
      
      {/* Navigation Links with Lucide Icons */}
      <div className="flex space-x-8 text-gray-300 font-medium">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive 
              ? "text-white flex items-center gap-2 font-bold transition-colors duration-200" 
              : "hover:text-white flex items-center gap-2 transition-colors duration-200"
          }
        >
          <Home className="w-5 h-5" />
          Home
        </NavLink>
        
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            isActive 
              ? "text-white flex items-center gap-2 font-bold transition-colors duration-200" 
              : "hover:text-white flex items-center gap-2 transition-colors duration-200"
          }
        >
          <Info className="w-5 h-5" />
          About
        </NavLink>
        
        <NavLink 
          to="/products" 
          className={({ isActive }) => 
            isActive 
              ? "text-white flex items-center gap-2 font-bold transition-colors duration-200" 
              : "hover:text-white flex items-center gap-2 transition-colors duration-200"
          }
        >
          <ShoppingBag className="w-5 h-5" />
          Products
        </NavLink>
      </div>
      
      {/* Action Button with Icon */}
      <button className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors duration-200">
        <LogIn className="w-5 h-5" />
        Login
      </button>

    </nav>
  );
};

export default Navbar;