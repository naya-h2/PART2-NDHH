import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";
import ListPageCards from "@/components/instances/ListPageCards.jsx";
import FixedButton from "@/components/instances/FixedButton.jsx";
import { FONT20B, FONT24B } from "@/styles/FontStyles.js";
import { RECIPIENT1, RECIPIENT2, RECIPIENT3, RECIPIENT4, RECIPIENT5, RECIPIENT6, RECIPIENT7, RECIPIENT8 } from "@/constants/test.js";
import { sortHot, sortNew } from "@/utils/sort";

const Cards = [RECIPIENT1, RECIPIENT2, RECIPIENT3, RECIPIENT4, RECIPIENT5, RECIPIENT6, RECIPIENT7, RECIPIENT8];
const NewestCards = sortNew([...Cards]);
const HottestCards = sortHot([...Cards]);

function Layout() {
  return (
    <Container>
      <Wrapper>
        <P>인기 롤링 페이퍼 🔥</P>
        <ListPageCards cards={HottestCards} />
        <P $Mobile>최근에 만든 롤링 페이퍼 ⭐️️</P>
        <ListPageCards cards={NewestCards} />
      </Wrapper>
      <FixedButton>나도 만들어보기</FixedButton>
    </Container>
  );
}

export default Layout;

const P = styled.p`
  margin: 5rem 0 1.6rem 2rem;

  ${FONT24B};

  @media (max-width: ${DeviceSize.mobile}) {
    ${FONT20B};
    margin: ${(props) => (props.$Mobile ? "7.2rem 0 1.2rem 2rem" : "4rem 0 1.2rem 2rem")};
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
