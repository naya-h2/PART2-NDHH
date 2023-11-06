import { useState } from "react";
import styled from "styled-components";
import { FONT16, FONT12 } from "../styles/FontStyles";

const Input = ({ ...rest }) => {
  // 에러 상태 확인하기 위해 임의로 에러 상태 추가 (추후 수정)
  // iserror에 boolean 값 전달해주면 안돼서 state로 falsy, truthy한 값 전달해줌
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    // 길이가 5보다 작을 경우 에러 메시지 표시하기
    if (e.target.value.length < 5 && e.target.value.length !== 0) {
      setError("true");
    } else {
      setError("");
    }
  };

  return (
    <>
      <StyledInput iserror={error} onBlur={handleInputChange} placeholder="Placeholder" {...rest} />
      {error && <ErrorMessage>Error Message</ErrorMessage>}
    </>
  );
};

const StyledInput = styled.input`
  width: 320px;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid var(--Gray3);
  background: var(--White);
  ${FONT16}

  &:focus {
    border: 2px solid var(--Gray5);
    outline: none;
  }

  &:hover {
    border: 1px solid var(--Gray5);
  }

  &:active {
    border: 2px solid var(--Gray7);
  }

  &:disabled {
    border: 1px solid var(--Gray3);
    background: var(--Gray1);
    color: var(--Gray4);
  }

  ${({ iserror }) =>
    iserror &&
    `
    border: 1px solid var(--Error);
  `}
`;

const ErrorMessage = styled.div`
  width: 320px;
  height: 18px;
  margin-top: 4px;

  color: var(--Error);
  ${FONT12}
`;

export default Input;
