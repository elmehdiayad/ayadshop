import ShopPageTypes from './shop-page.types';

const INITIAL_STATE = {
  collections : null,
  isFetching: false,
  errorMessage: undefined
}


const shopPageReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ShopPageTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      }
    case ShopPageTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      }
    case ShopPageTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}



export default shopPageReducer;