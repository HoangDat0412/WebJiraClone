import { call, put, takeLatest } from "redux-saga/effects";
import { cycberbugsService } from "../../../services/CycberbugsService";

function* getproject(action){
    try{
        let {data,status} = yield call(()=> cycberbugsService.getproject())
        yield put({
            type:"UPDATE_PROJECT_ALL",
            data:data.content
        })
    }catch(err){
        console.log(err)
    }


}


export function* theodoiProjectAllSaGa(){
    yield takeLatest("GET_ALL_SAGA_PROJECT",getproject)
}