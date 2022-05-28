import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};
export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    actionsData: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actionsData } = appSlice.actions;
export default appSlice.reducer;
