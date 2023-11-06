import "@toast-ui/editor/dist/toastui-editor.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { Editor } from "@toast-ui/react-editor";
import { useRef } from "react";
import styled from "styled-components";
import { FONT16 } from "../styles/FontStyles";

function Test() {
  const editorRef = useRef();

  const handleChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    console.log(data);
  };

  return (
    <StyledEditor
      placeholder="내용을 입력해주세요."
      previewStyle="vertical" // 미리보기 스타일 지정
      height="72rem" // 에디터 창 높이
      initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
      hideModeSwitch={true}
      plugins={[colorSyntax]}
      language="ko-KR"
      ref={editorRef}
      onChange={handleChange}
      toolbarItems={[
        // 툴바 옵션 설정
        ["bold", "italic"],
        ["ul", "ol", "task"],
        ["image", "link"],
        ["code", "codeblock"],
      ]}
    />
  );
}

export default Test;

const StyledEditor = styled(Editor)`
  ${FONT16}

  p {
    ${FONT16}
  }
`;
