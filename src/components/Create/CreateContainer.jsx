import React, { useState, useEffect } from "react";
import axios from "axios";
import Create from "./Create";
import useFormInput from "../../hooks/useFormInput";
import useTagInput from '../../hooks/useTagInput'
import { useHistory } from "react-router-dom";
import { AppToaster } from "../../toaster";

import { Intent } from "@blueprintjs/core";

import { base } from "../../constants";
import utils from "../../utils";

export default function CreateContainer() {
  const history = useHistory();
  const uri = useFormInput("");
  const [code, setCode] = useState(`module.exports = (req, res) => {
    /* Your code here */

    /* Make sure to return a response object */
    return res.status(200).send();
}
`);
  const [method, setMethod] = useState("GET");
  const authorizedDomains = useTagInput();

  const [testResults, setTestResults] = useState([]);
  const [showTestResults, setShowTestResults] = useState(true);

  const [editMode, setEditMode] = useState(false);

  const [tags, setTags] = useState([]);

  function clearTags() {
    setTags([]);
  }

  function onTagChange(values) {
    setTags(values);
  }

  function handleMethodChange(event) {
    setMethod(event.currentTarget.value);
  }

  function onCodeChange(newCode) {
    setCode(newCode);
  }

  useEffect(() => {
    console.log(history.location.pathname.split("/")[1]);
    if (history.location.pathname.split("/")[1] === "edit") {
      // Edit mode
      setEditMode(true);
      const id = history.location.pathname.split("/")[2];
      const config = utils.getJWTConfig();
      axios
        .get(base + "/core/endpoint/" + id, config)
        .then((res) => {
          // Fill in endpoint data
          const { endpoint } = res.data;
          setMethod(endpoint.method);
          authorizedDomains.set(endpoint.whitelist)
          setCode(endpoint.displayCode);
          setTags(endpoint.tags);
          let uriSegs = endpoint.uri.split("/").splice(3);
          let uriString = uriSegs.map((seg) => "/" + seg)[0];
          uri.setValue(uriString);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [history.location.pathname]);

  // content: code.replace(/\n/g, ""),
  function testCode() {
    const data = {
      uri: uri.value.substring(1),
      method: method,
      content: code,
      whitelist: authorizedDomains.values,
      body: {},
      query: {},
    };
    const config = utils.getJWTConfig();
    axios
      .post(base + "/core/endpoint/validate", data, config)
      .then((res) => {
        let d = new Date();
        setTestResults([
          ...testResults,
          { message: res.data.message, time: d.toLocaleTimeString() },
        ]);
        setShowTestResults(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function createEndpoint() {
    console.log(uri.value);
    const data = {
      uri: uri.value.substring(1),
      method: method,
      content: code,
      whitelist: authorizedDomains.values,
      body: {},
      query: {},
      tags: tags,
    };
    const config = utils.getJWTConfig();
    if (editMode) {
      axios
        .patch(`${base}/core/endpoint/${history.location.pathname.split("/")[2]}`, data, config)
        .then((res) => {
          console.log(res);
          AppToaster.show({
            message: "Endpoint updated. ",
            action: {
              onClick: () => history.push("/dashboard"),
              text: "Go to Dashboard",
            },
            intent: Intent.SUCCESS,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post(base + "/core/endpoint", data, config)
        .then((res) => {
          console.log(res);
          AppToaster.show({
            message: "Endpoint created. ",
            action: {
              onClick: () => history.push("/dashboard"),
              text: "Go to Dashboard",
            },
            intent: Intent.SUCCESS,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }


  return (
    <Create
      uri={uri}
      handleMethodChange={handleMethodChange}
      method={method}
      code={code}
      onCodeChange={onCodeChange}
      testCode={testCode}
      createEndpoint={createEndpoint}
      authorizedDomains={authorizedDomains}
      testResults={testResults}
      showTestResults={showTestResults}
      editMode={editMode}
      tags={tags}
      clearTags={clearTags}
      onTagChange={onTagChange}
    />
  );
}
