import Header from "@/components/Header";
import Button from "../components/Button";
import styled from "styled-components";
import { FONT18B, FONT20B, FONT24B } from "../styles/FontStyles";
import ListPageCards from "../components/ListPageCards";
import { RECIPIENT1, RECIPIENT2, RECIPIENT3, RECIPIENT4, RECIPIENT5, RECIPIENT6, RECIPIENT7, RECIPIENT8 } from "../constants/test.js";

const Cards = [RECIPIENT1, RECIPIENT2, RECIPIENT3, RECIPIENT4, RECIPIENT5, RECIPIENT6, RECIPIENT7, RECIPIENT8];
// 원본 데이터 최대한 안건들려고... 일단 이렇게 가져왔습니다.

const NewestCards = [...Cards].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
const HottestCards = [...Cards].sort((a, b) => new Date(b.messageCount) - new Date(a.messageCount));

function ListPage() {
  return (
    <>
      <Header />
      <Container isList>
        <Wrapper>
          <P>인기 롤링 페이퍼 🔥</P>
          <ListPageCards cards={HottestCards} />
          <P mobile>최근에 만든 롤링 페이퍼 ⭐️️</P>
          <ListPageCards cards={NewestCards} />
        </Wrapper>
        <ButtonFix>
          <Button height="xl" type="primary">
            <ButtonText>나도 만들어보기</ButtonText>
          </Button>
        </ButtonFix>
      </Container>
    </>
  );
}

export default ListPage;

const P = styled.p`
  ${FONT24B};
  margin: 5rem 0 1.6rem 2rem;

  @media (max-width: 768px) {
    ${FONT20B};
    margin: ${(props) => (props.mobile ? "7.2rem 0 1.2rem 2rem" : "4rem 0 1.2rem 2rem")};
  }
`;

const Wrapper = styled.div`
  margin-bottom: 6.4rem;
`;

const Container = styled.div`
  margin-top: ${(props) => (props.isList ? "" : "6rem")};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ButtonText = styled.p`
  width: 23.2rem;
  ${FONT18B};

  @media (max-width: 1199px) {
    width: calc(100vw - 9.6rem);
  }
`;

const ButtonFix = styled.div`
  @media (max-width: 1199px) {
    position: fixed;
    bottom: 2.4rem;
    left: 2.4rem;
  }
`;
// 지금 컨테이너, 버튼, 버튼텍스트가 똑같아서, 다 만들었을 때도 문제 없다면 홈페이지랑 합쳐도 됨.
