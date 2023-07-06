import styled from "@emotion/styled";
import { Logo } from "../../assets";
import Background from "../../assets/background.png";
import { useState } from "react";
import List from "../../components/main/List";
import BtnContainer from "../../components/main/BtnContainer";
import { useQuery } from "react-query";
import { getCategoryBenefit } from "../../utils/apis/benefit";

const MainPage = () => {
  const [categoryDropDownResult, setCategoryDropDownResult] = useState({
    name: "대상자",
    id: "",
  });
  const [benefitDropDownResult, setBenefitDropDownResult] = useState({
    name: "종류",
    id: "",
  });
  const [input, setInput] = useState<string>("");

  const { data } = useQuery(
    ["benefit_list", categoryDropDownResult, benefitDropDownResult, input],
    () =>
      getCategoryBenefit({
        category: categoryDropDownResult.id,
        benefit: benefitDropDownResult.id,
        title: input,
      })
  );

  return (
    <Container>
      <img src={Logo} alt="로고" />
      <BtnContainer
        categoryDropDownResult={categoryDropDownResult}
        setCategoryDropDownResult={setCategoryDropDownResult}
        benefitDropDownResult={benefitDropDownResult}
        setBenefitDropDownResult={setBenefitDropDownResult}
        setInput={setInput}
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
    height: 150px;
  }
`;

export default MainPage;
