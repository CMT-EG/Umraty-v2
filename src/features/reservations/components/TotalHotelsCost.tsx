import React from 'react';

type PriceDetails = {
    name: string;
    price: number;
};
type PriceDetail = {
    priceDetails: PriceDetails[];
    totalPrice: number;
};

const TotalHotelsCost = ({ priceDetails, totalPrice }: PriceDetail) => {
    return (
        <div className="flex flex-col space-y-2 bg-white shadow-lg rounded-lg p-6">
            <div className="bg-[#F7F4EF] rounded-lg p-2 font-bold w-full mb-3">حجزك فى امان بواسطة عمرتي </div>
            <div className='pb-5 border-b border-gray-300'>
                <h4 className='font-bold text-lg mb-3'>تفاصيل الأسعار في فندق برج ساعة مكة الملكي</h4>
                {priceDetails.map((detail, index) => (
                    <div className="flex justify-between" key={index}>
                        <span>{detail.name}</span>
                        <span className='mt-2 font-bold'>{detail.price} ريال</span>
                    </div>
                ))}
            </div>
            <div className='pb-5 border-b border-gray-300'>
                <h4 className='font-bold text-lg mb-3'>تفاصيل الأسعار في فندق آل فيصل بالمدينة المنورة</h4>
                {priceDetails.map((detail, index) => (
                    <div className="flex justify-between" key={index}>
                        <span>{detail.name}</span>
                        <span className='mt-2 font-bold'>{detail.price} ريال</span>
                    </div>
                ))}
            </div>
            <div className="flex justify-between font-extrabold text-xl !mt-2 border-b border-dashed border-primary-600 pb-6 pt-3">
                <span>إجمالي</span>
                <span className='font-bold'>{totalPrice} ريال</span>
            </div>
            <h4 className='font-bold text-lg mb-3 mt-5'> الشروط والأحكام</h4>
            <ul className='text-sm leading-6 list-disc ml-5 text-[#888888]'>
                <li>سياسة الحجز: جميع الحجوزات نهائية وغير قابلة للتحويل إلا وفقًا لسياسة الفندق أو مقدم الخدمة.</li>
                <li>الإلغاء والاسترداد: قد تختلف سياسات الإلغاء واسترداد الأموال حسب الفندق أو الخدمة المختارة، ويجب مراجعة الشروط قبل تأكيد الحجز.</li>
                <li>تسجيل الوصول والمغادرة: يجب الالتزام بمواعيد تسجيل الوصول والمغادرة المحددة من قبل الفندق، وأي تغييرات تخضع لموافقة الفندق.</li>
                <li>الأسعار والضرائب: جميع الأسعار تشمل أو لا تشمل الضرائب والرسوم الإضافية وفقًا لما هو مذكور في تفاصيل الحجز.</li>
                <li>الشروط الخاصة بالحج والعمرة: يجب على المسافرين الالتزام بجميع القوانين والتعليمات الخاصة بالحج والعمرة الصادرة عن الجهات المختصة في المملكة العربية السعودية.</li>
            </ul>
        </div>
    );
};

export default TotalHotelsCost;