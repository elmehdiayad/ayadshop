
import {createStore, applyMiddleware} from 'redux';

import thunk from'redux-thunk';

import rootReducer from './root-reducer';

import {persistStore} from 'redux-persist';

const middlewares = [thunk];



export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

