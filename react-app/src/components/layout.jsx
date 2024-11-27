import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.align === "row" ? "row" : "column")};
  flex-wrap: wrap;

  width: 100%;
  min-width: fit-content;

  border-radius: 16px;
  background: var(--white);

  margin-top: 24px;
  justify-content: center;

  gap: 16px;
  padding: 32px;
  padding-bottom: 48px;

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
  height: 100%;
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
  flex-shrink: 0;
`;

export const AlignColumn = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 16px;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-left: 144px;
  padding-right: 144px;
  padding-bottom: 144px;
`;

export const FullWidth = styled.div`
  width: 1568px;
`;

export const FullHeight = styled.div`
  min-height: 540px;
`;
