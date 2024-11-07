import styled from "styled-components";

import { AlignCenter } from "../components/layout";
import { Layout } from "../components/layout";
import { CardContainer } from "../components/layout";
import NavBar from "../components/navbar";
import { Subtitle } from "../components/subtitle";
import {
  AnswerModal,
  //   StyledAnswererProfile,
  StyledQuestionContent,
} from "../components/modal";
import { ModalProfile } from "../components/modal";
import UserInfo from "../components/user_info";
import { ModalProfilePic } from "../components/modal";
import Button from "../components/button";
import { TitleArea } from "../components/title";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const StyledInboxCardWrapper = styled.div`
  height: fit-content;

  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

const InboxCard = ({ name, bio }) => {
  return (
    <ModalProfile>
      <ModalProfilePic></ModalProfilePic>
      <UserInfo name={name} bio={bio} questionCount={-1}></UserInfo>
    </ModalProfile>
  );
};

const InboxCardWrapper = ({ name, bio, onClick }) => {
  return (
    <StyledInboxCardWrapper>
      <InboxCard name={name} bio={bio}></InboxCard>
      <StyledQuestionContent>이것은 질문입니다.</StyledQuestionContent>
      <Button on="true" onClick={onClick}>
        답변하기
      </Button>
    </StyledInboxCardWrapper>
  );
};

// TODO: add received answer inbox?
const Inbox = ({ name, bio, onClick }) => {
  const newCount = 1;
  const oldCount = 0;

  // only for displaying
  //   const testQuestionList = [{ id: 1, name: "이지원", bio: "이것 뭐에요?" }];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  });
  return (
    <AlignCenter>
      <NavBar></NavBar>
      <Layout>
        <TitleArea
          title="Inbox"
          subtitle="내가 받은 질문"
          on={"true"}
        ></TitleArea>
        <CardContainer>
          <Subtitle>내 답변을 기다리는 질문 ({newCount})</Subtitle>
          {newCount === 0 ? (
            "새로운 질문이 없습니다!"
          ) : (
            <InboxCardWrapper
              name={"이지원"}
              bio={"이것 뭐에요?"}
              onClick={toggleModal}
            />
          )}
          {isModalOpen && (
            <AnswerModal
              name={"이지원"}
              bio={"이것 뭐에요?"}
              onClose={toggleModal}
            />
          )}
          <Subtitle>답변을 보낸 질문 ({oldCount})</Subtitle>
          {oldCount === 0 && "아직 답변한 질문이 없습니다!"}
        </CardContainer>
      </Layout>
    </AlignCenter>
  );
};

export default Inbox;
