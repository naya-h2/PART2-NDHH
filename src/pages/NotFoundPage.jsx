import { FONT24B } from "@/styles/FontStyles";
import styled from "styled-components";

function NotFoundPage() {
  return (
    <Title>
      접근 권한이 없거나 존재하지 않는 페이지입니다!
      <br />
      ｡° ૮₍°´ᯅ`°₎ა °｡
    </Title>
  );
}

export default NotFoundPage;

const Title = styled.div`
  padding: 24px;

  display: flex;
  justify-content: center;

  ${FONT24B}
  text-align: center;
`;
