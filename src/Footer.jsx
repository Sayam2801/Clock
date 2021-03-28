import React from "react";
import "../public/styles.css";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>©️Copyrights {currentYear}</p>
    </footer>
  );
}

export default Footer;
