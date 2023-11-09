import { FONT18 } from "@/styles/FontStyles";
import styled from "styled-components";
import Input from "./commons/Input";
import Button from "./commons/Button";

function InputModal() {
  return (
    <Container>
      <Text>비밀번호를 입력하세요.</Text>
      <InputWrapper>
        <Input />
      </InputWrapper>
      <Button width="100" height="l" type="primary">
        확인
      </Button>
    </Container>
  );
}

export default InputModal;

const Container = styled.div`
  width: 36rem;
  padding: 4rem 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  background-color: white;
  border-radius: 15px;
  border: 1px solid var(--GRAY2);
`;
const Text = styled.div`
  ${FONT18}
`;
const InputWrapper = styled.div`
  width: 100%;
`;
