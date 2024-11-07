import styled from "styled-components";
import UserInfo from "./user_info";
import { AnswerModal, QuestionModal } from "./modal";
import { useState } from "react";

const StyledProfileCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin: 16px;
  gap: 16px;

  background: rgba(237, 237, 237, 0.25);
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1),
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

export const ProfilePic = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background: var(--button-secondary);
`;

const ProfileCard = ({ name, bio, questionCount, onClick }) => {
  if (onClick) console.log("clicked"); // nothing shown
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <StyledProfileCard onClick={toggleModal}>
        <ProfilePic></ProfilePic>
        <Profile>
          <UserInfo
            name={name}
            bio={bio}
            questionCount={questionCount}
          ></UserInfo>
        </Profile>
      </StyledProfileCard>
      {isModalOpen && (
        <QuestionModal name={name} bio={bio} onClose={toggleModal} />
      )}
    </>
  );
};

export default ProfileCard;
