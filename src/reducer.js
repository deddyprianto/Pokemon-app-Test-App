export const initialState = {
  user: [],
  page: 1,
  prev: true,
  next: false,
};
export const stateawal = {
  STATE_USER: "STATE_USER",
  STATE_PAGEINDEX: "STATE_PAGEINDEX",
  STATE_PREV: "STATE_PREV",
  STATE_NEXT: "STATE_NEXT",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case stateawal.STATE_USER:
      return { ...state, user: action.payload };
    case stateawal.STATE_PAGEINDEX:
      return { ...state, page: action.payload };
    case stateawal.STATE_PREV:
      return { ...state, prev: action.payload };
    case stateawal.STATE_NEXT:
      return { ...state, next: action.payload };
    default:
      return state;
  }
};
