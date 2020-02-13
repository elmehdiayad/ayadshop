import ShopPageTypes from "./shop-page.types";

export const updateCollections = (collectionMap) => ({
  type: ShopPageTypes.UPDATE_COLLECTIONS,
  payload: collectionMap
})