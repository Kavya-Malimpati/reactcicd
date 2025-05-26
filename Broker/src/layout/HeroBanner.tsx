import React from "react";
import StatsCard from "../components/common/StatsCard";

const HeroBanner = () => {
    return (
        <section className="bg-teal-600 text-white py-12 px-12" style={{ height: '255px' }}>
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Left Section: My Members */}
                <div className="text-left">
                    <h1 className="text-5xl font-light">My Members</h1>
                </div>

                {/* Right Section: Stats */}
                <div className="flex items-center space-x-16">
                    <StatsCard icon='Users' title="MEMBERS" count={56} />
                    <StatsCard icon='FileText' title="CLAIMS" count={4} />
                    <StatsCard icon='CircleDollarSignIcon' title="PAST DUE" count={3} />
                    <StatsCard icon='Award' title="PURE360 OPPORTUNITIES" count={3} />
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
