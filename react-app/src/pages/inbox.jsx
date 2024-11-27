import styled from "styled-components";

import { AlignCenter, AlignRow, FullWidth } from "../components/layout";
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
import QuestionSection from "../components/question_section";
import AnswerSection from "../components/answer_section";
import { getUser } from "../apis/user";

const InboxProfile = ({ authorId }) => {
  const authorProfile = async (authorId) => {
    await getUser(authorId);
  };

  return (
    <ModalProfile>
      <ModalProfilePic></ModalProfilePic>
      <UserInfo
        profileName={authorProfile.username}
        bio={authorProfile.bio}
        questionCount={-1}
      ></UserInfo>
    </ModalProfile>
  );
};

export const InboxCardWrapper = ({
  authorId,
  targetId,
  content,
  answer,
  onClick,
}) => {
  return (
    <StyledInboxCardWrapper>
      <InboxProfile authorId={authorId}></InboxProfile>
      <StyledQuestionContent>{content}</StyledQuestionContent>
      <Button on="true" onClick={onClick}>
        답변하기
      </Button>
    </StyledInboxCardWrapper>
  );
};

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

const Inbox = () => {
  // only for displaying
  //   const testQuestionList = [{ id: 1, name: "이지원", bio: "이것 뭐에요?" }];
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  });

  const [activeMenu, setActiveMenu] = useState("question");

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
          <FullWidth>
            <AlignRow>
              <TextButton onClick={() => setActiveMenu("question")}>
                질문
              </TextButton>
              <TextButton onClick={() => setActiveMenu("answer")}>
                답변
              </TextButton>
            </AlignRow>

            {activeMenu === "question" ? (
              <QuestionSection />
            ) : (
              <AnswerSection />
            )}
          </FullWidth>
        </CardContainer>
      </Layout>
    </AlignCenter>
  );
};

export default Inbox;
