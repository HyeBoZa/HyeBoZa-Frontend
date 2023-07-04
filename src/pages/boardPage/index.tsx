import styled from "@emotion/styled";
import { ComunityLogo } from "../../assets";
import Background from "../../assets/background.png";
import { useState } from "react";
import ComunityList from "../../components/comunity/ComunityList";
import InputContainer from "../../components/comunity/InputContainer";

const BoardPage = () => {
  const [input, setInput] = useState<string>("");
  const [dropDownResult, setDropDownResult] = useState<string>("카테고리");

  return (
    <Container>
      <img src={ComunityLogo} />
      <InputContainer
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
    height: 200px;
  }
`;

export default BoardPage;
