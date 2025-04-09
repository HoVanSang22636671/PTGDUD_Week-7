import React, { useState, useEffect } from 'react';
import searchIcon from '../assets/Lab_05/Search.png'
import bellIcon from '../assets/Lab_05/Bell 1.png'
import questionIcon from '../assets/Lab_05/Question 1.png'
import avt from '../assets/Lab_05/Avatar 313.png'
import overviewIcon from '../assets/Lab_05/Squares four 1.png'
import cartIcon from '../assets/Lab_05/Button 1509.png'
import profitIcon from '../assets/Lab_05/Button 1529.png'
import custIcon from '../assets/Lab_05/Button 1530.png'
import logoIcon from '../assets/Lab_05/Image 1858.png'
import dashboardIcon from '../assets/Lab_05/Squares four 1.png'
import projectIcon from '../assets/Lab_05/Folder.png'
import teamIcon from '../assets/Lab_05/Groups.png'
import analyticIcon from '../assets/Lab_05/Pie chart.png'
import messageIcon from '../assets/Lab_05/Chat.png'
import integreationIcon from '../assets/Lab_05/Code.png'
import groupIcon from '../assets/Lab_05/Group.png'
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
        <div className="container flex min-h-screen w-full max-w-[1200px] mx-auto">
            <div className="sidebar flex flex-col justify-between h-screen p-4">
                {/* Logo và Menu chính */}
                <div>
                    <div className="logo mb-6">
                        <img src={logoIcon} alt="Logo" />
                    </div>

                    <div className="menu space-y-2">
                        <NavLink to="/" end className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2 rounded-lg ${isActive ? 'bg-pink-500 text-white' : 'text-gray-700 hover:bg-pink-100'}`}>
                            <img src={dashboardIcon} alt="Dashboard" className="w-5 h-5" />
                            <span>Dashboard</span>
                        </NavLink>

                        <NavLink to="/projects" className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2 rounded-lg ${isActive ? 'bg-pink-500 text-white' : 'text-gray-700 hover:bg-pink-100'}`}>
                            <img src={projectIcon} alt="Projects" className="w-5 h-5" />
                            <span>Projects</span>
                        </NavLink>

                        <NavLink to="/teams" className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2 rounded-lg ${isActive ? 'bg-pink-500 text-white' : 'text-gray-700 hover:bg-pink-100'}`}>
                            <img src={teamIcon} alt="Teams" className="w-5 h-5" />
                            <span>Teams</span>
                        </NavLink>

                        <NavLink to="/analytics" className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2 rounded-lg ${isActive ? 'bg-pink-500 text-white' : 'text-gray-700 hover:bg-pink-100'}`}>
                            <img src={analyticIcon} alt="Analytics" className="w-5 h-5" />
                            <span>Analytics</span>
                        </NavLink>

                        <NavLink to="/messages" className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2 rounded-lg ${isActive ? 'bg-pink-500 text-white' : 'text-gray-700 hover:bg-pink-100'}`}>
                            <img src={messageIcon} alt="Messages" className="w-5 h-5" />
                            <span>Messages</span>
                        </NavLink>

                        <NavLink to="/integration" className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2 rounded-lg ${isActive ? 'bg-pink-500 text-white' : 'text-gray-700 hover:bg-pink-100'}`}>
                            <img src={integreationIcon} alt="Integrations" className="w-5 h-5" />
                            <span>Integrations</span>
                        </NavLink>
                    </div>
                </div>

                <div className="mt-6">
                    <div className="mb-4">
                        <img src={groupIcon} alt="Group Icon" />
                    </div>
                    <div className="bg-[#F3F7FA] p-4 rounded-xl text-center">
                        <p className="text-sm font-semibold text-gray-800">V2.0 is available</p>
                        <button className="mt-2 px-4 py-1 bg-white text-blue-500 border border-blue-500 rounded-full text-sm hover:bg-blue-100">
                            Try now
                        </button>
                    </div>
                </div>
            </div>

            <div className="main-content flex-1 h-screen w-[930px] flex flex-col">
                <div className="flex items-center justify-between py-4 px-6 bg-white shadow-sm ">
                    <h3 className='text-xl font-bold text-pink-500'>Dashboard</h3>

                    <div className="flex items-center justify-between px-6 py-4 bg-white ">
                        {/* Search Box với icon nằm trong input */}
                        <div className="relative w-64">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <img src={searchIcon} alt="Search" className="w-4 h-4" />
                            </span>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-10 pr-4 py-2 bg-gray-100 text-sm rounded-full focus:outline-none"
                            />
                        </div>

                        {/* Các icon bên phải */}
                        <div className="flex items-center space-x-4">
                            <img src={bellIcon} alt="Bell" className="w-5 h-5 cursor-pointer" />
                            <img src={questionIcon} alt="Help" className="w-5 h-5 cursor-pointer" />
                            <img
                                src={avt}
                                alt="Avatar"
                                className="w-8 h-8 rounded-full object-cover border-2 border-pink-300 cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
                <div className="overview p">
                    <div className="flex items-center gap-2 mb-4 p-3">
                        <img src={overviewIcon} alt="Overview Icon" className="w-6 h-6" />
                        <h3 className="text-xl font-bold">Overview</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="flex justify-between items-start p-4 rounded-2xl bg-red-50 shadow">
                            <div>
                                <p className="text-sm font-semibold text-gray-700">Turnover</p>
                                <h3 className="text-2xl font-bold text-gray-900">${overviewData.turnover}</h3>
                                <p className="text-sm text-green-600 mt-1">▲ 5.39% <span className="text-gray-500">period of change</span></p>
                            </div>
                            <div>
                                <img src={cartIcon} alt="Cart" />
                            </div>
                        </div>
                        <div className="flex justify-between items-start p-4 rounded-2xl bg-blue-50 shadow">
                            <div>
                                <p className="text-sm font-semibold text-gray-700">Profit</p>
                                <h3 className="text-2xl font-bold text-gray-900">${overviewData.profit}</h3>
                                <p className="text-sm text-green-600 mt-1">▲ 5.39% <span className="text-green-500"> period of chage</span></p>
                            </div>

                            <div>
                                <img src={profitIcon} />
                            </div>
                        </div>

                        <div className="flex justify-between items-start p-4 rounded-2xl bg-blue-100 shadow">
                            <div>
                                <p className='text-sm font-semibold text-gray-700'>New customer</p>
                                <h3 className='text-2xl font-bold text-gray-900'>${overviewData.newCustomer}</h3>
                                <p className='text-sm text-green-600 mt-1'>▲ 6.84% <span className="text-gray-500">Period of change</span></p>
                            </div>
                            <div>
                                <img src={custIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content flex-1 ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Admin;