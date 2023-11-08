import styled from "styled-components";
import { FONT20B, FONT24B } from "../../styles/FontStyles.js";
import ListPageCards from "../../components/ListPageCards.jsx";
import { RECIPIENT1, RECIPIENT2, RECIPIENT3, RECIPIENT4, RECIPIENT5, RECIPIENT6, RECIPIENT7, RECIPIENT8 } from "../../constants/test.js";
import FixedButton from "../../components/FixedButton.jsx";

function Layout() {
  return (
    <Container>
      <Wrapper>
        <P>인기 롤링 페이퍼 🔥</P>
        <ListPageCards cards={HottestCards} />
        <P mobile>최근에 만든 롤링 페이퍼 ⭐️️</P>
        <ListPageCards cards={NewestCards} />
      </Wrapper>
      <FixedButton>나도 만들어보기</FixedButton>
    </Container>
  );
}

export default Layout;

const Cards = [RECIPIENT1, RECIPIENT2, RECIPIENT3, RECIPIENT4, RECIPIENT5, RECIPIENT6, RECIPIENT7, RECIPIENT8];

const NewestCards = [...Cards].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
const HottestCards = [...Cards].sort((a, b) => b.messageCount - a.messageCount);

const P = styled.p`
  ${FONT24B};
  margin: 5rem 0 1.6rem 2rem;

  @media (max-width: 768px) {
    ${FONT20B};
    margin: ${(props) => (props.mobile ? "7.2rem 0 1.2rem 2rem" : "4rem 0 1.2rem 2rem")};
  }
`;

const Wrapper = styled.div`
  margin-bottom: 11.4rem;
`;

const Container = styled.div`
  margin-top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
