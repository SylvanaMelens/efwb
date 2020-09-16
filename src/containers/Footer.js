/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React from "react";

const styles = {
  copyright: {
    position: "fixed",
    bottom: "0",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "darkorange",
    paddingLeft: "0.5em",
    marginTop: "0.5em",
    width: "100%",
  },
  text: {
    color: "#222",
    fontSize: "0.8em",
    fontStyle: "italic",
    marginRight: "1em",
  },
};

const Footer = () => {
  return (
    <div style={styles.copyright} className="container-fluid col-sm">
      <p style={styles.text}>
        Copyright &copy; {new Date().getFullYear()} - EFWB FERRIERES
      </p>
    </div>
  );
};

export default Footer;
