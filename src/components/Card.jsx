import styled from 'styled-components';
import PropTypes from 'prop-types';
import Badge from './Badge';
import defaultImg from '@/assets/default_profile.svg';
import deleteIcon from '@/assets/trash_icon.svg';
import plusIcon from '@/assets/plus_icon.svg';
import { formatDate } from '../utils/formatDate';
import { FONT12, FONT18, FONT20, FONT20B } from '../styles/FontStyles';

Card.PropTypes = {
  type: PropTypes.oneOf(['Normal', 'Edit', 'Plus']),
  data: PropTypes.object,
};

/**
 * @param {*} data 메세지 데이터 객체
 */
function Card({ type, data = null }) {
  if (type === 'Plus') {
    return (
      <Container>
        <PlusIcon src={plusIcon} alt="추가하기 버튼" />
      </Container>
    );
  }

  const { sender, profileImageURL, relationship, content, font, createdAt } = data;
  return (
    <Container>
      <Profile>
        <ProfileImg src={profileImageURL || defaultImg} alt={`${sender}님의 프로필 사진`} />
        <Wrapper>
          <Sender>
            From. <Bold>{sender}</Bold>
          </Sender>
          <Badge>{relationship}</Badge>
        </Wrapper>
      </Profile>
      {type === 'Edit' && <DeleteIcon src={deleteIcon} alt="삭제하기 버튼" />}
      <Content font={font}>{content}</Content>
      <Date>{formatDate(createdAt)}</Date>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  width: 100%;
  max-width: 384px;
  min-width: 320px;
  height: 280px;
  padding: 28px 24px 24px;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  border-radius: 16px;
  background-color: var(--White);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;
const ProfileImg = styled.img`
  width: 56px;
  height: 56px;

  border-radius: 100px;
  border: 1px solid var(--Gray2);
  background: var(--white);
`;
const Profile = styled.div`
  width: 100%;
  padding-bottom: 16px;

  display: flex;
  gap: 14px;

  border-bottom: 1px solid var(--Gray2);
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  align-items: flex-start;
`;
const Sender = styled.div`
  ${FONT20};
  color: var(--Black);
  line-height: 120%;
`;
const Bold = styled.span`
  ${FONT20B};
  line-height: 120%;
`;
const DeleteIcon = styled.img`
  width: 40px;
  height: 40px;

  position: absolute;
  top: 28px;
  right: 24px;

  &:hover {
    cursor: pointer;
  }
`;
const Content = styled.div`
  width: 100%;
  height: 106px;

  overflow: hidden;

  color: var(--Gray6);
  text-overflow: ellipsis;
  white-space: nowrap;

  /* Font/18 Regular */
  ${FONT18}
  font-family : ${({ font }) => font};
  line-height: 155.556%;
  letter-spacing: -0.018rem;
`;
const Date = styled.div`
  width: 100%;

  ${FONT12}
  color: var(--Gray4);
  text-align: start;
  letter-spacing: -0.006rem;
`;
const PlusIcon = styled.img`
  width: 56px;
  height: 56px;

  &:hover {
    cursor: pointer;
  }
`;
