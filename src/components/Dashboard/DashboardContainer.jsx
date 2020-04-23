import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import axios from "axios";
import { Intent } from "@blueprintjs/core";

import { AppToaster } from "../../toaster";
const base =
  process.env.NODE_ENV === "production" ? "arrow.garethdev.space" : "";

export default function DashboardContainer() {
  const [endpoints, setEndpoints] = useState([]);
  const [selected, setSelected] = useState([""]);
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

  const edit = (id) => () => {};

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

  function confirmDelete() {
    axios
      .delete(`${base}/core/endpoint?toDelete=["${deleteAlert.id}"]`)
      .then((res) => {
        setDeleteAlert({ isOpen: false });

        AppToaster.show({
          message: "Endpoint successfully deleted.",
          action: {
            onClick: () => window.location.reload(false),
            text: "Refresh",
          },
          intent: Intent.SUCCESS,
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
    axios
      .get("/core/endpoint")
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
      endpointOverlay={endpointOverlay}
      handleViewClose={handleViewClose}
    />
  );
}
