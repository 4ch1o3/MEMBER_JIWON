import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { signup } from "../apis/user";

import {
  Container,
  LoginPageTitle,
  BlockTitle,
  LoginBlock,
  FormContainer,
  Wrapper,
} from "./login";
import TextButton from "../components/text_button";
import { InputForm } from "../components/input_field";

function SignUp() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      // navigate("/home");
    }
  });

  const handleSignUp = async () => {
    try {
      await signup(username, password1, password2, email);
      alert("회원가입 성공! 로그인해주세요.");
      navigate("/");
    } catch (error) {
      alert("회원가입 실패. 다시 시도해 주세요.");
      console.error(error);
    }
  };

  return (
    <Container>
      <LoginPageTitle>
        Welcome!<br></br>
        <br></br>
        Feel free to Ask & Answer
      </LoginPageTitle>

      <LoginBlock>
        <BlockTitle>Sign Up</BlockTitle>
        <FormContainer>
          사용자 이름
          <InputForm
            placeholder="ID"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          비밀번호
          <InputForm
            placeholder="Password"
            type="pw"
            required
            onChange={(e) => setPassword1(e.target.value)}
          />
          비밀번호 확인
          <InputForm
            placeholder="Confirm Password"
            type="pw"
            required
            onChange={(e) => setPassword2(e.target.value)}
          />
          이메일
          <InputForm
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormContainer>
        <Wrapper>
          <TextButton
            onClick={() => {
              handleSignUp();
            }}
          >
            회원가입
          </TextButton>
        </Wrapper>
      </LoginBlock>
    </Container>
  );
}

export default SignUp;
