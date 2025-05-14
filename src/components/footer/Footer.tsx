import React from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12 px-6 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2">
          <div className="mb-8">
            <p className="text-gray-400 text-sm mb-2">HAVE A QUESTION OR NEED ASSISTANCE?</p>
            
            <div className="mb-6">
              <p className="font-light mb-1">Call <span className="font-normal">888.813.7873</span></p>
              <p className="text-gray-400 text-sm">Mon-Fri 7:00 AM – 9:00 PM ET</p>
              <p className="text-gray-400 text-sm">Sat 8:00 AM–5:00 PM ET</p>
            </div>
            
            <div className="mb-6">
              <p className="font-light mb-1">Email <a href="mailto:service@pureinsurance.com" className="font-normal hover:underline">service@pureinsurance.com</a></p>
            </div>
            
            <div className="mb-6">
              <p className="font-light mb-1">Log in to <a href="#" className="font-normal hover:underline">PURE Online</a></p>
            </div>
            
            <div className="mb-6">
              <p className="font-normal mb-1"><a href="#" className="hover:underline">Pay a Bill</a></p>
            </div>
            
            <div className="mb-6">
              <p className="font-light mb-1">Log in to <a href="#" className="font-normal hover:underline">PURE Flood</a></p>
            </div>
            
            <div className="flex space-x-6 text-xs uppercase mb-6">
              <a href="#" className="hover:underline">Manage Preferences</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </div>
          </div>
          
          <div className="text-gray-400 text-xs">
            <p className="mb-2">
              PURE Insurance is the marketing name used to refer to Privilege Underwriters Reciprocal Exchange (PURE), a Florida domiciled 
              reciprocal insurer, as well as other entities in the PURE Group of Insurance Companies. This material is descriptive only. The precise 
              coverage afforded is subject to the terms and conditions of the policies issued. Coverage may not be available in all jurisdictions.
            </p>
            <p>
              Please see our legal notices for terms of service relating to intellectual property, copyright and trademarks. Copyright © 2019 PURE 
              Risk Management, LLC. All Rights Reserved.
            </p>
          </div>
        </div>
        
        <div className="md:w-1/3 mt-8 md:mt-0 flex flex-col items-start md:items-end">
          <div className="mb-4">
            <p className="text-xl font-light">pureinsurance.com</p>
            <p className="text-gray-300">#LoveYourInsurance</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors">
              <Linkedin size={18} className="text-zinc-900" />
            </a>
            <a href="#" className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors">
              <Facebook size={18} className="text-zinc-900" />
            </a>
            <a href="#" className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors">
              <Instagram size={18} className="text-zinc-900" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;