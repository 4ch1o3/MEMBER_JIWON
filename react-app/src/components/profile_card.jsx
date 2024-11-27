import styled from "styled-components";
import UserInfo from "./user_info";
import { AnswerModal, QuestionModal } from "./modal";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { createQuestion } from "../apis/qna";

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

export const ProfilePic = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background: var(--button-secondary);
`;

const ProfileCard = ({ profile, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const user = {
    id: profile.id,
    username: profile.username,
    bio: profile.bio,
    receivedQuestionCount: profile.receivedQuestionCount,
    email: profile.email,
  };

  return (
    <>
      <StyledProfileCard onClick={toggleModal}>
        <ProfilePic></ProfilePic>
        <Profile>
          <UserInfo
            id={user.id}
            username={user.username}
            bio={user.bio}
            questionCount={user.receivedQuestionCount}
            email={user.email}
          ></UserInfo>
        </Profile>
      </StyledProfileCard>
      {isModalOpen && <QuestionModal user={user} onClose={toggleModal} />}
    </>
  );
};

export default ProfileCard;
