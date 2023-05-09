import { call, put, takeLatest } from "redux-saga/effects";
import { cycberbugsService } from "../../../services/CycberbugsService";

function * getAllProjectCategorySaga(action) {
const {data,status} = yield call(() => cycberbugsService.getAllProjectCategory())

yield put({
    type:"GET_ALL_PROJECT_CATEGORY",
    data:data.content
})

}

export function* theoDoigetAllProjectCategory(){
    yield takeLatest("GET_ALL_PROJECT_CATEGOTY_SAGA",getAllProjectCategorySaga)
}