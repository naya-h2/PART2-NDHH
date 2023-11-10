import Button from "@/components/commons/Button";
import Input from "@/components/commons/Input";
import { DeviceSize } from "@/styles/DeviceSize";
import { FONT24B } from "@/styles/FontStyles";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { PropTypes } from "prop-types";

export const Container = styled.div`
  width: calc(100vw - 9.6rem);
  max-width: 120rem;

  margin: auto;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 5rem;

  @media (max-width: ${DeviceSize.tablet}) {
    width: calc(100vw - 9.6rem);
    margin-bottom: 10rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: calc(100vw - 9.6rem);
    min-width: 32rem;
    margin-bottom: 10rem;
  }
`;

const CONTENTS = {
  create: {
    p: "To.",
    input: "받는 사람 이름을 입력해 주세요.",
  },
  message: {
    p: "From.",
    input: "이름을 입력해 주세요.",
  },
};

Title.propTypes = {
  message: PropTypes.bool,
  value: PropTypes.string,
  setValue: PropTypes.func,
};
export function Title({ message, value, setValue }) {
  const handleChange = (event) => {
    const writer = event.target.value;
    setValue((prev) => ({
      ...prev,
      writer,
    }));
  };

  return (
    <Contents__title>
      <p>{message ? CONTENTS.message.p : CONTENTS.create.p}</p>
      <Input value={value} onChange={handleChange} placeholder={message ? CONTENTS.message.input : CONTENTS.create.input} />
    </Contents__title>
  );
}

export function Submit({ onClick, onSubmit }) {
  return (
    <Contents__button>
      <Link to="/post/id" onClick={onClick}>
        <Button type="primary" height="xl" onSubmit={onSubmit}>
          생성하기
        </Button>
      </Link>
    </Contents__button>
  );
}

const Contents__title = styled.div`
  width: 100%;
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  > p {
    ${FONT24B}
  }
`;

const Contents__button = styled.div`
  width: calc(100vw - 9.6rem);
  max-width: 120rem;
  margin: auto;

  @media (max-width: ${DeviceSize.tablet}) {
    position: fixed;

    left: 50%;
    bottom: 2.4rem;
    transform: translateX(-50%);
  }

  @media (max-width: ${DeviceSize.mobile}) {
    min-width: 32rem;

    position: fixed;

    left: 50%;
    bottom: 2.4rem;
    transform: translateX(-50%);
  }
`;
