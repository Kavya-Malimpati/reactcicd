import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import HeroBanner from "./HeroBanner";
import { useLocation } from "react-router-dom";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const location = useLocation();
	return (
		<div className="flex flex-col min-h-screen">
			{location.pathname != '/' && <Header />}
			{location.pathname != '/' && <Navigation />}
			{location.pathname != '/' && <HeroBanner />}
			<main className="flex-grow">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
