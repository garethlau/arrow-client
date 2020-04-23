import React from "react";
import { FormGroup, InputGroup, Button } from "@blueprintjs/core";

export default function Login({ username, password, submit }) {
  return (
    <div>
      <FormGroup
        helperText={username.helperText}
        label="Label A"
        labelFor="text-input"
        labelInfo="(required)"
      >
        <InputGroup
          id="username-text-input"
          placeholder="Username"
          value={username.value}
          onChange={username.onChange}
        />
      </FormGroup>

      <FormGroup
        helperText={password.helperText}
        label="Label A"
        labelFor="text-input"
        labelInfo="(required)"
      >
        <InputGroup
          id="password-text-input"
          placeholder="Username"
          value={password.value}
          onChange={password.onChange}
        />
      </FormGroup>
      <Button onClick={submit} text="Login" intent="primary" />
    </div>
  );
}
