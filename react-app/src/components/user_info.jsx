import styled from "styled-components";

const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const UserName = styled.div`
  font-size: var(--content-font);
  font-weight: 500;
  align-self: stretch;
`;

const UserBio = styled.div`
  font-size: var(--detail-font);
  font-weight: 300;
  align-self: stretch;
`;

const QuestionCount = styled.div`
  margin-top: 16px;
  font-size: var(--detail-font);
  font-weight: 300;
  align-self: stretch;
`;

const UserInfo = ({ profileName, bio, questionCount }) => {
  return (
    <StyledUserInfo>
      <UserName>{profileName}</UserName>
      <UserBio>{bio}</UserBio>
      {questionCount !== -1 && (
        <QuestionCount>받은 질문 {questionCount}개</QuestionCount>
      )}
    </StyledUserInfo>
  );
};

export default UserInfo;
