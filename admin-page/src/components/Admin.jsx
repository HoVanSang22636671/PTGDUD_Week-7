import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

function Admin() {
    const [overviewData, setOverviewData] = useState({
        turnover: 0,
        profit: 0,
        newCustomer: 0,
    });

    const [tableData, setTableData] = useState([
        { id: 1, name: 'Elizabeth Lee', company: 'AstraSystems', orderValue: 359, orderDate: '10/06/2023', status: 'New' },
        { id: 2, name: 'Carlos Garcia', company: 'SmoozeShift', orderValue: 747, orderDate: '24/07/2023', status: 'New' },
        { id: 3, name: 'Elizabeth Bailey', company: 'Prime Time Telecom', orderValue: 564, orderDate: '08/08/2023', status: 'In-progress' },
        { id: 4, name: 'Ryan Brown', company: 'OmniTech Corporation', orderValue: 541, orderDate: '11/08/2023', status: 'In-progress' },
        { id: 5, name: 'Ryan Young', company: 'DataStream Inc', orderValue: 769, orderDate: '01/09/2023', status: 'Completed' },
        { id: 6, name: 'Hailey Adams', company: 'FlowRush', orderValue: 922, orderDate: '10/06/2023', status: 'Completed' },
    ]);

    useEffect(() => {
        const fetchOverviewData = async () => {
            try {
                const turnoverRes = await fetch('API_URL/turnover');
                const profitRes = await fetch('API_URL/profit');
                const newCustomerRes = await fetch('API_URL/new-customer');

                const turnoverData = await turnoverRes.json();
                const profitData = await profitRes.json();
                const newCustomerData = await newCustomerRes.json();

                setOverviewData({
                    turnover: turnoverData.value,
                    profit: profitData.value,
                    newCustomer: newCustomerData.value,
                });
            } catch (error) {
                console.error('Error fetching overview data:', error);
            }
        };

        const fetchTableData = async () => {
            try {
                const res = await fetch('API_URL/table-data');
                const data = await res.json();
                setTableData(data);
            } catch (error) {
                console.error('Error fetching overview data: ', error);
            }
        }

        fetchOverviewData();
        fetchTableData();
    }, []);
    const columns = [
        { field: 'name', headerName: 'Customer Name', width: 150 },
        { field: 'company', headerName: 'Company', width: 150 },
        { field: 'orderValue', headerName: 'Order Value', width: 120, valueFormatter: ({ value }) => `$${value}` },
        { field: 'orderDate', headerName: 'Order Date', width: 120 },
        { field: 'status', headerName: 'Status', width: 100 },
    ];

    return (
        <div className="container">
            <div className="sidebar">
                <div className="logo">
                    <p>LOGO</p>
                </div>
                <div className="menu">
                    <a href="#" className="menu-item active">Dashboard</a>
                    <a href="#" className="menu-item">Projects</a>
                    <a href="#" className="menu-item">Teams</a>
                    <a href="#" className="menu-item">Analytics</a>
                    <a href="#" className="menu-item">Messages</a>
                    <a href="#" className="menu-item">Integration</a>
                </div>
            </div>
            <div className="main-content">
                <div className="header">
                    <p>Dashboard</p>
                    <div className="header-right">
                        <input type="text" placeholder="Search" />
                        <div className="user-avatar">?</div>
                    </div>
                </div>
                <div className="overview">
                    <p>Overview</p>
                    <div className="overview-cards">
                        <div className="card">Turnover: ${overviewData.turnover}</div>
                        <div className="card">Profit: ${overviewData.profit}</div>
                        <div className="card">New Customer: {overviewData.newCustomer}</div>
                    </div>
                </div>
                <div className="content">
                    <h3>Detailed Report</h3>
                    <DataGrid
                        rows={tableData}
                        columns={columns}
                        pageSizeOptions={[5, 10, 20]}
                        initialState={{
                            pagination: { paginationModel: { pageSize: 5 } },
                        }}
                        sortingOrder={['asc', 'desc']} />
                </div>
            </div>
        </div>
    );
}

export default Admin;