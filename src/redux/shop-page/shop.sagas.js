import ShopPageTypes from "./shop-page.types"

import {takeEvery, put, call} from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./shop-page.actions";

export function* fetchCollectionsAsync(){
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch(error){
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopPageTypes.FETCH_COLLECTIONS_START, 
    fetchCollectionsAsync
  );
}