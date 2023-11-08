import styled from "styled-components";
import PropTypes from "prop-types";
import Card from "@/components/Card";
import Button from "@/components/commons/Button";
import { DeviceSize } from "@/styles/DeviceSize";

PostPage.PropTypes = {
  path: PropTypes.oneOf(["edit", ""]),
  data: PropTypes.object,
};

/**
 * @param {*} data Recipient 객체
 */
function PostPage({ path = "", data }) {
  const { name, backgroundColor, backgroundImageURL, messageCount, recentMessages } = data;

  return (
    <Container>
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
      <CardWrapper>
        {path !== "edit" && <Card type="Plus" />}
        {messageCount !== 0 && recentMessages.map((msg) => <Card key={msg.id} type={path === "edit" ? "Edit" : "Normal"} data={msg} />)}
      </CardWrapper>
    </Container>
  );
}

export default PostPage;

const Container = styled.div`
  width: 120rem;
  padding-top: 6.3rem;
  margin: 0 auto;

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
  display: grid;
  grid-template-columns: repeat(3, minmax(32rem, 38.4rem));
  justify-content: space-between;
  row-gap: 2.8rem;
  column-gap: 2.4rem;
  column-gap: min(1.6rem);

  @media (max-width: ${DeviceSize.tablet}) {
    grid-template-columns: repeat(2, minmax(32rem, 38.4rem));
    gap: 1.6rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    grid-template-columns: repeat(1, minmax(32rem, 38.4rem));
  }
`;

const DeleteWrapper = styled.div`
  width: 100%;
  padding-bottom: 1.1rem;

  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 10;

  @media (max-width: ${DeviceSize.tablet}) {
    width: calc(100% - 48px);
    padding: 0;

    flex-direction: column;

    position: fixed;
    bottom: 2.4rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: calc(100% - 40px);
    max-width: 38.4rem;
  }
`;

const EditWrapper = styled.div`
  width: 100%;
  padding-bottom: 1.1rem;

  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 10;

  @media (max-width: ${DeviceSize.tablet}) {
    padding-bottom: 1.4rem;
  }
  @media (max-width: ${DeviceSize.mobile}) {
    padding-bottom: 1.6rem;
  }
`;
