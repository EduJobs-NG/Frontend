import React, { useEffect, useState } from "react";
import api from "../../utils/api";

const ProfileCard = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("/jobseeker/user-profile-update/");
        setProfile(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="flex justify-center p-3 bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <img
          src={profile.avatar}
          alt={"Firstname"}
          className="w-32 h-32 mx-auto rounded-full"
        />

        <h2 className="text-2xl font-semibold text-center mt-4">
          {profile.user.first_name} {profile.user.last_name}
        </h2>

        <p className="text-gray-600 text-center mt-2">
          {profile.professional_info[0].study_summary}
        </p>

        <div className="text-center mt-4">
          <button className="bg-blue hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
