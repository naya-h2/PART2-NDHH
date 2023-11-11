import { useNavigate } from "react-router-dom";
import { FONT18 } from "@/styles/FontStyles";
import styled from "styled-components";
import Input from "./commons/Input";
import Button from "./commons/Button";
import { useState } from "react";

function InputModal({ password, onClose }) {
  const [pwError, setPwError] = useState(false);
  const navigate = useNavigate();

  const handlePasswordCheck = (event) => {
    const inputValue = event.target.children[1].children[0].value;
    event.preventDefault();
    if (inputValue == import.meta.env.VITE_EDIT_KEY || inputValue == password) {
      setPwError(false);
      onClose();
      return navigate("/post/id/edit");
    }
    setPwError(true);
  };

  return (
    <Container onSubmit={handlePasswordCheck}>
      <Text>🔐 비밀번호를 입력하세요.</Text>
      <InputWrapper>
        <Input placeholder="●●●●" pwError={pwError} />
      </InputWrapper>
      <Button width="100" height="l" type="primary">
        확인
      </Button>
    </Container>
  );
}

export default InputModal;

const Container = styled.form`
  width: 36rem;
  padding: 4rem 4rem 3rem;

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
