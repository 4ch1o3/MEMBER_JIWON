import styled from "styled-components";
import NavBar from "../components/navbar";
import { Layout } from "../components/layout";
import { TitleArea } from "../components/title";
import { CardContainer } from "../components/layout";
import { AlignCenter } from "../components/layout";

const NoMatch = () => {
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

export default NoMatch;
