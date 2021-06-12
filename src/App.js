import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeConatiner from "./components/HooksCakeConatiner";
import store from './redux/store'
import { Provider } from "react-redux";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
			<HooksCakeConatiner />
				<CakeContainer />
			</div>
		</Provider>
	);
}

export default App;
