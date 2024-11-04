import styled from "styled-components";
import ProfileCard from "../components/profile_card";
import NavBar from "../components/navbar";
import PageTitle from "./title";
import { useState } from "react";
import { QuestionModal } from "../components/modal";
import ModalBackground from "../components/modal_background";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 993px;

  border-radius: 16px;
  background: var(--white);
  gap: 32px;
  padding: 32px;
  margin-bottom: 144px;
`;

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 144px;
  padding-right: 144px;
`;

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
  ];

  return (
    <PageLayout>
      <NavBar />
      <Layout>
        <PageTitle>Members</PageTitle>
        <CardContainer>
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
    </PageLayout>
  );
}

export default Home;
