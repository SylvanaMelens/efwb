import React from "react";
import BackButton from "../containers/BackButton";

const NoMatch = (props) => {
  return (
    <>
      <overlay>
        <h1>Oups, le lien utilisé semble incorrect</h1>
        <BackButton />
      </overlay>
    </>
  );
};

export default NoMatch;
