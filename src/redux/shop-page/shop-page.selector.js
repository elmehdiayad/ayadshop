import {createSelector} from 'reselect';


const shopPage = state => state.shopPage;


export const selectCollections = createSelector(
  [shopPage],
  shopPage => shopPage.collections
)

export const selectCollectionsPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)
export const selectCollection = id => createSelector(
  [selectCollections],
  collections => collections ? collections[id] : null
)