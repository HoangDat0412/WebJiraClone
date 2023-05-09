import React from 'react'
const initialState = {
    visible:false,
    title:"",
    ComponentContentDrawer:<p>Hahaha</p>,
    callBackSubmit : (propsValue)=>{
        alert("click demo")
    }
}

export default (state = initialState, action) => {
  switch (action.type) {

  case "OPEN_DRAWER":
    return { ...state,visible:false}
  case "CLOSE_DRAWER":
    return {...state,visible:false}
  case "OPEN_FORM_EDIT_PROJECT":
    
    return {...state,visible:true,ComponentContentDrawer:action.Component,title:action.title}
  case 'SET_SUBMIT_EDIT_PROJECT': {
    state.callBackSubmit = action.submitFunction;
    return {...state};
  }
  default:
    return state
  }
}
