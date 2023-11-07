import { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { FONT16 } from "../styles/FontStyles";
import arrowUp from "../assets/arrow_top.svg";
import arrowDown from "../assets/arrow_down.svg";

Input.propTypes = {
  disabled: PropTypes.bool,
};

function Dropdown({ disabled }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [arrowDirection, setArrowDirection] = useState(arrowDown);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setArrowDirection(showDropdown ? arrowDown : arrowUp);
  };

  return (
    <StyledDropdown onClick={toggleDropdown} disabled={disabled}>
      {/* children으로 받아올 예정 */}
      Placeholder
      <DropdownButton src={arrowDirection} />
      <DropdownList show={showDropdown}>
        {/* children으로 받아올 예정 */}
        <DropdownText>TextTextText</DropdownText>
        <DropdownText>TextTextText</DropdownText>
      </DropdownList>
    </StyledDropdown>
  );
}

const StyledDropdown = styled.div`
  position: relative;
  width: 32rem;
  height: 5rem;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--Gray3);
  background: var(--White);

  ${FONT16}
  color: var(--Gray5);

  &:focus {
    border: 0.2rem solid var(--Gray5);
    outline: none;
    color: var(--Gray9);
  }

  &:hover {
    border: 0.1rem solid var(--Gray5);
  }

  &:active {
    border: 0.2rem solid var(--Gray7);
    color: var(--Gray9);
  }

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      border: 0.1rem solid var(--Gray3);
      background: var(--Gray1);
      color: var(--Gray4);
    `}
`;

const DropdownButton = styled.img`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;

  width: 1.6rem;
  height: 1.6rem;
`;

const DropdownList = styled.ul`
  display: ${(props) => (props.show ? "block" : "none")};
  width: 32rem;
  position: absolute;
  top: 5.8rem;
  right: 0;
  padding: 1rem 0.1rem;

  border-radius: 0.8rem;
  border: 0.1rem solid var(--Gray3);
  background: var(--White);
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
  z-index: 1;
`;

const DropdownText = styled.li`
  width: 31.6rem;
  padding: 1.2rem 1.6rem;

  display: flex;
  align-items: center;

  color: var(--Gray9);
  ${FONT16}

  &:hover {
    background: var(--Gray1);
  }
`;

export default Dropdown;
