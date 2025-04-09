import React from 'react';
import messageIcon from '../assets/Lab_05/Chat.png'

function Messages() {
    return (
        <div className='flex items-center justify-between px-6 py-4'>
            <div className="flex items-center space-x-2">
                <img src={messageIcon} alt="" className="w-5 h-5" />
                <h3 className="font-semibold text-lg">Message</h3>
            </div>
        </div>
    );
}

export default Messages;