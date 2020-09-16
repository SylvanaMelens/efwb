import React, { Component } from "react";
import "./Title.css";

const bienvenue = "BIENVENUE SUR LE SITE DE NOTRE ECOLE !";
const bienvenueArray = bienvenue.split("");
console.log(bienvenueArray);
const timestamp = Date.now();

export default class Title extends Component {
  state = {
    colors: [
      "blue",
      "cyan",
      "lime",
      "green",
      "yellow",
      "orange",
      "red",
      "purple",
      "blue",
      "cyan",
      "lime",
      "green",
      "yellow",
      "orange",
      "red",
      "purple",
      "blue",
      "cyan",
      "lime",
      "green",
      "yellow",
      "orange",
      "red",
      "purple",
      "blue",
      "cyan",
      "lime",
      "green",
      "yellow",
      "orange",
      "red",
      "purple",
      "blue",
      "cyan",
      "lime",
      "green",
      "yellow",
      "orange",
      "red",
      "purple",
    ],
  };
  render() {
    const bienvenueTitle = bienvenueArray.map((letter, color) => {
      return (
        <span
          key={Math.random(timestamp)}
          style={{
            color: this.state.colors[color],
            textShadow: "1px 2px 10px green",
          }}
        >
          {letter}
        </span>
      );
    });

    return <h1 className="bienvenue">{bienvenueTitle}</h1>;
  }
}
