import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Dashboard from "./Dashboard";
import axios from "axios";
import { Intent } from "@blueprintjs/core";

import { AppToaster } from "../../toaster";
import { base } from "../../constants";

import utils from "../../utils";

export default function DashboardContainer() {
  const history = useHistory();
  const [endpoints, setEndpoints] = useState([]);
  const [selected, setSelected] = useState([]);
  const [deleteAlert, setDeleteAlert] = useState({
    isOpen: false,
    uri: "",
    method: "",
  });

  const [endpointOverlay, setEndpointOverlay] = useState({
    isOpen: false,
  });

  const select = (id) => () => {
    if (selected.includes(id)) {
      // Need to remove
      let tmp = selected.filter((elem) => elem !== id);
      setSelected(tmp);
    } else {
      // Add to selected array
      setSelected([...selected, id]);
    }
  };

  function handleViewClose() {
    setEndpointOverlay({ isOpen: false });
  }

  const view = (id) => () => {
    let endpoint = endpoints.filter((elem) => elem._id === id)[0];

    console.log(endpoint);
    setEndpointOverlay({
      isOpen: true,
      uri: endpoint.uri,
      method: endpoint.method,
      whitelist: endpoint.whitelist,
      displayCode: endpoint.displayCode,
    });
  };

  const edit = (id) => () => {
    history.push(`/edit/${id}`);
  };

  const remove = (id) => () => {
    let endpoint = endpoints.filter((elem) => elem._id === id)[0];
    console.log(endpoint);
    setDeleteAlert({
      isOpen: true,
      uri: endpoint.uri,
      method: endpoint.method,
      id: id,
    });
  };

  async function removeSelected() {
    const config = utils.getJWTConfig();
    let toDelete = selected.map(id => `"${id}"`)
    try {
      await axios.delete(`${base}/core/endpoint?toDelete=[${toDelete}]`, config);
      AppToaster.show({
        message: "Endpoints successfully deleted.",
        action: {
          onClick: () => window.location.reload(false),
          text: "Reload",
        },
        intent: Intent.SUCCESS,
      });
    } catch (err) {
      console.log(err);
      AppToaster.show({
        message: "Error deleting endpoints.",
        intent: Intent.DANGER,
      });
    }
  }

  async function confirmDelete() {
    const config = utils.getJWTConfig();
    try {
      await axios.delete(`${base}/core/endpoint?toDelete=["${deleteAlert.id}"]`, config);
      setDeleteAlert({ isOpen: false });
      AppToaster.show({
        message: "Endpoint successfully deleted.",
        action: {
          onClick: () => window.location.reload(false),
          text: "Reload",
        },
        intent: Intent.SUCCESS,
      });
    } catch (err) {
      console.log(err);
      AppToaster.show({
        message: "Error deleting endpoint.",
        intent: Intent.DANGER,
      });
    }
  }

  function cancelDelete() {
    setDeleteAlert({
      isOpen: false,
      uri: "",
      method: "",
      id: "",
    });
  }

  useEffect(() => {
    // Check if we have  JWT token
    const config = utils.getJWTConfig();
    axios
      .get(`${base}/core/endpoint`, config)
      .then((res) => {
        console.log(res.data.endpoints);
        setEndpoints(res.data.endpoints);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Dashboard
      endpoints={endpoints}
      selected={selected}
      select={select}
      deleteAlert={deleteAlert}
      confirmDelete={confirmDelete}
      cancelDelete={cancelDelete}
      view={view}
      edit={edit}
      remove={remove}
      removeSelected={removeSelected}
      endpointOverlay={endpointOverlay}
      handleViewClose={handleViewClose}
    />
  );
}
