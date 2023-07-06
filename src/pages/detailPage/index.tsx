import styled from "@emotion/styled";
import Background from "../../assets/background.png";
import { Logo } from "../../assets";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getDetailBenefit } from "../../utils/apis/benefit";

const DatailPage = () => {
  const navigate = useNavigate();
  const { id }: any = useParams();

  const { data } = useQuery(["benefit_content"], () =>
    getDetailBenefit(id as number)
  );

  return (
    <Layout>
      <Wrapper>
        <Head>
          <div>
            <h1>{data?.title}</h1>
          </div>
          <img src={Logo} alt="로고" onClick={() => navigate("/")} />
        </Head>
        <Text>
          혜택 종류: {data?.benefit_category}
          <br />
          대상자: {data?.control}
          <br />
          <br />
          {data?.content}
        </Text>
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
  width: 600px;
  max-height: 400px;
  border: solid 2px ${({ theme }) => theme.MAIN1};
  border-radius: 12px;
  background: ${({ theme }) => theme.WHITE};
  padding: 30px;
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
  padding-bottom: 15px;
  border-bottom: solid #e7e7e7 1px;
`;

const Text = styled.p`
  padding-top: 15px;
  font-size: 23px;
  height: 800px;
`;

export default DatailPage;
