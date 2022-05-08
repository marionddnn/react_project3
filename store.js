import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { AsyncStorage } from "@react-native-community/async-storage";
import listReducer from "./components/listSlice";
import detailReducer from "./components/detailSlice"
import ratingReducer from "./components/ratingSlice"
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const reducers = combineReducers(
  { list: listReducer,
    detail: detailReducer,
    rating : ratingReducer
  }
);

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, 
reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
