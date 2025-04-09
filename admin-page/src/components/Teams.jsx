import React from 'react';
import teamIcon from '../assets/Lab_05/Groups.png'

function Teams() {
    return (
        <div className='flex items-center justify-between px-6 py-4'>
            <div className="flex items-center space-x-2">
                <img src={teamIcon} alt="" className="w-5 h-5" />
                <h3 className="font-semibold text-lg">Team</h3>
            </div>
        </div>

    );
}

export default Teams;