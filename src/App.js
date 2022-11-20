import React from "react";
import { Stars, Listing, MessageHistory } from "./components";
import data from "./data/etsy.json";
import { messages } from "./data/messages";

const App = () => {
  return (
    <>
      {/* <Stars count={4} />, */}
      {/* <Listing data={data} /> */}
      <div className="clearfix container">
        <div className="chat">
          <div className="chat-history">
            <MessageHistory list={messages}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
