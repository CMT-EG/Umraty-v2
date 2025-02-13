import RowInfo from '@/components/reservations/RowInfo';
import React from 'react';
import TotalServicesCost from './TotalServicesCost';


const SummaryReservationComponent = ({ isService }) => {
    return (
        <div>
            <div className='border border-primary-600 p-4 rounded-xl my-4'>
                <div className="py-3 px-6 text-white font-extrabold bg-primary-400 rounded-xl">{isService ? "باقة الخدمة" : `السكن بمكة المكرمة`}</div>
                <div className="border border-b border-b-[#3A35413B] my-4 w-full"></div>
                <div className="mt-2 border border-[#3A35413B] rounded-2xl p-5">
                    <h3 className='font-extrabold text-lg'>الخدمة رقم 1</h3>
                    <div className="border border-b border-b-[#3A35413B] my-4 w-full"></div>
                    <div className="flex items-start gap-10">
                        <div className='flex-1'>
                            <RowInfo
                                label='نوع الخدمة'
                                value='باقة الخدمة الأساسية ( غير شامل السكن)'
                            />
                            <RowInfo
                                label={isService ? "تاريخ الذهاب" : "تاريخ الخروج"}
                                value='22/02/2025'
                            />
                            <RowInfo
                                label={isService ? "عدد الأشخاص" : "عدد الأشخاص الحاجزين"}
                                value='4'
                            />
                        </div>
                        <div className='flex-1'>
                            <RowInfo
                                label={isService ? "تاريخ العودة" : "تاريخ الدخول "}
                                value='باقة الخدمة الأساسية ( غير شامل السكن)'
                            />
                            {isService && <RowInfo
                                label='نقطة الانطلاق'
                                value='مركز التجمع 1 , مدينة جدة'
                            />}
                            {!isService && <RowInfo
                                label='توع الغرفة'
                                value='غرفة سرير مزدوج أو سريرين توأم'
                            />}
                            {!isService && <RowInfo
                                label='سعة الغرفة'
                                value='4 أشخاص'
                            />}
                        </div>
                    </div>
                    <div className="border border-b border-b-[#3A35413B] my-4 w-full"></div>
                    <div className="w-1/2">
                        <RowInfo
                            label={"سعر الشخص"}
                            value='700 ريال'
                        />
                        <RowInfo
                            label={"ضريبة القيمة المضافة"}
                            value='700 ريال'
                        />
                        <RowInfo
                            label={"الإجمالي"}
                            value='700 ريال'
                        />
                        <RowInfo
                            label={"شروط الخدمة"}
                            value={<ul className='list-disc'>
                                <li>يجب على المعتمرين تقديم جواز سفر ساري المفعول.</li>
                                <li>يجب دفع المبلغ الكامل قبل 30 يومًا من موعد الرحلة.</li>
                                <li>يمكن إلغاء الحجز مع استرداد جزئي قبل 15 يومًا من الرحلة.</li>
                                <li> يتم توفير وجبات إفطار مجانية خلال فترة الإقامة.</li>
                            </ul>}
                        />
                    </div>
                </div>
            </div>
            <TotalServicesCost />
        </div>
    );
};

export default SummaryReservationComponent;