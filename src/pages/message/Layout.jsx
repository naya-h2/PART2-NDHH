import api from "@/api/api";
import { CreateMessage } from "@/api/getPostDate";
import Dropdown from "@/components/commons/Dropdown";
import TextEditor from "@/components/commons/Editor";
import Option from "@/components/commons/Option";
import { Container, Submit, Title } from "@/components/instances/CreateMessage";
import { REL } from "@/styles/ColorStyles";
import { FONT16, FONT24B } from "@/styles/FontStyles";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled, { keyframes } from "styled-components";

const DEFAULT = "https://i.ibb.co/YBLJML7/Frame-2593.png";

const INITIAL = {
  sender: "",
  URL: DEFAULT,
  relationship: REL.O,
  content: undefined,
  font: "Noto Sans",
};

function Layout() {
  const { id } = useParams();
  INITIAL.recipientId = id;
  const [value, setValue] = useState(INITIAL);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!(value.sender && value.content)) {
      return;
    }

    try {
      api("RECIPIENTS_MESSAGES", "POST", id, CreateMessage(value));
      navigate(`/post/${id}`);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container>
      <Title message value={value.sender} setValue={setValue} />
      <Profile value={value.profileImageURL} setValue={setValue} />
      <Relationship value={value.relationship} setValue={setValue} />
      <Edit setValue={setValue} />
      <Submit onSubmit={handleSubmit} />
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
  const [imgs, setImgs] = useState([DEFAULT]);
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

  return (
    <Contents__addImg>
      <Option setValue={setValue} setImgs={setImgs} setSelected={setSelected} />
      {imgs.map((img, idx) => (
        <Option key={idx} alt={`${idx + 1}번째로 추가한 사진`} check={selected === idx} img={img} onClick={handleClick(idx, img)} />
      ))}
    </Contents__addImg>
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
  grid-template: auto auto / auto 1fr;
  grid-template-areas:
    "img text"
    "img add";
  column-gap: 3.2rem;

  > p {
    margin-bottom: 1.2rem;

    ${FONT16};
    color: var(--Gray5);

    grid-area: text;
  }
`;

const ProfileImg = styled.div`
  width: 9.3rem;
  height: 9.3rem;
  border-radius: 10rem;

  grid-area: img;

  ${({ $src }) => $src && `background-image: url(${$src}); background-size: cover;`}
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Contents__addImg = styled.div`
  grid-area: add;
  display: flex;
  align-items: center;

  > button:first-child {
    background-color: var(--Gray5);

    transition: 0.5s ease-in;

    &:hover,
    &:focus-within {
      width: 15rem;
      height: 5.6rem;

      display: flex;
      align-items: center;

      background-color: var(--Gray2);

      transition: 0.5s ease-out;

      label {
        animation: ${fadeIn} 1.5s;
      }
    }

    img {
      width: 5.6rem;
    }
  }

  > button {
    width: 5.6rem;
    height: 5.6rem;
    margin-right: 0.4rem;

    border: 0;
    border-radius: 10rem;

    &::after {
      display: none;
    }

    div {
      width: 60%;
      height: 60%;
    }
  }
`;
