import styled from "styled-components";

export const Subtitle = styled.div`
  width: fit-content;
  color: ${(props) => (props.on ? "var(--white)" : "var(--black)")};
  font-size: var(--subtitle-font);
  font-weight: 500;
  margin-top: 8px;
  margin-bottom: 8px;
  // padding: 0px 16px 16px 0px;
  align-self: start;
`;
