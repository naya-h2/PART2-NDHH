import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import Button from '../components/Button';
import { DeviceSize } from '../styles/DeviceSize';

PostPage.PropTypes = {
  path: PropTypes.oneOf(['edit', '']),
  data: PropTypes.object,
};

/**
 * @param {*} data Recipient 객체
 */
function PostPage({ path = '', data }) {
  const { name, backgroundColor, backgroundImageURL, messageCount, recentMessages } = data;
  return (
    <Container>
      {path === 'edit' ? (
        <DeleteWrapper>
          <Button type="primary" size="size40">
            저장하기
          </Button>
        </DeleteWrapper>
      ) : (
        <EditWrapper>
          <Button type="outlined" size="size40">
            편집하기
          </Button>
        </EditWrapper>
      )}

      <CardWrapper>
        {path !== 'edit' && <Card type="Plus" />}
        {messageCount !== 0 && recentMessages.map((msg) => <Card key={msg.id} type={path === 'edit' ? 'Edit' : 'Normal'} data={msg} />)}
      </CardWrapper>
    </Container>
  );
}

export default PostPage;

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
  /* justify-items: center; */
  justify-content: space-between;
  row-gap: 28px;
  column-gap: 24px;
  column-gap: min(16px);

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, minmax(320px, 384px));
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
  z-index: 10;

  @media (max-width: 1050px) {
    padding-bottom: 14px;
  }
  @media (max-width: ${DeviceSize.mobile}) {
    padding-bottom: 16px;
  }
`;
