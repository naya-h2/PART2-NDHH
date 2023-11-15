import styled from "styled-components";
import propTypes from "prop-types";
import Header from "@/components/Header";
import ButtonControl from "@/components/post/ButtonControl";
import CardGrid from "@/components/post/CardGrid";
import useGetData from "@/hooks/useGetData";
import { DeviceSize } from "@/styles/DeviceSize";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { checkEditToken } from "@/utils/checkEditToken";


Layout.propTypes = {
  path: propTypes.oneOf(["edit", ""]),
};

function Layout({ path = "" }) {
  const { id } = useParams();
  const [DEP, setDEP] = useState(0);
  const [delList, setDelList] = useState([]);

  const recipientData = useGetData("RECIPIENTS_ID", id, null, DEP);
  const messageData = useGetData("RECIPIENTS_MESSAGES", id, 1000, DEP);
  const reactions = useGetData("RECIPIENTS_REACTIONS", id, null, DEP);

  checkEditToken(id, path);
  if (!recipientData || !messageData) return;

  const handleClick = () => {
    navigate("/list");
  };

  return (
    <>
      {path === "edit" ? (
        <Helmet>
          <title>Edit | Rolling</title>
        </Helmet>
      ) : (
        <Helmet>
          <title>{recipientData.name.slice(0, -4)} | Rolling</title>
        </Helmet>
      )}
      <Header userData={recipientData} setDEP={setDEP} reactions={reactions} serviceType />
      <Background $color={recipientData.backgroundColor} $url={recipientData.backgroundImageURL}>
        {recipientData.backgroundImageURL && <Mask></Mask>}
        <Container>
          <ButtonControl name={recipientData.name} setDEP={setDEP} path={path} delList={delList} setDelList={setDelList} recentMessages={messageData} />
          <CardGrid path={path} messageCount={recipientData.messageCount} recentMessages={messageData} setDelList={setDelList} />
        </Container>
        <button onClick={handleClick}>
          <img src={arrowImg} />
        </button>
      </Background>
    </>
  );
}

export default Layout;

const back = keyframes`
  50% {
    padding-right: 7rem;
  }
`;

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 24.6rem;

  position: relative;

  background-color: ${({ $color }) => `var(--${$color}2)`};
  background-image: ${({ $url }) => `url(${$url})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  > button {
    width: 20rem;
    height: 10rem;

    padding-right: 4rem;
    padding-bottom: 1rem;

    display: flex;
    justify-content: center;
    align-items: end;

    position: absolute;
    top: 0;
    left: 0;

    animation: ${back} 2s infinite;

    img {
      width: 8rem;
      height: auto;
    }
  }
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
