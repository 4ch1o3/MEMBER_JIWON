import { useState, useEffect } from "react";
import { getReceivedAnswer } from "../apis/qna";

import { Subtitle } from "./subtitle";
import { StyledSection } from "../pages/inbox";
import { InboxCardWrapper } from "../pages/inbox";

import { ViewAnswerModal } from "./modal";

const AnswerSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [modalData, setModalData] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const fetchAnswers = async () => {
    try {
      const receivedAnswers = await getReceivedAnswer();
      setAnswers(receivedAnswers);
      setTotalCount(receivedAnswers.length);
    } catch (error) {
      console.error("Error on fetching received answers", error);
    }
  };

  useEffect(() => {
    fetchAnswers();
  }, []);

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  const handleModalOpen = (data) => {
    setModalData(data);
    setIsModalOpen();
  };
  console.log(answers);
  return (
    <StyledSection>
      <Subtitle>내가 받은 답변 ({totalCount})</Subtitle>
      {totalCount === 0
        ? "새로운 답변이 없습니다!"
        : answers.map((answer) => (
            <InboxCardWrapper
              key={answer}
              answer={answer}
              onClick={() => handleModalOpen(answer)}
              buttonContent="답변 보기"
            />
          ))}

      {!isModalOpen && modalData && (
        <ViewAnswerModal question={modalData} onClose={toggleModal} />
      )}
    </StyledSection>
  );
};

export default AnswerSection;
