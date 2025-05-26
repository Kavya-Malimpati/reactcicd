import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import YourPage from "./samples/filterpage";
import "./App.css";
const App = () => {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/sample" element={<YourPage />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Layout>
		</Router>
	);
};

export default App;
