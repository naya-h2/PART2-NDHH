import Option from "@/components/commons/Option";
import ToggleButton from "@/components/commons/ToggleButton";
import { Container, Submit, Title } from "@/components/instances/CreateMessage";
import { SELECTED } from "@/styles/ButtonStyles";
import { COLOR } from "@/styles/ColorStyles";
import { DeviceSize } from "@/styles/DeviceSize";
import { FONT16, FONT24B } from "@/styles/FontStyles";
import { PropTypes } from "prop-types";
import { useState } from "react";
import styled from "styled-components";

function Layout() {
  const [imgFile, setImgFile] = useState("");

  return (
    <>
      <Container>
        <Title />
        <Text />
        <SelectOption imgFile={imgFile} setImgFile={setImgFile} />
        <Submit />
      </Container>
    </>
  );
}

export default Layout;

function Text() {
  return (
    <Contents__text>
      <h2>배경화면을 선택해 주세요.</h2>
      <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
    </Contents__text>
  );
}

function SelectOption({ imgFile, setImgFile }) {
  const [selectedType, setSelectedType] = useState(SELECTED.color);

  return (
    <>
      <ToggleButton handleToggle={setSelectedType} selected={selectedType} />
      <Options selectedType={selectedType} imgFile={imgFile} setImgFile={setImgFile} />
    </>
  );
}

const COLOR_OPTIONS = [COLOR.O, COLOR.P, COLOR.B, COLOR.G];

Options.propType = {
  selectedType: PropTypes.oneOf([SELECTED.color, SELECTED.image]),
};
function Options({ selectedType, imgFile, setImgFile }) {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = (a) => () => setSelectedOption(a);

  const option =
    selectedType === SELECTED.color ? (
      COLOR_OPTIONS.map((color, idx) => <Option key={idx} color={color} check={selectedOption === idx} onClick={handleOptionClick(idx)} />)
    ) : (
      <>
        <Option setImgFile={setImgFile} />
        {imgFile &&
          imgFile.map((imgFile, idx) => {
            return <Option key={idx} imgFile={imgFile} check={selectedOption === idx} onClick={handleOptionClick(idx)} />;
          })}
      </>
    );

  return <Container__Options>{option}</Container__Options>;
}

const Contents__text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;

  > h2 {
    color: var(--Gray9);
    ${FONT24B}
  }

  > p {
    color: var(--Gray5);
    ${FONT16}
  }
`;

const Container__Options = styled.div`
  width: calc(100vw - 9.6rem);
  max-width: 120rem;

  display: grid;
  grid-template-columns: repeat(4, minmax(20.8rem, 28.8rem));
  justify-content: space-between;
  gap: 1.6rem;

  @media (max-width: ${DeviceSize.tablet}) {
    grid-template-columns: repeat(3, minmax(20.8rem, 29.9rem));
    gap: 1.6rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    grid-template-columns: repeat(2, minmax(15.2rem, 32.8rem));
  }
`;
