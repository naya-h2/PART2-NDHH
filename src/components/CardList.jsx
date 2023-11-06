import styled from 'styled-components';
import PropTypes from 'prop-types';
import Badge from './Badge';
import ProfileImgList from './ProfileImgList';
import patternPurple from '@/assets/pattern_purple.svg';
import patternOrange from '@/assets/pattern_orange.svg';
import patternBlue from '@/assets/pattern_blue.svg';
import patternGreen from '@/assets/pattern_green.svg';
import { FONT16, FONT16B, FONT24B } from '../styles/FontStyles';

CardList.PropTypes = {
  data: PropTypes.object,
};

/**
 * @param {*} data Recipient 데이터 객체
 */
function CardList({ data }) {
  const { name, backgroundColor, backgroundImageURL, messageCount, recentMessages, topReactions } = data;
  return (
    <Container color={backgroundColor} url={backgroundImageURL}>
      {backgroundImageURL && <Mask></Mask>}
      <Wrapper>
        <Name color={backgroundColor}>To. {name}</Name>
        <ProfileImgList messageCount={messageCount} data={recentMessages} />
        <Count color={backgroundColor}>
          <Bold color={backgroundColor}>{messageCount}</Bold>명이 작성했어요!
        </Count>
      </Wrapper>
      <BadgeWrapper>
        {topReactions.map((reaction) => (
          <Badge key={reaction.id} num={reaction.count}>
            {reaction.emoji}
          </Badge>
        ))}
      </BadgeWrapper>
    </Container>
  );
}

export default CardList;

const Container = styled.div`
  width: 275px;
  height: 260px;
  padding: 30px 24px 20px;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 43px;

  background: ${({ color }) => {
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
  background-image: ${({ color, url }) => {
    switch (color) {
      case 'purple':
        return `url(${patternPurple})`;
      case 'orange':
        return `url(${patternOrange})`;
      case 'blue':
        return `url(${patternBlue})`;
      case 'green':
        return `url(${patternGreen})`;
      default:
        return `url(${url})`;
    }
  }};
  background-size: ${({ url }) => (url !== null ? `cover` : null)};
  background-repeat: no-repeat;
  background-position: ${({ url }) => (url !== null ? null : `right bottom`)};

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;
const Mask = styled.div`
  width: 275px;
  height: 260px;

  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.54);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  z-index: 1;
`;
const Name = styled.div`
  ${FONT24B}
  color: ${({ color }) => (color !== null ? `var(--Gray9)` : `var(--White)`)};
  letter-spacing: -0.24px;
`;
const Count = styled.div`
  ${FONT16}
  color: ${({ color }) => (color !== null ? `var(--Gray7)` : `var(--White)`)};
  letter-spacing: -0.16px;
`;
const Bold = styled.span`
  ${FONT16B}
  color: ${({ color }) => (color !== null ? `var(--Gray7)` : `var(--White)`)};
  letter-spacing: -0.16px;
`;
const BadgeWrapper = styled.div`
  padding-top: 16px;

  display: flex;
  gap: 8px;

  z-index: 1;
`;
