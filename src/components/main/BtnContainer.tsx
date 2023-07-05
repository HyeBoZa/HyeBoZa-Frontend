import styled from "@emotion/styled";
import { RightArrowIcon } from "../../assets";
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
}

const BtnContainer = ({
  categoryDropDownResult,
  setCategoryDropDownResult,
  benefitDropDownResult,
  setBenefitDropDownResult,
}: Props) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
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
