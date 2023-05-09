import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Select, Space } from "antd";

export default function FormCreateTask() {
  const editorRef = useRef(null);

  const options = [];
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }

  return (
    <form className="container">
      <div className="form-group">
        <p>Project</p>
        <select name="projectId" className="form-control">
          <option value="a">Project A</option>
          <option value="a">Project B</option>
        </select>
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-6">
            <p>priority</p>
            <select name="priorityId" className="form-control">
              <option value="a">New Task</option>
              <option value="a">Bugs</option>
            </select>
          </div>
          <div className="col-6">
            <p>Task Type</p>
            <select name="typeId" className="form-control">
              <option value="a">New Task</option>
              <option value="a">Bugs</option>
            </select>
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="row">
          <div className="col-6">
            <p>priority</p>
            <select name="priorityId" className="form-control">
              <option value="a">New Task</option>
              <option value="a">Bugs</option>
            </select>
          </div>
        </div>
      </div>
      <div className="form-group">
        <p>Assigment</p>
        <Select
          mode="multiple"
          allowClear
          style={{
            width: "100%",
          }}
          placeholder="Please select"
          defaultValue={["a10", "c12"]}
          onChange={handleChange}
          options={options}
        />
      </div>
      <div className="form-group">
        <p>Description</p>
        <Editor
          name="description"
          onInit={(evt, editor) => (editorRef.current = editor)}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>
    </form>
  );
}
