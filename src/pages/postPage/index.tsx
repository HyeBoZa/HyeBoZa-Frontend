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
          </div>
          <img src={Logo} alt="로고" onClick={() => navigate("/comunity")} />
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
  padding-bottom: 15px;
  border-bottom: 1px solid #e7e7e7;
  > img {
    width: 80px;
  }
  > div {
    display: flex;
    gap: 12px;
  }
`;

const Text = styled.p`
  padding-top: 15px;
  font-size: 23px;
  height: 800px;
  overflow-y: auto;
`;

export default PostPage;
