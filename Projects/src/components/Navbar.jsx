import { NavLink, Link } from 'react-router-dom';
import { Home, Info, ShoppingBag, LogIn } from 'lucide-react';

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 flex items-center gap-2 font-bold transition-colors duration-200"
      : "text-gray-300 hover:text-blue-400 flex items-center gap-2 transition-colors duration-200";

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#1e293b] text-white shadow-md font-sans">
      <Link to="/" className="text-2xl font-extrabold tracking-widest uppercase cursor-pointer flex items-center gap-2 hover:text-gray-200 transition-colors">
        LOGO
      </Link>
      
      <div className="hidden md:flex space-x-8 font-medium">
        <NavLink to="/" className={navLinkClass}>
          <Home className="w-5 h-5" />
          Home
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          <Info className="w-5 h-5" />
          About
        </NavLink>
        <NavLink to="/products" className={navLinkClass}>
          <ShoppingBag className="w-5 h-5" />
          Products
        </NavLink>
      </div>
      
      <Link 
        to="/login"
        className="bg-[#0ea5e9] hover:bg-blue-500 text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors duration-200"
      >
        <LogIn className="w-5 h-5" />
        Login
      </Link>
    </nav>
  );
};

export default Navbar;