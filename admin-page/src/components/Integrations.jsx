import React from 'react';
import integreationIcon from '../assets/Lab_05/Code.png'
function Integreations() {
    return (
        <div className='flex items-center justify-between px-6 py-4'>
            <div className="flex items-center space-x-2">
                <img src={integreationIcon} alt="" className="w-5 h-5" />
                <h3 className="font-semibold text-lg">Integration</h3>
            </div>
        </div>
    );
}

export default Integreations;