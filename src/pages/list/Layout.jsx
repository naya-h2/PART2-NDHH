import FixedButton from "@/components/instances/FixedButton.jsx";
import ListPageCards from "@/components/instances/ListPageCards.jsx";
import Search from "@/components/list/Search";
import useGetData from "@/hooks/useGetData";
import { DeviceSize } from "@/styles/DeviceSize";
import { FONT20B, FONT24B } from "@/styles/FontStyles.js";
import { sortHot, sortNew } from "@/utils/sort";
import Skeleton from "@/components/instances/Skeleton";
import { useMemo, useState } from "react";
import styled from "styled-components";

function Layout() {
  const [test, setTest] = useState(true);
  const [keyword, setKeyword] = useState("");
  const Cards = useGetData("RECIPIENTS", null, 1000);
  const NewestCards = useMemo(() => Cards && sortNew([...Cards]), [Cards]);
  const HottestCards = useMemo(() => Cards && sortHot([...Cards]), [Cards]);
  const SearchedCards = useMemo(() => keyword && Cards.filter(({ name }) => name.slice(0, -4).toLowerCase().includes(keyword.toLowerCase())), [keyword]);
  if (!Cards) return;

  if (test) {
    setTimeout(() => setTest(false), 2000);
    return <Skeleton />;
  }

  return (
    <>
      <Container>
        <Search setKeyword={setKeyword} />
        {keyword ? (
          <>
            <P>검색 결과</P>
            <ListPageCards cards={SearchedCards}></ListPageCards>
          </>
        ) : (
          <>
            <P>인기 롤링 페이퍼 🔥</P>
            <ListPageCards cards={HottestCards}></ListPageCards>
            <P $Mobile>최근에 만든 롤링 페이퍼 ⭐️️</P>
            <ListPageCards cards={NewestCards}></ListPageCards>
          </>
        )}
      </Container>
      <FixedButton link="/post">나도 만들어보기</FixedButton>
    </>
  );
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
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: calc(100vw - 3.8rem);
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
