import CHECKIMG from "@/assets/check.svg";
import defaultImg from "@/assets/default_profile.svg";
import Dropdown from "@/components/commons/Dropdown";
import TextEditor from "@/components/commons/Editor";
import { Container, Submit, Title } from "@/components/instances/CreateMessage";
import { REL } from "@/styles/ColorStyles";
import { FONT16, FONT24B } from "@/styles/FontStyles";
import { useState } from "react";
import styled from "styled-components";
import PLUSIMG from "@/assets/plus_icon.svg";

const INITIAL = {
  writer: "",
  img: defaultImg,
  rel: REL.O,
  text: "",
};

function Layout() {
  const [value, setValue] = useState(INITIAL);

  const handleClick = (event) => {
    if (!value.text) {
      event.preventDefault();
      return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Title message value={value.writer} setValue={setValue} />
      <Profile value={value.img} setValue={setValue} />
      <Relationship value={value.rel} setValue={setValue} />
      <Edit setValue={setValue} />
      <Submit onClick={handleClick} onSubmit={handleSubmit} />
    </Container>
  );
}

export default Layout;

function Profile({ value, setValue }) {
  return (
    <Contents__profile>
      <p>프로필 이미지</p>
      <div>
        <ProfileImg $src={value} alt="설정된 프로필 이미지" />
        <div>
          <p>프로필 이미지를 선택해주세요!</p>
          <AddImg setValue={setValue} />
        </div>
      </div>
    </Contents__profile>
  );
}

function AddImg({ setValue }) {
  const [imgs, setImgs] = useState([]);
  const [selected, setSelected] = useState(0);

  const handleClick = (idx, img) => () => {
    setSelected(idx);
    setValue((prev) => ({ ...prev, img }));
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const img = URL.createObjectURL(file);
      setImgs((prev) => [img, ...prev]);
      setValue((prev) => ({ ...prev, img }));
    }
  };

  return (
    <Contents__addImg>
      <span>
        <label htmlFor="file">
          <img src={PLUSIMG} alt="이미지 추가하기" />
        </label>
        <input id="file" type="file" onChange={handleChange} />
      </span>
      {imgs.map((img, idx) => (
        <span key={idx}>
          <Img $src={img} alt={`${idx + 1}번째로 추가한 사진`} onClick={handleClick(idx, img)} $check={selected === idx} />
          <CheckImg src={CHECKIMG} $check={selected === idx} />
        </span>
      ))}
    </Contents__addImg>
  );
}

const RELATIONSHIP = Object.values(REL);

function Relationship({ value, setValue }) {
  const handleClick = (rel) => {
    setValue((prev) => ({ ...prev, rel }));
  };

  return (
    <BaseContents>
      <p>상대와의 관계</p>
      <Dropdown value={value} setValue={handleClick} items={RELATIONSHIP} />
    </BaseContents>
  );
}

function Edit({ setValue }) {
  return (
    <BaseContents>
      <p>내용을 입력해 주세요</p>
      <TextEditor setValue={setValue} />
    </BaseContents>
  );
}

const BaseContents = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  > p {
    ${FONT24B}
  }
`;

const Contents__profile = styled(BaseContents)`
  > div > img {
    width: 8rem;
    height: 8rem;
    border: 10rem;
  }

  > div {
    display: flex;
    gap: 3.2rem;

    p {
      margin-bottom: 1.2rem;

      ${FONT16};
      color: var(--Gray5);
    }

    span {
      margin-right: 0.4rem;

      display: inline-block;
      position: relative;
    }
  }
`;

const ProfileImg = styled.div`
  width: 9.3rem;
  height: 9.3rem;
  border-radius: 10rem;

  ${({ $src }) => $src && `background-image: url(${$src}); background-size: cover;`}
`;

const Contents__addImg = styled.div`
  label {
    cursor: pointer;
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

const Img = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 10rem;

  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  ${({ $check }) => $check && `opacity: 0.5;`}
  ${({ $src }) => $src && `background-image: url(${$src}); background-size: cover;`}
`;

const CheckImg = styled.img`
  padding: 0.5rem;
  border-radius: 5rem;

  display: ${({ $check }) => ($check ? `inline` : `none`)};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  opacity: 0.7;
  background-color: var(--Black);
`;
