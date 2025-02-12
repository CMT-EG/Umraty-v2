import React from 'react';

export const DetailsHero = () => {
    return (
        <div className="bg-reservation-background bg-center bg-cover relative z-0">
            <div className=" text-white w-full px-5 h-[500px] bg-gradient-to-b from-black to-black/50">
                <div className=" absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center">
                    <h1 className="sm:text-[2.5rem] text-[1.563rem]# leading-[154%] font-extrabold mb-3">
                        كل تفاصيل حجزك في مكان واحد
                    </h1>
                    <h3 className=" text-lg">
                        استعرض معلومات حجزك بسهولة، من بيانات المعتمرين وخدمة النقل إلى ملخص الحجز الكامل. قم بإجراء التعديلات أو متابعة حالتك مباشرة.
                    </h3>
                </div>
            </div>
        </div>
    );
};
