import { deleteCookie, getCookie } from 'cookies-next/client';
import { redirect, RedirectType, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useNavbarLinks = () => {
    const pathname = usePathname();
    const [showSignIn, setShowSingIn] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const handleBackButton = () => {
        setCurrentStep(currentStep - 1);
    };

    useEffect(() => {
        const accessToken = getCookie("accessToken");
        setShowSingIn(!accessToken);
    }, []);

    const handleLogout = () => {
        deleteCookie("accessToken");
        redirect("/login", RedirectType.replace);
    };
    return { pathname, showSignIn, currentStep, handleBackButton, handleLogout, setCurrentStep };
};
