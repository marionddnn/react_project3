import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addMusicToList: (state, action) => {
      let present = state.map((item) => item.id == action.payload.id ? true : false);
      if(present.includes(true)){
        return state;
      }
      else {
        return [...state, {...action.payload}];
      }
    },
    deleteMusic: (state, action) => {
      let newList = state.filter(item => item.id !== action.payload.id);
      return newList;
    }
  }, 
});

export const { addMusicToList, deleteMusic } = listSlice.actions;
export const listSelector = (state) => state.list;
export default listSlice.reducer;