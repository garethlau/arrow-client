import React from "react";
import {
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Button,
  Alignment,
  Classes,
} from "@blueprintjs/core";

export default function Nav({ goto }) {
  return (
    <Navbar>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Arrow</NavbarHeading>
        <NavbarDivider />
        <Button
          onClick={goto("/")}
          className={Classes.MINIMAL}
          icon="home"
          text="Home"
        />
        <Button
          onClick={goto("/dashboard")}
          className={Classes.MINIMAL}
          icon="control"
          text="Dashboard"
        />
        <Button
          onClick={goto("/create")}
          className={Classes.MINIMAL}
          icon="add"
          text="Create"
        />
      </NavbarGroup>

      <NavbarGroup align={Alignment.RIGHT}>
        <Button
          onClick={goto("/login")}
          className={Classes.MINIMAL}
          icon="log-in"
          text="Login"
        />
      </NavbarGroup>
    </Navbar>
  );
}
