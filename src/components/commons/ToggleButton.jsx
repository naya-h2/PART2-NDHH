import styled from "styled-components";
import PropTypes from "prop-types";
import { FONT16B, FONT16 } from "../../styles/FontStyles";
import { COLOR } from "../../styles/ColorStyles";

ToggleButton.propTypes = {
  selected: PropTypes.string,
};

function ToggleButton({ handleToggle, selected }) {
  const handleTypeChange = (value) => {
    handleToggle(value);
  };

  return (
    <ButtonWrapper>
      <Button onClick={() => handleTypeChange(SELECTED.color)} selected={selected === SELECTED.color}>
        {SELECTED.color}
      </Button>
      <Button onClick={() => handleTypeChange(SELECTED.image)} selected={selected === SELECTED.image}>
        {SELECTED.image}
      </Button>
    </ButtonWrapper>
  );
}

export default ToggleButton;

export const SELECTED = {
  color: "컬러",
  image: "이미지",
};

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
  border: 2px solid;

  padding: ${(props) => (props.selected ? "0.7rem 1.6rem" : "0.8rem 1.6rem")};

  ${(props) => (props.selected ? `${FONT16B}` : `${FONT16}`)};

  border-color: ${(props) => (props.selected ? `var(--${COLOR.P}6)` : "var(--Gray1)")};
  background-color: ${(props) => (props.selected ? "var(--White)" : "transparent")};
  color: ${(props) => (props.selected ? `var(--${COLOR.P}7)` : "var(--Gray9)")};
`;
