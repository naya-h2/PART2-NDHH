import { FONT12, FONT20B } from "@/styles/FontStyles";
import { useRef } from "react";
import styled from "styled-components";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import lang from "suneditor/src/lang";

function TextEditor({ setValue }) {
  // const editor = useRef();

  // const getSunEditorInstance = (sunEditor) => {
  //   editor.current = sunEditor;
  //   editor.current.core.context.element.toolbar.querySelectorAll("button").forEach((button) => (button.tabIndex = 0));
  //   editor.current.onKeyDown = (event) => {
  //     if ((event.shiftKey && event.key === "Tab") || event.key === "Tab") {
  //       throw new Error("Keyboard focusable을 위한 에러입니다.");
  //     }
  //   };
  // };

  const handleChange = (content) => {
    setValue((prev) => ({ ...prev, content }));
  };

  return (
    <>
      <SunEditor
        height="26rem"
        // getSunEditorInstance={getSunEditorInstance}
        setDefaultStyle="font-family: Noto Sans; font-size: 1.6rem;"
        setOptions={{
          font: ["Noto Sans", "Pretendard", "나눔명조"],
          fontSize: [8, 10, 12, 14, 15, 16, 18, 20, 24],
          buttonList: [["bold", "italic", "underline", "align", "fontColor", "hiliteColor", "font", "fontSize", "image"]],
          lang: lang.ko,
        }}
        onChange={handleChange}
        placeholder="당신의 마음을 표현해주세요."
      />
      <span>마우스 드래그로 박스 크기를 조정해 보세요!</span>
      <p>Ctrl키를 두 번 눌러 에디터 바깥으로 나갈 수 있습니다.</p>
    </>
  );
}

export default TextEditor;

const Container = styled.div`
  position: relative;
  z-index: 0;

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

  .sun-editor .se-navigation {
    display: none;
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
