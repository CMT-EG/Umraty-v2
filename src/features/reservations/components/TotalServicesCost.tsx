import RowInfo from '@/components/reservations/RowInfo';
import React from 'react';

const TotalServicesCost = () => {
    return (
        <>
            <div className='border border-primary-600 p-4 rounded-xl my-4'>
                <div className="py-3 px-6 text-white font-extrabold bg-primary-400 rounded-xl">إجمالي تكلفة الخدمات</div>
                <div className="border border-b border-b-[#3A35413B] my-4 w-full"></div>
                <div className="mt-2 border border-[#3A35413B] rounded-2xl p-5">
                    <RowInfo
                        label='الإجمالي غير شامل الضريبة'
                        value={" 360 ريال "}
                    />
                    <RowInfo
                        label='ضريبة  القيمة المضافة 15 %'
                        value={" 360 ريال "}
                    />
                    <RowInfo
                        label='إجمالي الخدمات شامل ضريبة القيمة المضافة'
                        value={" 360 ريال "}
                    />
                </div>
            </div>
            <div className='border border-primary-600 p-6 rounded-xl my-4 font-extrabold text-2xl'>
                إجمالي المطلوب للدفع : <span>415 ريال</span>
            </div>
        </>
    );
};

export default TotalServicesCost;