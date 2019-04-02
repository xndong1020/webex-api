export const OPEN_BAR = "OPEN_BAR";
export const CLOSE_BAR = "CLOSE_BAR";
const openShow = state => {
  //console.log("open");
  return { ...state, open: true };
};
const closeShow = state => {
  return { ...state, open: false };
  //console.log("store: " + this.state.open);
};
export const testReducer = (state, action) => {
  switch (action.type) {
    case OPEN_BAR:
      return openShow(state);
    case CLOSE_BAR:
      //console.log(state);
      //state=>internal data store
      //action=>data change and action type
      return closeShow(state);
    default:
      return state;
  }
};
