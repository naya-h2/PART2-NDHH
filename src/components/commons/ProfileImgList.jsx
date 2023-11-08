import styled from "styled-components";
import PropTypes from "prop-types";
import { FONT12 } from "../styles/FontStyles";

ProfileImgList.PropTypes = {
  messageCount: PropTypes.number,
  data: PropTypes.array,
};

/**
 * @param {*} data recentMessages 배열
 */
function ProfileImgList({ messageCount, data }) {
  const rest = messageCount - 3;

  return (
    <Container>
      {data[0] && <Img order="1" src={data[0].profileImageURL} />}
      {data[1] && <Img order="2" src={data[1].profileImageURL} />}
      {data[2] && <Img order="3" src={data[2].profileImageURL} />}
      {rest > 0 && <Rest>+{rest <= 999 ? rest : "999"}</Rest>}
    </Container>
  );
}

export default ProfileImgList;

const Container = styled.div`
  width: 100px;
  height: 30px;

  position: relative;

  display: flex;
  align-items: center;
`;
const Img = styled.img`
  width: 28px;
  height: 28px;

  position: absolute;
  left: ${({ order }) => `${17 * order - 17}px`};
  z-index: ${({ order }) => order};

  background-size: cover;
  background-position: center;
  border-radius: 100%;
  border: 1.5px solid var(--White);
`;
const Rest = styled.div`
  min-width: 28px;
  height: 28px;
  padding: 6px 5px;

  position: absolute;
  left: 51px;
  z-index: 4;

  display: flex;
  align-items: center;

  background-color: var(--White);
  border-radius: 30px;

  ${FONT12}
  color: var(--gray-500, #555);
  letter-spacing: -0.06px;
`;
