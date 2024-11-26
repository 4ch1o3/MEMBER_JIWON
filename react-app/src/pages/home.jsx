import ProfileCard from "../components/profile_card";
import NavBar from "../components/navbar";
import { TitleArea } from "../components/title";

import { Layout } from "../components/layout";
import { CardContainer } from "../components/layout";
import { AlignCenter } from "../components/layout";
import { useEffect, useState } from "react";
import { getAllUsers } from "../apis/user";
// import { useState } from "react";
// import { QuestionModal } from "../components/modal";
// import ModalBackground from "../components/modal_background";

function Home() {
  const [profiles, setProfiles] = useState([]); // if none, empty array

  useEffect(() => {
    async function fetchAllUsers() {
      try {
        const data = await getAllUsers();
        setProfiles(data);
        // console.log(data);
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
        <TitleArea title="Members" subtitle="누구에게 질문할까요?" on="true">
          {/* <Title>Members</Title>
          <Subtitle></Subtitle> */}
        </TitleArea>
        <CardContainer align="row">
          {/* <CardWrapper> */}
          {profiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              name={profile.username}
              email={profile.email}
              bio={profile.bio}
              questionCount={profile.receivedQuestionCount}
            />
          ))}
          {/* </CardWrapper> */}
        </CardContainer>
      </Layout>
    </AlignCenter>
  );
}

export default Home;
