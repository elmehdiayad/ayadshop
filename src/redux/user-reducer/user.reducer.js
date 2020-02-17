import UserTypes from "./user.types";

const INTITIAL_STATE = {
  currentUser: null,
  error:null
}

const userReducer = (state = INTITIAL_STATE, action) => {
  switch (action.type){
    case UserTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserTypes.SIGNOUT_SUCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserTypes.SIGNIN_FAILURE:
    case UserTypes.SIGNOUT_FAILURE:
    case UserTypes.SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default userReducer;