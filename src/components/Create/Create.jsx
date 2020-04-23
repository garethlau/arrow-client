import React from "react";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "../../styles/prism.css";

import Nav from "../Nav";
import {
  FormGroup,
  InputGroup,
  HTMLSelect,
  TextArea,
  Intent,
  Button,
  ControlGroup,
  H3,
  Collapse,
  Code,
} from "@blueprintjs/core";
export default function Create({
  uri,
  handleMethodChange,
  method,
  code,
  onCodeChange,
  testCode,
  createEndpoint,
  whitelist,
  authorizedDomains,
  addDomain,
  removeDomain,
  testResults,
  showTestResults,
}) {
  return (
    <div>
      <Nav />
      <div style={{ padding: "30px" }}>
        <H3>Create Your New API Endpoint</H3>
        <ControlGroup style={{ width: "450px", marginBottom: "15px" }}>
          <HTMLSelect
            id="method-selector"
            value={method}
            options={["GET", "POST", "PUT", "PATCH", "DELETE"]}
            onChange={handleMethodChange}
          />
          <InputGroup
            id="endpoint-uri-text-input"
            placeholder="/animals/dogs"
            value={uri.value}
            onChange={uri.onChange}
          />
        </ControlGroup>
        <div
          style={{
            width: "550px",
            marginBottom: "15px",
            border: "1px solid lightgrey",
          }}
        >
          <Editor
            value={code}
            onValueChange={onCodeChange}
            highlight={(code) => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
        </div>
        <div style={{ width: "300px" }}>
          <H3>Authorized Domain Origins</H3>
          <p>Only requests made from these domains can access your API.</p>
          <div style={{ marginBottom: "15px" }}>
            {authorizedDomains.length > 0 &&
              authorizedDomains.map((hostname) => (
                <div>
                  <Button
                    icon="remove"
                    minimal
                    onClick={removeDomain(hostname)}
                    intent="danger"
                    small
                  />
                  {hostname}
                </div>
              ))}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <ControlGroup>
              <InputGroup
                placeholder="realurl.com"
                onChange={whitelist.onChange}
                value={whitelist.value}
              />
              <Button
                onClick={addDomain}
                rightIcon="add"
                intent="primary"
                text="Add Domain"
              />
            </ControlGroup>
          </div>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <Button
            onClick={testCode}
            icon="lab-test"
            intent="warning"
            text="Check Validity"
          />
        </div>
        <p>Results:</p>
        <div
          style={{
            width: "550px",
            marginBottom: "15px",
            border: "1px solid lightgrey",
          }}
        >
          <Collapse isOpen={showTestResults}>
            <pre>
              {testResults.map((result) => (
                <div>
                  <code>
                    [{result.time}] {result.message}
                  </code>
                </div>
              ))}
            </pre>
          </Collapse>
        </div>
        <Button
          onClick={createEndpoint}
          icon="globe-network"
          intent="primary"
          text="Create Endpoint"
        />
      </div>
    </div>
  );
}
