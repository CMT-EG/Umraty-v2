import { useState } from 'react';

export const useNotAuthorized = () => {
    const [phoneValue, setPhoneValue] = useState({ phone_number: "", phone_code: "966" });

    const handleValueChange = (newValue: { phone_number: string; phone_code: string; }) => {
        setPhoneValue(newValue);
    };
    return { phoneValue, handleValueChange };
};
