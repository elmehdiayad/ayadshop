import SHOP_DATA from '../../pages/shop/shop-page.data';

const INITIAL_STATE = {
  collections : SHOP_DATA
}


const shopPageReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    default:
      return state
  }
}



export default shopPageReducer;