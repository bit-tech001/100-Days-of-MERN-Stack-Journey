import { useContext } from "react";
import { DataContext } from "../../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { userData, setUserData, serverUrl } = useContext(DataContext);
  const navigate = useNavigate();

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
    <nav className="w-full h-14 bg-black text-white flex items-center justify-between px-6">
      {/* Logo */}
      <h1 className="font-bold text-lg">AI Exam CMS</h1>

      {/* Profile */}
      {userData && (
        <div className="flex items-center gap-3">
          <span className="text-sm">{userData.firstName}</span>

          <img
            src={
              userData.profileImage ||
              "https://cdn-icons-png.flaticon.com/128/3940/3940417.png"
            }
            className="w-8 h-8 rounded-full object-cover"
            alt="profile"
          />

          <button
            onClick={handleLogout}
            className="text-sm bg-red-600 px-3 py-1 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
