import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import LoginPage from "./pages/login.jsx";
import Home from "./pages/home.jsx";
import GlobalStyle from "./GlobalStyle.js";
import "./assets/fonts/fonts.css";

const Layout = styled.div`
  // padding-left: 368px;
  // padding-right: 368px;
  display: flex;
`;

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/signup" element={<SignupPage />} /> */}
          {/* <Route path="/" element={< />} /> */}
          {/* <Route path="/" element={< />} /> */}
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
