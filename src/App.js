import Body from "./components/Body"
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";
function App() {
  return (
    <div className="text-xl font-bol text-green-600">
     <Provider store={appStore}>
     <Body/>
     </Provider>
     
    </div>
  );
}

export default App;
