import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: var(--white);
  font: var(--detail-font);
  margin: 16px;

  &:hover {
    color: var(--primary);
  }
`;

function TextButton({ children, onClick }) {
  return <StyledButton onClick={onclick}>{children}</StyledButton>;
}

export default TextButton;
