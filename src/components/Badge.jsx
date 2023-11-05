import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { FONT14, FONT16 } from "../styles/FontStyles";

Badge.propTypes = {
  children: PropTypes.oneOf(["지인", "동료", "가족", "친구"]),
  num: PropTypes.number,
};
function Badge({ children, num }) {
  switch (children) {
    case "지인":
      return makeBadge(children, "Orange");
    case "동료":
      return makeBadge(children, "Purple");
    case "가족":
      return makeBadge(children, "Green");
    case "친구":
      return makeBadge(children, "Blue");
    default:
      return makeEmoji(children, num);
  }
}

const makeBadge = (children, color) => {
  const COLOR = css`
    background-color: var(--${color}1);
    color: var(--${color}${color === "Purple" ? 6 : 5});
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
  display: inline-block;

  padding: 0 0.8rem;
  border-radius: 0.4rem;

  ${FONT14}
  ${({ color }) => color};
`;

const Emoji = styled.div`
  display: inline-block;

  padding: 0.8rem 1.2rem;
  border-radius: 3.2rem;

  background-color: #00000080;

  ${FONT16}

  span {
    margin-left: 0.4rem;

    ${FONT16}
    color: var(--White);
  }
`;
