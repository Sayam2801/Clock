import React from "react";
import Header from "./Header";
import SetClock from "./SetClock";
import Footer from "./Footer";

function App() {
  return (
    <div className="clock">
      <Header />
      <SetClock />
      <Footer />
    </div>
  );
}

export default App;
