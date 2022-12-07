import React from "react";
import ProfileHeader from "../../components/Header/ProfileHeader";
import Steps from "../../components/Profile/Steps";
import SelectDoctors from "../../components/Profile/SelectDoctors"

const ProfilePage = () => {
  return (
    <div className="relative">
      <ProfileHeader/>
      <Steps/>
      <SelectDoctors/>
    </div>
  );
};

export default ProfilePage;
