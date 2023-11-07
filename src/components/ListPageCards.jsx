import styled from "styled-components";
import CardList from "./Cardlist";
import arrowButton from "../assets/button-for-test.svg";
import { useState } from "react";

function ListPageCards({ cards }) {
  const cardsQuantity = cards.length;
  const [scrollX, setScrollX] = useState(0);
  const [showNextButton, setShowNextButton] = useState(true);

  const handleClick = () => {
    setScrollX(scrollX - 29.5); // 왼쪽으로 29.5rem 이동

    if (scrollX <= -29.5 * (cardsQuantity - 5)) {
      setShowNextButton(false);
    }
  };

  const handleClickReverse = () => {
    setScrollX(0);
    setShowNextButton(true);
  };

  return (
    <Container>
      <Wrapper>
        {scrollX !== 0 && (
          <Button onClick={handleClickReverse} isReverse>
            <img src={arrowButton} alt="버튼 반응형 없어서 이미지 사용" />
          </Button>
        )}
        <Items num={cardsQuantity} style={{ transform: `translateX(${scrollX}rem)` }}>
          {cards.map((card, index) => {
            return <CardList data={card} key={index} />;
          })}
        </Items>
        {showNextButton && (
          <Button onClick={handleClick}>
            <img src={arrowButton} alt="버튼 반응형 없어서 이미지 사용" />
          </Button>
        )}
      </Wrapper>
    </Container>
  );
}

export default ListPageCards;

const Container = styled.div`
  width: 120rem;
  position: relative;

  display: flex;
  justify-content: center;

  @media (max-width: 1199px) {
    width: 100vw;
  }
`;

const Wrapper = styled.div`
  max-width: 116rem;
  overflow: hidden;

  @media (max-width: 1199px) {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch; /* iOS 스와이프 지원 */
  }
`;

const Items = styled.div`
  width: 100%;
  display: grid;
  gap: 2rem;

  grid-template-columns: repeat(${(props) => props.num}, 1fr);
  grid-template-rows: 1fr;

  transition: transform 0.3s;

  @media (max-width: 1199px) {
    margin: 0 2.4rem; // 오른쪽 마진 추후 추가하겠습니다.
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(${(props) => props.num}, 1fr);
    gap: 1.2rem;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.isReverse ? "left: 0" : "right: 0")};
  z-index: 1;

  img {
    width: 4rem;
    opacity: 0.9;
    transform: ${(props) => (props.isReverse ? "rotate(180deg)" : "0")};
  }

  @media (max-width: 1199px) {
    display: none;
  }
`;
