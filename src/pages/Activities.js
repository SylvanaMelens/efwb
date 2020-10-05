import React from "react";

const Activities = (props) => {
  return (
    <>
      <overlay>
        <h1 id="activites">ACTIVITES</h1>
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
      </overlay>
    </>
  );
};

export default Activities;
