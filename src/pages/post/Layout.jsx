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
import { DeviceSize, DeviceSizeNum } from "@/styles/DeviceSize";
import { Z_INDEX } from "@/styles/ZindexStyles";
import { sortNew } from "@/utils/sort";
import propTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import api from "@/api/api";
import arrowImg from "@/assets/instance_arrow.svg";

Layout.propTypes = {
  path: propTypes.oneOf(["edit", ""]),
};

function Layout({ path = "" }) {
  const [delList, setDelList] = useState([]);
  const [DEP, setDEP] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  const recipientData = useGetData("RECIPIENTS_ID", id, null, DEP);
  const messageData = useGetData("RECIPIENTS_MESSAGES", id, null, DEP);
  const reactions = useGetData("RECIPIENTS_REACTIONS", id, null, DEP);

  if (path === "edit" && sessionStorage.getItem("editToken") !== id) navigate("/notFound");

  if (!recipientData || !messageData) return;

  const { name, backgroundColor, backgroundImageURL, messageCount } = recipientData;
  const sortedData = sortNew(messageData);

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
          <title>{name.slice(0, -4)} | Rolling</title>
        </Helmet>
      )}
      <Header userData={recipientData} setDEP={setDEP} reactions={reactions} serviceType />
      <Background $color={backgroundColor} $url={backgroundImageURL}>
        {backgroundImageURL && <Mask></Mask>}
        <Container>
          <ButtonControl delList={delList} setDEP={setDEP} navigate={navigate} path={path} password={name.slice(-4)} name={name.slice(0, -4)} id={id} recentMessages={sortedData} />
          <CardGrid path={path} messageCount={messageCount} recentMessages={sortedData} setDelList={setDelList} />
        </Container>
        <button onClick={handleClick}>
          <img src={arrowImg} />
        </button>
      </Background>
    </>
  );
}

function ButtonControl({ delList, setDEP, navigate, path, password, name, id, recentMessages }) {
  const windowWidth = useGetWindowWidth();

  return (
    <>
      {path === "edit" ? (
        windowWidth > DeviceSizeNum.tablet ? (
          <ButtonWrapper>
            <SaveBtn id={id} pc={true} navigate={navigate} setDEP={setDEP} delList={delList} />
            <DeleteBtn name={name} recentMessages={recentMessages} />
          </ButtonWrapper>
        ) : (
          <>
            <SaveBtn id={id} navigate={navigate} setDEP={setDEP} delList={delList} />
            <DeleteBtn name={name} recentMessages={recentMessages} />
          </>
        )
      ) : (
        <EditBtn password={password} />
      )}
    </>
  );
}

function SaveBtn({ id, pc = false, navigate, setDEP, delList }) {
  const handleDeleteSave = async (event) => {
    event.preventDefault();
    for (let msgId of delList) {
      const result = await api("MESSAGES", "DELETE", msgId);
    }
    navigate(`/post/${id}`);
    setDEP((prev) => ++prev);
  };

  return pc ? (
    <SaveWrapper>
      <Button type="primary" height="l" width="150" onClick={handleDeleteSave}>
        메시지 삭제하기
      </Button>
    </SaveWrapper>
  ) : (
    <SaveWrapper>
      <Button type="primary" height="xl" onClick={handleDeleteSave}>
        메시지 삭제하기
      </Button>
    </SaveWrapper>
  );
}

function DeleteBtn({ name, recentMessages }) {
  const { isOpen, handleModalOpen, handleModalClose } = useModal();

  return (
    <>
      <EditWrapper>
        <Button type="error" height="l" width="150" onClick={handleModalOpen}>
          페이지 삭제하기
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

function CardGrid({ path, messageCount, recentMessages, setDelList }) {
  const { isOpen, handleModalOpen, handleModalClose } = useModal();
  const [message, setMessage] = useState("");

  const handleCardClick = (msg) => {
    setMessage(msg);
    handleModalOpen();
  };

  return (
    <CardWrapper>
      {path !== "edit" && <Card type="Plus" />}
      {messageCount !== 0 && recentMessages.map((msg) => <Card key={msg.id} type={path === "edit" ? "Edit" : "Normal"} data={msg} onCardClick={handleCardClick} setDelList={setDelList} />)}
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
  width: 32rem;

  display: flex;
  justify-content: space-between;
`;
