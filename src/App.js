import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes,useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import HomeTemplate from "./templates/HomeTemplate";
import Detail from "./pages/Detail/Detail";
import Profile from "./pages/Profile/Profile";
import TodolistRFC from "./pages/ToDoList/TodolistRFC";
import Todolist from './pages/ToDoList/TodolistRCC';
import ToDoListRedux from "./pages/ToDoList/ToDoListRedux";
import BaiTapToDoListSaGa from "./pages/BaiTapToDoListSaGa/BaiTapToDoListSaGa";
import DemoHOCModel from "./pages/DemoHOCModel/DemoHOCModel";
import UserLoginTemplate from "./templates/UserLoginTemplate";
import LoginCyberBug from "./pages/CyberBugs/LoginCyberBug/LoginCyberBug";
import CyberbugsTemplate from "./templates/CyberbugsTemplate";
import CyberbugsHome from "./components/Cyberbugs/indexCycberbugs";
import CreateProject from "./pages/CyberBugs/CreateProject/CreateProject";
import ProjectManagement from "./pages/CyberBugs/ProjectManagement/ProjectManagement";


function App() {
  let history = useNavigate()
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({
      type:"ADD_NAVIGATIVE",
      navigative:history
    })
  },[])
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomeTemplate/>} >
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Navigate to={"home"} />}></Route>

          <Route path='todolistrfc' element={<TodolistRFC />}></Route>
          <Route path='todolistrcc' element={<Todolist />}></Route>
          <Route path="todolistredux" element={<ToDoListRedux/>}></Route>
          <Route path="todolistsaga" element={<BaiTapToDoListSaGa/>}></Route>
          <Route path="demohocmodal" element={<DemoHOCModel/>}></Route>
          <Route path="detail">
             <Route path=":id" element={<Detail/>}></Route>
          </Route>
        </Route>
        
        <Route path="login" element={<UserLoginTemplate/>}>
          <Route path="" element={<LoginCyberBug/>}/>
        </Route>

        <Route path="" element={<CyberbugsTemplate/>}>
            <Route path="cyberbugs" element={<CyberbugsHome/>}/>
            <Route path="createproject" element={<CreateProject/>}/>
            <Route path="projectmanagement" element={<ProjectManagement/>}/>
            <Route path="projectdetail" element={<CyberbugsHome/>}>
              <Route path=":projectId" element={<CyberbugsHome/>}>
                  
              </Route>
            </Route>
        </Route>



      </Routes>
    </>
  );
}

export default App;
