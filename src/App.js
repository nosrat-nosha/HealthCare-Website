import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home/Home";
import Navigation from "./Pages/Navigation/Navigation";
import { Router, Switch, Route } from "react-router-dom";
import LogIn from "./Pages/LogIn/LogIn";

import Registration from "./Pages/Registration/Registration";
import AuthProvider from "./context/AuthProvider";
import Service from "./Services/Service";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import About from "./Pages/About/About";
import Footer from "./Pages/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import Doctor from "./Pages/Doctors/Doctor";

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Router>
					<Navigation></Navigation>
					<Switch>
						<Route path="/home">
							<Home></Home>
						</Route>
						<PrivateRoute path="/service">
							<Service></Service>
						</PrivateRoute>
						<PrivateRoute path="/about">
							<About></About>
						</PrivateRoute>
						<PrivateRoute path="/doctor">
							<Doctor></Doctor>
						</PrivateRoute>
						<Route path="/login">
							<LogIn></LogIn>
						</Route>
						<Route path="/registration">
							<Registration></Registration>
						</Route>
						<Route path="*">
							<NotFound></NotFound>
						</Route>
					</Switch>
					<Footer></Footer>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
