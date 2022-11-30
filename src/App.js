import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import LogInAndOut from "./component/LogInAndOut";
import reducer from "./reducer";
const initialStore = {
  loggedin: false,
  username: "",
  email: "",
  password: "",
};

const store = createStore(reducer, initialStore);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LogInAndOut />
      </div>
    </Provider>
  );
}

export default App;
