import { ProductData } from "./ProductData";
import ProductList from "./ProductList";

export default function ProductGrid() {
  return (
    <div className="min-h-screen  from-gray-900 to-gray-700 py-12 px-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-black text-center mb-10">
        Featured Products
      </h1>

      {/* Product Grid */}
      <div
        className="
       
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    gap-8
    place-items-center
    max-w-7xl
    mx-auto
  "
      >
        {ProductData.map((item) => (
          <ProductList key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
