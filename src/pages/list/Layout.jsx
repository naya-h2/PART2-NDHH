import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";
import ListPageCards from "@/components/instances/ListPageCards.jsx";
import FixedButton from "@/components/instances/FixedButton.jsx";
import { FONT20B, FONT24B } from "@/styles/FontStyles.js";
import { sortHot, sortNew } from "@/utils/sort";
import { Link } from "react-router-dom";
import useData from "@/hooks/useData";

function Layout() {
  const Cards = useData("RECIPIENTS", "GET");

  if (Cards) {
    const NewestCards = sortNew([...Cards]);
    const HottestCards = sortHot([...Cards]);

    return (
      <Container>
        <div>
          <P>인기 롤링 페이퍼 🔥</P>
          <ListPageCards cards={HottestCards} />
          <P $Mobile>최근에 만든 롤링 페이퍼 ⭐️️</P>
          <ListPageCards cards={NewestCards} />
        </div>
        <FixedButton link="/post">나도 만들어보기</FixedButton>
      </Container>
    );
  }
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

const Container = styled.div`
  margin-top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
