import styled from "@emotion/styled";
import Background from "../../assets/background.png";
import { Logo } from "../../assets";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getDetailContent } from "../../utils/apis/comunity";

const PostPage = () => {
  const navigate = useNavigate();
  const { id }: any = useParams();
  const { data } = useQuery(["content"], () => getDetailContent(id as number));

  return (
    <Layout>
      <Wrapper>
        <Head>
          <div>
            <h1>{data?.title}</h1>
            <GoHome onClick={() => navigate("/comunity")}>뒤로 가기</GoHome>
          </div>
          <img src={Logo} alt="로고" />
        </Head>
        <Text>{data?.content}</Text>
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

export default PostPage;
