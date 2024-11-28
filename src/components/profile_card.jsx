import styled from "styled-components";
import UserInfo from "./user_info";
import { QuestionModal } from "./modal";
import { useState } from "react";

const StyledProfileCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 16px;
  // margin: 16px;
  gap: 16px;

  background: rgba(237, 237, 237, 0.25);
  border-radius: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1),
    inset 2px 2px 4px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(12px);

  width: 288px;
  height: 176px;

  opacity: 1;
  transform: scale(1);
  transition: 0.25s;

  &:hover {
    background-color: var(--white);
    transform: scale(1.05);
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const getBackgroundColor = (id) => {
  switch (id % 4) {
    case 0:
      return "#979cbf";
    case 1:
      return "#98dae0";
    case 2:
      return "#97c3d4";
    case 3:
      return "#98b8d0";
    default:
      return "#9488C5";
  }
};

// export const getProfileIcon = (id) => {
//   switch (id % 4) {
//     case 0:
//       return "🐋";
//     case 1:
//       return "🦜";
//     case 2:
//       return "🌵";
//     case 3:
//       return "✨";
//     default:
//       return "🥞";
//   }
// };

export const ProfilePic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 100%;
  background-color: ${(props) => getBackgroundColor(props.id)};
`;

const ProfileCard = ({ profile, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <StyledProfileCard onClick={toggleModal}>
        <ProfilePic id={profile.id}></ProfilePic>
        <Profile>
          <UserInfo
            id={profile.id}
            profileName={profile.username}
            bio={profile.bio}
            questionCount={profile.receivedQuestionCount}
            // email={profile.email}
          ></UserInfo>
        </Profile>
      </StyledProfileCard>
      {isModalOpen && <QuestionModal user={profile} onClose={toggleModal} />}
    </>
  );
};

export default ProfileCard;
