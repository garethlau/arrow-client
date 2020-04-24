import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";
import { store, actions } from "../../store";
import utils from "../../utils";
import constants from "../../constants";

export default function NavContainer() {
  const history = useHistory();
  const globalStore = useContext(store);
  const { dispatch } = globalStore;
  
  useEffect(() => {
    // Check if the user is logged in
    const config = utils.getJWTConfig();
    axios
      .get(constants.base + "/core/auth/", config)
      .then((res) => {
        dispatch({ type: actions.SET_USER, payload: res.data });
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  const goto = (location) => () => {
    history.push(location);
  };

  const logout = async () => {
    const config = utils.getJWTConfig();
    try {
      await axios.post(constants.base + "/core/auth/logout", {}, config);
      dispatch({ type: actions.CLEAR_USER });
      history.push("/");
    } catch (err) {}
  };

  return <Nav goto={goto} logout={logout} />;
}
