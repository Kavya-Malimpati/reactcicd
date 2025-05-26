import React, { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import PolicyTable from "../components/PolicyTable";

const Billing = () => {
  const [isImpersonation, setIsImpersonation] = useState(false);
  const policies = [
    {
      type: "home",
      number: "HO248110500",
      description: "Homeowners - NJ",
      period: "06/07/24 - 06/07/25",
      documents: [
        { id: 1, name: "Policy.pdf", url: "#" }
      ],
    },
    {
      type: "home",
      number: "HO197183208",
      description: "Homeowners - NY",
      period: "06/01/24 - 06/01/25",
      documents: [],
    },
    {
      type: "home",
      number: "HO045831911",
      description: "Homeowners - AL",
      period: "05/15/24 - 05/15/25",
      documents: [{ id: 3, name: "Statement.pdf", url: "#" }],
    },
    {
      type: "collection",
      number: "CO045921911",
      description: "Collection - AL",
      period: "05/15/24 - 05/15/25",
      documents: [],
    },
    {
      type: "excess",
      number: "EX045835911",
      description: "Excess Liability - AL",
      period: "05/15/24 - 05/15/25",
      documents: [],
    },
    {
      type: "home",
      number: "HO045837911",
      description: "Homeowners - AL",
      period: "05/15/24 - 05/15/25",
      documents: [],
    },
    {
      type: "auto",
      number: "PA045833911",
      description: "Personal Auto - AL",
      period: "05/15/24 - 05/15/25",
      documents: [],
    },
  ];
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const impersonationMode = queryParams.get("Impersonation");
    setIsImpersonation(impersonationMode === "true");
  }, []);
  const tableHeaders = [
    "Type",
    "Policy Number",
    "Description",
    "Period",
    "Documents",
  ];
  const tableRows = policies.map((policy) => [
    <div className="text-teal-500" key="icon">
      <FileText size={16} />
    </div>,
    <span className="text-teal-500" key="number">
      {policy.number}
    </span>,
    policy.description,
    policy.period,
    policy.documents.length > 0 ? (
      <div className="flex space-x-2" key="docs">
        {policy.documents.map((doc) => (
          <a
            key={doc.id}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${doc.name}`}
            className="text-teal-500"
          >
            <span title={doc.name}>
              <FileText size={16} />
            </span>
          </a>
        ))}
      </div>
    ) : (
      <span className="text-gray-400 italic text-xs" key="no-docs">
        No docs
      </span>
    ),
  ]);

  const wrapRows = (rows: string[][]) =>
    rows.map((row) => row.map((cell, idx) => <span key={idx}>{cell}</span>));

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {isImpersonation && (
        <div className="bg-yellow-300 py-2 px-4 flex items-center justify-center text-sm font-medium">
          <span>MEMBER VIEW: John Doe</span>
          <span className="mx-2">•</span>
          <a href="#" className="hover:underline">
            Return to Broker Portal
          </a>
        </div>
      )}

      <div className="max-w-6xl mx-auto bg-white shadow">
        <Header />
        <Navigation />

        <div className="bg-teal-600 p-8 text-white relative h-50">
          <h1 className="text-3xl font-light pt-6">Policies</h1>
        </div>

        <div className="flex p-6 -mt-20 relative z-10 max-w-6xl mx-auto space-x-6">
          <Sidebar />

          <main className="flex-1 space-y-8">


            <PolicyTable
              title="Current Policies"
              headers={tableHeaders}
              rows={tableRows}
            />

            <div className="text-xs text-gray-600 mt-4">
              <p>
                For more information regarding your current policies, contact
                Member Services at
                <a
                  href="mailto:service@pureinsurance.com"
                  className="text-teal-500 mx-1"
                >
                  service@pureinsurance.com
                </a>
                or at
                <a href="tel:888-813-7873" className="text-teal-500 mx-1">
                  888-813-7873
                </a>
                , or contact your broker at the information listed to the left.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Billing;





