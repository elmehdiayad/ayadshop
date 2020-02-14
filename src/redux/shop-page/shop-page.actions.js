import ShopPageTypes from "./shop-page.types";

export const fetchCollectionsStart = () => ({
  type: ShopPageTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopPageTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopPageTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})
