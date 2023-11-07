import styled, { css } from "styled-components";
import { FONT14 } from "../styles/FontStyles";
import { PropTypes } from "prop-types";
import CHECKIMG from "../assets/check.svg";

Option.propTypes = {
  color: PropTypes.oneOf(["Orange", "Purple", "Blue", "Green"]),
  src: PropTypes.string,
  check: PropTypes.boolean,
};
function Option({ color, src, check }) {
  switch (color) {
    case "Orange":
      return makeOption({ color, check });
    case "Purple":
      return makeOption({ color, check });
    case "Blue":
      return makeOption({ color, check });
    case "Green":
      return makeOption({ color, check });
    default:
      return makeOption({ src, check });
  }
}

const makeOption = ({ color, src, check }) => {
  const COLOR =
    color &&
    css`
      background-color: var(--${color}2);
    `;
  return (
    <Container color={COLOR} src={src}>
      {check && (
        <button>
          <img src={CHECKIMG} alt="새로운 메시지 작성하기" />
        </button>
      )}
    </Container>
  );
};

export default Option;

const Container = styled.div`
  width: 16.8rem;
  height: 16.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.1rem solid rgba(0, 0, 0, 0.08);
  border-radius: 1.6rem;

  @media (max-width: 768px) {
    width: 15.4rem;
    height: 15.4rem;
  }

  ${FONT14};
  ${({ color }) => color};
  ${({ src }) => src && `background-image: url(${src}); background-size: cover`};

  button {
    width: 4.4rem;
    height: 4.4rem;

    border-radius: 10rem;

    background-color: var(--Gray5);
  }

  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
