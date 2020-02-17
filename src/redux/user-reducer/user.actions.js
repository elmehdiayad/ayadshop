import UserTypes from "./user.types";

export const setCurrentUser = user => ({
  type: UserTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: UserTypes.GOOGLE_SIGNIN_START
})

export const signInSuccess = (user) => ({
  type: UserTypes.SIGNIN_SUCCESS,
  payload: user
})

export const signInFailure = (message) => ({
  type: UserTypes.SIGNIN_FAILURE,
  payload: message
})

export const emailSignInStart = emailAndPassword => ({
  type: UserTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword
})

export const signOutStart = () => ({
  type: UserTypes.SIGNOUT_START
})

export const signOutSucess = () => ({
  type: UserTypes.SIGNOUT_SUCESS
})

export const signOutFailure = (error) => ({
  type: UserTypes.SIGNOUT_FAILURE,
  payload: error
})

export const signUpStart = (informations) => ({
  type: UserTypes.SIGNUP_START,
  payload: informations
})

export const signUpSucess = ({user, otherParams}) => ({
  type: UserTypes.SIGNUP_SUCESS,
  payload: {user, otherParams}
})

export const signUpFailure = (error) => ({
  type: UserTypes.SIGNUP_FAILURE,
  payload: error
})

export const checkUserSession = () => ({
  type: UserTypes.CHECK_USER_SESSION
})

