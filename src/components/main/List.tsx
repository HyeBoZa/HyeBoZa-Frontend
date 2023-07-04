import styled from "@emotion/styled";

const List = () => {
  return (
    <Container>
      <Content>
        <h3>혜택 제목</h3>
        <p>혜택 상세 내용</p>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 1200px;
  overflow-y: auto;
`;

const Content = styled.div`
  width: 963px;
  min-height: 120px;
  background-color: ${({ theme }) => theme.SUB};
  border-radius: 12px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.WHITE};
  padding: 0 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  > h3 {
    font-size: 28px;
  }
  > p {
    font-size: 17px;
  }
`;

export default List;
