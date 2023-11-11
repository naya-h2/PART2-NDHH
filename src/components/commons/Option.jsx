import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { FONT14, FONT14B, FONT16B, FONT18 } from "@/styles/FontStyles";
import CHECKIMG from "@/assets/check.svg";
import PLUSIMG from "@/assets/plus_icon.svg";
import { getURL } from "@/utils/getURL";
import useModal from "@/hooks/useModal";
import ModalPortal from "@/components/ModalPortal";
import ModalFrame from "@/components/ModalFrame";
import Input from "@/components/commons/Input";
import Button from "@/components/commons/Button";
import { useRef } from "react";

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

const REG = /^([A-Za-z]{1}[A-Za-z\d_]*\.)*[A-Za-z][A-Za-z\d_]*$/;

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

  const handleSubmit = (handleModalClose) => (event) => {
    event.preventDefault();
    const backgroundImageURL = event.target.value;
    console.log(backgroundImageURL);
    // if (REG.test(backgroundImageURL)) {
    //   console.log("good");
    //   setSelected(0);
    //   setImgs((prev) => [backgroundImageURL, ...prev]);
    //   setValue((prev) => ({ ...prev, backgroundImageURL }));
    //   handleModalClose();
    //   return;
    // }
    // alert("정확한 URL 주소를 입력해주세요.");
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
          <img src={PLUSIMG} alt="이미지 추가하기" />
          <InputFile onChange={handleChange} />
          <InputURL onSubmit={handleSubmit} />
        </>
      )}
    </Container>
  );
}

function InputFile({ ...props }) {
  const input = useRef();
  const handleClick = (event) => {
    if (event.key === "Enter" || event.key === " ") input.current.click();
  };

  return (
    <>
      <label tabIndex={0} htmlFor="file" onKeyDown={handleClick}>
        <p>
          <strong>파일</strong>
          <br />
          추가하기
        </p>
      </label>
      <input id="file" type="file" accept="image/*" ref={input} {...props} />
    </>
  );
}

function InputURL({ onSubmit, ...props }) {
  const { isOpen, handleModalOpen, handleModalClose } = useModal();
  const handleClick = (event) => {
    if (event.key === "Enter" || event.key === " ") handleModalOpen();
  };

  return (
    <>
      <label tabIndex={0} onClick={handleModalOpen} onKeyDown={handleClick}>
        <p>
          <strong>URL</strong>
          <br />
          주소로 추가하기
        </p>
      </label>
      {isOpen && (
        <ModalPortal>
          <ModalFrame onClickClose={handleModalClose}>
            <InputModal onSubmit={onSubmit(handleModalClose)} {...props} />
          </ModalFrame>
        </ModalPortal>
      )}
    </>
  );
}

function InputModal({ onSubmit }) {
  return (
    <Container__modal onSubmit={onSubmit}>
      <Text>URL 주소</Text>
      <InputWrapper>
        <Input placeholder="이미지 주소 붙여넣기" autoFocus />
      </InputWrapper>
      <Button width="100" height="l" type="primary">
        확인
      </Button>
    </Container__modal>
  );
}

export default Option;

const Container = styled.button`
  width: 100%;
  position: relative;

  border: 0.1rem solid rgba(0, 0, 0, 0.08);
  border-radius: 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--Gray1);

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  &:hover,
  &:focus-within {
    opacity: 0.5;

    > img {
      display: none;
    }

    > label {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      cursor: pointer;

      p {
        ${FONT14}
      }

      &:hover {
        strong {
          ${FONT16B};
        }
      }
    }
  }

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
    display: none;
  }

  input[type="file"] {
    width: 0;
    height: 0;
    padding: 0;
    border: 0;

    display: none;

    position: absolute;
    overflow: hidden;
  }
`;

const Container__modal = styled.form`
  width: 36rem;
  padding: 4rem 4rem 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  background-color: white;
  border-radius: 15px;
  border: 1px solid var(--GRAY2);
`;
const Text = styled.div`
  ${FONT18}
`;
const InputWrapper = styled.div`
  width: 100%;
`;
