import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  url: {
    urlDataDetail: "",
  },
  myPokemonList: {
    list: [],
  },
};
export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    actionSaveUrlDetail: (state, action) => {
      state.url = action.payload;
    },
    actionAddPokemonToList: (state, action) => {
      state.myPokemonList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actionSaveUrlDetail, actionAddPokemonToList } = appSlice.actions;
export default appSlice.reducer;
