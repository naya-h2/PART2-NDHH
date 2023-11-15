import { useRef, useState } from "react";
import styled from "styled-components";
import searchImg from "@/assets/search.svg";
import { FONT14, FONT16 } from "@/styles/FontStyles";

function Search() {
  const [value, setValue] = useState(undefined);
  const input = useRef();

  const handleChange = () => {
    const newValue = input.current.value;
    setValue(newValue);
  };

  return (
    <>
      <Container>
        <Input ref={input} value={value} onChange={handleChange} placeholder="롤링페이퍼를 검색해 보세요." />
        <InputWrapper>
          <InputImg src={searchImg} />
          <InputButton>추가하기</InputButton>
        </InputWrapper>
      </Container>
    </>
  );
}

export default Search;

const Container = styled.form`
  width: 100%;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

const InputWrapper = styled.div`
  pointer-events: none;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 1.6rem);
  height: 5.6rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1.2rem 1rem 1.2rem 2.8rem;
  border: 0.1rem solid var(--Gray4);
  border-radius: 1.5rem;

  ${FONT16};

  &:focus {
    outline: 0.15rem solid var(--purple6);
  }
`;

const InputImg = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

const InputButton = styled.button`
  pointer-events: all;
  padding: 1rem 1.6rem;
  border: 0;
  border-radius: 0.8rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--Gray1);
  background-color: var(--purple6);
`;
