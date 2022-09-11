import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import homePageReducer from "../pages/homePage/reducers";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  word: homePageReducer,
});

export default persistReducer(persistConfig, rootReducer);
