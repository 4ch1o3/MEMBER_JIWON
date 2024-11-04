import styled from "styled-components";

const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const UserName = styled.div`
  font: var(--content-font);
  align-self: stretch;
`;

const UserBio = styled.div`
  font: var(--detail-font);
  align-self: stretch;
`;

const QuestionCount = styled.div`
  margin-top: 16px;
  font: var(--detail-font);
  align-self: stretch;
`;

const UserInfo = ({ name, bio, questionCount }) => {
  if (questionCount === -1) {
    return (
      <StyledUserInfo>
        <UserName>{name}</UserName>
        <UserBio>{bio}</UserBio>
      </StyledUserInfo>
    );
  } else {
    return (
      <StyledUserInfo>
        <UserName>{name}</UserName>
        <UserBio>{bio}</UserBio>
        <QuestionCount>받은 질문 {questionCount}개</QuestionCount>
      </StyledUserInfo>
    );
  }
};

export default UserInfo;
