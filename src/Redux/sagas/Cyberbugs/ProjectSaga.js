import { call, put, select, takeLatest } from "redux-saga/effects";
import { cycberbugsService } from "../../../services/CycberbugsService";
import { projectService } from "../../../services/ProjectService";
// import { openNotification } from "../../../util/Notication/noticationCyberbugs";

function * createProjectSaga(action) {
    try{
        const {data,status} = yield call(() => cycberbugsService.createProject(action.newProject))
        console.log(data);
    }catch(err){
        console.log(err);
    }



}

export function* theoDoiCreateProjectSaga(){
    yield takeLatest("CREATE_PROJECT_SAGA",createProjectSaga)
}



// xóa 

function * deleteProjectSaga(action) {
    try{
        // const {data,status} = yield call(() => projectService.deleteProject(action.id))
        // console.log(data);
        yield put({
            type:"DELETE_PROJECT",
            id:action.id
        })

        // openNotification("Bạn đã delete project thành công","GODD")

    }catch(err){
        console.log(err);
    }



}

export function* theoDoiDeleteProjectSaga(){
    yield takeLatest("DELETE_PROJECT_SAGA",deleteProjectSaga)
}



// ADD MEMBER
function * addMenmberSaga(action) {
    try{

        let listMem = yield select(state => state.UserCyberBugsReducer.userSearch)
        console.log("list Mmeber",listMem);
        yield put({
            type:"ADD_MEMBER_TO_PROJECT",
            memberId:action.memberId,
            projectId:action.projectId,
            listMem:listMem

        })

        // openNotification("Bạn đã delete project thành công","GODD")

    }catch(err){
        console.log(err);
    }



}

export function* theoDoiAddMemberSaga(){
    yield takeLatest("ADD_MEMBER_TO_PROJECT_SAGA",addMenmberSaga)
}

// Show detail project 
function * getProjectDetailSaga(action) {
    try{
        const {data,status} = yield call(() => projectService.getProjectDetail(action.projectId))
        // let listMem = yield select(state => state.UserCyberBugsReducer.userSearch)
        // console.log("list Mmeber",listMem);
        // yield put({
        //     type:"ADD_MEMBER_TO_PROJECT",
        //     memberId:action.memberId,
        //     projectId:action.projectId,
        //     listMem:listMem

        // })

        // openNotification("Bạn đã delete project thành công","GODD")

    }catch(err){
        console.log(err);
    }



}

export function* theoDoiGetProjectDetailSaga(){
    yield takeLatest("GET_PROJECT_DETAIL",getProjectDetailSaga)
}

