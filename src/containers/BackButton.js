import React from "react";
const styles = {
  a: {
    backgroundColor: "darkorange",
    textDecoration: "none",
    textAlign: "center",
    padding: "0.5em",
    color: "white",
    borderRadius: "10px",
    width: "15%",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2em",
  },
};

const BackButton = (props) => {
  return (
    <>
      <div style={styles.container}>
        <a style={styles.a} href="/">
          Retour Accueil
        </a>
      </div>
    </>
  );
};

export default BackButton;
