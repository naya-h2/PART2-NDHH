import styled from "styled-components";
import CardList from "@/components/Cardlist";
import Button from "@/components/commons/Button";
import { useState } from "react";
import { DeviceSize } from "@/styles/DeviceSize";

function ListPageCards({ cards }) {
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
    setScrollX(0);
    setShowNextButton(true);
  };

  return (
    <Container>
      <Wrapper>
        {scrollX !== 0 && <CustomButton onClick={handleClickReverse} type={"arrowLeft"} width="40" $isReverse />}
        <Items $num={cardsQuantity} style={{ transform: `translateX(${scrollX}rem)` }}>
          {cards.map((card, index) => {
            return <CardList data={card} key={index} />;
          })}
        </Items>
        {showNextButton && <CustomButton onClick={handleClick} type={"arrowRight"} width="40" />}
      </Wrapper>
    </Container>
  );
}

export default ListPageCards;

const Container = styled.div`
  width: 120rem; // 태블릿 사이즈 기준으로 width 정하면 카드 4개가 안나와서

  position: relative;

  display: flex;
  justify-content: center;

  @media (max-width: ${DeviceSize.pc}) {
    width: 100vw;
    justify-content: start;
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
    margin-left: 2.4rem; // 오른쪽 마진 추후 추가하겠습니다.
  }

  @media (max-width: ${DeviceSize.mobile}) {
    grid-template-columns: repeat(${(props) => props.$num}, 1fr);
    gap: 1.2rem;
  }
`;

const CustomButton = styled(Button)`
  position: absolute;
  top: 50%;
  z-index: 1;

  transform: translateY(-50%);

  ${(props) => (props.$isReverse ? "left: 0" : "right: 0")};

  img {
    width: 4rem;
    opacity: 0.9;
  }

  @media (max-width: ${DeviceSize.pc}) {
    display: none;
  }
`;
