import React, { useState } from "react";

function SetClock() {
  const [date, setDate] = useState(new Date());
  function updateTime() {
    const now = new Date();
    setDate(now);
  }
  React.useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="today">
      <h2>
        <span className="list">Time: </span>
        {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
      </h2>
      <h2>
        <span className="list">Date: </span> {date.getDate()}/
        {date.getMonth() + 1}/{date.getFullYear()}{" "}
      </h2>
    </div>
  );
}

export default SetClock;
