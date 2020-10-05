import React from "react";

import BackButton from "../containers/BackButton";

const Meals = (props) => {
  return (
    <>
    <overlay>
      <h1>LES REPAS</h1>
      <h2>
        Dans notre école, on se régale avec de délicieux repas cuisinés sur
        place!
      </h2>
      <ul>
        <li>Maternelles: repas à 2,50 € (plat / dessert et eau)</li>
        <li>Primaires: repas à 3,00 € (plat / dessert et eau)</li>
      </ul>

      <BackButton />
      </overlay>
    </>
  );
};

export default Meals;
