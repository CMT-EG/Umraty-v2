import { Minus, Plus } from 'lucide-react';
import React from 'react';

interface AgeGroupCounterProps {
    adults: number;
    setAdults: React.Dispatch<React.SetStateAction<number>>;
    children: number;
    setChildren: React.Dispatch<React.SetStateAction<number>>;
    infants: number;
    setInfants: React.Dispatch<React.SetStateAction<number>>;
    increment: (setter: React.Dispatch<React.SetStateAction<number>>) => void;
    decrement: (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => void;
}

const AgeGroupCounter: React.FC<AgeGroupCounterProps> = ({ adults, setAdults, children, setChildren, infants, setInfants, increment, decrement }) => {
    return (
        <div className="p-4 space-y-4 w-full" dir='rtl'>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-base font-bold">الكبار</h1>
                    <p className="text-gray-600 text-xs">الأعمار 13 سنة فما فوق</p>
                </div>
                <div className="flex items-center">
                    <button
                        onClick={() => increment(setAdults)}
                        className="h-5 w-5 flex items-center justify-center border-2 font-bold border-[#B1B5C3] text-[#B1B5C3] rounded-full disabled:opacity-30"
                    >
                        <Plus />
                    </button>
                    <p className='mx-2 w-3 text-center'>{" "} {adults} {" "}</p>
                    <button
                        onClick={() => decrement(setAdults, adults)}
                        disabled={adults === 0}
                        className="h-5 w-5 flex items-center justify-center border-2 font-bold border-[#B1B5C3] text-[#B1B5C3]  rounded-full disabled:opacity-30"
                    >
                        <Minus />
                    </button>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-base font-bold">الأطفال</h1>
                    <p className="text-gray-600 text-xs">الأعمار 12 - 2 سنة</p>
                </div>
                <div className="flex items-center">
                    <button
                        onClick={() => increment(setChildren)}
                        className="h-5 w-5 flex items-center justify-center border-2 font-bold border-[#B1B5C3] text-[#B1B5C3] rounded-full disabled:opacity-30"
                    >
                        <Plus />
                    </button>
                    <p className='mx-2 w-3 text-center'>{" "} {children} {" "}</p>
                    <button
                        onClick={() => decrement(setChildren, children)}
                        disabled={children === 0}
                        className="h-5 w-5 flex items-center justify-center border-2 font-bold border-[#B1B5C3] text-[#B1B5C3]  rounded-full disabled:opacity-30"
                    >
                        <Minus />
                    </button>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-base font-bold">الرضع</h1>
                    <p className="text-gray-600 text-xs">تحت سنتين</p>
                </div>
                <div className="flex items-center">
                    <button
                        onClick={() => increment(setInfants)}
                        className="h-5 w-5 flex items-center justify-center border-2 font-bold border-[#B1B5C3] text-[#B1B5C3] rounded-full disabled:opacity-30"
                    >
                        <Plus />
                    </button>
                    <p className='mx-2 w-3 text-center'>{" "} {infants} {" "}</p>
                    <button
                        onClick={() => decrement(setInfants, infants)}
                        disabled={infants === 0}
                        className="h-5 w-5 flex items-center justify-center border-2 font-bold border-[#B1B5C3] text-[#B1B5C3]  rounded-full disabled:opacity-30"
                    >
                        <Minus />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AgeGroupCounter;