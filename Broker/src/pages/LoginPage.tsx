import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import Input from '../components/common/Input';

const PureLoginPage: React.FC = () => {
    const navigate = useNavigate();
    // Form State 
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        keepSignedIn: false,
    });

    // Form Functions Start 
    const handleChange = (event) => {
        const { name, type, checked, value } = event.target;
        
        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (event):any => {
        event.preventDefault();
        navigate('/home');
      };

    // Form Functions End

    return (
        <div className="relative w-full flex flex-col overflow-hidden font-sans">
            <div className="absolute w-full h-full bg-gradient-to-r from-[#01857E] to-[#00B2A9] -z-10"></div>
            <header className="px-[80px] py-[20px] flex justify-start w-[auto] h-[auto]">
                <img
                    src="/Full Logo_Tagline_White.png"
                    alt="PURE Insurance"
                />
            </header>

            <main className="flex flex-grow flex-row justify-between pl-[112px] pr-[200px] items-center mb-[104px]" style={{ columnGap: "25%" }}>
                <div className="text-white pt-8 pr-8 lg:w-full lg:mb-8">
                    <h1 className="text-5xl font-light leading-tight mb-6">
                        Welcome to the<br />PURE Broker Portal
                    </h1>
                    <p className="text-base leading-relaxed font-light">
                        Login to access our systems, tools, and resources for brokers, so
                        you can better serve your current members and introduce PURE to
                        your best prospects and clients.
                    </p>
                </div>

                <div className="bg-white rounded shadow-md overflow-hidden mt-[0rem] transform lg:w-full h-max">
                    <div className="flex flex-col items-center px-4 pt-8 pb-4 border-b border-gray-100">
                        <img
                            src="https://insurewithgn.com/wp-content/uploads/2020/05/Pure-1024x520.png"
                            alt="PURE"
                            className="w-20 h-auto mb-4"
                        />
                        <h2 className="text-lg font-normal text-gray-800">Broker Login</h2>
                    </div>

                    <form className="p-6" onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <Input label="Email" type="email" name="email" value={formValues.email} onChange={handleChange} />
                            <Input label="Password" type="password" name="password" value={formValues.password} onChange={handleChange} />
                            <Input label="Keep me signed in" type="checkbox" name="keepSignedIn" checked={formValues.keepSignedIn} onChange={handleChange} />
                        </div>

                        <Button 
                            text="Log In"
                            type="submit"
                            style="custom-primary-button"
                        />

                        <div className="flex flex-col items-start">
                            <a href="#" className="text-xs text-[#00B2A9] mb-2 underline">
                                Forgot password?
                            </a>
                            <a href="#" className="text-xs text-[#00B2A9] mb-2 underline">
                                Unlock account?
                            </a>
                            <a href="#" className="text-xs text-[#00B2A9] underline">
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