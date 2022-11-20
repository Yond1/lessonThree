import React from "react";

export const Typing = (list) => {
  const item = list.list;
  const { from, time } = item;
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i> {from.name}
        </span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="message my-message">...</div>
    </li>
  );
};
