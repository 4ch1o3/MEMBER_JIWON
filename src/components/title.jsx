import styled from "styled-components";
import { Subtitle } from "./subtitle";

const StyledTitleArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
`;

export const TitleArea = ({ title, subtitle, on }) => {
  return (
    <StyledTitleArea>
      <Title>{title}</Title>
      <Subtitle on={on}>{subtitle}</Subtitle>
    </StyledTitleArea>
  );
};

export const Title = styled.div`
  color: var(--white);
  font-size: var(--title-font);
  font-weight: 700;
  margin-bottom: 4px;
  align-self: start;
`;
