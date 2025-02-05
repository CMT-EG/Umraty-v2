export const StatusBadge = ({ status }: { status: BookingStatus; }) => {
    const statusStyles = {
        'مكتمل': 'bg-green-50 text-green-600',
        'غير مدفوع': 'bg-yellow-50 text-yellow-600',
        'ملغي': 'bg-red-50 text-red-600',
        'نشط': 'text-[#56CA00] bg-[#56CA0014]'
    };

    return (
        <div className={`inline-block px-3 py-1 rounded-lg ${statusStyles[status] || ''}`}>
            {status}
        </div>
    );
};