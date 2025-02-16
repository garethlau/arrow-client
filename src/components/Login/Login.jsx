import React, { useState } from "react";
import {
  FormGroup,
  InputGroup,
  Button,
  Tooltip,
  Intent,
} from "@blueprintjs/core";

export default function Signup({ username, password, submit }) {
  const [showPassword, setShowPassword] = useState(false);
  const lockButton = (
    <Tooltip content={`${showPassword ? "Hide" : "Show"} Password`}>
      <Button
        icon={showPassword ? "unlock" : "lock"}
        intent={Intent.WARNING}
        minimal={true}
        onClick={() => setShowPassword(!showPassword)}
      />
    </Tooltip>
  );
  return (
    <div>
      <div
        style={{
          width: "300px",
          height: "300px",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: "auto",
        }}
      >
        <FormGroup
          helperText={username.helperText}
          label="Username"
          labelFor="text-input"
          labelInfo="(required)"
        >
          <InputGroup
            id="username-text-input"
            value={username.value}
            onChange={username.onChange}
          />
        </FormGroup>

        <FormGroup
          helperText={password.helperText}
          label="Password"
          labelFor="text-input"
          labelInfo="(required)"
        >
          <InputGroup
            id="password-text-input"
            placeholder=""
            value={password.value}
            onChange={password.onChange}
            type={showPassword ? "text" : "password"}
            rightElement={lockButton}
          />
        </FormGroup>
        <div>
          <Button onClick={submit} text="Log in" intent="primary" />
          <p
            style={{ fontSize: "0.85em", display: "inline", marginLeft: "5px" }}
          >
            Don't have an account?
          </p>
          <a
            style={{ fontSize: "0.85em", display: "inline", marginLeft: "5px" }}
            href="/signup"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
