import React, { useState } from 'react';
import DashboardTable from './DashboardTable';
import EditCustomerModal from './EditCustomerModal';

import detailIcon from '../assets/Lab_05/File text 1.png';
import editIcon from '../assets/Lab_05/Download.png';
import exportIcon from '../assets/Lab_05/Move up.png';

function Dashboard() {
    const [tableData, setTableData] = useState([
        {
            id: 1,
            name: 'Elizabeth Lee',
            company: 'AstraSystems',
            orderValue: 359,
            orderDate: '2023-10-06',
            status: 'New',
            avatar: null,
        },
        {
            id: 2,
            name: 'Carlos Garcia',
            company: 'SmoozeShift',
            orderValue: 747,
            orderDate: '2023-07-24',
            status: 'New',
            avatar: null,
        },
        {
            id: 3,
            name: 'Elizabeth Bailey',
            company: 'Prime Time Telecom',
            orderValue: 564,
            orderDate: '2023-08-08',
            status: 'In-progress',
            avatar: null,
        },
        {
            id: 4,
            name: 'Ryan Brown',
            company: 'OmniTech Corporation',
            orderValue: 541,
            orderDate: '2023-08-11',
            status: 'In-progress',
            avatar: null,
        },
        {
            id: 5,
            name: 'Ryan Young',
            company: 'DataStream Inc',
            orderValue: 769,
            orderDate: '2023-09-01',
            status: 'Completed',
            avatar: null,
        },
        {
            id: 6,
            name: 'Hailey Adams',
            company: 'FlowRush',
            orderValue: 922,
            orderDate: '2023-10-06',
            status: 'Completed',
            avatar: null,
        },
    ]);

    const [openModal, setOpenModal] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const handleOpenEdit = (customer) => {
        setSelectedCustomer(customer);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedCustomer(null);
    };

    const handleSave = () => {
        if (!selectedCustomer) return;

        setTableData((prev) =>
            prev.map((item) =>
                item.id === selectedCustomer.id ? { ...selectedCustomer } : item
            )
        );
        handleCloseModal();
    };

    return (
        <>
            <div className='flex items-center justify-between px-6 py-4'>
                <div className="flex items-center space-x-2">
                    <img src={detailIcon} alt="Detail" className="w-5 h-5" />
                    <h3 className="font-semibold text-lg">Detailed Report</h3>
                </div>

                <div className="flex items-center space-x-3">
                    <button className="flex items-center border border-pink-400 text-pink-500 px-3 py-1 rounded-full text-sm hover:bg-pink-50 transition">
                        <img src={editIcon} alt="Edit" className='w-4 h-4 mr-2' />
                        Import
                    </button>

                    <button className="flex items-center border border-pink-400 text-pink-500 px-3 py-1 rounded-full text-sm hover:bg-pink-50 transition">
                        <img src={exportIcon} alt="Export" className="w-4 h-4 mr-2" />
                        Export
                    </button>
                </div>
            </div>

            <DashboardTable tableData={tableData} onEdit={handleOpenEdit} />

            <EditCustomerModal
                open={openModal}
                onClose={handleCloseModal}
                customer={selectedCustomer}
                setCustomer={setSelectedCustomer}
                onSave={handleSave}
            />
        </>
    );
}

export default Dashboard;
