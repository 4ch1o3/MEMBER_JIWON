import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import LoginPage from "./pages/login.jsx";
import Home from "./pages/home.jsx";
import Inbox from "./pages/inbox.jsx";
import GlobalStyle from "./GlobalStyle.js";
import "./assets/fonts/fonts.css";
import MyPage from "./pages/mypage.jsx";
// import NavBar from "./components/navbar.jsx";

const Layout = styled.div`
  // padding-left: 368px;
  // padding-right: 368px;
  display: flex;
`;

function App() {
  // TODO: add authcontext and use it to render NavBar or not
  return (
    <Layout>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/signup" element={<SignupPage />} /> */}
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
