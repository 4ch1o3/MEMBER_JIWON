import { useState, useEffect } from "react";
import { getReceivedQuestion } from "../apis/qna";

import { Subtitle } from "./subtitle";
import { StyledSection } from "../pages/inbox";
import { InboxCardWrapper } from "../pages/inbox";
import { AnswerModal, ViewAnswerModal } from "./modal";

const QuestionSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [modalData, setModalData] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const fetchQuestions = async () => {
    try {
      const receivedQuestions = await getReceivedQuestion();
      setQuestions(receivedQuestions);
      setTotalCount(receivedQuestions.length);
    } catch (error) {
      console.error("Error on fetching received question", error);
    }
  };

  /* temp */
  const updateAnsweredCount = () => {
    const count = questions.filter(
      (question) => question.answer !== null
    ).length;
    setAnsweredCount(count);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    updateAnsweredCount();
  });

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
        : questions
            .filter((question) => question.answer === null)
            .map((question) => (
              <InboxCardWrapper
                key={question.questionId}
                question={question}
                onClick={() => handleModalOpen(question)}
                buttonContent={"답변하기"}
              />
            ))}

      {!isModalOpen && !modalData.answer && (
        <AnswerModal question={modalData} onClose={toggleModal} />
      )}
      {!isModalOpen && modalData.answer && (
        <ViewAnswerModal
          question={modalData}
          // answer={modalData}
          onClose={toggleModal}
        />
      )}
      <br />
      <Subtitle>답변을 보낸 질문 ({answeredCount})</Subtitle>
      {answeredCount === 0
        ? "아직 답변한 질문이 없습니다!"
        : questions
            .filter((question) => question.answer !== null)
            .map((question) => (
              <InboxCardWrapper
                key={question.questionId}
                question={question}
                onClick={() => handleModalOpen(question)}
                buttonContent={"답변 더하기"}
              />
            ))}
    </StyledSection>
  );
};

export default QuestionSection;
