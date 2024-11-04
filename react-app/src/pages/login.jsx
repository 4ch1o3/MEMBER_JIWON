import styled from "styled-components";
import TextButton from "../components/text_button";
import { useNavigate } from "react-router-dom";
// import {useAuth} from

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const PageTitle = styled.div`
  width: 436px;

  color: var(--white);
  font-family: "Pretendard-Black";
  font-size: 64px;
  margin: 144px;
`;

const InputForm = styled.input.attrs((props) => ({
  type: props.type === "pw" ? "password" : "text",
  placeholder: props.type === "pw" ? "PW" : "ID",
}))`
  color: var(--black);
  font-family: "Pretendard-Light";
  font-size: 14px;
  padding: 16px;
  border: 0.5px solid;
  border-color: var(--primary);
  border-radius: 17px;

  align-self: stretch;
  width: 240px;
  height: 34px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LoginBlock = styled.div`
  background-color: var(--white);
  width: 280px;
  display: flex;
  flex-direction: column;
  padding: 64px 20px 64px 20px;
  margin: 48px;
  border-radius: 24px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const BlockTitle = styled.div`
  font: var(--title-font);
`;

// TODO: make Formblock!!!
// const FormBlock = ({ formTitle, formCount, buttonLabels }) => {
//   <LoginBlock>
//     <FormContainer>
//       <form>
//         <InputForm></InputForm>
//         <InputForm></InputForm>
//       </form>
//     </FormContainer>
//     <Wrapper>
//       <TextButton></TextButton>
//       <TextButton></TextButton>
//     </Wrapper>
//   </LoginBlock>;
// };

function Login() {
  const navigate = useNavigate();

  return (
    <Container>
      <PageTitle>
        Welcome!<br></br>
        <br></br>
        Feel free to Ask & Answer
      </PageTitle>
      <LoginBlock>
        <BlockTitle>Login</BlockTitle>
        <FormContainer>
          <InputForm type="id" required></InputForm>
          <InputForm type="pw" required></InputForm>
        </FormContainer>
        <Wrapper>
          <TextButton
            onClick={() => {
              navigate("/");
            }}
          >
            회원가입
          </TextButton>
          <TextButton
            onClick={() => {
              navigate("/home");
            }}
          >
            로그인
          </TextButton>
        </Wrapper>
      </LoginBlock>
    </Container>
  );
}

export default Login;
