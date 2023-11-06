import styled, { css } from "styled-components";
import { FONT18B, FONT16, FONT14 } from "../styles/FontStyles";
import addIconBlack from "../assets/add-24-black.svg";
import addIconWhite from "../assets/add-24-white.svg";
import plusIcon from "../assets/plus.svg";
import deleteBlack from "../assets/deleted_black.svg";
import deleteWhite from "../assets/deleted_white.svg";
import arrowRight from "../assets/arrow_right.svg";
import arrowLeft from "../assets/arrow_left.svg";

const SIZES = {
  primarySize56: css`
    --width: 20.8rem;
    --height: 5.6rem;

    --padding: 1.4rem 2.4rem;
    --border-radius: 1.2rem;
    ${FONT18B}
  `,
  outlinedSize56: css`
    --width: 19.2rem;
    --height: 5.6rem;

    --padding: 1.4rem 1.6rem;
    --border-radius: 1.2rem;
    ${FONT18B}
  `,
  size40: css`
    --height: 4rem;

    --padding: 0.8rem 1.6rem;
    --border-radius: 0.6rem;
    ${FONT16}
  `,
  size36: css`
    --height: 3.6rem;

    --padding: 0.6rem 1.6rem;
    --border-radius: 0.6rem;
    ${FONT16}
  `,
  size28: css`
    --padding: 0.2rem 1.6rem;
    --border-radius: 0.6rem;
    ${FONT14}

    --img-width: 2rem;
    --img-height: 2rem;
  `,
  plusSize: css`
    --padding: 1.6rem;
    --border-radius: 10rem;
  `,
  trashSize: css`
    --padding: 0.6rem;
    --border-radius: 0.6rem;
  `,
};

const TYPES = {
  primary: css`
    --color: var(--White);
    --border-color: var(--Purple6);
    --bg-color: var(--Purple6);

    --hover-color: var(--White);
    --hover-border-color: var(--Purple7);
    --hover-bg-color: var(--Purple7);

    --pressed-color: var(--White);
    --pressed-border-color: var(--Purple8);
    --pressed-bg-color: var(--Purple8);

    --focus-color: var(--White);
    --focus-bg-color: var(--Purple8);
    --focus-border-color: var(--Purple9);
  `,
  secondary: css`
    --color: var(--Purple7);
    --border-color: var(--Purple6);
    --bg-color: var(--White);

    --hover-color: var(--Purple6);
    --hover-border-color: var(--Purple7);
    --hover-bg-color: var(--Purple1);

    --pressed-color: var(--Purple6);
    --pressed-border-color: var(--Purple8);
    --pressed-bg-color: var(--Purple1);

    --focus-color: var(--Purple6);
    --focus-border-color: var(--Purple8);
    --focus-bg-color: var(--White);
  `,
  outlined: css`
    --color: var(--Gray9);
    --border-color: var(--Gray3);
    --bg-color: var(--White);

    --hover-color: var(--Gray9);
    --hover-border-color: var(--Gray3);
    --hover-bg-color: var(--Gray1);

    --pressed-color: var(--Gray9);
    --pressed-border-color: var(--Gray3);
    --pressed-bg-color: var(--Gray1);

    --focus-color: var(--Gray9);
    --focus-border-color: var(--Gray5);
    --focus-bg-color: var(--White);
  `,
  plus: css`
    --border-color: var(--Gray5);
    --bg-color: var(--Gray5);

    --hover-border-color: var(--Gray6);
    --hover-bg-color: var(--Gray6);

    --pressed-border-color: var(--Gray7);
    --pressed-bg-color: var(--Gray7);

    --focus-border-color: var(--Gray8);
    --focus-bg-color: var(--Gray7);
  `,
  trash: css`
    --border-color: var(--Gray3);
    --bg-color: var(--White);

    --hover-border-color: var(--Gray3);
    --hover-bg-color: var(--Gray1);

    --pressed-border-color: var(--Gray3);
    --pressed-bg-color: var(--Gray1);

    --focus-border-color: var(--Gray5);
    --focus-bg-color: var(--White);
  `,
};

function Button({ disabled, size, type, children, icon }) {
  const sizeStyle = SIZES[size];
  const typeStyle = TYPES[type];
  const addFaceIcon = disabled ? addIconWhite : addIconBlack;
  const deleteIcon = disabled ? deleteWhite : deleteBlack;

  return (
    <StyledButton disabled={disabled} sizeStyle={sizeStyle} typeStyle={typeStyle}>
      {icon && <AddFaceIcon src={addFaceIcon} alt="add icon" />}
      {type === "plus" && <PlusIcon src={plusIcon} alt="plus icon" />}
      {type === "trash" && <TrashIcon src={deleteIcon} />}
      {type === "arrowRight" && <ArrowIcon src={arrowRight} />}
      {type === "arrowLeft" && <ArrowIcon src={arrowLeft} />}
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${(props) => props.sizeStyle}
  ${(props) => props.typeStyle}

  width: var(--width);
  height: var(--height);

  padding: var(--padding);

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  color: var(--color);
  background: var(--bg-color);

  border-radius: var(--border-radius);
  border: 0.1rem solid var(--border-color);

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

  &:focus {
    color: var(--focus-color);
    border: 0.1rem solid var(--focus-border-color);
    background: var(--focus-bg-color);
  }

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
  ${(props) => props.sizeStyle}

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

export default Button;
