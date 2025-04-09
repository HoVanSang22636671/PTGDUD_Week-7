import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { NavLink, Outlet } from 'react-router-dom';

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
                    <NavLink to="/" end className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>Dashboard</NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>Projects</NavLink>
                    <NavLink to="/teams" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>Teams</NavLink>
                    <NavLink to="/analytics" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>Analytics</NavLink>
                    <NavLink to="/messages" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>Messages</NavLink>
                    <NavLink to="/integration" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>Integration</NavLink>
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
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Admin;