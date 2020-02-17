import { takeLatest, call, all, put} from 'redux-saga/effects'
import UserTypes from './user.types'
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils'
import {signInSuccess, signInFailure, signOutFailure, signOutSucess, signUpFailure, signUpSucess} from '../../redux/user-reducer/user.actions'


export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* googleSignIn(){
  try{ 
    const {user} = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
  }
  catch(error){
    yield put(signInFailure(error.message))
  }
}


export function* onGoogleSignInStart(){
  yield takeLatest(UserTypes.GOOGLE_SIGNIN_START, googleSignIn);
}

export function* emailSignIn({payload:{email, password}}){
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
  } catch(error){
    yield put(signInFailure(error.message))
  }
}

export function* emailSignInStart(){
  yield takeLatest(UserTypes.EMAIL_SIGNIN_START, emailSignIn);
}

export function* signItin(){
  try {
    const userAuth = yield call(getCurrentUser());
    if(!userAuth)
      return;
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
  } catch (error){
    yield put(signInFailure())
  }
}

export function* onCheckUserSession(){
  yield takeLatest(UserTypes.CHECK_USER_SESSION, signItin)
}


export function* signItOut(){
  try {
    yield auth.signOut();
    yield put(signOutSucess());
  } catch(error){
    yield put(signOutFailure(error))
  }
}

export function* onSignOut(){
  yield takeLatest(UserTypes.SIGNOUT_START, signItOut)
}

export function* signItUp({payload: {displayName, email, password}}){
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSucess({ user, otherParams: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onSignUp(){
  yield takeLatest(UserTypes.SIGNUP_START, signItUp)
}

export function* signInAfterSignUp({ payload: { user, otherParams } }) {
  yield getSnapshotFromUserAuth(user, otherParams);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserTypes.SIGNUP_SUCESS, signInAfterSignUp);
}


export function* userSagas(){
  yield all([call(onGoogleSignInStart), call(emailSignInStart), call(onCheckUserSession), call(onSignOut), call(onSignUp), call(onSignUpSuccess)]);
}