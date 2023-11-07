import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FONT16, FONT12 } from "../styles/FontStyles";

Input.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

function Input({ placeholder, disabled }) {
  // iserror에 boolean 값 전달해주면 안돼서 state로 falsy, truthy한 값 전달해줌
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    // input에 아무 값도 입력하지 않았을 경우
    if (e.target.value.length == 0) {
      setError("true");
    } else {
      setError("");
    }
  };

  return (
    <>
      <StyledInput iserror={error} onBlur={handleInputChange} placeholder={placeholder} disabled={disabled} />
      {error && <ErrorMessage>값을 입력해 주세요.</ErrorMessage>}
    </>
  );
}

export default Input;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  outline: 1px solid var(--Gray3);
  background: var(--White);
  ${FONT16}

  &:hover {
    outline: 1px solid var(--Gray5);
  }

  &:focus {
    outline: 2px solid var(--Gray5);
  }

  &:active {
    outline: 2px solid var(--Gray7);
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
