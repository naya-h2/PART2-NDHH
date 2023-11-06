import { Reactions } from "./mockUp";
import Badge from "./Badge";
import styled from "styled-components";

function HeaderEmojiDropDown() {
  let { results } = Reactions;
  const endIndex = 7; // 모바일에서는 5로 바꿀거임
  if (results.length > 8) results = results.slice(0, endIndex);

  return (
    <Container>
      {results.map((result, index) => {
        return (
          <Badge num={result.count} key={index}>
            {result.emoji}
          </Badge>
        );
      })}
    </Container>
  );
}

export default HeaderEmojiDropDown;

const Container = styled.div`
  position: absolute;
  top: 5.3rem;
  right: 32%;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(2, auto);
  padding: 2.4rem;
  gap: 0.8rem 1rem;
  border-radius: 0.8rem;
  border: 0.1rem solid #b6b6b6;
  background: var(--White);
  box-shadow: 0rem 0.2rem 1.2rem 0rem rgba(0, 0, 0, 0.08);
`;
