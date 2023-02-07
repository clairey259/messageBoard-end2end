import React from "react";
import Styles from "../App.module.scss";

const Message = (props) => {
    const {message} = props;
  return (
    <div className= {Styles.message} id={message.id}>
      <h1>{message.name}</h1>
      <p>{message.message}</p>
    </div>
  );
};

export default Message;
