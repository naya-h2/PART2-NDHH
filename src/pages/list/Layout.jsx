import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";
import ListPageCards from "@/components/instances/ListPageCards.jsx";
import FixedButton from "@/components/instances/FixedButton.jsx";
import { FONT20B, FONT24B } from "@/styles/FontStyles.js";
import { sortHot, sortNew } from "@/utils/sort";
import useGetData from "@/hooks/useGetData";

function Layout() {
  const Cards = useGetData("RECIPIENTS", null, 1000);

  if (Cards) {
    const NewestCards = sortNew([...Cards]);
    const HottestCards = sortHot([...Cards]);

    return (
      <>
        <Container>
          <P>인기 롤링 페이퍼 🔥</P>
          <ListPageCards cards={HottestCards} />
          <P $Mobile>최근에 만든 롤링 페이퍼 ⭐️️</P>
          <ListPageCards cards={NewestCards} />
        </Container>
        <FixedButton link="/post">나도 만들어보기</FixedButton>
      </>
    );
  }
}

export default Layout;

const Container = styled.div`
  width: 116rem;
  margin: auto;

  margin-top: 0;
  margin-bottom: 13.7rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${DeviceSize.pc}) {
    width: calc(100vw - 3.8rem);
    margin-left: 2.4rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: calc(100vw - 3.4rem);
    margin-left: 2rem;
  }
`;

const P = styled.p`
  width: 100%;

  margin: 5rem 0 1.6rem 0rem;

  ${FONT24B};

  @media (max-width: ${DeviceSize.mobile}) {
    ${FONT20B};
    margin: ${(props) => (props.$Mobile ? "7.2rem 0 1.2rem 0" : "4rem 0 1.2rem 0")};
  }
`;
