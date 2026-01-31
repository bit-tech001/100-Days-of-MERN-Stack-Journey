import { useContext } from "react";
import { DataContext } from "../../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { userData, setUserData, serverUrl } = useContext(DataContext);
  const navigate = useNavigate();

  if (!userData) return <div>Loading...</div>;

  // ✅ Logout handler
  const handleLogout = async () => {
    try {
      await axios.post(
        `${serverUrl}/api/logout`,
        {},
        { withCredentials: true }
      );

      setUserData(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      
      {/* Profile Image */}
      <img
        src={
          userData.profileImage ||
          "https://cdn-icons-png.flaticon.com/128/3940/3940417.png"
        }
        alt="profile"
        className="w-20 h-20 rounded-full object-cover border"
      />

      <h2 className="text-xl">Welcome,</h2>
      <h1 className="text-2xl font-bold">{userData.firstName}</h1>

      {/* Email */}
      <p className="text-gray-600">{userData.email}</p>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
