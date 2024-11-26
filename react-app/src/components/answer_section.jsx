import { useState, useEffect } from "react";
import { getReceivedAnswer } from "../apis/qna";

import { Subtitle } from "./subtitle";
import { StyledSection } from "../pages/inbox";
import { InboxCardWrapper } from "../pages/inbox";

const AnswerSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const fetchAnswers = async () => {
    try {
      const receivedAnswers = await getReceivedAnswer();
      //   console.log(receivedAnswers);
      setAnswers(receivedAnswers);
      setTotalCount(receivedAnswers.length);
    } catch (error) {
      console.error("Error on fetching received answers", error);
    }
  };

  useEffect(() => {
    fetchAnswers();
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <StyledSection>
      <Subtitle>내가 받은 답변 ({totalCount})</Subtitle>
      {totalCount === 0
        ? "새로운 답변이 없습니다!"
        : answers.map((answer) => {
            <InboxCardWrapper
              key={answer.key}
              user={answer.user}
              content={answer.content}
              onClick={toggleModal}
            />;
          })}

      {/* {isModalOpen && (
        <ViewAnswerModal
          name={user.name}
          bio={user.bio}
          onClose={toggleModal}
        />
      )} */}
    </StyledSection>
  );
};

export default AnswerSection;
