import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

function Admin() {
    const [overviewData, setOverviewData] = useState({
        turnover: 0,
        profit: 0,
        newCustomer: 0,
    });

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


        fetchOverviewData();
    }, []);

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
                </div>
            </div>
        </div>
    );
}

export default Admin;