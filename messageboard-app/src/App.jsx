import { useState } from "react";
import { useEffect } from "react";
import Styles from "./App.module.scss";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
//import { data } from "./data/messages";
import getData from "./services/data.service";

const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
      getData()
      .then((data) => setData(data))
  }, [data])


  return (
    <div className={Styles.app}>
      <NavBar />
      <Main data={data}/>
    </div>
  );
};

export default App;
