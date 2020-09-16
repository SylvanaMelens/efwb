/**
 * site web-REACT
 * @author: sylvana
 */
import React, { Component } from "react";

const styles = {
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "70%",
    marginBottom: "1.5em",
  },
};

export default class Banner extends Component {
  render() {
    return (
      <div style={styles.imgContainer}>
        <img
          style={styles.image}
          src="../fond.jpg"
          alt="bannière école ferrière"
        />
      </div>
    );
  }
}
