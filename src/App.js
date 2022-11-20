import React from "react";
import { Stars, Listing } from "./components";
import data from "./data/etsy.json";


const App = () => {
  return (
    <>
      {/* <Stars count={4} />, */}
      <Listing data={data}/>
    </>
  );
};

export default App;
