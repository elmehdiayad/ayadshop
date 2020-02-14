import UserTypes from "./user.types";

const INTITIAL_STATE = {
  currentUser: null,
  error:null
}

const userReducer = (state = INTITIAL_STATE, action) => {
  switch (action.type){
    case UserTypes.GOOGLE_SIGNIN_SUCCESS:
    case UserTypes.EMAIL_SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserTypes.GOOGLE_SIGNIN_FAILURE:
    case UserTypes.EMAIL_SIGNIN_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default userReducer;