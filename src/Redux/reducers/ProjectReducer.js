const initialState = {
    projectEdit:{
        "id":1,
        "projectName":"string",
        "creator":"string",
        "description":"haha",
        "categoryId":"string"
    }
}

export default (state = initialState, action) => {
  switch (action.type) {

  case "EDIT_PROJECT":
    state.projectEdit = action.projectEditModel
    return { ...state}

  default:
    return state
  }
}
