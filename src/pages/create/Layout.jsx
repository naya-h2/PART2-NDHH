import Option from "@/components/commons/Option";
import ToggleButton from "@/components/commons/ToggleButton";
import { Container, Submit, Title } from "@/components/instances/CreateMessage";
import { SELECTED } from "@/styles/ButtonStyles";
import { COLOR } from "@/styles/ColorStyles";
import { DeviceSize } from "@/styles/DeviceSize";
import { FONT16, FONT24B } from "@/styles/FontStyles";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import styled from "styled-components";

const INITIAL = {
  name: "",
  backgroundColor: "orange",
  backgroundImageURL: null,
  createdAt: null,
};

function Layout() {
  const [value, setValue] = useState(INITIAL);

  const handleClick = (event) => {
    if (!(value.name && (value.backgroundColor || value.backgroundImageURL))) {
      event.preventDefault();
      return;
    }
  };

  const handleSubmit = async () => {
    value.createdAt = new Date().toJSON();

    const formData = new FormData();
    for (const key of Object.keys(INITIAL)) {
      formData.append(key, value[key]);
    }
    for (const v of formData.values()) {
      console.log(v);
    }
  };

  return (
    <>
      <Container>
        <Title value={value.name} setValue={setValue} />
        <Text />
        <SelectOption setValue={setValue} />
        <Submit onClick={handleClick} onSubmit={handleSubmit} />
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

function SelectOption({ setValue }) {
  const [selectedType, setSelectedType] = useState(SELECTED.color);

  return (
    <>
      <ToggleButton handleToggle={setSelectedType} selected={selectedType} />
      <Options selectedType={selectedType} setValue={setValue} />
    </>
  );
}

Options.propType = {
  selectedType: PropTypes.oneOf([SELECTED.color, SELECTED.image]),
};
function Options({ selectedType, setValue }) {
  const [imgs, setImgs] = useState([]);
  const [selected, setSelected] = useState(0);
  const isColor = selectedType === SELECTED.color ? true : false;

  const handleOptionClick = (idx, item) => () => {
    setSelected(idx);
    if (isColor) {
      const backgroundColor = item;
      setValue((prev) => ({ ...prev, backgroundColor, backgroundImageURL: null }));
      return;
    }
    const backgroundImageURL = item;
    setValue((prev) => ({ ...prev, backgroundColor: null, backgroundImageURL }));
  };

  const option = isColor ? (
    Object.values(COLOR).map((color, idx) => <Option key={idx} color={color} check={selected === idx} onClick={handleOptionClick(idx, color)} />)
  ) : (
    <>
      <Option setValue={setValue} setImgs={setImgs} setSelected={setSelected} />
      {imgs && imgs.map((img, idx) => <Option key={idx} check={selected === idx} img={img} onClick={handleOptionClick(idx, img)} />)}
    </>
  );

  useEffect(() => {
    setSelected(0);
  }, [selectedType]);

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
