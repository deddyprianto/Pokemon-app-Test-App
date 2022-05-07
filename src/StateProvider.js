/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useReducer, createContext } from "react";
const CreateUserContext = createContext();
export const StateProvider = ({ reduce, initial, children }) => (
  <CreateUserContext.Provider value={useReducer(reduce, initial)}>
    {children}
  </CreateUserContext.Provider>
);
export const statevalueProvider = () => useContext(CreateUserContext);
