import React, { useState } from "react";
import axios from "axios";
import Create from "./Create";
import useFormInput from "../../hooks/useFormInput";
import { useHistory } from "react-router-dom";
import { AppToaster } from "../../toaster";

import { Intent } from "@blueprintjs/core";

import { base } from "../../constants";

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
  const whitelist = useFormInput("");
  const [authorizedDomains, setAuthorizedDomains] = useState([]);

  const [testResults, setTestResults] = useState([]);
  const [showTestResults, setShowTestResults] = useState(true);

  function handleMethodChange(event) {
    setMethod(event.currentTarget.value);
  }

  function onCodeChange(newCode) {
    setCode(newCode);
  }

  // content: code.replace(/\n/g, ""),
  function testCode() {
    const data = {
      uri: uri.value.substring(1),
      method: method,
      content: code,
      whitelist: authorizedDomains,
      body: {},
      query: {},
    };
    console.log(data);
    axios
      .post(base + "/core/endpoint/validate", data)
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
    const data = {
      uri: uri.value.substring(1),
      method: method,
      content: code,
      whitelist: authorizedDomains,
      body: {},
      query: {},
    };
    console.log(data);
    axios
      .post(base + "/core/endpoint", data)
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

  function addDomain() {
    setAuthorizedDomains([...authorizedDomains, whitelist.value]);
    whitelist.clear();
  }

  const removeDomain = (hostname) => () => {
    setAuthorizedDomains(
      authorizedDomains.filter((domain) => domain !== hostname)
    );
  };

  return (
    <Create
      uri={uri}
      handleMethodChange={handleMethodChange}
      method={method}
      code={code}
      onCodeChange={onCodeChange}
      testCode={testCode}
      createEndpoint={createEndpoint}
      whitelist={whitelist}
      authorizedDomains={authorizedDomains}
      addDomain={addDomain}
      removeDomain={removeDomain}
      testResults={testResults}
      showTestResults={showTestResults}
    />
  );
}
