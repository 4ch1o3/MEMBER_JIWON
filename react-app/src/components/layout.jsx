import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.align === "row" ? "row" : "column")};
  flex-wrap: wrap;

  width: fit-content;
  // max-width: 993px;

  border-radius: 16px;
  background: var(--white);

  margin-top: 24px;
  justify-content: center;

  gap: 16px;
  padding: 32px;

  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;

export const StyledInboxCardWrapper = styled.div`
  height: fit-content;

  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: fit-content;
  margin: ;
`;

export const AlignCenter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AlignRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export const AlignColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  // gap: 32px;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 144px;
  padding-right: 144px;
  padding-bottom: 144px;
`;
