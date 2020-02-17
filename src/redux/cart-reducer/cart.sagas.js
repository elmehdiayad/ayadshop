import { call, put, all, takeLatest } from "redux-saga/effects";
import UserTypes from "../user-reducer/user.types";
import { clearCart } from "./cart.actions";

export function* yesHeIs(){
  try {
    yield put(clearCart())
  } catch(error){
    yield console.log(error.message)
  }
}

export function* ifSignedOut(){
  yield takeLatest(UserTypes.SIGNOUT_SUCESS, yesHeIs)
}


export function* cartSagas(){
  yield all([call(ifSignedOut)])
}