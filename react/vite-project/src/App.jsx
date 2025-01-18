import React from "react";
import ElementsApiComponent from "./components/ElementsApiComponent";

function App() {
  return (
    <div>
      {/* <ElementsApiComponent source={"https://unpkg.com/@stoplight/elements/web-components.min.js"} /> */}
      <ElementsApiComponent 
        jsSource={"https://unpkg.com/@stoplight/elements/web-components.min.js"}
        cssSource={"https://unpkg.com/@stoplight/elements/styles.min.css"}
        openApiSource={"https://api.apis.guru/v2/specs/github.com/1.1.4/openapi.yaml"}
      />
    </div>
  );
}

export default App;