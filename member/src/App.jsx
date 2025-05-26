import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import MemberDashboard from "./pages/MemberDashboard";
import Billing from "./pages/Billing";
import Policy from "./pages/Policy";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MemberDashboard />} />
				<Route path="/billing" element={<Billing />} />
				<Route path="/policy" element={<Policy />} />
			</Routes>
		</Router>
	);
};

export default App;
