import { useState } from "react";
import styled, { css } from "styled-components";
import { FONT16 } from "../styles/FontStyles";
import arrowUp from "../assets/arrow_top.svg";
import arrowDown from "../assets/arrow_down.svg";

const Dropdown = ({ ...rest }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [arrowDirection, setArrowDirection] = useState(arrowDown);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setArrowDirection(showDropdown ? arrowDown : arrowUp);
  };

  return (
    <StyledDropdown onClick={toggleDropdown} {...rest}>
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
};

const StyledDropdown = styled.div`
  position: relative;

  width: 320px;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid var(--Gray3);
  background: var(--White);

  ${FONT16}
  color: var(--Gray5);

  &:focus {
    border: 2px solid var(--Gray5);
    outline: none;
    color: var(--Gray9);
  }

  &:hover {
    border: 1px solid var(--Gray5);
  }

  &:active {
    border: 2px solid var(--Gray7);
    color: var(--Gray9);
  }

  // &:disabled {
  //   border: 1px solid var(--Gray3);
  //   background: var(--Gray1);
  //   color: var(--Gray4);
  // }

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      border: 1px solid var(--Gray3);
      background: var(--Gray1);
      color: var(--Gray4);
    `}
`;

const DropdownButton = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;

  width: 16px;
  height: 16px;
`;

const DropdownList = styled.ul`
  display: ${(props) => (props.show ? "block" : "none")};
  width: 320px;
  position: absolute;
  top: 58px;
  right: 0;
  padding: 10px 1px;

  border-radius: 8px;
  border: 1px solid var(--Gray3);
  background: var(--White);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  z-index: 1;
`;

const DropdownText = styled.li`
  width: 316px;
  padding: 12px 16px;

  display: flex;
  align-items: center;

  color: var(--Gray9);
  ${FONT16}

  &:hover {
    background: var(--Gray1);
  }
`;

export default Dropdown;
