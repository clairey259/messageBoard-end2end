import React from "react";
import Message from "./Message";
import Styles from "../App.module.scss";

const Main = (props) => {
  const { data } = props;
  return (
    <div className={Styles.main}>
      <h1>Past Messages</h1>
      <section>
        {data.map((message) => {
          return <Message message={message} />;
        })}
      </section>
    </div>
  );
};

export default Main;
