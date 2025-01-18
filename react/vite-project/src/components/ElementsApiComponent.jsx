import React from "react";
// import path from "path";

const ElementsApiComponent = ({ jsSource, cssSource, yamlSource }) => {
  React.useEffect(() => {
    // Load the Stoplight Elements script dynamically
    const script = document.createElement("script");
    // console.log(path.dirname)
    script.src = jsSource;
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
        href={cssSource}
      />
      <div>
        <elements-api
          apiDescriptionUrl={yamlSource}
          router="hash"
          layout="sidebar"
        />
      </div>
    </>
  );
};

export default ElementsApiComponent;
