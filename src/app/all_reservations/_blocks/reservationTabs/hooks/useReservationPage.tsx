
export const useReservationPage = () => {
    const getStatusColor = (status: string): string => {
        switch (status) {
            case 'مكتمل':
                return 'bg-green-50 text-green-600';
            case 'ملغي':
                return 'bg-red-50 text-red-600';
            default:
                return 'bg-yellow-50 text-yellow-600';
        }
    };
    return { getStatusColor };
};
