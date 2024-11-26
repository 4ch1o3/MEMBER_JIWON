import ProfileCard from "../components/profile_card";
import NavBar from "../components/navbar";
import { TitleArea } from "../components/title";

import { Layout } from "../components/layout";
import { CardContainer } from "../components/layout";
import { AlignCenter } from "../components/layout";
import { useEffect, useState } from "react";
// import { useState } from "react";
// import { QuestionModal } from "../components/modal";
// import ModalBackground from "../components/modal_background";

function Home() {
  const [profiles, setProfiles] = useState([]); // if none, empty array

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await fetch(
        "https://api-test-gdsc-22b48e20369e.herokuapp.com/api/data",
        {
          method: "GET", // automatically GET
        }
      );

      if (response.ok) {
        const data = await response.json();
        setProfiles(data);
      }
    };
    fetchProfiles();
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
              name={profile.name}
              bio={profile.bio}
              questionCount={profile.questionCount}
            />
          ))}
          {/* </CardWrapper> */}
        </CardContainer>
      </Layout>
    </AlignCenter>
  );
}

export default Home;
