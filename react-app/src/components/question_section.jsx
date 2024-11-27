import { useState, useEffect } from "react";
import { getReceivedQuestion } from "../apis/qna";

import styled from "styled-components";
import { Subtitle } from "./subtitle";
import { StyledSection } from "../pages/inbox";
import { InboxCardWrapper } from "../pages/inbox";
import { AnswerModal } from "./modal";

const QuestionSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [modalData, setModalData] = useState(null);

  const fetchQuestions = async () => {
    try {
      const receivedQuestions = await getReceivedQuestion();
      console.log(receivedQuestions);
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
    // console.log(questions);
  }, []);

  useEffect(() => {
    updateAnsweredCount();
  }, [questions]);

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  const pendingCount = totalCount - answeredCount;

  const handleModalOpen = (data) => {
    setModalData(data);
    setIsModalOpen();
  };

  return (
    <StyledSection>
      <Subtitle>내 답변을 기다리는 질문 ({pendingCount})</Subtitle>
      {pendingCount === 0
        ? "새로운 질문이 없습니다!"
        : questions.map((question) => (
            <InboxCardWrapper
              key={question.key}
              questionId={question.questionId}
              authorId={question.authorId}
              targetId={question.targetId}
              content={question.content}
              answer={question.answer}
              onClick={() => handleModalOpen(question)}
            />
          ))}

      {isModalOpen && modalData && (
        <AnswerModal
          key={modalData.key}
          id={modalData.id}
          name={modalData.user.username}
          email={modalData.user.email}
          bio={modalData.user.bio}
          questionCount={modalData.receivedQuestionCount}
        />
      )}

      {/* <Subtitle>답변을 보낸 질문 ({oldCount})</Subtitle>
      {oldCount === 0 && "아직 답변한 질문이 없습니다!"} */}
    </StyledSection>
  );
};

export default QuestionSection;
