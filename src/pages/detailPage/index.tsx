import styled from "styled-components";
import Background from "../../assets/background.png";
import { Logo } from "../../assets";

const DatailPage = () => {
  return (
    <Layout>
      <Wrapper>
        <img src={Logo} />
        <Title>청년 혜택</Title>
        <Text>
          청년은 이러한 혜택을 얻을 수 있습니다. 청년은 이러한 혜택을 얻을 수
          있습니다. 청년은 이러한 혜택을 얻을 수 있습니다. 청년은 이러한 혜택을
          얻을 수 있습니다. 청년은 이러한 혜택을 얻을 수 있습니다. 청년은 이러한
          혜택을 얻을 수 있습니다. 청년은 이러한 혜택을 얻을 수 있습니다. 청년은
          이러한 혜택을 얻을 수 있습니다.청년은 이러한 혜택을 얻을 수 있습니다.
          청년은 이러한 혜택을 얻을 수 있습니다. 청년은 이러한 혜택을 얻을 수
          있습니다. 청년은 이러한 혜택을 얻을 수 있습니다.청년은 이러한 혜택을
          얻을 수 있습니다. 청년은 이러한 혜택을 얻을 수 있습니다. 청년은 이러한
          혜택을 얻을 수 있습니다. 청년은 이러한 혜택을 얻을 수 있습니다.청년은
          이러한 혜택을 얻을 수 있습니다. 청년은 이러한 혜택을 얻을 수 있습니다.
          청년은 이러한 혜택을 얻을 수 있습니다. 청년은 이러한 혜택을 얻을 수
          있습니다.청년은 이러한 혜택을 얻을 수 있습니다. 청년은 이러한 혜택을
          얻을 수 있습니다. 청년은 이러한 혜택을 얻을 수 있습니다. 청년은 이러한
          혜택을 얻을 수 있습니다.청년은 이러한 혜택을 얻을 수 있습니다. 청년은
          이러한 혜택을 얻을 수 있습니다. 청년은 이러한 혜택을 얻을 수 있습니다.
          청년은 이러한 혜택을 얻을 수 있습니다.청년은 이러한 혜택을 얻을 수
          있습니다. 청년은 이러한 혜택을 얻을 수 있습니다. 청년은 이러한 혜택을
          얻을 수 있습니다. 청년은 이러한 혜택을 얻을 수 있습니다.
        </Text>
      </Wrapper>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${Background});
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 1000px;
  max-height: 860px;
  border-radius: 12px;
  border: solid 4px ${({ theme }) => theme.MAIN1};
  img {
    width: 120px;
    float: right;
    margin: 30px 40px 0 0;
  }
  div {
    margin: 30px 30px 0 40px;
  }
  /* overflow-y: hidden; */
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Title = styled.div`
  font-size: 40px;
  color: ${({ theme }) => theme.MAIN1};
`;
const Text = styled.div`
  font-size: 30px;
`;

export default DatailPage;
