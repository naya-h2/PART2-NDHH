import { FONT16B, FONT28B } from "@/styles/FontStyles";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>

      <Container>
        <Wrapper>
          <H2>Page Not Found</H2>
          <H1>｡° ૮₍°´ᯅ`°₎ა °｡</H1>
          <Text>
            <P1>
              접근 권한이 없거나 존재하지 않는 페이지입니다!
              <br />
              This page does not exist.
            </P1>
          </Text>
          <Link to="/">
            <HomeButton>Return Home</HomeButton>
          </Link>
        </Wrapper>
      </Container>
    </>
  );
}

export default NotFoundPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  background: linear-gradient(153deg, rgba(171, 87, 255, 1) 0%, rgba(220, 185, 255, 1) 50%, rgba(248, 240, 255, 1) 100%);
`;

const Wrapper = styled.div`
  width: 80rem;
  height: 50rem;

  margin: 10% auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  border-radius: 1.5rem;
  box-shadow: 0 0 25px 14px rgba(0, 0, 0, 0.27);
  background-color: var(--White);
`;

const H2 = styled.p`
  ${FONT28B}
  color: var(--purple9)
`;

const H1 = styled.p`
  font-size: 80px;
`;

const Text = styled.div`
  margin: 3rem 0;

  text-align: center;
`;

const P1 = styled.p`
  ${FONT16B}
  line-height: 200%;

  color: var(--Gray5);
`;

const P2 = styled.p`
  ${FONT28B}
`;

const HomeButton = styled.p`
  width: 15rem;
  height: auto;

  padding: 1rem;

  border: 2px solid var(--purple7);
  border-radius: 99rem;

  text-align: center;
  color: var(--purple7);
  ${FONT16B};
`;
