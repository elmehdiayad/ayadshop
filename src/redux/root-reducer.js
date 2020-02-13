import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user-reducer/user.reducer';
import cartReducer from './cart-reducer/cart.reducer';
import directoryReducer from './directory-redux/directory.reducer';
import shopPageReducer from './shop-page/shop-page.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shopPage: shopPageReducer
})

export default persistReducer(persistConfig, rootReducer)