import styled from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";
import ListPageCards from "@/components/instances/ListPageCards.jsx";
import FixedButton from "@/components/instances/FixedButton.jsx";
import { FONT20B, FONT24B } from "@/styles/FontStyles.js";
import { sortHot, sortNew } from "@/utils/sort";
import { Link } from "react-router-dom";
import useGetData from "@/hooks/useGetData";
import Search from "@/components/list/Search";

function Layout() {
  const Cards = useGetData("RECIPIENTS", null, 1000);

  if (Cards) {
    const NewestCards = sortNew([...Cards]);
    const HottestCards = sortHot([...Cards]);

    return (
      <>
        <Container>
          <Search />
          {/* <div> */}
          <P>인기 롤링 페이퍼 🔥</P>
          <ListPageCards cards={HottestCards}></ListPageCards>
          <P $Mobile>최근에 만든 롤링 페이퍼 ⭐️️</P>
          <ListPageCards cards={NewestCards}></ListPageCards>
          {/* </div> */}
        </Container>
        <FixedButton link="/post">나도 만들어보기</FixedButton>
      </>
    );
  }
}

export default Layout;

const Container = styled.div`
  /* width: 100%; */
  width: calc(100vw - 9.6rem);
  max-width: 120rem;
  margin: auto;

  margin-top: 0;
  margin-bottom: 13.7rem;
  /* margin-left: 2.4rem; */

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

// const P = styled.p`
//   margin: 5rem 0 1.6rem 2rem;

//   ${FONT24B};

//   @media (max-width: ${DeviceSize.mobile}) {
//     ${FONT20B};
//     margin: ${(props) => (props.$Mobile ? "7.2rem 0 1.2rem 2rem" : "4rem 0 1.2rem 2rem")};
//   }
// `;

const P = styled.p`
  width: 100%;

  margin: 5rem 0 1.6rem 0rem;

  ${FONT24B};

  @media (max-width: ${DeviceSize.mobile}) {
    ${FONT20B};
    margin: ${(props) => (props.$Mobile ? "7.2rem 0 1.2rem 0" : "4rem 0 1.2rem 0")};
  }
`;
