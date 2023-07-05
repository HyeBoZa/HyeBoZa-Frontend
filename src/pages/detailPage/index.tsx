import styled from "@emotion/styled";
import Background from "../../assets/background.png";
import { Logo } from "../../assets";
import { useNavigate } from "react-router-dom";

const DatailPage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Wrapper>
        <Head>
          <div>
            <h1>청년 혜택</h1>
            <GoHome onClick={() => navigate("/")}>홈으로 가기</GoHome>
          </div>
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
`;

const Head = styled.div`
  display: flex;
  font-size: 15px;
  justify-content: space-between;
  align-items: center;
  > img {
    width: 80px;
  }
  > div {
    display: flex;
    gap: 12px;
  }
`;

const Text = styled.p`
  font-size: 23px;
  height: 800px;
  overflow-y: auto;
`;

const GoHome = styled.button`
  cursor: pointer;
  width: 125px;
  height: 36px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 700;
  background: ${({ theme }) => theme.WHITE};
  border: 2px solid ${({ theme }) => theme.MAIN1};
  color: ${({ theme }) => theme.MAIN1};
`;
export default DatailPage;
