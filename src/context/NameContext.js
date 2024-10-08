import React from "react";

const nameContext = React.createContext({
  name: "",
  onChangeName: () => {},
});

export default nameContext;
