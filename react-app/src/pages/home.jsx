import ProfileCard from "../components/profile_card";
import NavBar from "../components/navbar";
import { TitleArea } from "../components/title";

import { FixedWidth, Layout } from "../components/layout";
import { CardContainer } from "../components/layout";
import { AlignCenter } from "../components/layout";
import { useEffect, useState } from "react";
import { getAllUsers } from "../apis/user";
// import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
// import { QuestionModal } from "../components/modal";
// import ModalBackground from "../components/modal_background";

function Home() {
  const [profiles, setProfiles] = useState([]); // if none, empty array
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    console.log("isLoggedIn: ", isLoggedIn);
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    async function fetchAllUsers() {
      try {
        const data = await getAllUsers();
        setProfiles(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAllUsers();
  }, []);

  return (
    <AlignCenter>
      <NavBar />
      <Layout>
        <FixedWidth>
          <TitleArea title="Members" subtitle="누구에게 질문할까요?" on="true">
            {/* <Title>Members</Title>
          <Subtitle></Subtitle> */}
          </TitleArea>

          <CardContainer align="row">
            {/* <FullHeight> */}
            {/* <CardWrapper> */}
            {/* TODO: if profiles === []; show info text */}
            {profiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
            {/* </FullHeight> */}

            {/* </CardWrapper> */}
          </CardContainer>
        </FixedWidth>
      </Layout>
    </AlignCenter>
  );
}

export default Home;
