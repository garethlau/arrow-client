import React from "react";

import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "../../styles/prism.css";
import {
  HTMLTable,
  Button,
  Checkbox,
  Alert,
  Intent,
  Overlay,
  Classes,
  H3,
  Code,
  TagInput,
  Tag,
  Spinner,
} from "@blueprintjs/core";
import { base } from "../../constants";

export default function Dashboard({
  endpoints,
  selected,
  select,
  deleteAlert,
  cancelDelete,
  confirmDelete,
  removeSelected,
  view,
  edit,
  remove,
  endpointOverlay,
  handleViewClose,
  goto,
}) {
  function createCode() {
    return {
      __html: endpointOverlay.displayCode
        ? highlight(endpointOverlay.displayCode, languages.js)
        : null,
    };
  }

  return (
    <div>
      <section>
        <Alert
          canOutsideClickCancel
          canEscapeKeyCancel
          cancelButtonText="Cancel"
          confirmButtonText="Delete"
          icon="trash"
          intent={Intent.DANGER}
          isOpen={deleteAlert.isOpen}
          onCancel={cancelDelete}
          onConfirm={confirmDelete}
        >
          <p>
            Are you sure you want to delete{" "}
            <b>
              {deleteAlert.method} {deleteAlert.uri}
            </b>
            ? This operation is irreversiable.
          </p>
        </Alert>
      </section>
      <div style={{ padding: "25px" }}>
        {endpoints && endpoints.length > 0 && (
          <HTMLTable bordered interactive style={{ width: "100%" }}>
            <thead>
              <tr>
                <th style={{ width: "75px" }}>
                  <Button
                    intent={Intent.DANGER}
                    text="Delete"
                    disabled={selected.length === 0}
                    onClick={removeSelected}
                  />
                </th>
                <th style={{ width: "100px" }}>METHOD</th>
                <th>URL</th>
                <th>Whitelist</th>
                <th style={{ width: "250px" }}>Tags</th>
                <th style={{ width: "300px" }}>{null}</th>
              </tr>
            </thead>
            <tbody>
              {endpoints.map((endpoint) => (
                <tr key={endpoint._id}>
                  <td style={{ textAlign: "center" }}>
                    <Checkbox
                      checked={selected.includes(endpoint._id)}
                      onChange={select(endpoint._id)}
                    />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <Code>{endpoint.method}</Code>
                  </td>
                  <td>
                    <Code>{base + endpoint.uri}</Code>
                  </td>
                  <td>
                    <TagInput disabled fill values={endpoint.whitelist} />
                  </td>
                  <td>
                    <TagInput disabled fill values={endpoint.tags} />
                  </td>
                  <td>
                    <Button
                      onClick={view(endpoint._id)}
                      style={{ marginRight: "10px" }}
                      small
                      rightIcon="eye-open"
                      text="View"
                      intent="primary"
                      outlined
                    />
                    <Button
                      onClick={edit(endpoint._id)}
                      style={{ marginRight: "10px" }}
                      small
                      rightIcon="edit"
                      text="Edit"
                      intent="warning"
                      outlined
                    />

                    <Button
                      onClick={remove(endpoint._id)}
                      small
                      rightIcon="trash"
                      text="Delete"
                      intent="danger"
                      outlined
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </HTMLTable>
        )}
      </div>

      {endpoints && endpoints.length === 0 && (
        <div style={{ textAlign: "center" }}>
          <p>No endpoints created.</p>
          <Button
            intent="primary"
            onClick={goto("/create")}
            rightIcon="chevron-right"
            text="Create an Endpoint"
          />
        </div>
      )}

      <section>
        <Overlay
          onClose={handleViewClose}
          className={Classes.OVERLAY_SCROLL_CONTAINER}
          isOpen={endpointOverlay.isOpen}
          canEscapeKeyClose
          canOutsideClickClose
          hasBackdrop
          usePortal
          useTallContent={false}
        >
          <div
            style={{
              top: "50%",
              left: "50%",
              width: "600px",
              transform: "translate(-50%, -50%)",
            }}
            className={Classes.CARD}
          >
            <H3>
              [{endpointOverlay.method}] {endpointOverlay.uri}
            </H3>
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                overflow: "scroll",
                width: "500px",
                height: "300px",
              }}
              dangerouslySetInnerHTML={createCode()}
            />
            <div>
              {endpointOverlay.whitelist &&
                endpointOverlay.whitelist.length > 0 &&
                endpointOverlay.whitelist.map((domain) => <div>{domain}</div>)}
            </div>
            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
              <Button intent={Intent.DANGER} onClick={handleViewClose} style={{ margin: "" }}>
                Close
              </Button>
            </div>
          </div>
        </Overlay>
      </section>
    </div>
  );
}
