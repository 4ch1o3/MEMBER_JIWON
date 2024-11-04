import styled from "styled-components";

const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ModalBackground;
