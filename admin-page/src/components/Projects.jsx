import React from 'react';
import projectIcon from '../assets/Lab_05/Folder.png'
function Projects() {
    return (
        <div className='flex items-center justify-between px-6 py-4'>
            <div className="flex items-center space-x-2">
                <img src={projectIcon} alt="" className="w-5 h-5" />
                <h3 className="font-semibold text-lg">Project</h3>
            </div>
        </div>
    );
}

export default Projects;
