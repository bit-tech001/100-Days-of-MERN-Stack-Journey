import { useState } from "react";

const FetchApp = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const userData = await response.json();
      setUsers(userData);
      console.log(userData);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center p-7">
      <h1 className="text-3xl mb-4">FetchApp</h1>

      <button
        className="bg-black text-white px-6 py-2 rounded"
        onClick={fetchData}
        disabled={loading}
      >
        {loading ? "Loading..." : "Fetch Data"}
      </button>

      {/* Error */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Data */}
      <ul className="mt-6 space-y-2">
        {users.map((user) => (
          <li key={user.id} className="border p-2 rounded">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchApp;
