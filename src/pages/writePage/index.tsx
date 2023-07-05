import styled from "@emotion/styled";
import Background from "../../assets/background.png";
import { Logo } from "../../assets";
import { useState } from "react";
import { useMutation } from "react-query";
import { postContent } from "../../utils/apis/comunity";
import { useNavigate } from "react-router-dom";

const WritePage = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const { mutate } = useMutation(() => postContent(inputs), {
    onSuccess: () => {
      navigate("/comunity");
    },
  });

  return (
    <Layout>
      <Wrapper>
        <Head>
          <Title
            placeholder="제목을 입력해주세요."
            onChange={(e) =>
              setInputs({ title: e.target.value, content: inputs.content })
            }
          />
          <img src={Logo} />
        </Head>
        <Text
          placeholder="내용을 입력해주세요."
          onChange={(e) =>
            setInputs({ title: inputs.title, content: e.target.value })
          }
        />
        <PostBtn onClick={() => mutate()}>게시하기</PostBtn>
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
`;

const Title = styled.input`
  width: 350px;
  height: 45px;
  font-size: 20px;
  padding: 20px;
  border: none;
  outline: none;
  border-radius: 20px;
  color: ${({ theme }) => theme.WHITE};
  background-color: ${({ theme }) => theme.MAIN3};
  font-weight: 500;
  ::placeholder {
    color: ${({ theme }) => theme.WHITE};
  }
`;

const Text = styled.textarea`
  font-size: 20px;
  width: 650px;
  height: 500px;
  padding: 12px;
  border: none;
  outline: none;
  border-radius: 15px;
  color: ${({ theme }) => theme.WHITE};
  background-color: ${({ theme }) => theme.MAIN3};
  ::placeholder {
    color: ${({ theme }) => theme.WHITE};
    font-size: 20px;
  }
`;

const PostBtn = styled.button`
  width: 110px;
  height: 45px;
  font-size: 17px;
  font-weight: 700;
  margin-left: 540px;
  border: none;
  border-radius: 15px;
  color: ${({ theme }) => theme.WHITE};
  background-color: ${({ theme }) => theme.MAIN1};
`;

export default WritePage;
