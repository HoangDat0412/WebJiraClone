import { GET_TASK_API } from "../constants/ToDoListConst";
import Axios from "axios";
export const getTaskListAPI = () => {

    return dispatch => {
        let promise = Axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method: 'GET'
        });
    
        promise.then((result) => {
            console.log(result.data);
            //Nếu gọi api lấy về kết quả thành công 
            //=> set lại state của component
            
            dispatch(
                {
                    type: GET_TASK_API,
                    taskList: result.data
                }
            )
            console.log('thành công')
        });
    
    
        promise.catch((err) => {
            console.log('thất bại')
    
            console.log(err.response.data)
        });
    }
}

export const AddTaskActionApi = (value) =>{
    return dispatch => {
        let promise = Axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
            method: 'POST',
            data: { taskName: value }
        });

        //Xử lý thành công
        promise.then(result => {
            dispatch(getTaskListAPI())
        })

        //Xử lý thất bại
        promise.catch(errors => {
            alert(errors.response.data)

        })
    }
}

export const DeleteTaskActionApi = (value) => {
    return dispatch =>{
        let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${value}`,
            method: 'DELETE'
        });

        promise.then(result => {
            dispatch(getTaskListAPI())
            
        });

        promise.catch(errors => {
            alert(errors.response.data)
        })
    }

}

export const RejectTaskActionApi = (value) =>{
    return dispatch => {
        let promise = Axios({
            url:`http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${value}`,
            method:'PUT'
        })
        promise.then(res=>{
            alert(res.data);
            dispatch(getTaskListAPI())
        });
        promise.catch(err=>{
            alert(err.response.data);
        })
    }
}

export const CheckTaskActionApi = (value) =>{
    return async dispatch => {
        let promise = await Axios({
            url:`http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${value}`,
            method:'PUT'
        });

     promise.then(res=>{
            alert(res.data);
            dispatch(getTaskListAPI())
        });

        promise.catch(err=>{
            alert(err.response.data);
        })
    }
}



