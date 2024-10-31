import React from "react";
import TextBlock from "../components/text-block";
import Divider from "../components/divider";
import LoginForm from "../components/login-form";
import Button from "../components/button";
import { Link } from "react-router-dom";

const LoginPage = (props) => {
  return (
    <div className="page">
      <TextBlock textType="title" content="Login"></TextBlock>
      <form>
        <LoginForm formType="id"></LoginForm>
        <LoginForm formType="pw"></LoginForm>
      </form>
      {/* required not working */}
      <Link to="/memberpage">
        <Button buttonType="text-only" content="로그인"></Button>
      </Link>

      <Divider dividerType="button"></Divider>
      <Link to="/signup">
        <Button buttonType="text-only" content="회원가입"></Button>
      </Link>
    </div>
  );
};

export default LoginPage;
