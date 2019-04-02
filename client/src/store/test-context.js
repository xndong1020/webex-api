import React from "react";

export default React.createContext({
  open: true,
  openShow: () => {},
  closeShow: () => {}
});
