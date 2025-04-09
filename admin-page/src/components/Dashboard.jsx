import React, { useEffect, useState } from 'react';
import DashboardTable from './DashboardTable';

function Dashboard() {
    const [tableData, setTableData] = useState([
        { id: 1, name: 'Elizabeth Lee', company: 'AstraSystems', orderValue: 359, orderDate: '2023-10-06', status: 'New' },
        { id: 2, name: 'Carlos Garcia', company: 'SmoozeShift', orderValue: 747, orderDate: '2023-07-24', status: 'New' },
        { id: 3, name: 'Elizabeth Bailey', company: 'Prime Time Telecom', orderValue: 564, orderDate: '2023-08-08', status: 'In-progress' },
        { id: 4, name: 'Ryan Brown', company: 'OmniTech Corporation', orderValue: 541, orderDate: '2023-08-11', status: 'In-progress' },
        { id: 5, name: 'Ryan Young', company: 'DataStream Inc', orderValue: 769, orderDate: '2023-09-01', status: 'Completed' },
        { id: 6, name: 'Hailey Adams', company: 'FlowRush', orderValue: 922, orderDate: '2023-10-06', status: 'Completed' },
    ]);


    useEffect(() => {
        const fetchTableData = async () => {
            try {
                const res = await fetch('API_URL/table-data');
                const data = await res.json();
                setTableData(data);
            } catch (error) {
                console.error('Error fetching table data:', error);
            }
        };

        fetchTableData();
    }, []);

    return <DashboardTable tableData={tableData} />;
}

export default Dashboard;
