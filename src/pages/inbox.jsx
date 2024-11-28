import styled from "styled-components";

import { AlignCenter, AlignRow } from "../components/layout";
import { Layout } from "../components/layout";
import { CardContainer } from "../components/layout";
import NavBar from "../components/navbar";
import {
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
import { StyledInboxCardWrapper, FixedWidth } from "../components/layout";
import QuestionSection from "../components/question_section";
import AnswerSection from "../components/answer_section";
import { getUser } from "../apis/user";

export const InboxProfile = ({ authorName, authorBio }) => {
  return (
    <ModalProfile>
      <ModalProfilePic></ModalProfilePic>
      <UserInfo
        profileName={authorName}
        bio={authorBio}
        questionCount={-1}
      ></UserInfo>
    </ModalProfile>
  );
};

const AuthorProfileContainer = styled.div`
  width: 296px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InboxCardWrapper = ({
  question,
  answer,
  onClick,
  buttonContent,
}) => {
  const [bio, setBio] = useState("");

  useEffect(() => {
    async function fetchAllUsers() {
      try {
        const data = await getUser(
          question ? question.authorId : answer.authorId
        );
        setBio(data.bio);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAllUsers();
  });

  return (
    <StyledInboxCardWrapper>
      <AuthorProfileContainer>
        <InboxProfile
          authorName={question ? question.author : answer.author}
          authorBio={bio}
        ></InboxProfile>
      </AuthorProfileContainer>

      <StyledQuestionContent>
        {question ? question.content : answer.content}
      </StyledQuestionContent>
      {buttonContent && (
        <Button on="true" onClick={onClick} children={buttonContent}></Button>
      )}
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
        <FixedWidth>
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

            {activeMenu === "question" ? (
              <QuestionSection />
            ) : (
              <AnswerSection />
            )}
          </CardContainer>
        </FixedWidth>
      </Layout>
    </AlignCenter>
  );
};

export default Inbox;
