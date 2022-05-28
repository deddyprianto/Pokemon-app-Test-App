import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTrackedSelector } from "react-tracked";
import { actionsData } from "./features/rootSlice/appSlice";
const useTrackedSelector = createTrackedSelector(useSelector);

const App = () => {
  const dispatch = useDispatch();
  const state = useTrackedSelector();
  const val = state.sliceApp.value;
  console.log(val);
  return <div onClick={() => dispatch(actionsData(1))}>App</div>;
};

export default App;
