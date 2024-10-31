import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page.jsx";
import MemberPage from "./pages/member-page.jsx";
import SignupPage from "./pages/signup-page.jsx";

import "./components/colors.jsx";
import "./styles/divider.css";
import "./styles/navbar.css";
import "./styles/text-block.css";
import "./styles/button.css";
import "./styles/login-form.css";
import "./styles/menubar.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/memberPage" element={<MemberPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route path="/" element={< />} /> */}
        {/* <Route path="/" element={< />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
