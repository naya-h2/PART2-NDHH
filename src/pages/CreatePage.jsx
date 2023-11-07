import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Input from "../components/Input";
import ToggleButton from "../components/ToggleButton";
import Option from "../components/Option";
import Button from "../components/Button";
import { FONT24B, FONT16 } from "../styles/FontStyles";
import chooseImg from "../assets/jeonghan.jpeg"; // 이미지 수정

function CreatePage() {
  const [selectedType, setSelectedType] = useState("color");

  const handleToggle = (value) => {
    setSelectedType(value);
  };

  return (
    <PageContainer>
      <Header />
      <BodyContainer>
        <InputContainer>
          <InputTitle>To.</InputTitle>
          <Input placeholder="받는 사람 이름을 입력해주세요" />
        </InputContainer>
        <TextContainer>
          <Heading>배경화면을 선택해 주세요.</Heading>
          <Description>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</Description>
        </TextContainer>
        <ToggleButton handleToggle={handleToggle} selected={selectedType} />
        <OptionContainer>
          {selectedType === "color" ? (
            <>
              <Option color="Orange" />
              <Option color="Purple" />
              <Option color="Blue" />
              <Option color="Green" />
            </>
          ) : (
            <>
              <Option src={chooseImg} />
              <Option src={chooseImg} />
              <Option src={chooseImg} />
              <Option src={chooseImg} />
            </>
          )}
        </OptionContainer>
      </BodyContainer>
      <ButtonContainer>
        <Button type="primary" size="size56">
          생성하기
        </Button>
      </ButtonContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  max-width: 192rem;
`;

const BodyContainer = styled.div`
  width: 72rem;
  margin: auto;
  margin-top: 5rem;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 5rem;

  @media (max-width: 768px) {
    width: 32rem;
  }
`;

const InputContainer = styled.div`
  width: 72rem;

  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;

  @media (max-width: 768px) {
    width: 32rem;
  }
`;

const InputTitle = styled.p`
  color: var(--Gray9);
  ${FONT24B}
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
`;

const Heading = styled.h2`
  color: var(--Gray9);
  ${FONT24B}
`;

const Description = styled.p`
  color: var(--Gray5);
  ${FONT16}
`;

const OptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.6rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }
`;

const ButtonContainer = styled.div`
  width: 72rem;

  margin: auto;
  margin-top: 5rem;

  @media (max-width: 1199px) {
    position: fixed;

    left: 50%;
    bottom: 2.4rem;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    width: 32rem;

    position: fixed;

    left: 50%;
    bottom: 2.4rem;
    transform: translateX(-50%);
  }
`;

export default CreatePage;
