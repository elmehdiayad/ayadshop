import ShopPageTypes from "./shop-page.types";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopPageTypes.UPDATE_COLLECTIONS,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopPageTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopPageTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart);
    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap))
    }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
  }
}