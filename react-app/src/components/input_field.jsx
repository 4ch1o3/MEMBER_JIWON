import styled from "styled-components";

const StyledInput = styled.input`
  font-size: var(--detail-font);
  font-weight: 300;
  border: none;
  width: 100%;
  height: 100%;
  background: none;
  padding: 16px;
  text-align: left;
`;

function InputField({ label, placeholder }) {
  return <StyledInput type="text" placeholder={placeholder} />;
}

export default InputField;
