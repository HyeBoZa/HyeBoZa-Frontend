import styled from "@emotion/styled";
import { RightArrowIcon, SearchIcon } from "../../assets";
import DropDown from "./DropDown";
import { useNavigate } from "react-router-dom";
import { DropDownItemType } from "../../model/common";
import {
  BenefitDropDownItem,
  CaterotyDropDownItem,
} from "../../constants/main";

interface Props {
  categoryDropDownResult: DropDownItemType;
  setCategoryDropDownResult: React.Dispatch<
    React.SetStateAction<{
      name: string;
      id: string;
    }>
  >;
  benefitDropDownResult: DropDownItemType;
  setBenefitDropDownResult: React.Dispatch<
    React.SetStateAction<{
      name: string;
      id: string;
    }>
  >;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const BtnContainer = ({
  categoryDropDownResult,
  setCategoryDropDownResult,
  benefitDropDownResult,
  setBenefitDropDownResult,
  setInput,
}: Props) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <SearchInput
        placeholder="찾고싶은 혜택을 입력해주세요."
        onChange={(e) => setInput(e.target.value)}
      />
      <img src={SearchIcon} alt="검색 아이콘" />
      <DropDown
        dropDownResult={categoryDropDownResult}
        setDropDownResult={setCategoryDropDownResult}
        dropDownItem={CaterotyDropDownItem}
      />
      <DropDown
        dropDownResult={benefitDropDownResult}
        setDropDownResult={setBenefitDropDownResult}
        dropDownItem={BenefitDropDownItem}
      />
      <Btn onClick={() => navigate("/comunity")}>
        <p>커뮤니티</p>
        <img src={RightArrowIcon} alt="오른쪽 화살표" />
      </Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 13px;
  width: 960px;
  justify-content: flex-end;
  position: relative;
  > img {
    position: absolute;
    right: 510px;
    top: 9px;
    width: 30px;
  }
`;

const SearchInput = styled.input`
  width: 470px;
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

export default BtnContainer;
