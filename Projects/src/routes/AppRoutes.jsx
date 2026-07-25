import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Protected About Route */}
        <Route 
          path="/about" 
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          } 
        />
        
        <Route path="/products" element={<Products />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;