import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import { FONT16 } from "../styles/FontStyles";

function Textarea() {
  const [value, setValue] = useState("");

  const handleChange = (content, delta, source, editor) => {
    setValue(editor.getContents());
  };

  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ align: "center" }, { align: "right" }, { align: "justify" }],
      [{ list: "bullet" }, { list: "ordered" }],
      [{ color: [] }],
      [{ size: [] }],
    ],
  };

  const formats = [
    "bold",
    "italic",
    "underline",
    "list",
    "align",
    "color",
    "font",
    "size",
  ];

  return (
    <StyledQuill
      theme="snow"
      modules={modules}
      formats={formats}
      value={value || ""}
      onChange={handleChange}
    />
  );
}
export default Textarea;

const StyledQuill = styled(ReactQuill)`
  width: 72rem;
  height: 26rem;

  border: 0.1rem solid var(--Gray3);
  border-radius: 0.8rem;

  & .ql-container,
  & .ql-toolbar {
    border: none;
  }

  & .ql-toolbar {
    background-color: var(--Gray2);

    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
  }

  & .ql-editor {
    height: 20.5rem;
  }

  ::-webkit-scrollbar {
    width: 0.8rem;
  }

  ::-webkit-scrollbar-thumb {
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    background-color: var(--Gray3);
  }

  p,
  span,
  li {
    ${FONT16};
  }
`;
