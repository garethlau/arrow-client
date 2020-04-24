import React, { useContext } from "react";
import {
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Button,
  Alignment,
  Classes,
} from "@blueprintjs/core";
import { store } from "../../store";

export default function Nav({ goto, logout }) {
  const globalStore = useContext(store);
  const { state } = globalStore;
  console.log(state);
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
        {state.user ? (
          <Button
            onClick={logout}
            className={Classes.MINIMAL}
            icon="log-out"
            text="Logout"
          />
        ) : (
          <Button
            onClick={goto("/login")}
            className={Classes.MINIMAL}
            icon="log-in"
            text="Log in"
          />
        )}
      </NavbarGroup>
    </Navbar>
  );
}
