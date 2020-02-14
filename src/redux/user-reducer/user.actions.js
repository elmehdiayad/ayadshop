import UserTypes from "./user.types";

export const setCurrentUser = user => ({
  type: UserTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: UserTypes.GOOGLE_SIGNIN_START
})

export const googleSignInSuccess = (user) => ({
  type: UserTypes.GOOGLE_SIGNIN_SUCCESS,
  payload: user
})

export const googleSignInFailure = (message) => ({
  type: UserTypes.GOOGLE_SIGNIN_FAILURE,
  payload: message
})

export const emailSignInStart = (emailAndPassword) => ({
  type: UserTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword
})

export const emailSignInSuccess = (user) => ({
  type: UserTypes.EMAIL_SIGNIN_SUCCESS,
  payload: user
})

export const emailSignInFailure = (message) => ({
  type: UserTypes.EMAIL_SIGNIN_FAILURE,
  payload: message
})