import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import PolicyTable from "../components/PolicyTable";

const Billing = () => {
  const [isImpersonation, setIsImpersonation] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const impersonationMode = queryParams.get("Impersonation");
    setIsImpersonation(impersonationMode === "true");
  }, []);

  const headers1 = ["Account #", "Minimum Amount Due", "Last Payment", "Autopay"];
  const rows1 = [["748639839636", "$2,0426.21 past due", "$25,067.78 on 08/19/2024", "No"]];

  const headers2 = ["Payment Type", "Account#", "Transaction Date", "Amount"];
  const rows2 = [
    ["VISA", "744546474836474", "04/20/25", "$1007.78"],
    ["VISA", "744546474836474", "04/20/25", "$1007.78"],
    ["VISA", "744546474836474", "04/20/25", "$1007.78"],
    ["VISA", "744546474836474", "04/20/25", "$1007.78"],
    ["VISA", "744546474836474", "04/20/25", "$1007.78"],
  ];

  const headers3 = ["REFUND DATE", "ACCOUNT #", "REFUND TYPE", "Amount"];
  const rows3 = [["08/08/2024", "7776464646646464-C00", "CREDIT CARD", "656"]];

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
          <h1 className="text-3xl font-light pt-6">Billing Overview</h1>
        </div>

        <div className="flex p-6 -mt-20 relative z-10 max-w-6xl mx-auto space-x-6">
          <Sidebar />

          <main className="flex-1 space-y-8">
            <PolicyTable
              title="My Accounts"
              headers={headers1}
              rows={wrapRows(rows1)}
            />

            <PolicyTable
              title="Payment and Credit History"
              headers={headers2}
              rows={wrapRows(rows2)}
            />

            <PolicyTable
              title="Refunds"
              headers={headers3}
              rows={wrapRows(rows3)}
            />

            <div>
              <button
                onClick={refreshPage}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded-md shadow-md transition"
              >
                Refresh Billing Page
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Billing;





