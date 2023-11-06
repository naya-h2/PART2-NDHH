import { useState } from "react";
import styled from "styled-components";
import { FONT16B, FONT16 } from "../styles/FontStyles";

const ToggleButton = () => {
  const [selectedValue, setSelectedValue] = useState("color");

  const handleToggle = (value) => {
    setSelectedValue(value);
  };

  return (
    <ButtonWrapper>
      <Button onClick={() => handleToggle("color")} selected={selectedValue === "color"}>
        컬러
      </Button>
      <Button onClick={() => handleToggle("image")} selected={selectedValue === "image"}>
        이미지
      </Button>
    </ButtonWrapper>
  );
};

export default ToggleButton;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 24.4rem;
  height: 4rem;

  border-radius: 0.6rem;

  background-color: var(--Gray1);
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  border-radius: 0.6rem;

  padding: ${(props) => (props.selected ? "0.7rem 1.6rem" : "0.8rem 1.6rem")};

  ${(props) => (props.selected ? `${FONT16B}` : `${FONT16}`)};

  border: ${(props) => (props.selected ? "2px solid var(--Purple6)" : "none")};
  background-color: ${(props) => (props.selected ? "var(--White)" : "var(--Gray1)")};
  color: ${(props) => (props.selected ? "var(--Purple7)" : "var(--Gray9)")};
`;
