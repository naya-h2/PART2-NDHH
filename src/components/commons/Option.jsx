import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { FONT14 } from "@/styles/FontStyles";
import CHECKIMG from "@/assets/check.svg";
import PLUSIMG from "@/assets/plus_icon.svg";

Option.propTypes = {
  color: PropTypes.oneOf(["orange", "purple", "blue", "green"]),
  src: PropTypes.string,
  check: PropTypes.bool,
};
function Option({ color, check, ...props }) {
  if (color) {
    return <OptionColor color={color} check={check} {...props} />;
  }
  if (!color) {
    return <OptionImg check={check} {...props} />;
  }
}

function OptionColor({ color, check, ...props }) {
  const COLOR =
    color &&
    css`
      background-color: var(--${color}2);
    `;
  return (
    <Container color={COLOR} $check={check} {...props}>
      {check && (
        <div>
          <img src={CHECKIMG} alt="선택된 색깔" />
        </div>
      )}
    </Container>
  );
}

function OptionImg({ check, imgFile, setImgFile, ...props }) {
  const handleChange = (event) => {
    const nextFile = URL.createObjectURL(event.target.files[0]);
    setImgFile((prev) => [...prev, nextFile]);
  };

  return (
    <Container src={imgFile} $check={check} {...props}>
      {imgFile ? (
        check && (
          <div>
            <img src={CHECKIMG} alt="선택된 이미지" />
          </div>
        )
      ) : (
        <>
          <label htmlFor="file">
            <img src={PLUSIMG} alt="이미지 추가하기" />
          </label>
          <input id="file" type="file" onChange={handleChange} />
        </>
      )}
    </Container>
  );
}

export default Option;

const Container = styled.button`
  width: 100%;
<<<<<<< Updated upstream
=======

  position: relative;
>>>>>>> Stashed changes

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  &:hover {
    opacity: 0.5;
  }

  border: 0.1rem solid rgba(0, 0, 0, 0.08);
  border-radius: 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ${FONT14}
  ${({ color }) => color};
  ${({ src, $check }) =>
    src && $check
      ? `background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${src}); background-size: cover;`
      : `background-image: url(${src}); background-size: cover`};

  > div {
    width: 4.4rem;
    height: 4.4rem;

    border-radius: 10rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--Gray5);
  }

  > label {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  > label > img {
    width: 4.4rem;
  }

  input[type="file"] {
    width: 0;
    height: 0;
    padding: 0;
    border: 0;

    position: absolute;
    overflow: hidden;
  }
`;
