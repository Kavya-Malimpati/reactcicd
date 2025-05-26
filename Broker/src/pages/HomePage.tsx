import React, { useMemo, useState } from "react";
import MaterialTable from "../components/table/MaterialReactTable";
import MemberPopup from "./components/MemberPopup";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Home = () => {
  const tabs = ["ALL MEMBERS", "PAST DUE", "PURE360", "SPECIAL SAVINGS"]; 
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const setModalClose = () => {
    setModalOpen(false);
  };

  const handleClick = (value, dataset) => {
    let foundData = dataset.find(item => item.name === value);
    setModalOpen(true);
    setModalData(foundData);
  };

  // Data 1
  const dataSet1 = [
    { id: "1234567", name: "Adam Smith", state: "NY", accountSize: "<$10K", renewalDate: "01/01/2025", billing: "Paid", claims: 1, p360req: '2', lppe: 'Ting' } ,
    { id: "1430201710252017", name: "Timothy Alexander", state: "WA", accountSize: "$10-25K",renewalDate: "01/01/2025", billing: "Paid", claims: "-", p360req: 4, lppe: "Ting, Starlight" },
    { id: "11122020000000", name: "Ting, Starlight", state: "WY", accountSize: "$25K",renewalDate: "01/01/2025", billing: "Past Due", claims: "-", p360req: 5, lppe: "Ting, Starlight, Watercraft on excess" },
    { id: "430201710252017", name: "Anjelica Howards", state: "KY", accountSize: "<$10k",renewalDate: "01/01/2025", billing: "Paid", claims: "3", p360req: "-", lppe: "4 opportunities" },
    { id: "11122020000034", name: "Westerus Weingartner", state: "KY", accountSize: "<$10k",renewalDate: "01/01/2025", billing: "Paid", claims: "1", p360req: "-", lppe: "5 opportunities" },
    { id: "22233089450000", name: "Stacey Dash", state: "KY", accountSize: "<$10k",renewalDate: "01/01/2025", billing: "Paid", claims: "-", p360req: "10", lppe: "6 opportunities" },
    { id: "46226370000034", name: "Benjamin Orwell", state: "KY", accountSize: "$10-25K",renewalDate: "01/01/2025", billing: "Paid", claims: "-", p360req: "2", lppe: "-" },
    { id: "999888545711", name: "Hannah Kibler", state: "KY", accountSize: "$10-25K",renewalDate: "01/01/2025", billing: "Paid", claims: "-", p360req: "-", lppe: "-" },
  ]

  const columns1 = useMemo(
    () => [
            { 
                accessorKey: 'name', header: 'Member Name', 
                Cell: ({ cell }) => (
                    <div 
                        onClick={() => handleClick(cell.getValue(), dataSet1)}
                        style={{ cursor: 'pointer', textDecoration: 'underline' }}
                    >
                        {cell.getValue()}
                    </div>
                ),
                muiTableHeadCellProps: {
                    align: 'left',
                },
                muiTableBodyCellProps: {
                    align: 'left',
                },
                muiTableFooterCellProps: {
                    align: 'left',
                },    
                // enableHiding: false
            },
            { 
                accessorKey: 'id', 
                header: 'Id',
                muiTableHeadCellProps: {
                    align: 'left',
                },
                muiTableBodyCellProps: {
                    align: 'left',
                },
                muiTableFooterCellProps: {
                    align: 'left',
                }, 
                enableSorting: false
            },
            { 
                accessorKey: 'state',
                header: 'State',
                muiTableHeadCellProps: {
                    align: 'right',
                },
                muiTableBodyCellProps: {
                    align: 'right',
                },
                muiTableFooterCellProps: {
                    align: 'right',
                }, 
                enableSorting: false
            },
            {   accessorKey: 'accountSize', 
                header: 'Account Size',
                muiTableHeadCellProps: {
                    align: 'left',
                },
                muiTableBodyCellProps: {
                    align: 'left',
                },
                muiTableFooterCellProps: {
                    align: 'left',
                }, 
                enableSorting: false
            },
            {   accessorKey: 'renewalDate', 
                header: 'Renewal Date',
                muiTableHeadCellProps: {
                    align: 'left',
                },
                muiTableBodyCellProps: {
                    align: 'left',
                },
                muiTableFooterCellProps: {
                    align: 'left',
                }, 
                enableSorting: false
            },
            {   
                accessorKey: 'billing', 
                header: 'Billing',
                muiTableHeadCellProps: {
                    align: 'left',
                },
                muiTableBodyCellProps: {
                    align: 'left',
                },
                muiTableFooterCellProps: {
                    align: 'left',
                }, 
                enableSorting: false
            },
            {   
                accessorKey: 'claims', 
                header: '# Claims',
                muiTableHeadCellProps: {
                    align: 'right',
                },
                muiTableBodyCellProps: {
                    align: 'right',
                },
                muiTableFooterCellProps: {
                    align: 'right',
                }, 
                enableSorting: false
            },
            {   
                accessorKey: 'p360req',
                header: 'PURE360 Requirements', 
                grow: true,
                size: 250,
                muiTableHeadCellProps: {
                    align: 'right',
                },
                muiTableBodyCellProps: {
                    align: 'right',
                },
                muiTableFooterCellProps: {
                    align: 'right',
                }, 
                enableSorting: false
            },
            {   
                accessorKey: 'lppe', 
                header: 'Loss Prevention Program Eligibility',
                grow: false,
                size: 350,
                muiTableHeadCellProps: {
                    align: 'left',
                },
                muiTableBodyCellProps: {
                    align: 'left',
                },
                muiTableFooterCellProps: {
                    align: 'left',
                }, 
                enableSorting: false
            },
        ],
    []
  );

  const dataSet2 = [
    { id: "999888545711", name: "Stacey Dash", totalDue: '$2000', oldestPastDueDate: "8/10/24", enrolledInAutopay: "no"} ,
    { id: "89101112131415", name: "Maureen Down", totalDue: '$4345.33', oldestPastDueDate: "07/09/24", enrolledInAutopay: "yes"} ,
    { id: "89101112131415", name: "Josephine Silverstein", totalDue: '$5000.67', oldestPastDueDate: "5/1/3024", enrolledInAutopay: "yes"} ,
  ]

  const columns2 = useMemo(
    () => [
            { 
                accessorKey: 'name', header: 'Member Name', 
                Cell: ({ cell }) => (
                    <div 
                        onClick={() => handleClick(cell.getValue(), dataSet2)}
                        style={{ cursor: 'pointer', textDecoration: 'underline' }}
                    >
                        {cell.getValue()}
                    </div>
                ),
                muiTableHeadCellProps: {
                    align: 'left',
                },
                muiTableBodyCellProps: {
                    align: 'left',
                },
                muiTableFooterCellProps: {
                    align: 'left',
                },    
            },
            { 
                accessorKey: 'id', 
                header: 'ID',
                size: 30,
                muiTableHeadCellProps: {
                    align: 'left',
                },
                muiTableBodyCellProps: {
                    align: 'left',
                },
                muiTableFooterCellProps: {
                    align: 'left',
                }, 
                enableSorting: false
            },
            { 
                accessorKey: 'totalDue',
                header: 'Total Due',
                size: 10,
                muiTableHeadCellProps: {
                    align: 'right',
                },
                muiTableBodyCellProps: {
                    align: 'right',
                },
                muiTableFooterCellProps: {
                    align: 'right',
                }, 
                enableSorting: false
            },
            {   accessorKey: 'oldestPastDueDate', 
                header: 'Oldest Past Due Date',
                muiTableHeadCellProps: {
                    align: 'left',
                },
                muiTableBodyCellProps: {
                    align: 'left',
                },
                muiTableFooterCellProps: {
                    align: 'left',
                }, 
                enableSorting: false
            },
            {   accessorKey: 'enrolledInAutopay', 
                header: 'Enrolled in Autopay?',
                muiTableHeadCellProps: {
                    align: 'center',
                },
                muiTableBodyCellProps: {
                    align: 'center',
                },
                muiTableFooterCellProps: {
                    align: 'center',
                }, 
                enableSorting: false,
                Cell: ({ cell }) => (
                  cell.row.original.enrolledInAutopay == 'no' ?
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" className="ml-[auto] mr-[auto]">
                      <path d="M12.8174 11.433C12.8755 11.4911 12.9215 11.56 12.953 11.6359C12.9844 11.7118 13.0006 11.7931 13.0006 11.8752C13.0006 11.9573 12.9844 12.0387 12.953 12.1145C12.9215 12.1904 12.8755 12.2593 12.8174 12.3174C12.7593 12.3755 12.6904 12.4215 12.6145 12.453C12.5387 12.4844 12.4573 12.5006 12.3752 12.5006C12.2931 12.5006 12.2118 12.4844 12.1359 12.453C12.06 12.4215 11.9911 12.3755 11.933 12.3174L6.75023 7.13382L1.56741 12.3174C1.45014 12.4347 1.29108 12.5006 1.12523 12.5006C0.959373 12.5006 0.800313 12.4347 0.683038 12.3174C0.565763 12.2001 0.499878 12.0411 0.499878 11.8752C0.499878 11.7094 0.565763 11.5503 0.683038 11.433L5.86663 6.25023L0.683038 1.06741C0.565763 0.950137 0.499878 0.791078 0.499878 0.625225C0.499878 0.459373 0.565763 0.300313 0.683038 0.183038C0.800313 0.0657625 0.959373 -0.00012207 1.12523 -0.00012207C1.29108 -0.00012207 1.45014 0.0657625 1.56741 0.183038L6.75023 5.36663L11.933 0.183038C12.0503 0.0657625 12.2094 -0.000122074 12.3752 -0.00012207C12.5411 -0.000122067 12.7001 0.0657625 12.8174 0.183038C12.9347 0.300313 13.0006 0.459373 13.0006 0.625225C13.0006 0.791078 12.9347 0.950137 12.8174 1.06741L7.63382 6.25023L12.8174 11.433Z" fill="#212121"/>
                    </svg>
                  </span>
                   :
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none" className="ml-[auto] mr-[auto]">
                    <path d="M22.9424 11.0674L12.9424 21.0674C12.8844 21.1255 12.8154 21.1716 12.7396 21.2031C12.6637 21.2345 12.5824 21.2507 12.5002 21.2507C12.4181 21.2507 12.3368 21.2345 12.2609 21.2031C12.185 21.1716 12.1161 21.1255 12.058 21.0674L7.68304 16.6924C7.56576 16.5751 7.49988 16.4161 7.49988 16.2502C7.49988 16.0844 7.56576 15.9253 7.68304 15.808C7.80031 15.6908 7.95937 15.6249 8.12523 15.6249C8.29108 15.6249 8.45014 15.6908 8.56741 15.808L12.5002 19.7416L22.058 10.183C22.1753 10.0658 22.3344 9.99988 22.5002 9.99988C22.6661 9.99988 22.8251 10.0658 22.9424 10.183C23.0597 10.3003 23.1256 10.4594 23.1256 10.6252C23.1256 10.7911 23.0597 10.9501 22.9424 11.0674Z" fill="#212121"/>
                  </svg>
              ),
            },
        ],
    []
  );

  return (
    <main className="flex-grow container mx-auto py-6 px-4 pb-0 tabs-and-content-container">
        

      <div className="bg-white rounded-md overflow-hidden py-10 px-10 tabs-and-content-parent pb-[70px] -mt-25">

    <Tabs>
      <TabList className="tab-container flex flex-row mb-[40px]">
        <Tab className="px-[16px] py-[16px] tab font-light">ALL MEMBERS</Tab>
        <Tab className="px-[16px] py-[16px] tab">PAST DUE</Tab>
        <Tab className="px-[16px] py-[16px] tab">PURE360</Tab>
        <Tab className="px-[16px] py-[16px] tab">SUBSCRIBER SAVINGS ACCOUNT</Tab>
      </TabList>

      <TabPanel>
        <MaterialTable 
            columns={columns1} 
            data={dataSet1} 
            handleClick={(value: any) => handleClick(value, dataSet1)}
        />
      </TabPanel>
      <TabPanel>
        <MaterialTable 
            data={dataSet2}
            columns={columns2}
            handleClick={(value: any) => handleClick(value, dataSet2)}
            customShowHideButtons="true"
        />
      </TabPanel>
      <TabPanel>
        Pure 360
      </TabPanel>
      <TabPanel>
        Subscriber Savings Account
      </TabPanel>
    </Tabs>


        {modalOpen && <MemberPopup data={modalData} closeModal={setModalClose} />}
      </div>
    </main>
  );
};

export default Home;
