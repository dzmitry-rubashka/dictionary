import {combineReducers} from "redux";
import {persistReducer} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import resultPageReducer from "../pages/resultPage/reducers";

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  word: resultPageReducer,
});

export default persistReducer(persistConfig, rootReducer);
