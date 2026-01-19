import axios from "axios";
import { useState } from "react";

const BackList = () => {
  const [fetchData, setFetchData] = useState([]);
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
    await axios.post("http://localhost:3000/", data);
    setData({ name: "", age: "", city: "" });
  };

  const getData = async () => {
    const res = await axios.get("http://localhost:3000/");
    setFetchData(res.data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020024] to-[#020617] text-white p-8">

      {/* HEADER */}
      <h1 className="text-4xl font-bold text-center mb-12 tracking-wide">
        Client ↔ Server Demo 🚀
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* FORM CARD */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Add User
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              name="age"
              value={data.age}
              onChange={handleChange}
              placeholder="Age"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              name="city"
              value={data.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <button className="w-full py-3 mt-4 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-600 font-semibold hover:scale-105 transition">
              Submit User
            </button>
          </form>
        </div>

        {/* DATA CARD */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">
              Users List
            </h2>
            <button
              onClick={getData}
              className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 transition"
            >
              Fetch Data
            </button>
          </div>

          <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
            {fetchData.length === 0 ? (
              <p className="text-gray-400 text-center">
                No data fetched yet
              </p>
            ) : (
              fetchData.map((user, index) => (
                <div
                  key={index}
                  className="bg-black/40 rounded-xl p-4 border border-gray-700 hover:border-indigo-500 transition"
                >
                  <h3 className="text-lg font-semibold">{user.name}</h3>
                  <p className="text-sm text-gray-300">
                    Age: {user.age} • City: {user.city}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BackList;
