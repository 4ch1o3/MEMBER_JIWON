import { useEffect, useState } from "react";
import { getProfile } from "../apis/user";
import { getReceivedQuestion, getSentQuestion } from "../apis/qna";

import {
  AlignCenter,
  AlignColumn,
  AlignRow,
  CardContainer,
  FixedHeight,
  FixedWidth,
  Layout,
} from "../components/layout";
import NavBar from "../components/navbar";
import { TitleArea } from "../components/title";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import { Subtitle } from "../components/subtitle";
import TextButton from "../components/text_button";

import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ProfilePic } from "../components/profile_card";
import UserInfo from "../components/user_info";
const ProgressBar = ({ percent }) => {
  return (
    <CircularProgressBar
      colorCircle="rgba(237, 237, 237, 0.25)"
      colorSlice="var(--primary)"
      fill="rgba(237, 237, 237, 0.25)"
      fontColor="var(--black)"
      percent={percent}
      round
      stroke={4}
      strokeBottom={10}
      linearGradient={["#30cfd0", "#330867"]}
    ></CircularProgressBar>
  );
};

const MyPage = () => {
  const [profile, setProfile] = useState(null);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [sentCount, setSentCount] = useState(0);
  const [receivedCount, setReceivedCount] = useState(0);
  const [answeredByOthersCount, setAnsweredByOthersCount] = useState(0);

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
        const profileData = await getProfile();
        setProfile(profileData);

        await Promise.all([fetchReceived(), fetchSent()]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const fetchReceived = async () => {
    try {
      const receivedQuestions = await getReceivedQuestion();
      setReceivedCount(receivedQuestions.length);
      const answeredQuestions = receivedQuestions.filter(
        (question) => question.answer !== null
      );
      setAnsweredCount(answeredQuestions.length);
    } catch (error) {
      console.error("Failed to fetch received questions", error);
    }
  };

  const fetchSent = async () => {
    try {
      const sentQuestions = await getSentQuestion();
      setSentCount(sentQuestions.length);

      const answeredByOthers = sentQuestions.filter(
        (question) => question.answer !== null
      );
      setAnsweredByOthersCount(answeredByOthers.length);
    } catch (error) {
      console.error("Failed to fetch sent questions", error);
    }
  };

  const myAnswerRate = receivedCount
    ? (answeredCount / receivedCount) * 100
    : 0;
  const receivedAnswerRate = sentCount
    ? (answeredByOthersCount / sentCount) * 100
    : 0;

  return (
    <AlignCenter>
      <NavBar></NavBar>
      <Layout>
        <FixedWidth>
          <TitleArea
            title="My Page"
            subtitle="내 정보 및 설정"
            on={"true"}
          ></TitleArea>
          <AlignRow>
            <AlignColumn>
              <CardContainer>
                <Subtitle>내 프로필</Subtitle>

                <AlignRow>
                  <ProfilePic></ProfilePic>

                  {profile && (
                    <UserInfo
                      profileName={profile.username}
                      bio={profile.bio}
                      questionCount={profile.receivedQuestionCount}
                    ></UserInfo>
                  )}
                </AlignRow>
              </CardContainer>
              <CardContainer>
                <AlignColumn>
                  <Subtitle children="개인정보 / 프로필 관리"></Subtitle>
                  <TextButton children={"아이디 / 비밀번호 변경"}></TextButton>
                  <TextButton children={"프로필 사진 변경"}></TextButton>
                  <TextButton children={"자기소개 변경"}></TextButton>
                </AlignColumn>
              </CardContainer>
            </AlignColumn>

            <CardContainer>
              <FixedHeight>
                <AlignColumn>
                  <Subtitle children="나의 활동"></Subtitle>
                  <br />
                  <AlignRow>
                    <AlignColumn>
                      내가 보낸 질문: {sentCount}개
                      <br />
                      <br />
                      내가 받은 질문: {receivedCount}개
                      <br />
                      <br />
                      <br />
                      <br />
                      내가 받은 답변: {answeredByOthersCount}개
                      <br />
                      <br />
                      내가 보낸 답변: {answeredCount}개
                    </AlignColumn>
                    {/* for spacing */}
                    <AlignColumn></AlignColumn>

                    <AlignColumn>
                      <AlignCenter>
                        나의 답변율
                        <ProgressBar percent={myAnswerRate}></ProgressBar>
                      </AlignCenter>
                    </AlignColumn>
                    <AlignColumn>
                      <AlignCenter>
                        내 질문에 대한 답변율
                        <ProgressBar percent={receivedAnswerRate}></ProgressBar>
                      </AlignCenter>
                    </AlignColumn>
                  </AlignRow>
                </AlignColumn>
              </FixedHeight>
            </CardContainer>
            <AlignColumn>
              <CardContainer>
                <Subtitle children="나의 업적"></Subtitle>
                업적을 획득해보세요!
              </CardContainer>
            </AlignColumn>
          </AlignRow>
        </FixedWidth>
      </Layout>
    </AlignCenter>
  );
};

export default MyPage;
