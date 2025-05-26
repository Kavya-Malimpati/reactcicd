import React from "react";

type PolicyTableProps = {
  title?: string;
  headers: string[];
  rows: React.ReactNode[][];
};

const PolicyTable: React.FC<PolicyTableProps> = ({ title, headers, rows }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {title && (
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h2>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
          <thead className="bg-teal-100 text-gray-700">
            <tr>
              {headers.map((header, index) => {
                const isFirst = index === 0;
                const isLast = index === headers.length - 1;
                const radiusClasses = isFirst
                  ? "rounded-tl-[10px]"
                  : isLast
                  ? "rounded-tr-[10px]"
                  : "";
                return (
                  <th
                    key={index}
                    className={`px-4 py-2 font-medium ${radiusClasses}`}
                  >
                    {header}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-2 text-gray-700">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PolicyTable;
