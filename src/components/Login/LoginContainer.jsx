import React from "react";
import Login from "./Login";
import axios from "axios";
import { useHistory } from "react-router-dom";

import useFormInput from "../../hooks/useFormInput";

const base =
  process.env.NODE_ENV === "production" ? "arrow.garethdev.space" : "";

export default function LoginContainer() {
  const history = useHistory();
  const username = useFormInput("");
  const password = useFormInput("");

  async function submit() {
    const data = {
      username: username.value,
      password: password.value,
    };
    try {
      let result = await axios.post(base + "/core/auth/login", data);
      console.log(result);
      history.push("/dashboard");
    } catch (err) {
      console.log(err.message);
    }
  }

  return <Login username={username} password={password} submit={submit} />;
}
