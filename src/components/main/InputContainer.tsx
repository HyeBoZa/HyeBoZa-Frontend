import styled from "@emotion/styled";
import { RightArrowIcon, SearchIcon } from "../../assets";
import DropDown from "./DropDown";
import { useNavigate } from "react-router-dom";

interface Props {
  setInput: React.Dispatch<React.SetStateAction<string>>;
  dropDownResult: string;
  setDropDownResult: React.Dispatch<React.SetStateAction<string>>;
}

const InputContainer = ({
  setInput,
  dropDownResult,
  setDropDownResult,
}: Props) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <SearchInput
        placeholder="원하시는 혜택을 검색해주세요."
        onChange={(e) => setInput(e.target.value)}
      />
      <img src={SearchIcon} />
      <DropDown
        dropDownResult={dropDownResult}
        setDropDownResult={setDropDownResult}
      />
      <Btn onClick={() => navigate("/comunity")}>
        <p>커뮤니티</p>
        <img src={RightArrowIcon} />
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
