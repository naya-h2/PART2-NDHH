import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Badge from "./Badge";
import Logo from "../assets/Logo.svg";
import { FONT12, FONT16, FONT16B, FONT18, FONT18B, FONT28B } from "../styles/FontStyles";
import Ellipse from "../assets/Ellipse_for_messageCount.svg";
import divideLine from "../assets/Rectangle_38.svg";
import { Recipients } from "./mockUp";
import HeaderEmojiDropDown from "./HeaderEmojiDropDown";
import arrowDown from "../assets/arrow_down.svg";
import addIcon from "../assets/add_24.svg";
import shareIcon from "../assets/share_24.svg";
import { useState } from "react";
// import { Link } from "react-router-dom";

Header.propTypes = {
  serviceType: PropTypes.oneOf([true, false]),
};

function Header({ serviceType }) {
  return serviceType ? makeServiceHeader() : makeHeader();
}

const makeHeader = () => {
  return (
    <Container B>
      {/* <Link to="/"> */}
      <img src={Logo} />
      {/* </Link> */}
      <Button B>
        <p>롤링 페이퍼 만들기</p>
      </Button>
    </Container>
  );
};

const makeServiceHeader = () => {
  const { name, messageCount, recentMessages, topReactions } = Recipients;
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Container grid>
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
          <DivideImg src={divideLine} />
        </SendersNum>
        <Emojis>
          {topReactions.map((reaction, index) => {
            return (
              <Badge num={reaction.count} key={index}>
                {reaction.emoji}
              </Badge>
            );
          })}
        </Emojis>
        <button onClick={handleClick}>
          <ArrowDown src={arrowDown} />
        </button>
        {isVisible && <HeaderEmojiDropDown />}
        <Button>
          <img src={addIcon} />
          <p>추가</p>
        </Button>
        <DivideImg src={divideLine} />
        <Button>
          <img src={shareIcon} />
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Header;

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
  }

  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const MobileGrid = css`
  @media (max-width: 768px) {
    display: grid;
    grid-template-rows: 5.2rem 5.2rem;
    grid-template-areas:
      "Recipient"
      "Wrapper";
  }
`;

const Container = styled.div`
  width: calc(100vw - 2rem);
  /*피그마 요구사항에서는 아예 양 옆이 붙어있는데, 안예뻐서 양 끝에 1rem씩만 공간을 줬습니다.. 별로면 지울게요*/
  max-width: 119.9rem;
  padding: ${(props) => (props.B ? "1.1rem 0rem" : "1.3rem 0rem")};
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--White);
  /* border: 1rem;
  border-color: var(--Gray3); */

  ${(props) => (props.grid ? MobileGrid : "")}
`;

const Recipient = styled.p`
  ${FONT28B};
  grid-area: "Recipient";

  @media (max-width: 768px) {
    padding: 1.2rem 2rem;
    ${FONT18B}
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  grid-area: "Wrapper";
`;

const ArrowDown = styled.img`
  padding: 0 0.6rem;
  margin-right: 0.8rem;
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

const Emojis = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const SendersNum = styled.div`
  display: flex;

  @media (max-width: 1199px) {
    display: none;
  }
`;

// 모바일 사이즈 다른 컴포넌트로 조절하는 것들은 안건들였습니다.
