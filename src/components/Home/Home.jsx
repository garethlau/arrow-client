import React, { useState } from "react";
import useFormInput from "../../hooks/useFormInput";
import { useHistory } from "react-router-dom";
import {
  Button,
  H5,
  Code,
  HTMLSelect,
  ControlGroup,
  InputGroup,
} from "@blueprintjs/core";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "../../styles/prism.css";
import { base } from "../../constants";

export default function Home() {
  const history = useHistory();
  const [code, setCode] = useState(`module.exports = (req, res) => {
    const mongoose = require('mongoose');
    const breed = req.params.breed;
    mongoose.connect('mongoURI', {
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex: true,
        keepAlive: 1,
        reconnectTries: 30,
    }).then(() => {
        const Schema = mongoose.Schema;
        const DogSchema = new Schema({ 
            breed: String, 
            age: String,
            name: String 
        });
        const Dog = mongoose.model('Dog', DogSchema);
        Dog.find({ breed: breed }, (err, dogs) => {
            if (err) {
                return res.status(500).send(err);
            } else {
                return res.status(200).send(dogs);
            }
        });
    });
};
`);

  const [method, setMethod] = useState("GET");
  const uri = useFormInput("/animals/dogs/:breed");
  function handleMethodChange(event) {
    setMethod(event.currentTarget.value);
  }
  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <H5>What is Arrow?</H5>
      <p>
        {" "}
        Arrow is a platform for developers to create API endpoints. It uses Express behind the
        scenes.{" "}
      </p>

      <H5>How do I use Arrow?</H5>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <div>
          <p>1. Define your endpoint</p>
          <ControlGroup style={{ width: "min-content" }}>
            <HTMLSelect
              options={["GET", "POST", "PUT", "PATCH", "DELETE"]}
              style={{ width: "100px" }}
              value={method}
              onChange={handleMethodChange}
            />
            <InputGroup style={{ width: "300px" }} value={uri.value} onChange={uri.onChange} />
          </ControlGroup>
        </div>
        <div>
          <p>2. Implement your logic</p>
          <div
            style={{
              width: "450px",
              marginBottom: "15px",
              border: "1px solid lightgrey",
            }}
          >
            <Editor
              value={code}
              onValueChange={setCode}
              highlight={(code) => highlight(code, languages.js)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
              }}
            />
          </div>
        </div>
        <div>
          <p>3. Use your API</p>
          Send a<Code style={{ margin: "5px" }}>[{method}]</Code>
          request to
          <Code style={{ margin: "5px" }}>{base + uri.value}</Code>
        </div>
      </div>

      <div>
        <Button
          onClick={() => history.push("/signup")}
          text="Try it out"
          intent="primary"
          rightIcon="chevron-right"
        />
      </div>
    </div>
  );
}
