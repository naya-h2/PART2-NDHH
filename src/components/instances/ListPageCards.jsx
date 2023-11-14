import { useState } from "react";
import styled from "styled-components";
import CardList from "@/components/Cardlist";
import Button from "@/components/commons/Button";
import { FONT20B, FONT24B } from "@/styles/FontStyles.js";
import { DeviceSize } from "@/styles/DeviceSize";
import { Z_INDEX } from "@/styles/ZindexStyles";
import { Link } from "react-router-dom";

function ListPageCards({ cards, children }) {
  const [scrollX, setScrollX] = useState(0);
  const [showNextButton, setShowNextButton] = useState(true);

  const cardsQuantity = cards.length;

  const handleClick = () => {
    setScrollX(scrollX - 29.5); // 왼쪽으로 29.5rem 이동

    if (scrollX <= -29.5 * (cardsQuantity - 5)) {
      setShowNextButton(false);
    }
  };
  const handleClickReverse = () => {
    setScrollX(scrollX + 29.5);
    setShowNextButton(true);
  };

  const handleDbClick = () => {
    setScrollX(-29.5 * (cardsQuantity - 4)); // 카드 리스트 제일 끝으로 이동
    setShowNextButton(false);
  };

  const handleDbClickReverse = () => {
    setScrollX(0);
    setShowNextButton(true);
  };

  return (
    <Container>
      <P>{children}</P>
      <Wrapper>
        {scrollX !== 0 && <CustomButton onClick={handleClickReverse} onDoubleClick={handleDbClickReverse} type={"arrowLeft"} width="40" $isReverse />}
        <Items $num={cardsQuantity} style={{ transform: `translateX(${scrollX}rem)` }}>
          {cards.map((card, index) => {
            return (
              <Link to={`/post/${card.id}`} key={index}>
                <CardList data={card} />
              </Link>
            );
          })}
        </Items>
        {showNextButton && <CustomButton onClick={handleClick} onDoubleClick={handleDbClick} type={"arrowRight"} width="40" />}
      </Wrapper>
    </Container>
  );
}

export default ListPageCards;

const Container = styled.div`
  /* width: 120rem; // 태블릿 사이즈 기준으로 width 정하면 카드 4개가 안나와서 */

  /* margin-left: 4.8rem; */

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${DeviceSize.pc}) {
    width: 100%;

    /* margin-left: 2.4rem; */

    justify-content: start;
  }
`;

const P = styled.p`
  margin: 5rem 0 1.6rem 0rem;

  ${FONT24B};

  @media (max-width: ${DeviceSize.mobile}) {
    ${FONT20B};
    margin: ${(props) => (props.$Mobile ? "7.2rem 0 1.2rem 0" : "4rem 0 1.2rem 0")};
  }
`;

const Wrapper = styled.div`
  max-width: 116rem;

  overflow: hidden;

  @media (max-width: ${DeviceSize.pc}) {
    max-width: 120rem;

    overflow-x: auto;
    -webkit-overflow-scrolling: touch; /* iOS 스와이프 지원 */
  }
`;

const Items = styled.div`
  width: 100%;

  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(${(props) => props.$num}, 1fr);
  grid-template-rows: 1fr;

  transition: transform 0.3s;

  @media (max-width: ${DeviceSize.pc}) {
    /* margin-left: 2.4rem; // 오른쪽 마진 추후 추가하겠습니다. */
  }

  @media (max-width: ${DeviceSize.mobile}) {
    /* margin-left: 2rem; */

    grid-template-columns: repeat(${(props) => props.$num}, 1fr);
    gap: 1.2rem;
  }
`;

const CustomButton = styled(Button)`
  position: absolute;
  /* top: 50%; */
  bottom: 9rem;

  z-index: ${Z_INDEX.list_page_arrow_button};

  transform: translateY(-50%);

  ${(props) => (props.$isReverse ? "left: -2rem" : "right: -2rem")};

  img {
    width: 4rem;
    opacity: 0.9;
  }

  @media (max-width: ${DeviceSize.pc}) {
    display: none;
  }
`;
