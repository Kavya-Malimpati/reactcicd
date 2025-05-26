import React, { useState } from 'react';
import { X, Search } from 'lucide-react';

const PURE_TEAL = 'text-[#00A99D] focus:ring-[#00A99D] checked:bg-[#00A99D]';

type BillStatus = 'all' | 'paid' | 'pastDue';

interface FilterState {
  state: string;
  billStatus: BillStatus;
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

const Filter: React.FC<{ onClose: () => void; onFilterChange: (filters: FilterState) => void }> = ({
  onClose,
  onFilterChange,
}) => {
  const [filters, setFilters] = useState<FilterState>({
    state: '',
    billStatus: 'all',
    claims: true,
    renewal: {
      ninetyDays: false,
      outstandingRequirements: false,
    },
    pure360: {
      reportsAvailable: true,
      outstandingRequirements: false,
    },
  });

  const handleStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, state: e.target.value }));
  };

  const handleBillStatusChange = (value: BillStatus) => {
    setFilters((prev) => ({ ...prev, billStatus: value }));
  };

  const handleCheckboxChange = (
    section: 'claims' | 'renewal' | 'pure360',
    key: string,
    checked: boolean
  ) => {
    if (section === 'claims') {
      setFilters((prev) => ({ ...prev, claims: checked }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [section]: { ...prev[section], [key]: checked },
      }));
    }
  };

  React.useEffect(() => {
    onFilterChange(filters);
    // eslint-disable-next-line
  }, [filters]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xs relative font-sans">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-gray-400 hover:text-black"
        aria-label="Close"
      >
        <X size={28} />
      </button>
      <h2 className="text-3xl font-light mb-8">Filter</h2>

      {/* STATE */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-gray-700 mb-2 tracking-widest">STATE</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={filters.state}
            onChange={handleStateChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#00A99D] focus:border-[#00A99D] outline-none text-gray-700"
            placeholder="Search"
          />
        </div>
      </div>

      {/* BILL STATUS */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-gray-700 mb-2 tracking-widest">BILL STATUS</label>
        <div className="space-y-3">
          {[
            { label: 'All', value: 'all' },
            { label: 'Paid', value: 'paid' },
            { label: 'Past Due', value: 'pastDue' },
          ].map((status) => (
            <label key={status.value} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="billStatus"
                value={status.value}
                checked={filters.billStatus === status.value}
                onChange={() => handleBillStatusChange(status.value as BillStatus)}
                className={`h-5 w-5 border-gray-300 focus:ring-2 ${PURE_TEAL} mr-3`}
              />
              <span className="text-base font-light">{status.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* CLAIMS */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-gray-700 mb-2 tracking-widest">CLAIMS</label>
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={filters.claims}
            onChange={(e) => handleCheckboxChange('claims', '', e.target.checked)}
            className={`h-5 w-5 border-gray-300 rounded focus:ring-2 ${PURE_TEAL} mr-3`}
          />
          <span className="text-base font-light">Open Claims</span>
        </label>
      </div>

      {/* RENEWAL */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-gray-700 mb-2 tracking-widest">RENEWAL</label>
        <div className="space-y-3">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={filters.renewal.ninetyDays}
              onChange={(e) => handleCheckboxChange('renewal', 'ninetyDays', e.target.checked)}
              className={`h-5 w-5 border-gray-300 rounded focus:ring-2 ${PURE_TEAL} mr-3`}
            />
            <span className="text-base font-light">90 Days</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={filters.renewal.outstandingRequirements}
              onChange={(e) => handleCheckboxChange('renewal', 'outstandingRequirements', e.target.checked)}
              className={`h-5 w-5 border-gray-300 rounded focus:ring-2 ${PURE_TEAL} mr-3`}
            />
            <span className="text-base font-light">Outstanding Requirements</span>
          </label>
        </div>
      </div>

      {/* PURE 360 */}
      <div className="mb-2">
        <label className="block text-xs font-bold text-gray-700 mb-2 tracking-widest">PURE 360</label>
        <div className="space-y-3">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={filters.pure360.reportsAvailable}
              onChange={(e) => handleCheckboxChange('pure360', 'reportsAvailable', e.target.checked)}
              className={`h-5 w-5 border-gray-300 rounded focus:ring-2 ${PURE_TEAL} mr-3`}
            />
            <span className="text-base font-light">Reports Available</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={filters.pure360.outstandingRequirements}
              onChange={(e) => handleCheckboxChange('pure360', 'outstandingRequirements', e.target.checked)}
              className={`h-5 w-5 border-gray-300 rounded focus:ring-2 ${PURE_TEAL} mr-3`}
            />
            <span className="text-base font-light">Outstanding Requirements</span>
          </label>
        </div>
      </div>
    </div>
  );
};

const FilterPage: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const handleFilterChange = (filters: FilterState) => {
    console.log('Filters changed:', filters);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {isFilterOpen && (
        <Filter
          onClose={() => setIsFilterOpen(false)}
          onFilterChange={handleFilterChange}
        />
      )}
    </div>
  );
};

export default FilterPage;