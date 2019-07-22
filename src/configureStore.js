import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';

export const middleWares = [ReduxThunk];

const createStoreWithMiddleWare = applyMiddleware(...middleWares)(createStore);

export default createStoreWithMiddleWare(rootReducer);
