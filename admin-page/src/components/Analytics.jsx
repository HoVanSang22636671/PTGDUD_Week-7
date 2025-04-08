import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Analytics() {
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
                    <Link to="/" className="menu-item">Dashboard</Link>
                    <Link to="/projects" className="menu-item">Projects</Link>
                    <Link to="/teams" className="menu-item">Teams</Link>
                    <Link to="/analytics" className="menu-item active">Analytics</Link>
                    <Link to="/messages" className="menu-item">Messages</Link>
                    <Link to="/integration" className="menu-item">Integration</Link>
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
                    <h3>Analytics</h3>
                </div>
            </div>
        </div>
    );
}

export default Analytics;