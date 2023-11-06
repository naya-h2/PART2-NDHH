import { useRef } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

function TestEditor() {
  const editor = useRef();

  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
  };

  return (
    <div>
      <p> My Other Contents </p>
      <SunEditor
        width="72rem"
        getSunEditorInstance={getSunEditorInstance}
        setOptions={{
          buttonList: [["bold", "italic", "underline"], ["align"]],
        }}
      />
    </div>
  );
}

export default TestEditor;
