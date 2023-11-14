import Card from "@/components/Card";
import Button from "@/components/commons/Button";
import Modal from "@/components/Modal";
import ModalPortal from "@/components/ModalPortal";
import ModalFrame from "@/components/ModalFrame";
import InputModal from "@/components/InputModal";
import DeleteModal from "@/components/DeleteModal";
import Header from "@/components/Header";
import useModal from "@/hooks/useModal";
import useGetData from "@/hooks/useGetData";
import useGetWindowWidth from "@/hooks/useGetWindowWidth";
import { COLOR } from "@/styles/ColorStyles";
import { DeviceSize, DeviceSizeNum } from "@/styles/DeviceSize";
import { Z_INDEX } from "@/styles/ZindexStyles";
import { sortNew } from "@/utils/sort";
import propTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

Layout.propTypes = {
  path: propTypes.oneOf(["edit", ""]),
};

function Layout({ path = "" }) {
  const [cardData, setCardData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const recipientData = useGetData("RECIPIENTS_ID", id);
  const messageData = useGetData("RECIPIENTS_MESSAGES", id);

  if (path === "edit") {
    if (sessionStorage.getItem("editToken") !== id) navigate("/notFound");
  }

  if (!recipientData || !messageData) {
    //return <Navigate to="/notFound" />;
    return;
  }

  const { name, backgroundColor, backgroundImageURL, messageCount } = recipientData;
  const sortedData = sortNew(messageData);
  if (!cardData) {
    setCardData(sortedData);
  }

  return (
    <>
      {path === "edit" ? (
        <Helmet>
          <title>Edit | Rolling</title>
        </Helmet>
      ) : (
        <Helmet>
          <title>{name.slice(0, -4)} | Rolling</title>
        </Helmet>
      )}
      <Header userData={recipientData} serviceType={true} />
      <Background $color={backgroundColor} $url={backgroundImageURL}>
        {backgroundImageURL && <Mask></Mask>}
        <Container>
          <ButtonControl path={path} password={name.slice(-4)} name={name.slice(0, -4)} id={id} recentMessages={cardData} />
          <CardGrid setCardData={setCardData} path={path} messageCount={messageCount} recentMessages={cardData} />
        </Container>
      </Background>
    </>
  );
}

function ButtonControl({ path, password, name, id, recentMessages }) {
  const windowWidth = useGetWindowWidth();

  return (
    <>
      {path === "edit" ? (
        windowWidth > DeviceSizeNum.tablet ? (
          <ButtonWrapper>
            <SaveBtn id={id} pc={true} />
            <DeleteBtn />
          </ButtonWrapper>
        ) : (
          <>
            <SaveBtn id={id} />
            <DeleteBtn name={name} recentMessages={recentMessages} />
          </>
        )
      ) : (
        <EditBtn password={password} />
      )}
    </>
  );
}

function SaveBtn({ id, pc = false }) {
  return pc ? (
    <SaveWrapper>
      <Link to={`/post/${id}`}>
        <Button type="primary" height="l" width="100">
          저장하기
        </Button>
      </Link>
    </SaveWrapper>
  ) : (
    <SaveWrapper>
      <Link to={`/post/${id}`}>
        <Button type="primary" height="xl">
          저장하기
        </Button>
      </Link>
    </SaveWrapper>
  );
}

function DeleteBtn({ name, recentMessages }) {
  const { isOpen, handleModalOpen, handleModalClose } = useModal();

  return (
    <>
      <EditWrapper>
        <Button type="error" height="l" width="100" onClick={handleModalOpen}>
          삭제하기
        </Button>
      </EditWrapper>
      {isOpen && (
        <ModalPortal>
          <ModalFrame onClickClose={handleModalClose}>
            <DeleteModal name={name} recentMessages={recentMessages} onClose={handleModalClose} />
          </ModalFrame>
        </ModalPortal>
      )}
    </>
  );
}

function EditBtn({ password }) {
  const { isOpen, handleModalOpen, handleModalClose } = useModal();

  return (
    <>
      <EditWrapper>
        <Button type="outlined" height="l" width="100" onClick={handleModalOpen}>
          편집하기
        </Button>
      </EditWrapper>
      {isOpen && (
        <ModalPortal>
          <ModalFrame onClickClose={handleModalClose}>
            <InputModal password={password} onClose={handleModalClose} />
          </ModalFrame>
        </ModalPortal>
      )}
    </>
  );
}

function CardGrid({ setCardData, path, messageCount, recentMessages }) {
  const { isOpen, handleModalOpen, handleModalClose } = useModal();
  const [message, setMessage] = useState("");

  const handleCardClick = (msg) => {
    setMessage(msg);
    handleModalOpen();
  };

  return (
    <CardWrapper>
      {path !== "edit" && <Card type="Plus" />}
      {messageCount !== 0 && recentMessages.map((msg) => <Card key={msg.id} type={path === "edit" ? "Edit" : "Normal"} data={msg} setCardData={setCardData} onCardClick={handleCardClick} />)}
      {isOpen && (
        <ModalPortal>
          <ModalFrame onClickClose={handleModalClose}>
            <Modal message={message} onClose={handleModalClose} />
          </ModalFrame>
        </ModalPortal>
      )}
    </CardWrapper>
  );
}

export default Layout;

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
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
  grid-template-columns: repeat(3, minmax(30rem, 38.4rem));
  justify-content: space-between;
  row-gap: 2.8rem;
  column-gap: 2.4rem;
  column-gap: min(1.6rem);

  @media (max-width: ${DeviceSize.tablet}) {
    grid-template-columns: repeat(2, minmax(30rem, 50rem)); /* Assuming 500px is 50rem */
    gap: 1.6rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    grid-template-columns: repeat(1, minmax(30rem, 38.4rem));
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

const ButtonWrapper = styled.div`
  width: 21rem;

  display: flex;
  justify-content: space-between;
`;
