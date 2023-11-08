import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import addIconBlack from "../assets/add-24-black.svg";
import addIconWhite from "../assets/add-24-white.svg";
import plusIcon from "../assets/plus.svg";
import deleteBlack from "../assets/deleted_black.svg";
import deleteWhite from "../assets/deleted_white.svg";
import arrowRight from "../assets/arrow_right.svg";
import arrowLeft from "../assets/arrow_left.svg";
import { HEIGHTS, TYPES } from "./../styles/ButtonStyles";

Button.propTypes = {
  disabled: PropTypes.bool,
  height: PropTypes.oneOf(["xl", "l", "m", "s", "plus", "trash"]),
  width: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary", "outlined", "plus", "trash"]),
  children: PropTypes.string, // 버튼 이름
  icon: PropTypes.bool,
};

function Button({ disabled, height, width, type, children, icon, ...props }) {
  const heights = HEIGHTS[height];
  const types = TYPES[type];
  const addFaceIcon = disabled ? addIconWhite : addIconBlack;
  const deleteIcon = disabled ? deleteWhite : deleteBlack;

  return (
    <StyledButton disabled={disabled} $heights={heights} $types={types} $width={width} {...props}>
      {icon && <AddFaceIcon src={addFaceIcon} alt="add icon" />}
      {type === "plus" && <PlusIcon src={plusIcon} alt="plus icon" />}
      {type === "trash" && <TrashIcon src={deleteIcon} />}
      {type === "arrowRight" && <ArrowIcon src={arrowRight} />}
      {type === "arrowLeft" && <ArrowIcon src={arrowLeft} />}
      {children}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  ${({ $heights }) => $heights}
  ${({ $types }) => $types}

  ${({ $width }) => ($width ? `width: ${$width / 10}rem;` : "width: 100%;")}

  padding: var(--padding);

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  color: var(--color);
  background: var(--bg-color);

  border-radius: var(--border-radius);
  border: 0.1rem solid var(--border-color);

  font-family: "Noto Sans KR";

  &:hover {
    color: var(--hover-color);
    border: 0.1rem solid var(--hover-border-color);
    background: var(--hover-bg-color);
  }

  &:active {
    color: var(--pressed-color);
    border: 0.1rem solid var(--pressed-border-color);
    background: var(--pressed-bg-color);
  }

  // &:focus {
  //   color: var(--focus-color);
  //   border: 0.1rem solid var(--focus-border-color);
  //   background: var(--focus-bg-color);
  // }

  ${(props) =>
    props.disabled &&
    css`
      color: var(--White);
      border: 0.1rem solid var(--Gray3);
      background: var(--Gray3);

      pointer-events: none;
    `}
`;

const AddFaceIcon = styled.img`
  ${({ $heights }) => $heights}

  width: var(--img-width);
  height: var(--img-height);
`;

const PlusIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

const TrashIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

const ArrowIcon = styled.img`
  width: 4rem;
  height: 4rem;
`;
