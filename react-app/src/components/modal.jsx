import styled from "styled-components";
import ButtonSet from "./button_set";
import Button from "./button";
import UserInfo from "./user_info";
import TextButton from "./text_button";
// import ProfileCard from "./profile_card";
// import { useState } from "react";
import ModalBackground from "./modal_background";
import InputField from "./input_field";

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

export const InlineProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  gap: 16px;
`;

export const ModalProfile = styled.div`
  background: rgba(237, 237, 237, 0.25);
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1),
    inset 2px 2px 4px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(12px);

  display: flex;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;

  width: 100%;

  padding: 16px;
  gap: 16px;
`;

export const StyledQuestionContent = styled.div`
  display: flex;
  background-color: var(--white);
  
  width: 100%;
  height: 100%;
  
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1),
    inset 2px 2px 4px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(12px);

  border-radius: 8px;
  padding: 16px;
  font-size: var(--content-font)
  font-weight: 500;
`;

const AnswerContent = styled.div`
  background: var(--white);
  font-size: var(--detail-font);
  font-weight: 300;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1),
    inset 2px 2px 4px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(2px);
  border-radius: 8px;
  padding: 16px;
`;

export const ModalProfilePic = styled.div`
  flex-shrink: 0;
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
          <InputField></InputField>
        </StyledQuestionContent>
        <ButtonSet>
          <Button onClick={onClose}>작성 취소</Button>
          <Button on={"true"} onClick={onClose}>
            질문 보내기
          </Button>
          {/* TODO: add procedure to submit question content */}
        </ButtonSet>
      </StyledModalContainer>
    </ModalBackground>
  );
};

export const AnswerModal = ({ name, bio, onClose }) => {
  return (
    <ModalBackground onClick={onClose}>
      <StyledModalContainer onClick={(e) => e.stopPropagation()}>
        <InlineProfileContainer>
          <ModalProfile>
            <ModalProfilePic></ModalProfilePic>
            <UserInfo name={name} bio={bio} questionCount={-1}></UserInfo>
          </ModalProfile>
          <StyledQuestionContent children="이것은 질문입니다."></StyledQuestionContent>
        </InlineProfileContainer>

        <AnswerContent children="이것은 답변입니다."></AnswerContent>

        <TextButton onClick={() => {}}>답변이 마음에 드셨나요?</TextButton>
        <ButtonSet>
          <Button onClick={onClose}>닫기</Button>
          <Button on={"true"}>질문 더하기</Button>
        </ButtonSet>
      </StyledModalContainer>
    </ModalBackground>
  );
};
