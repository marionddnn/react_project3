import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./components/listSlice";
import detailReducer from "./components/detailSlice"
import ratingReducer from "./components/ratingSlice"

export default configureStore({
  reducer: {
    list: listReducer,
    detail: detailReducer,
    rating : ratingReducer
  },
});
