import Styles from "./App.module.scss";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import { data } from "./data/messages";

const App = () => {
  return (
    <div className={Styles.app}>
      <NavBar />
      <Main data={data}/>
    </div>
  );
};

export default App;
