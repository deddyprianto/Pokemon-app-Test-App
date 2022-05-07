export const initialState = {
  users: [],
  pages: 1,
};
export const defaultState = {
  STATE_USERS: "STATE_USERS",
  STATE_PAGEINDEX: "STATE_PAGEINDEX",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case defaultState.STATE_USERS:
      return { ...state, users: action.payload };
    case defaultState.STATE_PAGEINDEX:
      return { ...state, pages: action.payload };
    default:
      return state;
  }
};
