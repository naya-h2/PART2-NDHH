import { FONT14B, FONT16B, FONT18, FONT18B, FONT28B } from "../styles/FontStyles";
import { Recipients } from "./mockUp";
import HeaderEmojis from "./HeaderEmojiDropDown";
import shareIcon from "../assets/share_24.svg";
import Logo from "../assets/Logo.svg";
import Button from "./Button";
import divideLine from "../assets/Rectangle_38.svg";
import styled, { css } from "styled-components";
import propTypes from "prop-types";
import ProfileImgList from "./ProfileImgList";
import { DeviceSize } from "../styles/DeviceSize";
// import { Link } from "react-router-dom";

Header.propTypes = {
  serviceType: propTypes.oneOf([true, false]),
  hideButton: propTypes.oneOf([true, false]),
};

function Header({ serviceType, hideButton = false }) {
  return serviceType ? makeServiceHeader() : makeNavHeader({ hideButton });
}

const makeNavHeader = ({ hideButton }) => {
  return (
    <>
      <Container $B>
        {/* <Link to="/"> */}
        <img src={Logo} />
        {/* </Link> */}
        {!hideButton && (
          <Button type="outlined" width="170" height="l">
            <ButtonText>롤링 페이퍼 만들기</ButtonText>
          </Button>
        )}
      </Container>
      <Border></Border>
    </>
  );
};

const makeServiceHeader = () => {
  const { name, messageCount, recentMessages, topReactions } = Recipients;

  return (
    <>
      <Container>
        <Recipient>To. {name}</Recipient>
        <Wrapper>
          <SendersNum>
            <ProfileImgList messageCount={messageCount} data={recentMessages} />
            <P $B>{messageCount}</P>
            <P> 명이 작성했어요!</P>
            <DivideImg src={divideLine} alt="영역 분리 아이콘" />
          </SendersNum>
          <HeaderEmojis topReactions={topReactions} />
          <Button type="outlined" width="88" height="m" icon>
            추가
          </Button>
          <DivideImg src={divideLine} alt="영역 분리 아이콘" />
          <Button type="outlined" width="56" height="m">
            {" "}
            {/*이거 이미지나 p 태그 넣어도 되게 해쥬세요...*/}
            <img src={shareIcon} alt="공유 버튼" />
          </Button>
        </Wrapper>
      </Container>
      <BorderLine />
    </>
  );
};

export default Header;

function BorderLine() {
  return (
    <Container__border>
      <Border $Bottom></Border>
      <Border></Border>
    </Container__border>
  );
}

const MobileGrid = css`
  @media (max-width: ${DeviceSize.mobile}) {
    height: 10.4rem;
    padding: 0;

    display: grid;
    grid-template-rows: 5.2rem 5.2rem;
    grid-template-areas:
      "Recipient"
      "Wrapper";
    justify-content: start;
    gap: 0.1rem;
  }
`;

const Container = styled.div`
  width: calc(100vw - 1rem);
  height: ${(props) => (props.$B ? "6.5rem" : "6.8rem")};
  max-width: 120rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--White);

  @media (max-width: ${DeviceSize.pc}) {
    width: calc(100vw - 4.8rem);
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: calc(100vw - 4rem);
    height: 5.2rem;
  }

  ${(props) => (props.$B ? "" : MobileGrid)}
`;

const Recipient = styled.p`
  ${FONT28B};
  grid-area: "Recipient";

  @media (max-width: ${DeviceSize.mobile}) {
    ${FONT18B}
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: "Wrapper";
`;

const ButtonText = styled.p`
  ${FONT16B}

  @media (max-width: ${DeviceSize.mobile}) {
    ${FONT14B}
  }
`;

const DivideImg = styled.img`
  margin: 0 2.8rem;

  @media (max-width: ${DeviceSize.mobile}) {
    margin: 0 1.5rem;
  }
`;

const P = styled.p`
  ${(props) => (props.$B ? FONT18B : FONT18)};
`;

const SendersNum = styled.div`
  display: flex;

  @media (max-width: ${DeviceSize.pc}) {
    display: none;
  }
`;

const Container__border = styled.div`
  width: 100vw;
  position: relative;
`;

const Border = styled.div`
  display: ${(props) => (props.$Bottom ? "none" : "block")};
  position: ${(props) => (props.$Bottom ? "absolute" : "static")};
  border-bottom: 0.1rem solid var(--Gray2);
  width: 100%;
  z-index: 5;

  @media (max-width: ${DeviceSize.mobile}) {
    display: ${(props) => (props.$Bottom ? "block" : "block")};
    bottom: ${(props) => (props.$Bottom ? "5.2rem" : "0")};
    left: 0;
  }
`;
