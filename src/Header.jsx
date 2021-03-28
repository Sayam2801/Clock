import React from "react";
import "../public/styles.css";
const currentDay = new Date();
console.log(currentDay);

function Header() {
  return (
    <div className="time">
      <h1>{currentDay.toDateString()}</h1>
    </div>
  );
}

export default Header;
