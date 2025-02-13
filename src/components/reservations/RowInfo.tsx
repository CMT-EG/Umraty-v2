import React, { ReactElement } from 'react';

interface RowInfo {
    label: string,
    value: string | ReactElement;
}

const RowInfo = ({ label, value }: RowInfo) => {
    return (
        <div className='flex flex-row justify-between items-start text-start my-2'>
            <div className='text-gray-500'>{label}</div>
            <div className='text-gray-700 font-extrabold w-[75%]'>{value}</div>
        </div>
    );
};

export default RowInfo;