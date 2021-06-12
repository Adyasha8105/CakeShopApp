import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeConatiner from "./components/HooksCakeConatiner";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeCreateConatiner from "./components/NewCakeCreateConatiner";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<NewCakeCreateConatiner />
				<IceCreamContainer />
				<HooksCakeConatiner />
				<CakeContainer />
			</div>
		</Provider>
	);
}

export default App;
