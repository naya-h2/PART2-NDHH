import styled from "styled-components";
import propTypes from "prop-types";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { DeviceSize } from "@/styles/DeviceSize";
import { RECIPIENT1, RECIPIENT2 } from "@/constants/test";

Layout.propTypes = {
  path: propTypes.oneOf(["edit", ""]),
};

function Layout({ path = "" }) {
  const { backgroundColor, backgroundImageURL, messageCount, recentMessages } = RECIPIENT2;
  return (
    <Background color={backgroundColor} url={backgroundImageURL}>
      {backgroundImageURL && <Mask></Mask>}
      <Container>
        <Btn path={path} />
        <CardGrid path={path} messageCount={messageCount} recentMessages={recentMessages} />
      </Container>
    </Background>
  );
}

function Btn({ path }) {
  return (
    <>
      {path === "edit" ? (
        <DeleteWrapper>
          <Button type="primary" height="l">
            저장하기
          </Button>
        </DeleteWrapper>
      ) : (
        <EditWrapper>
          <Button type="outlined" height="l" width="100">
            편집하기
          </Button>
        </EditWrapper>
      )}
    </>
  );
}

function CardGrid({ path, messageCount, recentMessages }) {
  return (
    <CardWrapper>
      {path !== "edit" && <Card type="Plus" />}
      {messageCount !== 0 && recentMessages.map((msg) => <Card key={msg.id} type={path === "edit" ? "Edit" : "Normal"} data={msg} />)}
    </CardWrapper>
  );
}

export default Layout;

const Background = styled.div`
  width: 100%;
  padding-bottom: 246px;

  position: relative;

  background-color: ${({ color }) => {
    switch (color) {
      case "purple":
        return `var(--Purple2)`;
      case "orange":
        return `var(--Orange2)`;
      case "blue":
        return `var(--Blue2)`;
      case "green":
        return `var(--Green2)`;
    }
  }};
  background-image: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Mask = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.5);
`;
const Container = styled.div`
  width: 1200px;
  padding-top: 63px;
  margin: 0 auto;

  @media (max-width: 1248px) {
    width: 100%;
    padding: 63px 24px 0;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    max-width: 424px;
    padding: 63px 20px 0;
  }
`;
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(320px, 384px));
  justify-content: space-between;
  row-gap: 28px;
  column-gap: 24px;
  column-gap: min(16px);

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, minmax(320px, 500px));
    gap: 16px;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    grid-template-columns: repeat(1, minmax(320px, 384px));
  }
`;
const DeleteWrapper = styled.div`
  width: 100%;
  padding-bottom: 11px;

  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 10;

  @media (max-width: 1050px) {
    width: calc(100% - 48px);
    padding: 0;

    flex-direction: column;

    position: fixed;
    bottom: 24px;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: calc(100% - 40px);
    max-width: 384px;
  }
`;
const EditWrapper = styled.div`
  width: 100%;
  padding-bottom: 11px;

  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 5;

  @media (max-width: 1050px) {
    padding-bottom: 14px;
  }
  @media (max-width: ${DeviceSize.mobile}) {
    padding-bottom: 16px;
  }
`;
