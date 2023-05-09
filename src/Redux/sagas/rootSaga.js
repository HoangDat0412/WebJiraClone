// redux có hai loại action trả về object và action trả về function
import {all} from 'redux-saga/effects'
import * as UserCycberbugSaga from "./Cyberbugs/UserCycberbugSaga"
import * as ToDoListSaGa from './ToDoListSaGa'
import * as ProjectCategory from "./Cyberbugs/ProjectCategorySaga"
import * as CreateProject from "./Cyberbugs/ProjectSaga"
import * as ProjectGet from "./Cyberbugs/ProjectCyberBugAllSaga"
export function * rootSaga(){

  yield all([
    ToDoListSaGa.theoDoiTaslListApi(),
    ToDoListSaGa.theoDoiActionAddTaskApi(),
    // nghiệp vụ login của dự án 
    UserCycberbugSaga.theoDoiSignin(),
    ProjectCategory.theoDoigetAllProjectCategory(),
    CreateProject.theoDoiCreateProjectSaga(),
    ProjectGet.theodoiProjectAllSaGa(),
    UserCycberbugSaga.theoDoiUpdateProjectSaga(),
    CreateProject.theoDoiDeleteProjectSaga(),
    CreateProject.theoDoiAddMemberSaga(),
    CreateProject.theoDoiGetProjectDetailSaga()
  ])

}


// redux có 2 loại loại thứ nhất chả về action thường là object loại thứ 2 chả về function 
