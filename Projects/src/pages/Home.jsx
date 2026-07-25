import { useContext, useEffect } from "react";
import axios from "axios";
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MyStore } from "../context/MyContext";

// 1. ProductCard Component
const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 p-5 flex flex-col transition-all duration-300 overflow-hidden cursor-pointer">
      <div 
        onClick={() => navigate(`/detail/${product.id}`)}
        className="h-48 mb-4 flex items-center justify-center overflow-hidden"
      >
        <img 
          src={product.image} 
          alt={product.title} 
          className="h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="mb-3">
        <span className="w-fit bg-blue-50 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {product.category}
        </span>
      </div>

      <h2 
        className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors"
        onClick={() => navigate(`/detail/${product.id}`)}
      >
        {product.title}
      </h2>
      <p className="text-xs text-gray-500 mb-3 line-clamp-2">
        {product.description}
      </p>

      <div className="flex items-center gap-1 mb-4 text-xs text-gray-600 mt-auto">
        <Star size={14} className="fill-yellow-400 text-yellow-400" />
        <span className="font-medium">{product.rating?.rate}</span>
        <span className="text-gray-400">({product.rating?.count} Reviews)</span>
      </div>

      <div className="flex items-center justify-between mt-2">
        <span className="text-lg font-bold text-emerald-600">
          ${product.price?.toFixed(2)}
        </span>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors">
          Buy Now
        </button>
      </div>
    </div>
  );
};

// 2. Home Component
const Home = () => {
  const { productsData, setProductsData } = useContext(MyStore);

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProductsData(res.data);
      } catch (error) {
        console.log("error in api", error);
      }
    };

    if (!productsData || productsData.length === 0) {
      getProductsData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans p-4">
      <main className="max-w-7xl mx-auto px-2 md:px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Home Page</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsData && productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;