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
import { getReceivedAnswer, getReceivedQuestion } from "../apis/qna";

const InboxProfile = ({ name, bio }) => {
  return (
    <ModalProfile>
      <ModalProfilePic></ModalProfilePic>
      <UserInfo name={name} bio={bio} questionCount={-1}></UserInfo>
    </ModalProfile>
  );
};

const InboxCardWrapper = ({ user, content, onClick }) => {
  return (
    <StyledInboxCardWrapper>
      <InboxProfile name={user.name} bio={user.bio}></InboxProfile>
      <StyledQuestionContent>{content}</StyledQuestionContent>
      <Button on="true" onClick={onClick}>
        답변하기
      </Button>
    </StyledInboxCardWrapper>
  );
};

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const QuestionSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const fetchQuestions = async () => {
    try {
      const receivedQuestions = await getReceivedQuestion();
      // console.log(receivedQuestions);
      setQuestions(receivedQuestions);
      setTotalCount(receivedQuestions.length);
    } catch (error) {
      console.error("Error on fetching received question", error);
    }
  };

  /* temp */
  const updateAnsweredCount = () => {
    const count = questions.filter((question) => question.isAnswered).length;
    setAnsweredCount(count);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    updateAnsweredCount();
  }, [questions]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const pendingCount = totalCount - answeredCount;

  return (
    <StyledSection>
      <Subtitle>내 답변을 기다리는 질문 ({pendingCount})</Subtitle>
      {pendingCount === 0
        ? "새로운 질문이 없습니다!"
        : questions.map((question) => {
            <InboxCardWrapper
              key={question.key}
              user={question.user}
              content={question.content}
            />;
          })}

      {/* {isModalOpen && (
        <ViewAnswerModal
          name={user.name}
          bio={user.bio}
          onClose={toggleModal}
        />
      )} */}

      {/* <Subtitle>답변을 보낸 질문 ({oldCount})</Subtitle>
      {oldCount === 0 && "아직 답변한 질문이 없습니다!"} */}
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

const Inbox = () => {
  // only for displaying
  //   const testQuestionList = [{ id: 1, name: "이지원", bio: "이것 뭐에요?" }];
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  });

  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

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
