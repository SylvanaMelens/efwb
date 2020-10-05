/**
 * site web-carte de visite en REACT
 * @author: Sylvana MELENS
 */

import React from "react";

const styles = {
  copyright: {
    position: "relative",
    bottom: "0",
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "darkorange",
    paddingLeft: "0.5em",
    marginTop: "0.5em",

  },
  text: {
    color: "#222",
    fontSize: "0.5em",
    fontStyle: "italic",
    marginRight: "1em",
  },
};

const Footer = () => {
  return (
    <div style={styles.copyright}>
      <p style={styles.text}>
        Copyright &copy; {new Date().getFullYear()} - EFWB FERRIERES
      </p>
    </div>
  );
};

export default Footer;
