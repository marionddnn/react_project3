import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./components/listSlice";
import detailReducer from "./components/detailSlice"

export default configureStore({
  reducer: {
    list: listReducer,
    detail: detailReducer
  },
});
