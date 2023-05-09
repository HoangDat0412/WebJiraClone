import {call, delay, fork, put, take, takeEvery, takeLatest} from 'redux-saga/effects'
import Axios from 'axios'
import { ADD_TASK_API, GET_TASK_API } from '../constants/ToDoListConst'
import { toDoListService } from '../../services/ToDoListService'
import { statusCode } from '../../util/constants/settingSystem'
import { DISPLAY_LOADING, HIDE_LOADING } from '../constants/LoadingConst'
function * getTaskApi(action){
    // theo dõi action -> xem action nào dispatch mới làm các công việc
    //call api và dispatch lên reducer 

    yield put({
        type:DISPLAY_LOADING,
    })
    try{   
        let {data,status} = yield call( toDoListService.getTaskApi)
        yield delay(1000);
        if(status === statusCode.SUCCESS){
            yield put({
                type:GET_TASK_API,
                taskList:data
            })
         
        }else{
            console.log("error")
        }

    }
    catch(err){
        console.log("err")
    }

    yield put({
        type:HIDE_LOADING
       })


   // Sau khi lấy giá trị thành công dùng put (giống dispatch)


}


function * addTaskApiAction(action){
    try{
        yield call(()=> {return toDoListService.addTaskApi(action.taskName)})

    }catch(err){

    }

}


export function* theoDoiTaslListApi(){
    yield takeLatest(GET_TASK_API,getTaskApi)
}

export function* theoDoiActionAddTaskApi(){
    yield takeLatest(ADD_TASK_API,addTaskApiAction)
}
