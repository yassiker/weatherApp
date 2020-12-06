/* eslint-disable no-undef */
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootSaga from './rootSagas';
import rootReducer from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const tempStore = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);
export const store = tempStore;
export const persistor = persistStore(store);
