import styled from "styled-components";
import ButtonSet from "./button_set";
import Button from "./button";
import UserInfo from "./user_info";
import TextButton from "./text_button";
import ProfileCard from "./profile_card";
import { useState } from "react";
import ModalBackground from "./modal_background";

const StyledModalContainer = styled.div`
  width: 736px;
  height: 518px;

  background-color: var(--white);
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 32px;
`;

// use when only profile is shown on top
const ModalProfile = styled.div`
  // glass
  background: rgba(237, 237, 237, 0.25);
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1),
    inset 2px 2px 4px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(12px);

  display: flex;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;

  align-self: stretch;
  padding: 16px;
  gap: 16px;
`;

// use when profile and content both are on top
const StyledAnswererProfile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const ModalContentContainer = styled.div`
  display: flex;
  padding: 16px;
`;

const StyledQuestionContent = styled.div`
  background-color: var(--white);
  height: 100%;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1),
    inset 2px 2px 4px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(12px);

  align-self: stretch;
  border-radius: 8px;
  padding: 16px;
`;

const AnswerContent = styled.div`
  background: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
  border-radius: 8px;
  padding: 16px;
`;

const ModalProfilePic = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background: var(--button-secondary);
`;

export const QuestionModal = ({ name, bio, onClose }) => {
  return (
    <ModalBackground onClick={onClose}>
      <StyledModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalProfile>
          <ModalProfilePic></ModalProfilePic>
          <UserInfo name={name} bio={bio} questionCount={-1}></UserInfo>
        </ModalProfile>
        <StyledQuestionContent>
          {/* TODO: add input area */}
          {/* <form>
            <textarea placeholder="질문을 입력하세요."></textarea>
          </form> */}
        </StyledQuestionContent>
        <ButtonSet>
          <Button onClick={onClose}>작성 취소</Button>
          <Button on={"true"}>질문 보내기</Button>
        </ButtonSet>
      </StyledModalContainer>
    </ModalBackground>
  );
};

export const AnswerModal = ({ name, bio, onClose }) => {
  return (
    <ModalBackground>
      <StyledModalContainer>
        <StyledAnswererProfile>
          <ModalProfile>
            <ModalProfilePic></ModalProfilePic>
            <UserInfo name={name} bio={bio} questionCount={-1}></UserInfo>
            <StyledQuestionContent>{}</StyledQuestionContent>
          </ModalProfile>
        </StyledAnswererProfile>
        <AnswerContent></AnswerContent>
        <ButtonSet>
          <Button on={false}>닫기</Button>
          <Button on={true}>질문 더하기</Button>
        </ButtonSet>
        <TextButton onClick={() => {}}>답변이 마음에 드셨나요?</TextButton>
      </StyledModalContainer>
    </ModalBackground>
  );
};
