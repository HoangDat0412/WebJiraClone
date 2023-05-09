import React, { useRef,useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function CreateProject() {
  const editorRef = useRef(null);
  const navigate = useNavigate()
  const arrProjectCategory = useSelector(state => state.ProjectCategoryReducer.arrProjectCategory)
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch({
        type:"GET_ALL_PROJECT_CATEGOTY_SAGA"
      })
  },[])

  return (
    <div className="form-control container m-5">
      <h3 className="text-center">Create Project</h3>

      <Formik
        initialValues={{ projectName: "", description: "", categoryId: arrProjectCategory[0]?.id }}
        validate={(values) => {}}
        onSubmit={(values, { props, setSubmitting }) => {
          let newProject = values;
          newProject.description = editorRef.current?.getContent();
          // dispatch({
          //   type:"CREATE_PROJECT_SAGA",
          //   newProject:newProject
          // })
          dispatch({
            type:"NEW_PROJECT_WE",
            newProject:newProject
          })

         navigate('/projectmanagement')
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          
          <form className="container" onSubmit={handleSubmit}>
            <form className="form-group">
              <p>Name</p>
              <input className="form-control" onChange={handleChange} name="projectName"></input>
            </form>
            <form className="form-group">
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
              
            </form>

            <form className="form-group">
              <select name="categoryId" className="form-control" onChange={handleChange}>
             
                  <option value="Web" >Web</option>
                  <option value="App" >App</option>
                  <option value="Software" >Software</option>
                 
              </select>
            </form>

            <button type="submit" className="btn btn-success">
              Create Project
            </button>
          </form>
         
        )}
      </Formik>
    </div>
  );
}
