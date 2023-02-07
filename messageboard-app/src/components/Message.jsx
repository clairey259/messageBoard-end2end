import React from "react";
import Styles from "../App.module.scss";
import getData, { buildURL } from "../services/data.service";

const Message = (props) => {
    const {message} = props;
    console.log(getData())
  return (
    <div className= {Styles.message} key={message.id}>
      <h1>{message.name}</h1>
      <p>{message.message}</p>
    </div>
  );
};

export default Message;
