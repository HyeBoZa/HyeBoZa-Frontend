import styled from "@emotion/styled";
import { ComunityLogo } from "../../assets";
import Background from "../../assets/background.png";
import { useState } from "react";
import ComunityList from "../../components/comunity/ComunityList";
import InputContainer from "../../components/comunity/InputContainer";
import {
  ContentResponseDto,
  getContentList,
  getSearchContentList,
} from "../../utils/apis/comunity";
import { useQuery } from "react-query";

const BoardPage = () => {
  const [input, setInput] = useState<string>("");
  const { data } = useQuery(["board_list"], () => getContentList());
  const [contentList, setContentList] = useState<
    ContentResponseDto[] | undefined
  >(data?.board_list);

  const { data: searchContentList } = useQuery(
    ["search_content_list", input],
    () => getSearchContentList(input),
    {
      enabled: input !== "",
      onSuccess: () => {
        setContentList(searchContentList?.board_list);
      },
    }
  );

  return (
    <Container>
      <img src={ComunityLogo} />
      <InputContainer setInput={setInput} />
      <ComunityList contentList={contentList} />
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
