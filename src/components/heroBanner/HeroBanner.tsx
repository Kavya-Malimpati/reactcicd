import { Users, FileText, Clock, Award } from "lucide-react";
import React from "react";

const HeroBanner = () => {
    return (
        <section className="bg-teal-600 text-white py-12">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Section: My Members */}
                <div className="text-left">
                    <h1 className="text-3xl font-light">My Members</h1>
                </div>

                {/* Right Section: Stats */}
                <div className="flex items-center space-x-16">
                    <div className="text-center">
                        <div className="flex items-center mb-2 justify-center">
                            <Users className="w-5 h-5 mr-2" />
                            <span className="uppercase text-xs font-medium">MEMBERS</span>
                        </div>
                        <span className="text-2xl font-light">56</span>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center mb-2 justify-center">
                            <FileText className="w-5 h-5 mr-2" />
                            <span className="uppercase text-xs font-medium">TOTAL CLAIMS</span>
                        </div>
                        <span className="text-2xl font-light">4</span>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center mb-2 justify-center">
                            <Clock className="w-5 h-5 mr-2" />
                            <span className="uppercase text-xs font-medium">PAST DUE</span>
                        </div>
                        <span className="text-2xl font-light">3</span>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center mb-2 justify-center">
                            <Award className="w-5 h-5 mr-2" />
                            <span className="uppercase text-xs font-medium">
                                PURE360 OPPORTUNITIES
                            </span>
                        </div>
                        <span className="text-2xl font-light">3</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
