import React from "react";

const ElementsApiComponent = () => {
  React.useEffect(() => {
    // Load the Stoplight Elements script dynamically
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@stoplight/elements/web-components.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Styles for Stoplight Elements */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/@stoplight/elements/styles.min.css"
      />
      <div>
        <elements-api
          apiDescriptionUrl="https://api.apis.guru/v2/specs/github.com/1.1.4/openapi.yaml"
          router="hash"
          layout="sidebar"
        />
      </div>
    </>
  );
};

export default ElementsApiComponent;
