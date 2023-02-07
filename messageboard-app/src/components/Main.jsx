import React from "react";
import Message from "./Message";
import Styles from "../App.module.scss";
import Form from "./Form";

const Main = (props) => {
  const { data } = props;
  return (
    <div className={Styles.main}>
        <h1>Post a message</h1>
        <Form />
      <h1>Past Messages</h1>
      <section>
        {data.map((message) => {
          return <Message message={message} key={message.id}/>;
        })}
      </section>
    </div>
  );
};

export default Main;
