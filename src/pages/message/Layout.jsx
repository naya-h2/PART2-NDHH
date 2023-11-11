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
import { getURL } from "@/utils/getURL";

const INITIAL = {
  sender: "",
  profileImageURL: defaultImg,
  relationship: REL.O,
  content: undefined,
  createdAt: undefined,
};

function Layout() {
  const [value, setValue] = useState(INITIAL);

  const handleClick = (event) => {
    if (!(value.sender && value.content)) {
      event.preventDefault();
      return;
    }
  };

  const handleSubmit = async () => {
    value.createdAt = new Date().toJSON();

    const formData = new FormData();
    for (const key of Object.keys(INITIAL)) {
      formData.append(key, value[key]);
    }
    for (const v of formData.values()) {
      console.log(v);
    }
  };

  return (
    <Container>
      <Title message value={value.sender} setValue={setValue} />
      <Profile value={value.profileImageURL} setValue={setValue} />
      <Relationship value={value.relationship} setValue={setValue} />
      <Edit setValue={setValue} />
      <Submit onClick={handleClick} onSubmit={handleSubmit} />
    </Container>
  );
}

export default Layout;

function Profile({ ...props }) {
  return (
    <BaseContents>
      <p>프로필 이미지</p>
      <ProfileImgControl {...props} />
    </BaseContents>
  );
}

function ProfileImgControl({ value, setValue }) {
  const [imgs, setImgs] = useState([defaultImg]);
  const [selected, setSelected] = useState(0);

  return (
    <Contents__profileControl>
      <ProfileImg $src={imgs[selected]} alt="설정된 프로필 이미지" />
      <p>{value ? `프로필 이미지를 선택해 주세요!` : `프로필 이미지를 추가해 주세요!`}</p>
      <AddImg setValue={setValue} imgs={imgs} setImgs={setImgs} selected={selected} setSelected={setSelected} />
    </Contents__profileControl>
  );
}

function AddImg({ setValue, imgs, setImgs, selected, setSelected }) {
  const handleClick = (idx, profileImageURL) => () => {
    setSelected(idx);
    setValue((prev) => ({ ...prev, profileImageURL }));
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size < 1024 ** 2 * 1) {
      (async function (file) {
        const profileImageURL = await getURL(file);
        const thumbNailURL = URL.createObjectURL(file);
        setSelected(0);
        setImgs((prev) => [thumbNailURL, ...prev]);
        setValue((prev) => ({ ...prev, profileImageURL }));
      })(file);
    }
  };

  return (
    <Contents__addImg>
      <InputAdd onChange={handleChange} />
      {imgs.map((img, idx) => (
        <button key={idx}>
          <Img $src={img} alt={`${idx + 1}번째로 추가한 사진`} onClick={handleClick(idx, img)} $check={selected === idx} />
          <CheckImg src={CHECKIMG} $check={selected === idx} />
        </button>
      ))}
    </Contents__addImg>
  );
}

function InputAdd({ ...props }) {
  return (
    <button>
      <label htmlFor="file">
        <img src={PLUSIMG} alt="이미지 추가하기" />
      </label>
      <input id="file" type="file" accept="image/*" {...props} />
    </button>
  );
}

const RELATIONSHIP = Object.values(REL);

function Relationship({ value, setValue }) {
  const handleClick = (relationship) => {
    setValue((prev) => ({ ...prev, relationship }));
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

const Contents__profileControl = styled.div`
  display: grid;
  grid-template: auto auto / auto 100%;
  grid-template-areas:
    "img text"
    "img add";
  column-gap: 3.2rem;

  p {
    margin-bottom: 1.2rem;

    ${FONT16};
    color: var(--Gray5);

    grid-area: text;
  }

  button {
    width: 5.6rem;
    height: 5.6rem;
    margin-right: 0.4rem;
    border-radius: 10rem;

    display: inline-block;
    position: relative;
  }
`;

const ProfileImg = styled.div`
  width: 9.3rem;
  height: 9.3rem;
  border-radius: 10rem;

  grid-area: img;

  ${({ $src }) => $src && `background-image: url(${$src}); background-size: cover;`}
`;

const Contents__addImg = styled.div`
  grid-area: add;

  label {
    cursor: pointer;
  }

  span {
    &:hover {
      opacity: 0.5;
    }
  }

  input[type="file"] {
    width: 0;
    height: 0;
    padding: 0;
    border: 0;

    position: absolute;
    overflow: hidden;
    visibility: hidden;
  }
`;

const Img = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 10rem;

  cursor: pointer;

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
