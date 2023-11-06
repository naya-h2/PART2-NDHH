import { FONT12, FONT14B, FONT16, FONT16B, FONT18, FONT18B, FONT28B } from "../styles/FontStyles";
import { Recipients } from "./mockUp";
import HeaderEmojis from "./HeaderEmojiDropDown";
import addIcon from "../assets/add_24.svg";
import shareIcon from "../assets/share_24.svg";
import Logo from "../assets/Logo.svg";
import Ellipse from "../assets/Ellipse_for_messageCount.svg";
import divideLine from "../assets/Rectangle_38.svg";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

Header.propTypes = {
  serviceType: PropTypes.oneOf([true, false]),
};

function Header({ serviceType }) {
  return serviceType ? makeServiceHeader() : makeNavHeader();
}

const makeNavHeader = () => {
  return (
    <>
      <Container B>
        {/* <Link to="/"> */}
        <img src={Logo} />
        {/* </Link> */}
        <Button B>
          <p>롤링 페이퍼 만들기</p>
        </Button>
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
          {messageCount > 0 && (
            <Contents>
              {recentMessages.map((message, index) => {
                return <ProfileImg src={message.profileImageURL} alt="프로필 이미지" key={index} index={index} />;
              })}
              {messageCount > 3 && (
                <>
                  <EllipseImg src={Ellipse} />
                  <p>+{messageCount - 3}</p>
                </>
              )}
            </Contents>
          )}
          <SendersNum>
            <P B>{messageCount}</P>
            <P> 명이 작성했어요!</P>
            <DivideImg src={divideLine} alt="영역 분리 아이콘" />
          </SendersNum>
          <HeaderEmojis topReactions={topReactions} />
          <Button>
            <img src={addIcon} alt="이모티콘 반응 추가 버튼" />
            <p>추가</p>
          </Button>
          <DivideImg src={divideLine} alt="영역 분리 아이콘" />
          <Button>
            <img src={shareIcon} alt="공유 버튼" />
          </Button>
        </Wrapper>
      </Container>
      <Border></Border>
    </>
  );
};

export default Header;

const MobileGrid = css`
  @media (max-width: 768px) {
    padding: 0;

    display: grid;
    grid-template-rows: 5.2rem 5.2rem;
    grid-template-areas:
      "Recipient"
      "Wrapper";
    justify-content: space-evenly;
  }
`;

const Container = styled.div`
  width: calc(100vw - 1rem);
  max-width: 119.9rem;
  padding: ${(props) => (props.B ? "1.1rem 0rem" : "1.3rem 0rem")};
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--White);

  @media (max-width: 1199px) {
    width: calc(100vw - 4.8rem);
  }

  @media (max-width: 768px) {
    width: calc(100vw - 4rem);
  }

  ${(props) => (props.B ? "" : MobileGrid)}
`;

const Recipient = styled.p`
  ${FONT28B};
  grid-area: "Recipient";

  @media (max-width: 768px) {
    ${FONT18B}
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: "Wrapper";
`;

const Contents = styled.div`
  margin-right: 1.1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  position: relative;

  p {
    width: 2.8rem;
    top: 50%;
    transform: translateY(-50%);
    right: 0rem;

    position: absolute;
    text-align: center;
    z-index: 5;
    ${FONT12};
  }

  @media (max-width: 1199px) {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
  }
`;

// Button 공용 컴포넌트로 수정 예정
const Button = styled.button`
  height: 4.2rem;
  padding: ${(props) => (props.B ? "0.8rem 1.6rem" : "0.6rem 1.6rem")};
  gap: 0.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.6rem;
  border: 0.1rem solid var(--Gray3);
  background: var(--White);

  p {
    ${(props) => (props.B ? FONT16B : FONT16)};

    @media (max-width: 768px) {
      ${FONT14B}
    }
  }

  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

// ProfileImg 공용 컴포넌트로 수정 예정
const ProfileImg = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  padding: 0;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${({ index }) => `${(index + 1) * 1.4}rem`};

  z-index: ${({ index }) => `${3 - index}`};
`;

const EllipseImg = styled.img`
  z-index: 4;
`;

const DivideImg = styled.img`
  margin: 0 2.8rem;

  @media (max-width: 768px) {
    margin: 0 1.5rem;
  }
`;

const P = styled.p`
  ${(props) => (props.B ? FONT18B : FONT18)};
`;

const SendersNum = styled.div`
  display: flex;

  @media (max-width: 1199px) {
    display: none;
  }
`;

const Border = styled.div`
  border-bottom: 0.1rem solid var(--Gray2);
  border-width: 100%;
`;
