export const InfoRow = ({ label, value }: { label: string; value: string | number; }) => (
    <div className="flex justify-between items-center">
        <div className="text-gray-500">{label}</div>
        <div className="text-gray-800">{value}</div>
    </div>
);