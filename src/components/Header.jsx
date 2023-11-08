import { FONT12, FONT14B, FONT16, FONT16B, FONT18, FONT18B, FONT28B } from "../styles/FontStyles";
import { Recipients } from "./mockUp";
import HeaderEmojis from "./HeaderEmojiDropDown";
import shareIcon from "../assets/share_24.svg";
import Logo from "../assets/Logo.svg";
import Button from "./Button";
import divideLine from "../assets/Rectangle_38.svg";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import ProfileImgList from "./ProfileImgList";
import { DeviceSize } from "../styles/DeviceSize";
// import { Link } from "react-router-dom";

Header.propTypes = {
  serviceType: PropTypes.oneOf([true, false]),
  hideButton: PropTypes.oneOf([true, false]),
};

function Header({ serviceType, hideButton = false }) {
  return serviceType ? makeServiceHeader() : makeNavHeader({ hideButton });
}

const makeNavHeader = ({ hideButton }) => {
  return (
    <>
      <Container bold>
        {/* <Link to="/"> */}
        <img src={Logo} />
        {/* </Link> */}
        {!hideButton && (
          <Button bold>
            <p>롤링 페이퍼 만들기</p>
          </Button>
        )}
      </Container>
      <Border></Border>
    </>
  );
};

// Button: share 아이콘 대응 필요합니다 +
// 저는 헤더 갭이 0.4인데 이거 어떻게 반영할지... ㅠㅠ gap: 1rem; -> gap: 0.4rem
// ProfileImgList : 이미지 위치 조절이 안돼는데 왜그런지 모르겠습니다...
// 저 Share 누르면 뜨는 버튼도 만들어야 돼요 ㅎ

const makeServiceHeader = () => {
  const { name, messageCount, recentMessages, topReactions } = Recipients;

  return (
    <>
      <Container>
        <Recipient>To. {name}</Recipient>
        <Wrapper>
          <SendersNum>
            <ProfileImgList messageCount={messageCount} data={recentMessages} />
            <P bold>{messageCount}</P>
            <P> 명이 작성했어요!</P>
            <DivideImg src={divideLine} alt="영역 분리 아이콘" />
          </SendersNum>
          <HeaderEmojis topReactions={topReactions} />
          <Button type="outlined" width="100" height="l" icon>
            추가
          </Button>
          <DivideImg src={divideLine} alt="영역 분리 아이콘" />
          <ShareButton>
            <img src={shareIcon} alt="공유 버튼" />
          </ShareButton>
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
      <Border bottom></Border>
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
  height: ${(props) => (props.bold ? "6.5rem" : "6.8rem")};
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

  ${(props) => (props.bold ? "" : MobileGrid)}
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

// Button 공용 컴포넌트로 수정 예정
const ShareButton = styled.button`
  height: 4.2rem;
  padding: ${(props) => (props.bold ? "0.8rem 1.6rem" : "0.6rem 1.6rem")};
  gap: 0.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.6rem;
  border: 0.1rem solid var(--Gray3);
  background: var(--White);

  p {
    ${(props) => (props.bold ? FONT16B : FONT16)};
    /* margin-left: ${(props) => (props.bold ? "6rem" : "")}; */

    @media (max-width: ${DeviceSize.mobile}) {
      ${FONT14B}
    }
  }

  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const DivideImg = styled.img`
  margin: 0 2.8rem;

  @media (max-width: ${DeviceSize.mobile}) {
    margin: 0 1.5rem;
  }
`;

const P = styled.p`
  ${(props) => (props.bold ? FONT18B : FONT18)};
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
  display: ${(props) => (props.bottom ? "none" : "block")};
  position: ${(props) => (props.bottom ? "absolute" : "static")};
  border-bottom: 0.1rem solid var(--Gray2);
  width: 100%;
  z-index: 5;

  @media (max-width: ${DeviceSize.mobile}) {
    display: ${(props) => (props.bottom ? "block" : "block")};
    bottom: ${(props) => (props.bottom ? "5.2rem" : "0")};
    left: 0;
  }
`;
