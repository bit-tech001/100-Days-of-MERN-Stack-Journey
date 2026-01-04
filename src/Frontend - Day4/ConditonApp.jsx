import { useState } from "react";
import profileImg from "../assets/1750936117114.jpg";


const LinkedInProfile = () => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-black relative overflow-hidden">
      
      {/* GLOW BACKGROUND */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

      {/* CARD */}
      <div className="relative z-10 bg-white/90 backdrop-blur-md w-full max-w-md rounded-xl shadow-2xl overflow-hidden">
        
        {/* HEADER */}
        <div className="h-24 bg-[#0A66C2]" />

        <div className="px-6 pb-6 text-center">
          
          {/* PROFILE IMAGE */}
          <img
            src={profileImg}
            alt="profile"
            className="-mt-14 mx-auto w-28 h-28 rounded-full border-4 border-white shadow-md"
          />

          {/* NAME */}
          <h2 className="mt-3 text-xl font-semibold text-gray-900">
            Bitu Pathak
          </h2>

          {/* ROLE */}
          <p className="text-gray-600 text-sm">
            Frontend Developer | React • Tailwind
          </p>

          {/* STATS */}
          <div className="flex justify-around mt-6 border-t pt-4 text-sm">
            <div>
              <p className="text-gray-500">Connections</p>
              <p className="font-semibold text-[#0A66C2]">500+</p>
            </div>

            <div>
              <p className="text-gray-500">Followers</p>
              <p className="font-semibold text-[#0A66C2]">1,233</p>
            </div>
          </div>

          {/* FOLLOW BUTTON */}
          <button
            onClick={() => setIsFollowed(!isFollowed)}
            className={`mt-6 w-full py-2 rounded-full font-semibold transition
              ${
                isFollowed
                  ? "bg-gray-500 text-white"
                  : "bg-[#0A66C2] text-white"
              }
            `}
          >
            {isFollowed ? "Following" : "Follow"}
          </button>

          {/* CONDITIONAL MESSAGE */}
          {isFollowed && (
            <p className="mt-4 text-sm font-medium text-[#0A66C2] bg-[#E8F3FF] py-2 rounded-lg">
              ✔ Following · Thanks for connecting
            </p>
          )}

        </div>
      </div>
    </div>
  );
};

export default LinkedInProfile;
