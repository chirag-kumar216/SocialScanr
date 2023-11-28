import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Home from "./components/Dashboard/Home";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			<Route path="/register" exact element={<Signup />} />
			<Route path="/" exact element={<Login />} />
			<Route path="/home" element={<ProtectedRoutes><Home /> </ProtectedRoutes>}/>
		</Routes>
	);
}


export function ProtectedRoutes(props) {
	if (localStorage.getItem("user")) {
	  return props.children;
	} else {
	  return <Navigate to="/" />;
	}
  }

export default App;




