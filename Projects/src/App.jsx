// 1. Import the routing tools
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// 2. Import your page components (using ProductDetail)
import Home from './pages/Home'; 
import About from './pages/About';       
import Products from './pages/Products'; 
import ProductDetail from './pages/ProductDetail'; // <-- Match your actual file name

const App = () => {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        
        {/* Dynamic route with ID parameter */}
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default App;