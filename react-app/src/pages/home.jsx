import ProfileCard from "../components/profile_card";
import NavBar from "../components/navbar";
import { TitleArea } from "../components/title";

import { Layout } from "../components/layout";
import { CardContainer } from "../components/layout";
import { AlignCenter } from "../components/layout";
// import { useState } from "react";
// import { QuestionModal } from "../components/modal";
// import ModalBackground from "../components/modal_background";

function Home() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  const profiles = [
    {
      id: 1,
      name: `정윤석`,
      bio: "안녕하세요. 질문해 주세요.",
      questionCount: 999,
    },
    {
      id: 2,
      name: `이유진`,
      bio: "안녕하세요. 질문하지 마세요.",
      questionCount: 0,
    },
    //김하늘, 노경인, 박지윤, 신민규, 오희진, 이민혁, 이서인, 이지원, 조유찬, 허정민 추가
    // bio와 questionCount는 랜덤하게 copilot이 생성
    {
      id: 3,
      name: `김하늘`,
      bio: "안녕하세요. 질문해 주세요.",
      questionCount: 39,
    },
    {
      id: 4,
      name: `노경인`,
      bio: "안녕하세요. 질문해 주세요.",
      questionCount: 23,
    },
    {
      id: 5,
      name: `박지윤`,
      bio: "안녕하세요. 질문해 주세요.",
      questionCount: 17,
    },
    {
      id: 6,
      name: `신민규`,
      bio: "안녕하세요. 질문해 주세요.",
      questionCount: 1,
    },
    {
      id: 7,
      name: `오희진`,
      bio: "안녕하세요. 질문해 주세요.",
      questionCount: 9,
    },
    {
      id: 8,
      name: `이민혁`,
      bio: "안녕하세요. 질문해 주세요.",
      questionCount: 99,
    },
    {
      id: 9,
      name: `이서인`,
      bio: "안녕하세요. 질문해 주세요.",
      questionCount: 43,
    },
    {
      id: 10,
      name: `이지원`,
      bio: "안녕하세요. 질문해 주세요.",
      questionCount: 93,
    },
    {
      id: 11,
      name: `조유찬`,
      bio: "안녕하세요. 질문해 주세요.",
      questionCount: 4,
    },
    {
      id: 12,
      name: `허정민`,
      bio: "안녕하세요. 질문해 주세요.",
      questionCount: 123,
    },
  ];

  return (
    <AlignCenter>
      <NavBar />
      <Layout>
        <TitleArea title="Members" subtitle="누구에게 질문할까요?" on="true">
          {/* <Title>Members</Title>
          <Subtitle></Subtitle> */}
        </TitleArea>
        <CardContainer align="row">
          {profiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              name={profile.name}
              bio={profile.bio}
              questionCount={profile.questionCount}
            />
          ))}
        </CardContainer>
      </Layout>
    </AlignCenter>
  );
}

export default Home;
