
import { takeLatest, call, all, put} from 'redux-saga/effects'
import UserTypes from './user.types'
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils'
import {googleSignInSuccess, googleSignInFailure} from '../../redux/user-reducer/user.actions'

export function* googleSignInStartAsync(){
  try{ 
    const {user} = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
  }
  catch(error){
    yield put(googleSignInFailure(error.message))
  }
}


export function* onGoogleSignInStart(){
  yield takeLatest(UserTypes.GOOGLE_SIGNIN_START, googleSignInStartAsync);
}


export function* userSagas(){
  yield all([call(onGoogleSignInStart)]);
}