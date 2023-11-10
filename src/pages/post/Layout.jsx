import Card from "@/components/Card";
import Button from "@/components/commons/Button";
import { RECIPIENT2 } from "@/constants/test";
import useData from "@/hooks/useData";
import useGetWindowWidth from "@/hooks/useGetWindowWidth";
import { COLOR } from "@/styles/ColorStyles";
import { DeviceSize, DeviceSizeNum } from "@/styles/DeviceSize";
import { Z_INDEX } from "@/styles/ZindexStyles";
import { sortNew } from "@/utils/sort";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

Layout.propTypes = {
  path: propTypes.oneOf(["edit", ""]),
};

function Layout({ path = "" }) {
  const userData = useData("RECIPIENTS_ID", "GET", 212);
  const senderData = useData("RECIPIENTS_MESSAGES", "GET", 212);
  // 일단 id 목업 데이터 서버에 넣은 걸로 지정

  if (userData && senderData) {
    const { backgroundColor, backgroundImageURL, messageCount } = userData;
    // 이거 recentMessages면 항상 카드 3개만 뜨는 것 같아서 데이터만 바꿔줬습니당...!
    const sortedData = sortNew(senderData);
    return (
      <Background $color={backgroundColor} $url={backgroundImageURL}>
        {backgroundImageURL && <Mask></Mask>}
        <Container>
          <Btn path={path} />
          <CardGrid path={path} messageCount={messageCount} recentMessages={sortedData} />
        </Container>
      </Background>
    );
  }
}

function Btn({ path }) {
  const windowWidth = useGetWindowWidth();

  return (
    <>
      {path === "edit" ? (
        <SaveWrapper>
          <Link to="/post/id">
            {windowWidth > DeviceSizeNum.tablet ? (
              <Button type="primary" height="l" width="100">
                저장하기
              </Button>
            ) : (
              <Button type="primary" height="xl">
                저장하기
              </Button>
            )}
          </Link>
        </SaveWrapper>
      ) : (
        <EditWrapper>
          <Link to="/post/id/edit">
            <Button type="outlined" height="l" width="100">
              편집하기
            </Button>
          </Link>
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
  min-height: calc(100vh - 13.5rem);
  padding-bottom: 24.6rem;

  position: relative;

  background-color: ${({ $color }) => {
    switch ($color) {
      case COLOR.P:
        return `var(--${COLOR.P}2)`;
      case COLOR.O:
        return `var(--${COLOR.O}2)`;
      case COLOR.B:
        return `var(--${COLOR.B}2)`;
      case COLOR.G:
        return `var(--${COLOR.G}2)`;
    }
  }};
  background-image: ${({ $url }) => `url(${$url})`};
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
  width: 120rem;
  padding-top: 6.3rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 1248px) {
    width: 100%;
    padding: 6.3rem 2.4rem 0;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    max-width: 42.4rem;
    padding: 6.3rem 2rem 0;
  }
`;

const CardWrapper = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, minmax(32rem, 38.4rem));
  justify-content: space-between;
  row-gap: 2.8rem;
  column-gap: 2.4rem;
  column-gap: min(1.6rem);

  @media (max-width: ${DeviceSize.tablet}) {
    grid-template-columns: repeat(2, minmax(32rem, 50rem)); /* Assuming 500px is 50rem */
    gap: 1.6rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    grid-template-columns: repeat(1, minmax(32rem, 38.4rem));
  }
`;

const SaveWrapper = styled.div`
  width: 10rem;
  padding-bottom: 1.1rem;

  position: relative;

  z-index: ${Z_INDEX.postLayout_SaveWrapper};

  @media (max-width: ${DeviceSize.tablet}) {
    width: calc(100% - 4.8rem);
    padding: 0;

    flex-direction: column;

    position: fixed;
    bottom: 2.4rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: calc(100% - 4rem);
    max-width: 38.4rem;
  }
`;

const EditWrapper = styled.div`
  padding-bottom: 1.1rem;

  position: relative;

  z-index: ${Z_INDEX.postLayout_EditWrapper};

  @media (max-width: ${DeviceSize.tablet}) {
    padding-bottom: 1.4rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    padding-bottom: 1.6rem;
  }
`;
