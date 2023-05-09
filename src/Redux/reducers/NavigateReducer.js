const initialState = {
    navigative : {

    }
}

export default (state = initialState, action) => {
  switch (action.type) {

  case "ADD_NAVIGATIVE":
    state.navigative = action.navigative
    return { ...state }

  default:
    return state
  }
}
