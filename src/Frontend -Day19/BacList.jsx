import axios from "axios";
import { useState } from "react";

const BackList = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    city: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/", {
        name: data.name,
        age: data.age,
        city: data.city,
      });

      console.log("Response:", res.data);

      // Reset form after success
      setData({
        name: "",
        age: "",
        city: "",
      });

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#020024] to-[#020617]">
      <div className="w-full max-w-sm rounded-2xl bg-white/10 backdrop-blur-lg p-8 shadow-2xl border border-white/20">
        
        <h2 className="text-white text-2xl font-semibold text-center mb-6">
          User Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="text-gray-300 text-sm">Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 rounded-lg bg-black/40 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Age</label>
            <input
              type="number"
              name="age"
              value={data.age}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 rounded-lg bg-black/40 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your age"
              required
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">City</label>
            <input
              type="text"
              name="city"
              value={data.city}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 rounded-lg bg-black/40 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your city"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:scale-105 transition-transform"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default BackList;
