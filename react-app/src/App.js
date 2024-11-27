import "./App.css";

import styled from "styled-components";

import { useAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// import NavBar from "./components/navbar.jsx";

const Layout = styled.div``;

function App() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/");
  //   }
  //   console.log("isLoggedIn: ", isLoggedIn);
  // }, [isLoggedIn, navigate]);
  return <Layout></Layout>;
}

export default App;
