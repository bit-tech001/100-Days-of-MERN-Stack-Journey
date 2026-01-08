import { useParams } from "react-router-dom";

const productData = [
  {
    id: "1",
    name: "Web App",
    price: "$199",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
  },
  {
    id: "2",
    name: "Mobile App",
    price: "$299",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    id: "3",
    name: "UI Design",
    price: "$99",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d"
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === id);

  if (!product) return <p className="text-center">Product not found</p>;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white max-w-lg rounded-2xl shadow overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />

        <div className="p-6 text-center">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.price}</p>

          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
