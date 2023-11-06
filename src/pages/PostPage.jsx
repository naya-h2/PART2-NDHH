import styled from 'styled-components';
import Card from '../components/Card';
import Button from '../components/Button';
import { DeviceSize } from '../styles/DeviceSize';

/**
 * @param {*} param0 recipient 객체
 */
function PostPage({ path, data }) {
  const { name, backgroundColor, backgroundImageURL, messageCount, recentMessages } = data;
  return (
    <Container>
      <ButtonWrapper>
        {path === 'edit' ? (
          <Button type="primary" size="size40">
            삭제하기
          </Button>
        ) : (
          <Button type="outlined" size="size40">
            편집하기
          </Button>
        )}
      </ButtonWrapper>
      <CardWrapper>
        {path !== 'edit' && <Card type="Plus" />}
        {messageCount !== 0 && recentMessages.map((msg) => <Card key={msg.id} type="Normal" data={msg} />)}
      </CardWrapper>
    </Container>
  );
}

export default PostPage;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;

  @media (max-width: 1248px) {
    width: 100%;
    padding: 0 24px;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    max-width: 424px;
    padding: 0 20px;
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
const ButtonWrapper = styled.div`
  width: 100%;
  padding-top: 63px;
  padding-bottom: 11px;

  display: flex;
  justify-content: flex-end;
`;
