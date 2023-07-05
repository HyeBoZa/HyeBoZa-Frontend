import styled from "@emotion/styled";
import { Logo } from "../../assets";
import Background from "../../assets/background.png";
import { useState } from "react";
import List from "../../components/main/List";
import BtnContainer from "../../components/main/BtnContainer";
import { useQuery } from "react-query";
import { getCategoryBenefit } from "../../utils/apis/benefit";

const MainPage = () => {
  const [dropDownResult, setDropDownResult] = useState({
    name: "어린이",
    id: "CHILD",
  });

  const { data } = useQuery(["benefit_list", dropDownResult], () =>
    getCategoryBenefit(dropDownResult.id)
  );

  return (
    <Container>
      <img src={Logo} />
      <BtnContainer
        dropDownResult={dropDownResult}
        setDropDownResult={setDropDownResult}
      />
      <List benefitList={data?.benefit_list} />
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
