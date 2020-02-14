
import {createStore, applyMiddleware} from 'redux';

import rootReducer from './root-reducer';

import createSagaMiddleware from 'redux-saga';

import {persistStore} from 'redux-persist';

import { fetchCollectionsStart } from './shop-page/shop.sagas';


const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];


export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);

