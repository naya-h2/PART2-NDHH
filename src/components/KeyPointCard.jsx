import styled from "styled-components";
import { FONT14B, FONT15, FONT18, FONT18B, FONT24B } from "../styles/FontStyles";

function KeyPointCard({ content, isReverse = false }) {
  const { point, title1, title2, explain, image } = content;

  return (
    <Container isReverse={isReverse}>
      <Wrapper>
        <Point point={point} />
        <P title>
          {title1}
          <Br />
          {title2}
        </P>
        <P>{explain}</P>
      </Wrapper>
      <img src={image} />
    </Container>
  );
}

export default KeyPointCard;

function Point({ point }) {
  return (
    <Container__point>
      <p>{point}</p>
    </Container__point>
  );
}

const Container = styled.div`
  width: 120rem;
  padding: 6rem 0px;
  margin-bottom: ${(props) => (props.isReverse ? "5.2rem" : "3rem")};
  gap: ${(props) => (props.isReverse ? "0rem" : "12.8rem")};

  display: flex;
  flex-direction: ${(props) => (props.isReverse ? "row-reverse" : "row")};
  justify-content: flex-end;
  align-items: flex-start;

  border-radius: 1.6rem;
  background: var(--Surface);

  @media (max-width: 1199px) {
    width: calc(100vw - 4.8rem);
    margin-bottom: ${(props) => (props.isReverse ? "13.3rem" : "3rem")};
    gap: 4rem;
    padding: 4rem 0;

    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    overflow: hidden;
    padding: 2.4rem 0 5.1rem;
  }

  img {
    width: 72rem;
    height: 20.4rem;

    @media (max-width: 768px) {
      width: 37rem;
      height: auto;
      gap: 4.8rem;
    }
  }
`;

const Wrapper = styled.div`
  @media (max-width: 1199px) {
    width: 72rem;
    padding-left: 4rem;
  }

  @media (max-width: 768px) {
    width: calc(100% - 4.8rem);
    padding: 0;
  }
`;

const Container__point = styled.div`
  display: inline-block;
  padding: 0.6rem 1.2rem;

  border-radius: 5rem;
  background: var(--Purple6);

  p {
    ${FONT14B};
    color: var(--White);
  }
`;

const P = styled.h1`
  ${(props) => (props.title ? FONT24B : FONT18)};
  margin-top: ${(props) => (props.title ? "1.6rem" : "0.8rem")};

  @media (max-width: 768px) {
    ${(props) => (props.title ? FONT18B : FONT15)};
    margin-top: ${(props) => (props.title ? "1.6rem" : "0.4rem")};
  }
`;

const Br = styled.br`
  @media (max-width: 1199px) {
    display: none;
  }
`;
