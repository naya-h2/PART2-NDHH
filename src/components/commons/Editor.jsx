import { useRef } from "react";
import styled from "styled-components";
import { FONT12, FONT20B, FONT24 } from "@/styles/FontStyles";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

function TextEditor({ setValue }) {
  const editor = useRef();

  const handleChange = (content) => {
    setValue((prev) => ({ ...prev, content }));
  };

  return (
    <Container>
      <ReactQuill style={{ width: "100%", height: "26rem" }} placeholder="당신의 마음을 표현하세요." onChange={handleChange} />
    </Container>
  );
}

export default TextEditor;

const Container = styled.div`
  position: relative;
  z-index: 0;

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  .sun-editor,
  .se-container {
    border-radius: 0.8rem;
  }

  .sun-editor-common {
    background-color: var(--Gray2);
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
  }

  .sun-editor .se-btn-tray {
    padding: 1.2rem 1.6rem;
  }

  .sun-editor .se-menu-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;

    @media screen and (max-width: 768px) {
      justify-content: space-between;
      gap: 1.2rem;
    }
  }

  .sun-editor .se-tooltip:focus .se-tooltip-inner {
    visibility: visible;
    opacity: 1;
  }

  .sun-editor .se-btn-tool-font,
  .sun-editor .se-btn-tool-size {
    ${FONT20B};
  }

  .sun-editor .se-tooltip .se-tooltip-inner .se-tooltip-text,
  .se-shortcut,
  .se-shortcut-key {
    ${FONT12};
  }

  .sun-editor .se-resizing-bar {
    padding: 0 1rem;
    border: none;

    background-color: transparent;
  }

  > span {
    position: absolute;
    right: 2rem;
    bottom: 0.3rem;

    color: var(--Gray5);

    pointer-events: none;
  }

  > p {
    display: none;

    position: absolute;
    left: 0.5rem;

    color: var(--Gray5);
  }

  &:focus-within {
    > p {
      display: block;
    }
  }

  ::-webkit-scrollbar {
    width: 0.8rem;
  }

  ::-webkit-scrollbar-thumb {
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    background-color: var(--Gray3);
  }
`;
