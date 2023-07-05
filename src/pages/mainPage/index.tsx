import styled from "@emotion/styled";
import { Logo } from "../../assets";
import Background from "../../assets/background.png";
import { useState } from "react";
import List from "../../components/main/List";
import BtnContainer from "../../components/main/BtnContainer";
import { useQuery } from "react-query";
import { getCategoryBenefit } from "../../utils/apis/benefit";
import { BenefitContentResponseDto } from "../../model/benefit";

const MainPage = () => {
  const [dropDownResult, setDropDownResult] = useState({
    name: "어린이",
    id: "CHILD",
  });
  const [benefitList, setBenefitList] = useState<BenefitContentResponseDto[]>();

  const { data } = useQuery(
    ["benefit_list", dropDownResult],
    () => getCategoryBenefit(dropDownResult.id),
    {
      onSuccess: () => {
        setBenefitList(data?.benefit_list);
      },
    }
  );

  return (
    <Container>
      <img src={Logo} />
      <BtnContainer
        dropDownResult={dropDownResult}
        setDropDownResult={setDropDownResult}
      />
      <List benefitList={benefitList} />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 40px;
  background-image: url(${Background});
  background-size: cover;
  flex-direction: column;
  gap: 43px;
  > img {
    height: 200px;
  }
`;

export default MainPage;
