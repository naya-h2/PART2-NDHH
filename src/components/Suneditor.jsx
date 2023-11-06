import { useRef } from "react";
import styled from "styled-components";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { FONT18 } from "../styles/FontStyles";
import lang from "suneditor/src/lang";

function TestEditor() {
  const editor = useRef();

  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
  };

  return (
    <Container>
      <SunEditor
        width="72rem"
        height="26rem"
        getSunEditorInstance={getSunEditorInstance}
        setDefaultStyle="font-family: Noto Sans; font-size: 1.6rem;"
        setOptions={{
          font: ["Noto Sans", "Pretendard"],
          fontSize: [8, 10, 12, 14, 15, 16, 18, 20, 24],
          buttonList: [
            [
              "bold",
              "italic",
              "underline",
              "align",
              "fontColor",
              "font",
              "fontSize",
            ],
          ],
          lang: lang.ko,
        }}
      />
    </Container>
  );
}

export default TestEditor;

const Container = styled.div`
  .sun-editor {
    width: 72rem;

    border-radius: 0.8rem;
  }

  .sun-editor-common {
    background-color: var(--Gray2);
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
  }

  .se-btn-tool-font,
  .se-btn-tool-size {
    ${FONT18};
  }

  .se-resizing-bar {
    padding: 0;

    background-color: var(--White);
    border: none;
  }
`;
