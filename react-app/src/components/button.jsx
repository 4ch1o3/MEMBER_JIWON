import styled from "styled-components";

const Button = styled.div`
  background: ${(props) =>
    props.on ? "var(--button-primary)" : "var(--button-secondary)"};
  color: ${(props) => (props.on ? "var(--white)" : "var(--black)")};

  display: flex;
  flex-direction: row;
  border-radius: 8px;
  padding: 16px;
  gap: 16px;

  width: fit-content;
  height: 48px;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);

  font-family: "Pretendard-Light";

  not working
  opacity: 1;
  transition: 0.25s;
  &:hover {
    opacity: 75%;
  }
`;

export default Button;
