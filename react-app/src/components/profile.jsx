import React from "react";
import TextBlock from "./text-block";
import "../styles/profile.css";

const ProfileContent = ({ name, bio }) => {
  let className = "content";

  const formattedName = (
    <TextBlock textType="content" content={name}></TextBlock>
  );
  const formattedBio = (
    <TextBlock textType="small-detail" content={bio}></TextBlock>
  );
  let profilePic = <div className="profile-pic"></div>;

  return (
    <div className={className}>
      {profilePic}
      {formattedName}
      {formattedBio}
    </div>
  );
};

// export default ProfileContent;

const Profile = ({ name, bio }) => {
  return (
    <div className="profile">
      <ProfileContent name={name} bio={bio}></ProfileContent>
    </div>
  );
};

export default Profile;
