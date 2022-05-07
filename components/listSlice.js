import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addMusicToList: (state, action) => {
      return [...state, {...action.payload}];
    },
  }, 
});

export const { addMusicToList } = listSlice.actions;
export const listSelector = (state) => state.list;
export default listSlice.reducer;