import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Layout from "./layout/Layout";

const HomePage = () => <div>Home Page Content</div>;
const MyMembersPage = () => <div>My Members Page Content</div>;
const ClaimsPage = () => <div>Claims Page Content</div>;

const App = () => {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/my-members" element={<MyMembersPage />} />
					<Route path="/claims" element={<ClaimsPage />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Layout>
		</Router>
	);
};

export default App;
