import styled from "@emotion/styled";
import { Logo } from "../../assets";
import Background from "../../assets/background.png";
import { useState } from "react";
import List from "../../components/main/List";
import BtnContainer from "../../components/main/BtnContainer";

const MainPage = () => {
  const [dropDownResult, setDropDownResult] = useState<string>("카테고리");

  return (
    <Container>
      <img src={Logo} />
      <BtnContainer
        dropDownResult={dropDownResult}
        setDropDownResult={setDropDownResult}
      />
      <List />
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
