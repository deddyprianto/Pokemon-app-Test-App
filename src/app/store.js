import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../features/rootSlice/appSlice";
export const store = configureStore({
  reducer: { sliceApp: appSlice },
});
