import { Outlet } from 'react-router';
import styled from 'styled-components';
import Header from '@/components/Header.jsx';
import PostPage from './PostPage';
import { RECIPIENT1, RECIPIENT2 } from '../constants/test';

function PostLayout() {
  const { backgroundColor, backgroundImageURL } = RECIPIENT1;

  return (
    <>
      <Header />
      <Header serviceType={true} />
      <Background color={backgroundColor} url={backgroundImageURL} h={window.innerHeight}>
        {backgroundImageURL && <Mask></Mask>}
        {/* <Outlet /> */}
        <PostPage path="" data={RECIPIENT1} />
      </Background>
    </>
  );
}

export default PostLayout;

const Background = styled.div`
  width: 100%;
  padding-bottom: 246px;

  position: relative;

  background-color: ${({ color }) => {
    switch (color) {
      case 'purple':
        return `var(--Purple2)`;
      case 'orange':
        return `var(--Orange2)`;
      case 'blue':
        return `var(--Blue2)`;
      case 'green':
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
