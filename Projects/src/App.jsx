import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Page components
import Home from './pages/Home'; 
import About from './pages/About';       
import Products from './pages/Products'; 
import ProductDetail from './pages/ProductDetail'; 
import Login from './pages/Login'; 

const App = () => {
  return (
    <div>
      {/* Navbar stays outside Routes so it shows on every page */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;