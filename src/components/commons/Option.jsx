import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { FONT14 } from "@/styles/FontStyles";
import CHECKIMG from "@/assets/check.svg";
import PLUSIMG from "@/assets/plus_icon.svg";
import { getURL } from "@/utils/getURL";

Option.propTypes = {
  color: PropTypes.oneOf(["orange", "purple", "blue", "green", "red"]),
  src: PropTypes.string,
  check: PropTypes.bool,
};
function Option({ color, ...props }) {
  if (color) {
    return <OptionColor color={color} {...props} />;
  }
  if (!color) {
    return <OptionImg {...props} />;
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

function OptionImg({ check, setValue, img, setImgs, setSelected, ...props }) {
  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size < 1024 ** 2 * 3) {
      (async function (file) {
        const backgroundImageURL = await getURL(file);
        const thumbNailURL = URL.createObjectURL(file);
        setSelected(0);
        setImgs((prev) => [thumbNailURL, ...prev]);
        setValue((prev) => ({ ...prev, backgroundImageURL }));
      })(file);
    }
  };

  return (
    <Container src={img} $check={check} {...props}>
      {img ? (
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
  position: relative;

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

  background-color: var(--Gray1);

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

    cursor: pointer;
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
