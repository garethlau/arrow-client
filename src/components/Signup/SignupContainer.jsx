import React, { useContext } from "react";
import Signup from "./Signup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import useFormInput from "../../hooks/useFormInput";
import { base } from "../../constants";
import { store, actions } from "../../store";

export default function SignupContainer() {
  const globalStore = useContext(store);
  const { dispatch } = globalStore;
  const history = useHistory();

  const username = useFormInput();

  const email = useFormInput();
  const password = useFormInput();

  async function submit() {
    const data = {
      username: username.value,
      password: password.value,
    };
    try {
      let result = await axios.post(base + "/core/auth/signup", data);
      const jwtToken = result.data.token;
      const user = result.data.user;
      dispatch({ type: actions.SET_USER, payload: user });
      localStorage.setItem("ARROW_JWT_TOKEN", jwtToken);
      history.push("/dashboard");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <Signup
      username={username}
      email={email}
      password={password}
      submit={submit}
    />
  );
}
