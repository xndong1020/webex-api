import React, { Component } from "react";
import TestContext from "./test-context";
class GlobalState extends Component {
  state = {
    open: true
  };
  openShow = () => {
    console.log("open");
    this.setState({
      open: true
    });
  };
  closeShow = () => {
    this.setState({
      open: false
    });
    console.log("store: " + this.state.open);
  };

  render() {
    return (
      <TestContext.Provider
        value={{
          open: this.state.open,
          openShow: this.openShow,
          closeShow: this.closeShow
        }}
      >
        {this.props.children}
      </TestContext.Provider>
    );
  }
}
export default GlobalState;
