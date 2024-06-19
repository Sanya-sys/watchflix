import { Provider } from "react-redux";
import Root from "./components/Root";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Root />
    </Provider>
  );
}

export default App;
