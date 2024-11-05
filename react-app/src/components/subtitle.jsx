import styled from "styled-components";

export const Subtitle = styled.div`
  color: ${(props) => (props.on ? "var(--white)" : "var(--black)")};
  font-size: var(--subtitle-font);
  font-weight: 500;
  margin-top: 4px;
  // margin-bottom: 0px;
  align-self: start;
`;
