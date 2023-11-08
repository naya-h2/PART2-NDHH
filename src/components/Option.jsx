import styled, { css } from "styled-components";
import { FONT14 } from "../styles/FontStyles";
import { PropTypes } from "prop-types";
import CHECKIMG from "../assets/check.svg";
import { COLOR } from "../styles/ColorStyles";

Option.propTypes = {
  color: PropTypes.oneOf(["Orange", "Purple", "Blue", "Green"]),
  src: PropTypes.string,
  check: PropTypes.bool,
};
function Option({ color, src, check, onClick }) {
  switch (color) {
    case COLOR.O:
      return makeOption({ color, check, onClick });
    case COLOR.P:
      return makeOption({ color, check, onClick });
    case COLOR.B:
      return makeOption({ color, check, onClick });
    case COLOR.G:
      return makeOption({ color, check, onClick });
    default:
      return makeOption({ src, check, onClick });
  }
}

const makeOption = ({ color, src, check, onClick }) => {
  const COLOR =
    color &&
    css`
      background-color: var(--${color}2);
    `;
  return (
    <Container color={COLOR} src={src} $check={check} onClick={onClick}>
      {check && (
        <div>
          <img src={CHECKIMG} alt="새로운 메시지 작성하기" />
        </div>
      )}
    </Container>
  );
};

export default Option;

const Container = styled.button`
  width: 100%;
  max-width: 26.8rem;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.1rem solid rgba(0, 0, 0, 0.08);
  border-radius: 1.6rem;

  /* @media (max-width: 768px) {
    width: 15.4rem;
    height: 15.4rem;
  } */

  ${FONT14};
  ${({ color }) => color};
  ${({ src, $check }) =>
    src && $check
      ? `background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${src}); background-size: cover;`
      : `background-image: url(${src}); background-size: cover`};

  > div {
    width: 4.4rem;
    height: 4.4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10rem;

    background-color: var(--Gray5);
  }

  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
