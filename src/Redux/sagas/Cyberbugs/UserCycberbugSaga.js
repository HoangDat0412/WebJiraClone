import Axios from 'axios';
import { call, delay, fork, take, takeEvery, takeLatest, put,select } from 'redux-saga/effects';
import { cycberbugsService } from '../../../services/CycberbugsService';
import { USER_SIGIN_API,USLOGIN } from '../../constants/Cycberbugs/Cyberbugs';
import { DISPLAY_LOADING,HIDE_LOADING } from '../../constants/LoadingConst';
import { TOKEN,USER_LOGIN } from '../../../util/constants/settingSystem';
import { userService } from '../../../services/UserService';

//Quản lý các action saga
function* signinSaga(action) {
    // console.log(action);
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay (500);

    //Gọi api 
    try {
        console.log("Gọi api");
        const { data, status } = yield call(() => cycberbugsService.siginCycberBugs(action.userLogin));
        //Lưu vào localstorage khi đăng nhập thành công
        localStorage.setItem(TOKEN,data.content.accessToken);
        localStorage.setItem(USER_LOGIN,JSON.stringify(data.content));

        yield put({
            type:USLOGIN,
            userLogin:data.content
        })
        
        let navigative = yield select(state => state.NavigateReducer.navigative);
        navigative('/home')
        yield put({
            type: HIDE_LOADING
        })
      
    }catch(err){ 
        console.log(err.response.data)
        yield put({
            type: HIDE_LOADING
        })
        
    }


}


export function* theoDoiSignin() {
    yield takeLatest(USER_SIGIN_API, signinSaga);
}


// update project 

function * updateProject(action) {
    try{
        // const {data,status} = yield call(() => cycberbugsService.updateProject(action.projectUpdate))
        let navigative = yield select(state => state.NavigateReducer.navigative);
        yield put({
                type:"PUT_NEW_PROJECT",
                projectUpdate:action.projectUpdate
        })

        yield put({
            type:"CLOSE_DRAWER"
        })

    }catch(err){
        console.log(err);
    }



}

export function* theoDoiUpdateProjectSaga(){
    yield takeLatest("UPDATE_PROJECT_SAGA",updateProject)
}

// action search 

//Quản lý các action saga
function* getUserSaga(action) {

    try {
        const { data, status } = yield call(() => userService.getUser(action.keyWord));

        yield put({
            type:"GET_USER_SEARCH",
            listUserSearch:data.content
        })
        
        let navigative = yield select(state => state.NavigateReducer.navigative);
  
      
    }catch(err){ 
        console.log(err.response.data)   
    }


}


export function* theoDoiGetUser() {
    yield takeLatest("GET_USER_API", getUserSaga);
}

