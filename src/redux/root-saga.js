import {all, call} from 'redux-saga/effects';
import {fetchCollectionsStart} from './shop-page/shop.sagas';
import { userSagas } from './user-reducer/user.sagas';
import { cartSagas } from './cart-reducer/cart.sagas';


function* rootSaga(){
  yield all([call(fetchCollectionsStart), call(userSagas), call(cartSagas)]);
}

export default rootSaga;