import axios from "axios";
import { useState } from "react";

const AxiosApp = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const axiosData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
      console.log(users);
      
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Axios Users</h1>

          <button
            onClick={axiosData}
            disabled={loading}
            className="bg-black text-white px-5 py-2 rounded-lg disabled:opacity-50"
          >
            {loading ? "Loading..." : "Fetch Users"}
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-24 bg-gray-200 rounded animate-pulse"
              ></div>
            ))}
          </div>
        )}

        {/* Users */}
        {!loading && users.length > 0 && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="border rounded-lg p-4 hover:shadow-md transition"
              >
                <h2 className="font-semibold text-lg">{user.name}</h2>
                <p className="text-sm text-gray-500">{user.email}</p>
                <p className="text-sm text-gray-400">{user.company.name}</p>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && users.length === 0 && !error && (
          <p className="text-center text-gray-500">
            Click <b>Fetch Users</b> to load data
          </p>
        )}
      </div>
    </div>
  );
};

export default AxiosApp;
