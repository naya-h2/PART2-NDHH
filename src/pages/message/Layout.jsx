import styled from "styled-components";
import Input from "@/components/Input";
import defaultImg from "@/assets/default_profile.svg";
import { FONT16, FONT24B } from "../../styles/FontStyles";
import Dropdown from "../../components/Dropdown";
import TextEditor from "./../../components/Editor";
import Button from "../../components/Button";

function Layout() {
  return (
    <Container>
      <Wrapper>
        <Title />
        <Profile />
        <Relationship />
        <Edit />
        <Submit />
      </Wrapper>
    </Container>
  );
}

export default Layout;

function Title() {
  return (
    <Contents__title>
      <p>From.</p>
      <Input placeholder="이름을 입력해 주세요." />
    </Contents__title>
  );
}

function Profile() {
  return (
    <Contents__profile>
      <p>프로필 이미지</p>
      <div>
        <img src={defaultImg} alt="설정된 프로필 이미지" />
        <div>
          <p>프로필 이미지를 선택해주세요!</p>
          {PROFILE_IMG.map((img, idx) => (
            <ProfileImg key={idx} src={img} />
          ))}
        </div>
      </div>
    </Contents__profile>
  );
}

const PROFILE_IMG = [defaultImg, defaultImg, defaultImg, defaultImg, defaultImg, defaultImg, defaultImg, defaultImg, defaultImg, defaultImg];

function Relationship() {
  return (
    <BaseContents>
      <p>상대와의 관계</p>
      <Dropdown />
    </BaseContents>
  );
}

function Edit() {
  return (
    <>
      <BaseContents>
        <p>내용을 입력해 주세요</p>
        <TextEditor />
      </BaseContents>
      <BaseContents>
        <p>폰트 선택</p>
        <Dropdown />
      </BaseContents>
    </>
  );
}

function Submit() {
  return (
    <Button type="primary" height="xl">
      생성하기
    </Button>
  );
}

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 72rem;

  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media screen and (max-width: 1199px) {
    width: calc(100vw - 4.8rem);
    max-width: 72rem;
  }

  @media screen and (max-width: 768px) {
    width: calc(100vw - 4rem);
    max-width: 32rem;
  }
`;

const BaseContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  > p {
    ${FONT24B}
  }
`;

const Contents__title = styled(BaseContents)`
  input {
    width: 100%;
  }
`;

const Contents__profile = styled(BaseContents)`
  > img {
    width: 8rem;
  }

  > div {
    display: flex;
    gap: 3.2rem;

    p {
      ${FONT16};
      color: var(--Gray5);

      margin-bottom: 1.2rem;
    }
  }
`;

const ProfileImg = styled.img`
  width: 56px;
  height: 56px;

  margin-right: 0.4rem;

  border-radius: 100px;
  border: 1px solid var(--Gray2);
  background: var(--white);

  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;

    margin-right: 0.1rem;
  }
`;
