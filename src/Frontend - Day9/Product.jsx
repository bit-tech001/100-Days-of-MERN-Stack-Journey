import { Link } from "react-router-dom";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Web App",
      price: "$199",
      slug: "web-app",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
    },
    {
      id: 2,
      name: "Mobile App",
      price: "$299",
      slug: "mobile-app",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
      id: 3,
      name: "UI Design",
      price: "$99",
      slug: "ui-design",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d"
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Products
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow hover:scale-105 transition overflow-hidden"
          >
            {/* 🖼 Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.price}</p>

              <Link
                to={`/product/${item.id}/${item.slug}`}
                className="text-indigo-600 font-semibold hover:underline"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
