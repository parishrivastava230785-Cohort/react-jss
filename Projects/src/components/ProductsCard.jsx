import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <div
        onClick={() => navigate(`/detail/${product.id}`)}
        className="bg-gray-100 h-64 flex items-center justify-center p-6 overflow-hidden cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Category */}
        <span className="w-fit bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="font-bold text-lg line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{product.rating.rate}</span>
            <span>({product.rating.count} Reviews)</span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;