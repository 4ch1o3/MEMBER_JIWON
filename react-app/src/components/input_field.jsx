import styled from "styled-components";

/* this is for long input */
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

export function InputField({ label, placeholder }) {
  return <StyledInput type="text" placeholder={placeholder} />;
}

/* this is for id, pw form */
export const InputForm = styled.input.attrs((props) => ({
  type: props.type === "pw" ? "password" : "text",
  placeholder: props.placeholder || props.type,
}))`
  color: var(--black);
  // font-size: 14px;
  padding: 16px;
  border: 0.5px solid;
  border-color: var(--primary);
  border-radius: 17px;

  align-self: stretch;
  width: 240px;
  height: 34px;
`;
