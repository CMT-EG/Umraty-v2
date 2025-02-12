import React from 'react';

interface Props {
    isActive: boolean,
    icon: React.ReactNode,
    title: string,
    description: string;
}

const ProgressStepComponent = ({ isActive, icon, title, description }: Props) => {
    return (
        <div className='text-center flex items-center justify-center flex-col'>
            <div className={`${isActive ? 'bg-primary-600' : 'bg-[#F6F6F6]'} rounded-full h-16 w-16 flex items-center justify-center`}>
                {icon}
            </div>
            <h4 className='text-lg font-bold mt-2'>{title}</h4>
            <p className='text-sm text-gray-500 mt-1'>{description}</p>
        </div>
    );
};

export default ProgressStepComponent;