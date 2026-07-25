import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 p-5 flex flex-col transition-all duration-300 overflow-hidden">
      <div 
        onClick={() => navigate(`/detail/${product.id}`)}
        className="h-48 mb-4 flex items-center justify-center overflow-hidden cursor-pointer"
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

      <h2 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 leading-snug cursor-pointer hover:text-blue-600 transition-colors"
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

export default ProductCard;