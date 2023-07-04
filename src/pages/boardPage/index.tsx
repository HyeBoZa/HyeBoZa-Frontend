import styled from "@emotion/styled";
import { Logo } from "../../assets";
import Background from "../../assets/background.png";
import { useState } from "react";
import ComunityInputContainer from "../../components/comunity/ComunityInputContainer";
import ComunityList from "../../components/comunity/ComunityList";

const BoardPage = () => {
  const [input, setInput] = useState<string>("");
  const [dropDownResult, setDropDownResult] = useState<string>("카테고리");

  return (
    <Container>
      <img src={Logo} />
      <ComunityInputContainer
        setInput={setInput}
        dropDownResult={dropDownResult}
        setDropDownResult={setDropDownResult}
      />
      <ComunityList />
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
    width: 230px;
  }
`;

export default BoardPage;
