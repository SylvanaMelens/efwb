import React from "react";



const Meals = (props) => {
  return (
    <>
      <overlay>
        <h1 id="repas">LES REPAS</h1>
        <h2>
          Dans notre école, on se régale avec de délicieux repas cuisinés sur
          place!
        </h2>
        <ul>
          <li>Maternelles: repas à 2,50 € (plat / dessert et eau)</li>
          <li>Primaires: repas à 3,00 € (plat / dessert et eau)</li>
        </ul>


      </overlay>
    </>
  );
};

export default Meals;
