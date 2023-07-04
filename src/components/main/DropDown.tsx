import styled from "@emotion/styled";
import { DownArrowIcon } from "../../assets";
import { DropDownItem } from "../../constants/main";
import { useState } from "react";

const DropDown = ({
  dropDownResult,
  setDropDownResult,
}: {
  dropDownResult: string;
  setDropDownResult: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  const onChangeValue = (value: string) => {
    setDropDownResult(value);
    setIsOpenDropDown(false);
  };
  return (
    <Container>
      <Head onClick={() => setIsOpenDropDown(!isOpenDropDown)}>
        <p>{dropDownResult}</p>
        <img src={DownArrowIcon} />
      </Head>
      {isOpenDropDown && (
        <Body>
          {DropDownItem.map((value, idx) => (
            <p key={idx} onClick={() => onChangeValue(value)}>
              {value}
            </p>
          ))}
        </Body>
      )}
    </Container>
  );
};

const Container = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.MAIN2};
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Head = styled.div`
  width: 150px;
  height: 50px;
  border: solid 2px ${({ theme }) => theme.MAIN1};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  border-radius: 16px;
  font-weight: 700;
`;

const Body = styled.div`
  width: 150px;
  border: solid 2px ${({ theme }) => theme.MAIN1};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-direction: column;
  border-radius: 16px;
  gap: 16px;
  background-color: ${({ theme }) => theme.WHITE};
  padding: 20px;
  position: absolute;
  top: 60px;
`;

export default DropDown;
