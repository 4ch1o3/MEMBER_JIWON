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

const LoginPageTitle = styled.div`
  width: 436px;

  color: var(--white);

  font-weight: 900;
  font-size: 64px;
  margin: 144px;
`;

const InputForm = styled.input.attrs((props) => ({
  type: props.type === "pw" ? "password" : "text",
  placeholder: props.type === "pw" ? "PW" : "ID",
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
  font-weight: 700;
  font-size: var(--title-font);
`;

// TODO: make Formblock!!!
// const FormBlock = ({ type }) => {
//   return (
//     <LoginBlock>
//       <BlockTitle>{type.title}</BlockTitle>
//       <FormContainer>
//         <form>{<InputForm></InputForm> * type.formCount}</form>
//       </FormContainer>
//       <Wrapper>
//         <TextButton></TextButton>
//         <TextButton></TextButton>
//       </Wrapper>
//     </LoginBlock>
//   );
// };

// function IndexPage() {
//   const type = [
//     { id: 1, title: "Login", formCount: 2 },
//     {
//       id: 2,
//       title: "Sign Up",
//       formCount: 3,
//     },
//   ];
//   // if ("/") return <FormBlock type="login"></FormBlock>;
// }

function Login() {
  const navigate = useNavigate();

  return (
    <Container>
      <LoginPageTitle>
        Welcome!<br></br>
        <br></br>
        Feel free to Ask & Answer
      </LoginPageTitle>

      <LoginBlock>
        <BlockTitle>Login</BlockTitle>
        <FormContainer>
          <InputForm type="id" required></InputForm>
          <InputForm type="pw" required></InputForm>
        </FormContainer>
        <Wrapper>
          <TextButton
            onClick={() => {
              navigate("/signup");
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
