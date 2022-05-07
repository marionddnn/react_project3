import { createSlice } from "@reduxjs/toolkit";

const listSlices = createSlice({
  name: "list",
  initialState: [{}],
  reducers: {
    addToList: (state, action) => {
      let alreadyPresent = state
        .map((elm) => elm.id)
        .includes(action.payload.id);

        if (!alreadyPresent) {
          [...state, {...action.payload}];
        }
      
    },
  }, 
});

export const { addToList} = listSlices.actions;
export const listSelector = (state) => state.list;
export default listSlices.reducer;

import { createSlice } from "@reduxjs/toolkit";
