import { Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

export default function ProductList({ product }) {
  const [liked, setLiked] = useState(false);

  if (!product) return null;

  return (
    <div className="group relative bg-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
      {/* Badge */}
      {product.badge && (
        <span className="absolute top-4 left-4 z-10 bg-green-400 text-white text-xs px-3 py-1 rounded-full">
          {product.badge}
        </span>
      )}

      {/* Wishlist */}
      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 backdrop-blur border hover:scale-110 transition"
      >
        <Heart
          size={18}
          className={liked ? "text-red-500 fill-red-500" : "text-gray-600"}
        />
      </button>

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* CENTERED CONTENT */}
      <div className="p-5 space-y-3 text-center">
        <h2 className="text-lg font-semibold text-gray-900">{product.title}</h2>

        <p className="text-sm text-gray-500">{product.category}</p>

        {/* Rating */}
        <div className="flex justify-center items-center gap-1">
          <Star size={14} fill="currentColor" className="text-yellow-500" />
          <span className="text-sm text-gray-700">{product.rating}</span>
        </div>

        {/* Price */}
        <div className="flex justify-center items-center gap-2">
          <span className="text-xl font-bold text-gray-900">
            ₹{product.price}
          </span>
          <span className="text-sm line-through text-gray-400">
            ₹{product.originalPrice}
          </span>
        </div>

        {/* Cart Button */}
        <div className="pt-3 flex justify-center">
          <button
            disabled={product.stock === 0}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-medium transition
              ${
                product.stock === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-red-500 text-white hover:bg-red-600"
              }
            `}
          >
            <ShoppingCart size={16} />
            {product.stock === 0 ? "Sold Out" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
