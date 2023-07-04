import styled from "@emotion/styled";
import Background from "../../assets/background.png";
import { Logo } from "../../assets";

const DatailPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Head>
          <h1>청년 혜택</h1>
          <img src={Logo} />
        </Head>
        <Text>청년은 이러한 혜택을 얻을 수 있습니다.</Text>
      </Wrapper>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  color: ${({ theme }) => theme.MAIN1};
  width: 700px;
  height: 700px;
  border: solid 2px ${({ theme }) => theme.MAIN1};
  border-radius: 12px;
  background: ${({ theme }) => theme.WHITE};
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Head = styled.div`
  display: flex;
  font-size: 15px;
  justify-content: space-between;
  align-items: center;
  > img {
    width: 80px;
  }
`;

const Text = styled.p`
  font-size: 23px;
  height: 800px;
  overflow-y: auto;
`;

export default DatailPage;
