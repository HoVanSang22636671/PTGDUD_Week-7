import React from 'react';
import analyticIcon from '../assets/Lab_05/Pie chart.png'

function Analytics() {
    return (
        <div className='flex items-center justify-between px-6 py-4'>
            <div className="flex items-center space-x-2">
                <img src={analyticIcon} alt="" className="w-5 h-5" />
                <h3 className="font-semibold text-lg">Analytic</h3>
            </div>
        </div>
    );
}

export default Analytics;