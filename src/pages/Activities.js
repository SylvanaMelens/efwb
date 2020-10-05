import React from "react";

import BackButton from "../containers/BackButton";

const Activities = (props) => {
  return (
    <>
      <overlay>
      <h1>ACTIVITES</h1>
        <h2>
          Dans notre école, il y a toujours de chouettes activités organisées,
          comme :{" "}
        </h2>
        <ul>
          <li>Le souper d’automne</li>
          <li>Le marché de Noël</li>
          <li>Des soupers Spaghetti</li>
          <li>La fancy fair et les journées porte-ouvertes</li>
          <li>Confection et vente de gaufres pour le Télévie</li>
        </ul>
        <BackButton />
      </overlay>
    </>
  );
};

export default Activities;
