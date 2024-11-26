import styled from "styled-components";

import { InputForm } from "../components/input_field";
import TextButton from "../components/text_button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
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

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setLogin, isLoggedIn } = useAuth();

  const login = (email, password) => {
    return axios
      .post(
        "api/user/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  };

  // const handleLogin = async () => {
  //   await login(email, password).then((data) => {
  //     setLogin();
  //   });
  // };
  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      setLogin();
      navigate("/home");
    } catch (error) {
      alert("Login failed" + );
      console.log("Login failed");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
    console.log("isLoggedIn: ", isLoggedIn);
  }, [isLoggedIn, navigate]);

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
          <InputForm
            type="id"
            required
            onChange={(e) => {
              setEmail(e.target.value);
              // console.log(e.target.value);
            }}
          ></InputForm>
          <InputForm
            type="pw"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></InputForm>
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
              handleLogin();
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
