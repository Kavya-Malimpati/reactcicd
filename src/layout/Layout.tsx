import React from "react";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import HeroBanner from "../components/heroBanner/HeroBanner";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Navigation />
			<HeroBanner />
			<main className="flex-grow">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
