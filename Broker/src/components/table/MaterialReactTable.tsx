import { MaterialReactTable } from 'material-react-table';
import React, { useState } from 'react';
import {
    Button, Menu, MenuItem, Checkbox, ListItemText, IconButton, Drawer, Typography, Divider, Popover, Box
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import DownloadIcon from '@mui/icons-material/Download';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
// import CustomPopup from '../common/CustomPopup'


function MaterialTable({ data, columns, customShowHideButtons }): any {
    // Column visibility state
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [tempVisibleColumns, setTempVisibleColumns] = useState(columns.map((col) => col.accessorKey));
    const [visibleColumns, setVisibleColumns] = useState(columns.map((col) => col.accessorKey));
    const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(null);
    const [exportAnchorEl, setExportAnchorEl] = useState<null | HTMLElement>(null);
    const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

    
    // Customize Columns Drawer
    const handleCustomizeColumnsClick = () => setDrawerOpen(true);
    const handleDrawerClose = () => setDrawerOpen(false);
    const handleColumnToggle = (accessorKey: string) => {
        setTempVisibleColumns((prev) =>
            prev.includes(accessorKey)
                ? prev.filter((key) => key !== accessorKey)
                : [...prev, accessorKey]
        );
    };
    const handleResetColumns = () => setTempVisibleColumns(columns.map((col) => col.accessorKey));
    const handleCancelColumns = () => {
        setDrawerOpen(false);
        setTempVisibleColumns(visibleColumns);
        
    };
    const handleSaveColumns = () => {
        setVisibleColumns(tempVisibleColumns);
        setDrawerOpen(false);
    };

    // Filter State
    const [filterState, setFilterState] = useState({
        state: '',
        billStatus: 'All',
        claims: false,
        renewal: [],
        pure360: [],
        lossPrevention: [],
        deliveryMethod: 'All',
    });
    // For search in state filter
    const [stateSearch, setStateSearch] = useState('');
    // Example: get unique states from data
    const uniqueStates = Array.from(new Set(data.map((row) => row.State))).filter((s) =>
        typeof s === 'string' && s.toLowerCase().includes(stateSearch.toLowerCase())
    );
    // Filtering logic (simplified, expand as needed)
    const filteredData = data.filter((row) => {
        // Custom search: checks if any visible column contains the search string (case-insensitive)
        const search = stateSearch.trim().toLowerCase();
        const matchesSearch =
        !search ||
        columns
            .filter((col) => visibleColumns.includes(col.accessorKey))
            .some((col) => {
                const value = row[col.accessorKey];
                return value && value.toString().toLowerCase().includes(search);
            });

        if (!matchesSearch) return false;
        // State filter
        if (filterState.state && row.State !== filterState.state) return false;
        // Bill Status
        if (filterState.billStatus === 'Past Due' && row['Bill Status'] !== 'Past Due') return false;
        if (filterState.billStatus === 'Paid' && row['Bill Status'] !== 'Paid') return false;
        // Claims
        if (filterState.claims && !row['Claims']) return false;
        // Renewal
        if (filterState.renewal.length && !filterState.renewal.includes(row['Renewal'])) return false;
        // PURE360
        if (filterState.pure360.length && !filterState.pure360.some((v) => row['PURE360']?.includes(v))) return false;
        // Loss Prevention
        if (filterState.lossPrevention.length && !filterState.lossPrevention.some((v) => row['Loss Prevention Program Eligibility']?.includes(v))) return false;
        // Delivery Method
        if (filterState.deliveryMethod !== 'All' && row['Delivery Method'] !== filterState.deliveryMethod) return false;
        return true;
    });
    // Filter Drawer handlers
    const handleFilterDrawerOpen = () => setFilterDrawerOpen(true);
    const handleFilterDrawerClose = () => setFilterDrawerOpen(false);
    const handleFilterChange = (field, value) => {
        setFilterState((prev) => ({ ...prev, [field]: value }));
    };
    const handleFilterCheckbox = (field, value) => {
        setFilterState((prev) => {
            const arr = prev[field];
            return {
                ...prev,
                [field]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
            };
        });
    };
    const handleFilterReset = () => setFilterState({
        state: '',
        billStatus: 'All',
        claims: false,
        renewal: [],
        pure360: [],
        lossPrevention: [],
        deliveryMethod: 'All',
    });

    // Export to CSV
    const handleExportCSV = (all: boolean) => {
        const exportCols = all ? columns : columns.filter((col) => visibleColumns.includes(col.accessorKey));
        const header = exportCols.map((col) => `"${col.header}"`).join(',');
        const rows = data.map((row) =>
            exportCols.map((col) => `"${row[col.accessorKey] ?? ''}"`).join(',')
        );
        const csvContent = [header, ...rows].join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'table_export.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setExportAnchorEl(null);
    };

    // Filter button
    const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setFilterAnchorEl(event.currentTarget);
    };
    const handleFilterClose = () => setFilterAnchorEl(null);

    // Export menu
    const handleExportMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setExportAnchorEl(event.currentTarget);
    };
    const handleExportMenuClose = () => setExportAnchorEl(null);


    // Billing Array
    let billingData = data.map(item => item.billing)
    billingData = new Set(billingData)
    billingData = Array.from(billingData)
    billingData.unshift("All")
    

    return (
        <div className='material-react-table-container'>
            {/* Toolbar */}
            <div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'flex-end', gap: 12, marginBottom: 16 }}>
                {/* Search input */}
                <input
                    type="text"
                    placeholder="Find members by name, address, member ID, or broker ID"
                    value={stateSearch}
                    onChange={(e) => setStateSearch(e.target.value)}
                    className='search-input-mrt'
                    style={{
                        border: '1px solid #E0E0E0',
                        borderRadius: 20,
                        padding: '6px 12px 6px 30px',
                        fontSize: 14,
                        outline: 'none',
                        minWidth: 500,
                        marginRight: 8
                    }}
                />

                <Button
                    variant="outlined"
                    startIcon={<FilterListIcon />}
                    onClick={(e) => setFilterAnchorEl(e.currentTarget)}
                    sx={{ textTransform: 'none', borderRadius: 2, borderColor: '#00B2A9', color: '#00B2A9', position: 'relative' }}
                >
                    Filter
                </Button>
                <Popover
                    open={Boolean(filterAnchorEl)}
                    anchorEl={filterAnchorEl}
                    onClose={() => setFilterAnchorEl(null)}
                    anchorOrigin={{
                        vertical: 'bottom',    // Popover attaches to the bottom of the button
                        horizontal: 'left',    // Left edges aligned
                    }}
                    transformOrigin={{
                        vertical: 'top',       // Popover's top aligns with anchor's bottom
                        horizontal: 'left',    // Left edges aligned
                    }}
                    PaperProps={{ sx: { p:3 , width: 340, borderRadius: 3, height: 'fit-content', } }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                            <Typography variant="h6" fontWeight={600}>Filter</Typography>
                            <IconButton onClick={() => setFilterAnchorEl(null)}><span style={{ fontSize: 20 }}>×</span></IconButton>
                        </Box>
                        <Divider sx={{ mb: 2 }} />

                        {/* STATE */}
                        <Typography variant="subtitle2" sx={{ mb: 1 }}>STATE</Typography>
                        <Box sx={{ mb: 2, maxHeight: 100, overflowY: 'auto' }}>
                            {uniqueStates.map((state) => (
                                <MenuItem
                                    key={state}
                                    selected={filterState.state === state}
                                    onClick={() => handleFilterChange('state', state)}
                                    sx={{ pl: 0 }}
                                >
                                    <Checkbox
                                        checked={filterState.state === state}
                                        onChange={() => handleFilterChange('state', state)}
                                        size="small"
                                    />
                                    <ListItemText primary={state} />
                                </MenuItem>
                            ))}
                        </Box>

                        {/* BILL STATUS */}
                        <Typography variant="subtitle2"
                            // sx={{ mt: 2 }}
                        >BILL STATUS</Typography>
                        <Box>
                            {billingData.map((status) => (
                                <MenuItem
                                    key={status}
                                    selected={filterState.billStatus === status}
                                    onClick={() => handleFilterChange('billStatus', status)}
                                    sx={{ pl: 0 }}
                                >
                                    <Checkbox
                                        checked={filterState.billStatus === status}
                                        onChange={() => handleFilterChange('billStatus', status)}
                                        size="small"
                                    />
                                    <ListItemText primary={status} />
                                </MenuItem>
                            ))}
                        </Box>

                        {/* CLAIMS */}
                        {/* <Typography variant="subtitle2" sx={{ mt: 2 }}>CLAIMS</Typography>
                        <MenuItem sx={{ pl: 0 }}>
                            <Checkbox
                                checked={filterState.claims}
                                onChange={(e) => handleFilterChange('claims', e.target.checked)}
                                size="small"
                            />
                            <ListItemText primary="Open Claims" />
                        </MenuItem> */}

                        {/* RENEWAL */}
                        {/* <Typography variant="subtitle2" sx={{ mt: 2 }}>RENEWAL</Typography>
                        <Box>
                            {['30 Days', 'Outstanding Requirements'].map((item) => (
                                <MenuItem
                                    key={item}
                                    onClick={() => handleFilterCheckbox('renewal', item)}
                                    sx={{ pl: 0 }}
                                >
                                    <Checkbox
                                        checked={filterState.renewal.includes(item)}
                                        onChange={() => handleFilterCheckbox('renewal', item)}
                                        size="small"
                                    />
                                    <ListItemText primary={item} />
                                </MenuItem>
                            ))}
                        </Box> */}

                        {/* PURE360 */}
                        {/* <Typography variant="subtitle2" sx={{ mt: 2 }}>PURE360</Typography>
                        <Box>
                            {['Reports Available', 'Outstanding Requirements'].map((item) => (
                                <MenuItem
                                    key={item}
                                    onClick={() => handleFilterCheckbox('pure360', item)}
                                    sx={{ pl: 0 }}
                                >
                                    <Checkbox
                                        checked={filterState.pure360.includes(item)}
                                        onChange={() => handleFilterCheckbox('pure360', item)}
                                        size="small"
                                    />
                                    <ListItemText primary={item} />
                                </MenuItem>
                            ))}
                        </Box> */}

                        {/* LOSS PREVENTION PROGRAM ELIGIBILITY */}
                        {/* <Typography variant="subtitle2" sx={{ mt: 2 }}>LOSS PREVENTION PROGRAM ELIGIBILITY</Typography>
                        <Box>
                            {['Ting', 'LeakBot', 'Starlight'].map((item) => (
                                <MenuItem
                                    key={item}
                                    onClick={() => handleFilterCheckbox('lossPrevention', item)}
                                    sx={{ pl: 0 }}
                                >
                                    <Checkbox
                                        checked={filterState.lossPrevention.includes(item)}
                                        onChange={() => handleFilterCheckbox('lossPrevention', item)}
                                        size="small"
                                    />
                                    <ListItemText primary={item} />
                                </MenuItem>
                            ))}
                        </Box> */}

                        {/* DELIVERY METHOD */}
                        {/* <Typography variant="subtitle2" sx={{ mt: 2 }}>DELIVERY METHOD</Typography>
                        <Box>
                            {['All', 'Paper', 'Digital', 'Paper & Digital'].map((item) => (
                                <MenuItem
                                    key={item}
                                    selected={filterState.deliveryMethod === item}
                                    onClick={() => handleFilterChange('deliveryMethod', item)}
                                    sx={{ pl: 0 }}
                                >
                                    <Checkbox
                                        checked={filterState.deliveryMethod === item}
                                        onChange={() => handleFilterChange('deliveryMethod', item)}
                                        size="small"
                                    />
                                    <ListItemText primary={item} />
                                </MenuItem>
                            ))}
                        </Box> */}

                        {/* Actions */}
                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 3 }}>
                            <Button
                                variant="outlined"
                                sx={{ borderColor: '#00B2A9', color: '#00B2A9', textTransform: 'none', borderRadius: 2 }}
                                onClick={handleFilterReset}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ backgroundColor: '#00B2A9', color: '#fff', textTransform: 'none', borderRadius: 2 }}
                                onClick={() => setFilterAnchorEl(null)}
                            >
                                Save
                            </Button>
                        </Box>
                    </Box>
                </Popover>

                <Button
                    variant="outlined"
                    startIcon={<ViewColumnIcon />}
                    onClick={handleCustomizeColumnsClick}
                    sx={{ textTransform: 'none', borderRadius: 2, borderColor: '#00B2A9', color: '#00B2A9' }}
                >
                    Customize Columns
                </Button>
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={handleDrawerClose}
                    PaperProps={{ sx: { width: 340, p: 3, borderRadius: 3 } }}
                >
                    <Box sx={{ p: 3, width: 320, display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                            <Typography variant="h6" fontWeight={600}>Customize Columns</Typography>
                            <IconButton onClick={handleDrawerClose}><span style={{ fontSize: 20 }}>×</span></IconButton>
                        </Box>
                        <Typography variant="body2" color="text.secondary" mb={2}>
                            Selected columns will appear in the table.
                        </Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Box sx={{ flex: 1, overflowY: 'auto' }}>
                            {columns.map((col) => (
                                <Box key={col.accessorKey} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                                    <Checkbox
                                        checked={tempVisibleColumns.includes(col.accessorKey)}
                                        onChange={() => handleColumnToggle(col.accessorKey)}
                                        sx={{ mr: 1 }}
                                    />
                                    <ListItemText primary={col.header} sx={{ flex: 1 }} />
                                    <DragIndicatorIcon sx={{ color: '#BDBDBD', cursor: 'grab' }} />
                                </Box>
                            ))}
                        </Box>
                        <Button
                            variant="text"
                            sx={{ color: '#00B2A9', mt: 1, mb: 2, alignSelf: 'flex-start', textTransform: 'none' }}
                            onClick={handleResetColumns}
                        >
                            Reset to Default Columns
                        </Button>
                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                            <Button
                                variant="outlined"
                                sx={{ borderColor: '#00B2A9', color: '#00B2A9', textTransform: 'none', borderRadius: 2 }}
                                onClick={handleCancelColumns}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ backgroundColor: '#00B2A9', color: '#fff', textTransform: 'none', borderRadius: 2 }}
                                onClick={handleSaveColumns}
                            >
                                Save
                            </Button>
                        </Box>
                    </Box>
                </Drawer>

                <Button
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    onClick={handleExportMenuClick}
                    sx={{ textTransform: 'none', borderRadius: 2, borderColor: '#00B2A9', color: '#00B2A9' }}
                >
                    Export to CSV
                </Button>
                <Menu anchorEl={exportAnchorEl} open={Boolean(exportAnchorEl)} onClose={handleExportMenuClose}>
                    <MenuItem onClick={() => handleExportCSV(false)}>Export visible data columns only</MenuItem>
                    <MenuItem onClick={() => handleExportCSV(true)}>Export all data columns</MenuItem>
                </Menu>
            </div>

            <MaterialReactTable
                columns={columns.filter((col) => visibleColumns.includes(col.accessorKey))}
                data={filteredData}
                enableTopToolbar={false}
                enableSorting={true}
                enableGlobalFilter={false}
                enableColumnFilters={false}
                enablePagination={true}
                enableStickyHeader={true}
                enableHiding={false}
                enableColumnActions={false}
                enableColumnOrdering={true}
                enableDensityToggle={false}
                enableFullScreenToggle={false}
                muiTableHeadCellProps={{
                    sx: { backgroundColor: '#DEDEDE', color: '#212121' }
                }}
                // initialState={{
                //     showGlobalFilter: false
                // }}
                muiTableBodyRowProps={{
                    sx: {
                        '&:hover': {
                            backgroundColor: '#E5F7F6 !important',
                        },
                    },
                }}
            />
        </div>
    );
}

export default MaterialTable;