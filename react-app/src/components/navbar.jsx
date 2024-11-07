import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;
  gap: 64px;

  // TODO: which one covers fully?
  // width: 100vw;
  width: 100%;
  margin: 0;
  height: 48px;
  left: 0px;
  top: 0px;
  margin-bottom: 80px;

  background: rgba(237, 237, 237, 0.25);

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1),
    inset 2px 2px 4px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(12px);
`;

const navMenus = [
  { id: 1, name: "Home" },
  { id: 2, name: "Inbox" },
  { id: 3, name: "MyPage" },
  { id: 4, name: "Logout" },
];

const StyledNavMenu = styled.div`
  font: var(--content);
  color: var(--white);

  &:hover {
    cursor: pointer;
    transition: 0.25s;
    color: rgba(237, 237, 237, 0.75);
  }
`;

const NavBar = ({ menu }) => {
  const navigate = useNavigate();
  const { logout, isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
    }
  });
  return (
    <StyledNavBar>
      {navMenus.map((navMenu) => (
        <StyledNavMenu
          key={navMenu.id}
          onClick={() => {
            if (navMenu.name === "Logout") {
              logout();
            } else {
              navigate(`/${navMenu.name.toLowerCase()}`);
            }
          }} // only navigate if name is not logout
        >
          {navMenu.name}
        </StyledNavMenu>
      ))}
    </StyledNavBar>
  );
};
export default NavBar;
