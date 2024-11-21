import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.align === "row" ? "row" : "column")};
  flex-wrap: wrap;

  // TODO: fix width by viewport size
  width: fit-content;

  border-radius: 16px;
  background: var(--white);

  margin-top: 24px;

  gap: 16px;
  padding: 32px;

  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  // TODO: fix width by viewport width
  width: 100%;
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
