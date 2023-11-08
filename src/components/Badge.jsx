import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { FONT12, FONT14, FONT16 } from "../styles/FontStyles";
import { COLOR, REL } from "../styles/ColorStyles";

Badge.propTypes = {
  children: PropTypes.string,
  num: PropTypes.number,
};
function Badge({ children, num }) {
  switch (children) {
    case REL.O:
      return makeBadge(children, COLOR.O);
    case REL.P:
      return makeBadge(children, COLOR.P);
    case REL.B:
      return makeBadge(children, COLOR.B);
    case REL.G:
      return makeBadge(children, COLOR.G);
    default:
      return makeEmoji(children, num);
  }
}

const makeBadge = (children, color) => {
  const COLOR = css`
    background-color: var(--${color}1);
    color: var(--${color}${color === COLOR.P ? 6 : 5});
  `;
  return <Container color={COLOR}>{children}</Container>;
};

const makeEmoji = (children, num) => {
  return (
    <Emoji>
      {children}
      <span>{num}</span>
    </Emoji>
  );
};

export default Badge;

const Container = styled.div`
  width: 4.2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  grid-area: badge;

  padding: 0 0.8rem;
  border-radius: 0.4rem;

  ${FONT14};
  ${({ color }) => color};
`;

const Emoji = styled.div`
  width: 6.6rem;
  height: 3.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.8rem 1.2rem;
  border-radius: 3.2rem;

  background-color: #00000080;

  ${FONT16};

  span {
    margin-left: 0.4rem;

    ${FONT16}
    color: var(--White);
  }

  @media screen and (max-width: 768px) {
    width: 5.2rem;
    height: 2.8rem;

    padding: 0.4rem 0.8rem;

    ${FONT12};
  }
`;
