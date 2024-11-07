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
        <TitleArea>No matched page here!</TitleArea>
      </Layout>
    </AlignCenter>
  );
};

export default NoMatch;
