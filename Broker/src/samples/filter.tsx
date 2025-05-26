import React, { useState } from 'react';
import { X, Search } from 'lucide-react';

interface FilterProps {
  onClose: () => void;
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  state: string;
  billStatus: 'all' | 'paid' | 'pastDue';
  claims: boolean;
  renewal: {
    ninetyDays: boolean;
    outstandingRequirements: boolean;
  };
  pure360: {
    reportsAvailable: boolean;
    outstandingRequirements: boolean;
  };
}

const Filter: React.FC<FilterProps> = ({ onClose, onFilterChange }) => {
  const [filters, setFilters] = useState<FilterState>({
    state: '',
    billStatus: 'all',
    claims: false,
    renewal: {
      ninetyDays: false,
      outstandingRequirements: false,
    },
    pure360: {
      reportsAvailable: false,
      outstandingRequirements: false,
    },
  });

  const handleStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, state: e.target.value }));
  };

  const handleFilterChange = (section: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [section]: value }));
    onFilterChange({ ...filters, [section]: value });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-medium text-gray-900">Filter</h2>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <X size={20} className="text-gray-500" />
        </button>
      </div>

      {/* State Search */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          STATE
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={filters.state}
            onChange={handleStateChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Bill Status */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          BILL STATUS
        </label>
        <div className="space-y-2">
          {['All', 'Paid', 'Past Due'].map((status) => (
            <label key={status} className="flex items-center">
              <input
                type="radio"
                name="billStatus"
                value={status.toLowerCase()}
                checked={filters.billStatus === status.toLowerCase()}
                onChange={(e) => handleFilterChange('billStatus', e.target.value)}
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
              />
              <span className="ml-2 text-gray-700">{status}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Claims */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          CLAIMS
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={filters.claims}
            onChange={(e) => handleFilterChange('claims', e.target.checked)}
            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          />
          <span className="ml-2 text-gray-700">Open Claims</span>
        </label>
      </div>

      {/* Renewal */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          RENEWAL
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.renewal.ninetyDays}
              onChange={(e) => 
                handleFilterChange('renewal', {
                  ...filters.renewal,
                  ninetyDays: e.target.checked,
                })
              }
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-gray-700">90 Days</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.renewal.outstandingRequirements}
              onChange={(e) =>
                handleFilterChange('renewal', {
                  ...filters.renewal,
                  outstandingRequirements: e.target.checked,
                })
              }
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-gray-700">Outstanding Requirements</span>
          </label>
        </div>
      </div>

      {/* PURE 360 */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          PURE 360
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.pure360.reportsAvailable}
              onChange={(e) =>
                handleFilterChange('pure360', {
                  ...filters.pure360,
                  reportsAvailable: e.target.checked,
                })
              }
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-gray-700">Reports Available</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.pure360.outstandingRequirements}
              onChange={(e) =>
                handleFilterChange('pure360', {
                  ...filters.pure360,
                  outstandingRequirements: e.target.checked,
                })
              }
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-gray-700">Outstanding Requirements</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;