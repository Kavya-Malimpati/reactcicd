import React from 'react';
import { useLocation, NavLink } from "react-router-dom";
const Navigation = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(window.location.search);
    const impersonationMode = queryParams.get("Impersonation");
    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto flex items-center justify-between py-4">
                {/* Logo Section */}
                <div className="flex items-center">
                    <div className="mr-2 ml-4">
                        <img
                            src="/Logo.png"
                            alt="Pure Insurance Logo"
                            className="h-8"
                        />
                    </div>
                </div>

                {/* Navigation Section */}
                <div className="flex space-x-4 pr-2">
                    <NavLink to={`/${impersonationMode ? '?Impersonation=true' : ''}`} 
                    className={`px-2 py-2 font-medium uppercase cursor-pointer ${location.pathname === '/' ? 'text-gray-600' : 'text-teal-600'}`}
                     >HOME</NavLink>
                    <NavLink to={`/policy${impersonationMode ? '?Impersonation=true' : ''}`} className={location.pathname == '/policy'? "px-2 py-2 text-gray-600 font-medium uppercase cursor-pointer": "px-2 py-2 text-teal-600 font-medium uppercase cursor-pointer"}>Policies</NavLink>
                    <NavLink to={`/billing${impersonationMode ? '?Impersonation=true' : ''}`} className={location.pathname == '/billing'? "px-2 py-2 text-gray-600 font-medium uppercase cursor-pointer": "px-2 py-2 text-teal-600 font-medium uppercase cursor-pointer"}>Billing</NavLink>
                    <NavLink to="#" className="px-2 py-2 text-teal-600 font-medium uppercase cursor-pointer">Pure 360</NavLink >
                    <NavLink to="#" className="px-2 py-2 text-teal-600 font-medium uppercase cursor-pointer">Claims Tracker</NavLink >
                    <NavLink to="#" className="px-2 py-2 text-teal-600 font-medium uppercase cursor-pointer">Member Privileges</NavLink >
                </div>
            </div>
        </nav>
    );
}

export default Navigation;