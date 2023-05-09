import { USER_LOGIN } from "../../util/constants/settingSystem"
import { USLOGIN } from "../constants/Cycberbugs/Cyberbugs"

let usLogin ={

}

if(localStorage.getItem(USER_LOGIN)){
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const initialState = {
    userLogin : usLogin,
    userSearch: [
      {"userId":1,"name":"tưởng","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
      {"userId":2,"name":"Đạt","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
      {"userId":3,"name":"Hoàng","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
      {"userId":4,"name":"Trung","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
      {"userId":5,"name":"Huy","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
      {"userId":6,"name":"Trang","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
      {"userId":7,"name":"Linh","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
      
    ]
}

export default (state = initialState, action) => {
  switch (action.type) {

  case USLOGIN:
    state.userLogin = action.userLogin
    return { ...state}
  case "GET_USER_SEARCH":
    state.userSearch = action.listUserSearch
    return {...state}
  default:
    return state
  }
}
