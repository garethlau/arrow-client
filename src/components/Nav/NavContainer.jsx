import React from "react";
import { useHistory } from "react-router-dom";

import Nav from "./Nav";

export default function NavContainer() {
  const history = useHistory();

  const goto = (location) => () => {
    history.push(location);
  };

  return <Nav goto={goto} />;
}
