import styled from "styled-components";
import { FONT16, FONT18B, FONT24B } from "@/styles/FontStyles";
import Input from "@/components/commons/Input";
import Dropdown from "@/components/commons/Dropdown";
import TextEditor from "@/components/commons/Editor";
import Button from "@/components/commons/Button";
import defaultImg from "@/assets/default_profile.svg";
import { Link } from "react-router-dom";
import { DeviceSize } from "@/styles/DeviceSize";

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

// 이거 components/instances/FixedButton 컴포넌트랑 똑같아서 그거 사용하셔도 괜찮을 것 같아욤
function Submit() {
  return (
    <Contents__submit>
      <Link to="/post/id">
        <Button type="primary" height="xl">
          <ButtonText>생성하기</ButtonText>
        </Button>
      </Link>
    </Contents__submit>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: calc(100vw - 9.6rem);
  max-width: 120rem;
  padding-bottom: 5rem;

  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media screen and (max-width: ${DeviceSize.pc}) {
    width: calc(100vw - 9.6rem);
    padding-bottom: 12rem;
  }

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: calc(100vw - 9.6rem);
    min-width: 32rem;
    padding-bottom: 12rem;
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
      margin-bottom: 1.2rem;

      ${FONT16};
      color: var(--Gray5);
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
`;

const ButtonText = styled.p`
  width: 23.2rem;
  ${FONT18B};

  @media (max-width: 1199px) {
    width: calc(100vw - 9.6rem);
  }
`;

const Contents__submit = styled.div`
  width: calc(100vw - 9.6rem);
  max-width: 120rem;
  margin: auto;

  @media (max-width: ${DeviceSize.pc}) {
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
