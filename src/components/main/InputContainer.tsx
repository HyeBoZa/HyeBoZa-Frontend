import styled from "@emotion/styled";
import { SearchIcon } from "../../assets";
import DropDown from "./DropDown";

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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 13px;
  > img {
    position: absolute;
    right: 180px;
    top: 9px;
    width: 30px;
  }
`;

const SearchInput = styled.input`
  width: 800px;
  height: 50px;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.MAIN1};
  outline: none;
  padding: 20px;
  font-size: 20px;
  font-weight: 700;
  background: ${({ theme }) => theme.WHITE};
  ::placeholder {
    color: ${({ theme }) => theme.MAIN3};
  }
`;

export default InputContainer;
