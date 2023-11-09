import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { FONT14B, FONT16B, FONT16, FONT18, FONT18B, FONT28B } from "@/styles/FontStyles";
import { DeviceSize } from "@/styles/DeviceSize";
import { Recipients } from "@/constants/mockUp";
import HeaderEmojis from "@/components/instances/HeaderEmojiDropDown";
import ProfileImgList from "@/components/commons/ProfileImgList";
import Button from "@/components/commons/Button";
import shareIcon from "@/assets/share_24.svg";
import Logo from "@/assets/Logo.svg";
import divideLine from "@/assets/Rectangle_38.svg";
import ShareDropdownButton from "./instances/ShareDropdownButton";
// import { Link } from "react-router-dom";

Header.propTypes = {
  serviceType: PropTypes.oneOf([true, false]),
  hideButton: PropTypes.oneOf([true, false]),
};

function Header({ serviceType, hideButton = false }) {
  return serviceType ? makeServiceHeader() : makeNavHeader({ hideButton });
}

function makeNavHeader({ hideButton }) {
  return (
    <>
      <Container $B>
        {/* <Link to="/"> */}
        <img src={Logo} />
        {/* </Link> */}
        {!hideButton && (
          <Button type="outlined" width="170" height="l">
            {/*모바일에서 width가 줄어드는데 그냥 버튼 두 개 만드는 수밖에 없을까요..?*/}
            <ButtonText $B>롤링 페이퍼 만들기</ButtonText>
          </Button>
        )}
      </Container>
      <Border></Border>
    </>
  );
}

function makeServiceHeader() {
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
          <CustomButton type="outlined" width="94" height="m" icon>
            <ButtonText>추가</ButtonText>
          </CustomButton>
          <DivideImg src={divideLine} alt="영역 분리 아이콘" />
          <ShareDropdownButton />
        </Wrapper>
      </Container>
      <BorderLine />
    </>
  );
}

function BorderLine() {
  return (
    <Container__border>
      <Border $Bottom></Border>
      <Border></Border>
    </Container__border>
  );
}

export default Header;

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
  width: calc(100vw - 4.8rem);
  height: ${(props) => (props.$B ? "6.5rem" : "6.8rem")};
  max-width: 115.2rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--White);

  @media (max-width: ${DeviceSize.mobile}) {
    /* width: calc(100vw - 4rem); */
    height: 5.2rem;
  }

  ${(props) => (props.$B ? "" : MobileGrid)}
`;

const Recipient = styled.p`
  grid-area: "Recipient";

  ${FONT28B};

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

const CustomButton = styled(Button)`
  @media (max-width: ${DeviceSize.mobile}) {
    width: 4.4rem;
    padding: 0.6rem 0.6rem;
  }
`;

const ButtonText = styled.p`
  ${(props) => (props.$B ? FONT16B : FONT16B)}

  @media (max-width: ${DeviceSize.mobile}) {
    ${(props) => (props.$B ? FONT14B : "display: none")}
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
  width: 100%;

  position: ${(props) => (props.$Bottom ? "absolute" : "static")};
  z-index: 5;

  display: ${(props) => (props.$Bottom ? "none" : "block")};

  border-bottom: 0.1rem solid var(--Gray2);

  @media (max-width: ${DeviceSize.mobile}) {
    display: ${(props) => (props.$Bottom ? "block" : "block")};
    bottom: ${(props) => (props.$Bottom ? "5.2rem" : "0")};
    left: 0;
  }
`;
