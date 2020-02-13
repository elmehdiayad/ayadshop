import ShopPageTypes from './shop-page.types';

const INITIAL_STATE = {
  collections : null
}


const shopPageReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ShopPageTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state
  }
}



export default shopPageReducer;