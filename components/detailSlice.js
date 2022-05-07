import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: {},
  reducers: {
    addMusicToDetails: (state, action) => {
      return action.payload;
    },
  }, 
});

export const { addMusicToDetails } = detailSlice.actions;
export const detailSelector = (state) => state.detail;
export default detailSlice.reducer;