import styled from "styled-components";
import { useEffect, useState } from "react";
import { getProfile } from "../apis/user";

import {
  AlignCenter,
  AlignColumn,
  AlignRow,
  CardContainer,
  Layout,
} from "../components/layout";
import NavBar from "../components/navbar";
import { TitleArea } from "../components/title";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import { Subtitle } from "../components/subtitle";
import TextButton from "../components/text_button";

import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProgressBar = ({ percent }) => {
  return (
    <CircularProgressBar
      colorCircle="rgba(237, 237, 237, 0.25)"
      colorSlice="var(--primary)"
      fill="rgba(237, 237, 237, 0.25)"
      fontColor="var(--black)"
      percent={percent}
      round
      stroke={6}
      strokeBottom={10}
      linearGradient={["#30cfd0", "#330867"]}
    ></CircularProgressBar>
  );
};

const StatsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const MyPage = () => {
  const [profile, setProfile] = useState(null);

  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const profile = await getProfile();
        setProfile(profile);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <AlignCenter>
      <NavBar></NavBar>
      <Layout>
        <TitleArea
          title="My Page"
          subtitle="내 정보 및 설정"
          on={"true"}
        ></TitleArea>
        <AlignRow>
          <AlignColumn>
            <CardContainer>
              <AlignColumn>
                <Subtitle children="개인정보 / 프로필 관리"></Subtitle>
                <TextButton children={"아이디 / 비밀번호 변경"}></TextButton>
                <TextButton children={"프로필 사진 변경"}></TextButton>
                <TextButton children={"자기소개 변경"}></TextButton>
                <TextButton children={"공개 범위 설정"}></TextButton>
              </AlignColumn>
            </CardContainer>
            <CardContainer>
              <AlignColumn>
                <Subtitle children="나의 업적"></Subtitle>

                <TextButton></TextButton>
              </AlignColumn>
            </CardContainer>
          </AlignColumn>

          <CardContainer>
            <Subtitle children="나의 활동"></Subtitle>
            <AlignRow>
              {/* TODO: fetch qna data and put answered question/answer rate to percent */}
              <ProgressBar percent={75}></ProgressBar>
              <ProgressBar percent={75}></ProgressBar>
            </AlignRow>
          </CardContainer>
        </AlignRow>
      </Layout>
    </AlignCenter>
  );
};

export default MyPage;
