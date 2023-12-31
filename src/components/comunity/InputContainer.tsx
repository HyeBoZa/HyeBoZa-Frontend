import styled from "@emotion/styled";
import { RightArrowIcon, SearchIcon } from "../../assets";
import { useNavigate } from "react-router-dom";

interface Props {
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const InputContainer = ({ setInput }: Props) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <SearchInput
        placeholder="찾고싶은 내용을 입력해주세요."
        onChange={(e) => setInput(e.target.value)}
      />
      <img src={SearchIcon} alt="검색 아이콘" />
      <Btn onClick={() => navigate("/")}>
        <p>홈으로</p>
        <img src={RightArrowIcon} alt="오른쪽 화살표" />
      </Btn>
      <Btn onClick={() => navigate("/write")}>
        <p>글쓰러 가기</p>
        <img src={RightArrowIcon} alt="오른쪽 화살표" />
      </Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 13px;
  > img {
    position: absolute;
    right: 350px;
    top: 9px;
    width: 30px;
  }
`;

const SearchInput = styled.input`
  width: 640px;
  height: 50px;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.MAIN1};
  outline: none;
  padding: 20px 60px 20px 20px;
  font-size: 20px;
  font-weight: 700;
  background: ${({ theme }) => theme.WHITE};
  ::placeholder {
    color: ${({ theme }) => theme.MAIN3};
  }
`;

const Btn = styled.button`
  width: 150px;
  height: 50px;
  border: solid 2px ${({ theme }) => theme.MAIN1};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  border-radius: 16px;
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.MAIN2};
  background: ${({ theme }) => theme.WHITE};
`;

export default InputContainer;
