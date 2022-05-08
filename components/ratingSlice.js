import { createSlice } from "@reduxjs/toolkit";

const ratingSlice = createSlice({
  name: "rating",
  initialState: [],
  reducers: {
    addRating: (state, action) => {
        //return [...state, {...action.payload}];
      let present = state.map((item) => item.id == action.payload.id ? true : false);
      if(present.includes(true)){
        let newRating = state.map((item) => item.id == action.payload.id ? {...item, note : action.payload.note} : item);
        return newRating;
      }
      else {
        return [...state, {...action.payload}];
      }
    },
  }, 
});

export const { addRating } = ratingSlice.actions;
export const ratingSelector = (state) => state.rating;
export default ratingSlice.reducer;