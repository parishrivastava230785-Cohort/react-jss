import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [singleProductData, setSingleProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSingleProductData = async () => {
      try {
        let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setSingleProductData(res.data);
        setLoading(false);
      } catch (error) {
        console.log("Detail api error", error);
        setLoading(false);
      }
    };

    getSingleProductData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-2xl font-semibold animate-pulse">Loading product details...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 p-6 md:p-10 flex flex-col md:flex-row gap-10 items-center">
        
        {/* Product Image Container */}
        <div className="w-full md:w-1/2 bg-white p-8 rounded-xl flex items-center justify-center h-96 shadow-inner">
          <img 
            src={singleProductData.image} 
            alt={singleProductData.title} 
            className="h-full object-contain hover:scale-105 transition-transform duration-300" 
          />
        </div>

        {/* Product Information Container */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div>
            <span className="bg-sky-900 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              {singleProductData.category}
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold leading-tight text-white">
            {singleProductData.title}
          </h1>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {singleProductData.description}
          </p>

          <div className="text-3xl font-bold text-green-400">
            ${singleProductData.price}
          </div>

          <div className="flex gap-4 items-center pt-2">
            <button className="flex-1 bg-sky-600 hover:bg-sky-700 text-white py-3 px-6 rounded-xl font-semibold shadow-lg transition duration-200 transform active:scale-95">
              Add to Cart
            </button>
            <Link 
              to="/products" 
              className="bg-gray-700 hover:bg-gray-600 text-gray-300 py-3 px-5 rounded-xl font-medium transition text-center"
            >
              Back
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;