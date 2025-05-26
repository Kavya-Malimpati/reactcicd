import React, { useState } from 'react';
import { Eye } from 'lucide-react';

const PureLoginPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [keepSignedIn, setKeepSignedIn] = useState(false);

    return (
        <div className="relative w-full min-h-screen flex flex-col overflow-hidden font-sans">
            <div className="absolute w-full h-full bg-gradient-to-r from-[#01857E] to-[#00B2A9] -z-10"></div>

            <header className="h-[111px] w-[199px] px-20 py-8 flex justify-start">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTCfjvApe4-Kc2f350lQyk0PgX2nq0Zqcjg&s"
                    alt="PURE Insurance"
                    className="w-[150px] h-auto"
                />
            </header>

            <main className="flex flex-grow justify-between items-start px-20 pt-0 gap-8 lg:flex-col lg:px-8">
                <div className="w-[45%] text-white pt-8 pr-8 lg:w-full lg:mb-8">
                    <h1 className="text-5xl font-light leading-tight mb-6">
                        Welcome to the<br />PURE Broker Portal
                    </h1>
                    <p className="text-base leading-relaxed font-light">
                        Login to access our systems, tools, and resources for brokers, so
                        you can better serve your current members and introduce PURE to
                        your best prospects and clients.
                    </p>
                </div>

                <div className="w-[400px] h-[510px] bg-white rounded shadow-md overflow-hidden mt-[-2rem] transform lg:w-full">
                    <div className="flex flex-col items-center px-4 pt-8 pb-4 border-b border-gray-100">
                        <img
                            src="https://insurewithgn.com/wp-content/uploads/2020/05/Pure-1024x520.png"
                            alt="PURE"
                            className="w-20 h-auto mb-4"
                        />
                        <h2 className="text-lg font-normal text-gray-800">Broker Login</h2>
                    </div>

                    <form className="p-6">
                        <div className="mb-5">
                            <label htmlFor="email" className="block text-sm text-gray-800 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-3 border border-gray-300 rounded text-sm"
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="password" className="block text-sm text-gray-800 mb-2">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    className="w-full px-3 py-3 border border-gray-300 rounded text-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer flex items-center justify-center"
                                >
                                    <Eye size={20} color="#888" />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center mb-5">
                            <input
                                type="checkbox"
                                id="keepSignedIn"
                                checked={keepSignedIn}
                                onChange={() => setKeepSignedIn(!keepSignedIn)}
                                className="mr-2"
                            />
                            <label htmlFor="keepSignedIn" className="text-sm text-gray-800 mb-0">
                                Keep me signed in
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-teal-700 hover:bg-teal-800 text-white rounded text-sm font-medium uppercase tracking-wider mb-4"
                        >
                            LOG IN
                        </button>

                        <div className="flex flex-col items-start">
                            <a href="#" className="text-xs text-[#00B2A9] mb-2 hover:underline">
                                Forgot password?
                            </a>
                            <a href="#" className="text-xs text-[#00B2A9] mb-2 hover:underline">
                                Unlock account?
                            </a>
                            <a href="#" className="text-xs text-[#00B2A9] hover:underline">
                                Help
                            </a>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default PureLoginPage;
