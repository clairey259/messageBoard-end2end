import Styles from "./App.scss";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className={Styles.app}>
      <NavBar />
      <Main />
    </div>
  );
};

export default App;
