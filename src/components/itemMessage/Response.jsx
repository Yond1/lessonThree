import React from "react";

export const Response = (list) => {
  const item = list.list;
  const { from, time, text } = item;
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{from.name}</span> &nbsp; &nbsp;
        <span className="message-data-name">{time}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">{text}</div>
    </li>
  );
};
