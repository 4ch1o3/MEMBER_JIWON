// import styled from "styled-components";

import { AlignCenter, CardContainer, Layout } from "../components/layout";
import NavBar from "../components/navbar";
import { TitleArea } from "../components/title";

const MyPage = () => {
  return (
    <AlignCenter>
      <NavBar></NavBar>
      <Layout>
        <TitleArea title="My Page" subtitle="만드는 중" on={"true"}></TitleArea>
        <CardContainer>:(</CardContainer>
      </Layout>
    </AlignCenter>
  );
};

export default MyPage;
