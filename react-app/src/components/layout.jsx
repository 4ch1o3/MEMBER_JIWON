import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.align === "row" ? "row" : "column")};
  flex-wrap: wrap;
  width: 993px;
  // max-width: 993px;
  // min-width: 352px;

  border-radius: 16px;
  background: var(--white);
  gap: 32px;
  padding: 32px;
  margin-bottom: 144px;
  margin-top: 24px;
`;

export const AlignCenter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 144px;
  padding-right: 144px;
`;
