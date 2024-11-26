import styled from "styled-components";

import { AlignCenter, AlignRow } from "../components/layout";
import { Layout } from "../components/layout";
import { CardContainer } from "../components/layout";
import NavBar from "../components/navbar";
import { Subtitle } from "../components/subtitle";
import {
  ViewAnswerModal,
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
import TextButton from "../components/text_button";
import { StyledInboxCardWrapper } from "../components/layout";
import axiosInstance from "../utils/axiosInstance";

const InboxProfile = ({ name, bio }) => {
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
      <InboxProfile name={name} bio={bio}></InboxProfile>
      <StyledQuestionContent>이것은 질문입니다.</StyledQuestionContent>
      <Button on="true" onClick={onClick}>
        답변하기
      </Button>
    </StyledInboxCardWrapper>
  );
};

const StyledSection = styled.div``;

const QuestionSection = ({ user }) => {
  const newCount = 1;
  const oldCount = 0;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <StyledSection>
      <Subtitle>내 답변을 기다리는 질문 ({newCount})</Subtitle>
      {newCount === 0 ? (
        "새로운 질문이 없습니다!"
      ) : (
        <InboxCardWrapper
          name={user.name}
          bio={user.bio}
          onClick={toggleModal}
        />
      )}
      {isModalOpen && (
        <ViewAnswerModal
          name={user.name}
          bio={user.bio}
          onClose={toggleModal}
        />
      )}
      <Subtitle>답변을 보낸 질문 ({oldCount})</Subtitle>
      {oldCount === 0 && "아직 답변한 질문이 없습니다!"}
    </StyledSection>
  );
};

const AnswerSection = () => {
  const newCount = 1;
  const oldCount = 0;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <StyledSection>
      <Subtitle>내가 받은 답변 ({newCount})</Subtitle>
      {newCount === 0 ? (
        "아직 받은 답변이 없습니다."
      ) : (
        <InboxCardWrapper name={"myname"} bio={"bio"} onClick={toggleModal} />
      )}
      {isModalOpen && (
        <AnswerModal name={"myname"} bio={"bio"} onClose={toggleModal} />
      )}
      {/* <Subtitle>답변을 보낸 질문 ({oldCount})</Subtitle>
      {oldCount === 0 && "아직 답변한 질문이 없습니다!"} */}
    </StyledSection>
  );
};

const Inbox = ({ onClick }) => {
  // only for displaying
  //   const testQuestionList = [{ id: 1, name: "이지원", bio: "이것 뭐에요?" }];

  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {};
  });

  const [activeMenu, setActiveMenu] = useState("question");

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
          subtitle={
            activeMenu === "question" ? "내가 받은 질문" : "내가 받은 답변"
          }
          on={"true"}
        ></TitleArea>
        <CardContainer>
          <AlignRow>
            <TextButton onClick={() => setActiveMenu("question")}>
              질문
            </TextButton>
            <TextButton onClick={() => setActiveMenu("answer")}>
              답변
            </TextButton>
          </AlignRow>

          {activeMenu === "question" ? <QuestionSection /> : <AnswerSection />}
        </CardContainer>
      </Layout>
    </AlignCenter>
  );
};

export default Inbox;
