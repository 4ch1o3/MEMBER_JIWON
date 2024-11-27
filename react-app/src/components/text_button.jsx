import styled from "styled-components";

const StyledButton = styled.button`
  width: fit-content;
  border: none;
  background-color: var(--white);
  font-size: var(--detail-font);
  font-weight: 300;
  // margin: 8px;
  padding: 0;

  &:hover {
    color: var(--primary);
  }
`;

function TextButton({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default TextButton;
