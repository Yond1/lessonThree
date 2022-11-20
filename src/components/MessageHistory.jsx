import React from "react";
import { Message, Response, Typing } from "./itemMessage";

export const MessageHistory = ({ list }) => {
  const renderMessage = (type, item) => {
    if (type === "message") {
      return <Message list={item} />;
    }
    if (type === "response") {
      return <Response list={item} />;
    }
    if (type === "typing") {
      return <Typing list={item} />;
    }
  };

  return (
    <>
      <ul>
        {list.map((item) => {
          const { type, id } = item;
          return (
            <React.Fragment key={id}>
              {renderMessage(type, { ...item })}
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};
