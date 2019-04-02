import React, { useReducer, useState } from "react";
import TestContext from "./test-context";
import { testReducer, OPEN_BAR, CLOSE_BAR } from "./reducer";
const GlobalState = props => {
  const [state, dispatch] = useReducer(testReducer, { open: true });
  //const [open, changeData] = useState(true);
  const openShow = () => {
    //console.log("open");
    dispatch({ type: OPEN_BAR });
  };
  const closeShow = () => {
    dispatch({ type: CLOSE_BAR });
    //console.log("store: " + this.state.open);
  };

  return (
    <TestContext.Provider
      value={{
        open: state.open,
        openShow: openShow,
        closeShow: closeShow
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
};
export default GlobalState;
