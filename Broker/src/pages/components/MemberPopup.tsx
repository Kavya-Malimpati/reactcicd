import React from "react";
import { Calendar, Car, Home } from "lucide-react";
import Table from "../../components/common/Table";
import ItemInfo from "../../components/common/ItemInfo";
import { formatCurrency } from "../../services/Util";
const MemberPopup = (props): any => {
	const policies = [
		{
			id: "HOO112789123",
			type: "CT",
			icon: Home,
			effectiveUntil: "May 3, 2024",
			premium: 2250.0,
		},
		{
			id: "HOO112789123",
			type: "CT",
			icon: Home,
			effectiveUntil: "February 2, 2025",
			premium: 3500.0,
		},
		{
			id: "COO45921911",
			type: "AL",
			icon: Home,
			effectiveUntil: "January 16, 2025",
			premium: 3500.0,
		},
		{
			id: "PA045833911",
			type: "AL",
			icon: Car,
			effectiveUntil: "February 2, 2025",
			premium: 3500.0,
		},
		{
			id: "HOO456789123",
			type: "TX",
			icon: Home,
			effectiveUntil: "February 2, 2025",
			premium: 3500.0,
		},
	];
	const billingHeaders = ["ACCOUNT", "LAST PAYMENT", "NEXT PAYMENT"];
	const billingData = [
		["12345-999", "$2,480.00 due 11/01/24", "$2,480.00 due 12/01/24"],
		["12345-888", "$1,890.00 due 11/01/24", "$1,890.00 due 12/01/24"],
		["12345-666", "$3,280.00 due 11/01/24", "$3,280.00 due 12/01/24"],
		["12345-638", "$2,450.00 due 11/01/24", "$2,450.00 due 12/01/24"],
	];

	const claimsHeaders = ["CLAIM #", "STATUS", "NEXT STEPS"];
	const claimsData = [
		[
			"09-001-788",
			"Open",
			"Track needs to be adjusted from back paperwork.",
		],
		["08-001-701", "Closed", ""],
		["10-001-239", "Closed", ""],
	];
	const pure360Headers = [
		"ADDRESS",
		"Reviewed?",
		"Reviewed Date",
		"Open Requirements",
	];
	const pure360Data = [
		[
			"1130 Willow Ave, Gainesville, FL 32601",
			"Yes",
			"6/1/2024",
			"5 Outstandings",
		],
		["78 Poplar Dr, Winter, CT 78556", "No", "9/4/2023", ""],
		["55 Central Ave, San Antonio, TX 78205", "No", "", ""],
	];

	const loanPreventionHeaders = ["ELIGIBLE PROGRAMS", "CONSENT", "FREQUENCY"];
	const loanPreventionData = [
		["Health A", "Yes", "Weekly B"],
		["Trig", "Yes", "Test A"],
		["Stat Wg", "No", "Quarterly C"],
	];

	return (
		<div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center" style={{ zIndex: '100',backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
			<div className="bg-white rounded-lg shadow-xl w-full max-w-5xl max-h-screen overflow-auto" style={{ zIndex: '100' }}>
				{/* Header with close buttons */}
				<div className="flex items-center justify-between px-6 py-4 ">
					<div className="flex items-center">
						<div className="text-teal-500 mr-2">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 2L2 7L12 12L22 7L12 2Z"
									fill="currentColor"
								/>
								<path
									d="M2 17L12 22L22 17"
									fill="currentColor"
								/>
								<path
									d="M2 12L12 17L22 12"
									fill="currentColor"
								/>
							</svg>
						</div>
						<div>
							<div className="font-bold text-gray-800">
								MEMBER CARD
							</div>
							<div className="text-xs text-gray-500">
								Sept 12, 2024
							</div>
						</div>
					</div>

					<div className="flex items-center space-x-2">
						<a href="http://48.216.233.53:5173/?Impersonation=true" target="_blank" className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded flex items-center text-sm">
							<svg
								className="w-4 h-4 mr-2"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M10 17L15 12L10 7"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M15 12H3"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							GO TO MEMBER VIEW
						</a>
						<button className="border border-teal-500 text-teal-500 hover:bg-teal-50 px-4 py-2 rounded flex items-center text-sm">
							<svg
								className="w-4 h-4 mr-2"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M7 10L12 15L17 10"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M12 15V3"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							DOWNLOAD
						</button>
						<button className="text-gray-400 hover:text-gray-600" onClick={props.closeModal} style={{ cursor: 'pointer' }}>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								></path>
							</svg>
						</button>
					</div>
				</div>

				<div className="px-6 py-4">
					{/* Member Information Section */}
					<div className="bg-white w-full max-w-5xl shadow-sm border border-gray-100 rounded">
						<div className="grid grid-cols-1 md:grid-cols-10">
							{/* Member Section - 40% width (4 out of 10 columns) */}
							<div className="p-6 md:border-r border-gray-200 md:col-span-4">
								<div className="flex items-center mb-3">
									<svg
										className="w-4 h-4 text-gray-500 mr-2"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										/>
									</svg>
									<span className="uppercase text-gray-500 text-sm font-medium">
										Member
									</span>
								</div>

								<h2 className="text-xl font-normal text-gray-800 mb-5">
									{props.data.name}
									<span className="ml-2 text-xs text-yellow-800 bg-yellow-100 px-2 py-0.5 rounded-sm font-medium">
										Gold Member
									</span>
								</h2>

								<div className="grid grid-cols-2 gap-4 mt-6">
                                    <ItemInfo label="Phone" value='713.123.4567' />
                                    <ItemInfo label="Email" value='jsilverstein@gmail.com' />
								</div>
							</div>

							{/* Account Info Section - 60% width (6 out of 10 columns) */}
							<div className="p-6 md:col-span-6">
								<div className="flex items-center mb-3">
									<svg
										className="w-4 h-4 text-gray-500 mr-2"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
										/>
									</svg>
									<span className="uppercase text-gray-500 text-sm font-medium">
										Account Info
									</span>
								</div>

								<div className="grid grid-cols-3 gap-4">
                                <ItemInfo label="Member ID" value={props.data.id} />
                                <ItemInfo label="Member Since" value='Nov 21, 2019' />
                                <ItemInfo label="Total Account Premium" value={formatCurrency(12345.67)} />
								</div>

								<div className="grid grid-cols-3 gap-4 mt-6">
                                {/* <ItemInfo label="Next Payment Date" value={props.data.id} /> */}
                                
									<div>
										<p className="text-sm text-gray-600 mb-1">
											Next Payment Date
										</p>
										<div className="flex items-center">
											<svg
												className="w-4 h-4 text-red-500 mr-1"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
												/>
											</svg>
											<p className="text-sm text-red-500">
												{props.data.renewalDate}
											</p>
										</div>
									</div>
									<ItemInfo label="eDelivery?" value='Yes' />
                                    <ItemInfo label="SSA Balance" value={formatCurrency(1030.33)} />
								</div>
							</div>
						</div>
					</div>

					{/* Products Section */}
					<div className="">
						<div className="mt-6">
							<div className="rounded-lg">
								<SectionHeadings title="Policies" subtitle="5 Active Policies" />

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{policies.map((policy, index) => (
										<PolicyCard
                                            key={index}
                                            id={policy.id}
                                            type={policy.type}
                                            icon={policy.icon}
                                            effectiveUntil={policy.effectiveUntil}
                                            premium={policy.premium}
                                        />
									))}
								</div>
							</div>
                            <SectionHeadings title="billing" subtitle="1 Payment Outstanding" />
							<Table
								headers={billingHeaders}
								data={billingData}
							/>
							{/* Claims Section */}
                            <SectionHeadings title="Claims" subtitle="1 Open Claim" />
							<Table headers={claimsHeaders} data={claimsData} />
							{/* Pure360 Section */}
                            <SectionHeadings title="PURE360" subtitle="5 Requirements Outstanding" />
							<Table
								headers={pure360Headers}
								data={pure360Data}
							/>
							{/* Loan Prevention Program Section */}
							<SectionHeadings title="Loss Prevention Program" subtitle="1 Eligible Program" />
							<Table
								headers={loanPreventionHeaders}
								data={loanPreventionData}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MemberPopup;

const SectionHeadings = ({ title, subtitle }) => {
    return (
        <div className="flex justify-between items-center mb-2 mt-4">
            <h2 className="text-xl font-light text-gray-700">
                {title}{" "}
                <span className="text-sm text-gray-500">| {subtitle}</span>
            </h2>
        </div>
    );
}


interface PolicyCardProps {
    id: string;
    type: string;
    icon: React.ComponentType<{ size: number }>;
    effectiveUntil: string;
    premium: number;
}

const PolicyCard: React.FC<PolicyCardProps> = ({ id, type, icon: Icon, effectiveUntil, premium }) => {
    return (
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-start">
                <div className="flex items-center">
                    <div className="mr-2 text-gray-500">
                        <Icon size={18} />
                    </div>
                    <div>
                        <span className="text-gray-600 font-medium">
                            #{id} - {type}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
                <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>Effective until {effectiveUntil}</span>
                </div>
                <div>
                    <span className="text-gray-600">
                        $ Annual Premium {formatCurrency(premium)}
                    </span>
                </div>
            </div>
        </div>
    );
};

