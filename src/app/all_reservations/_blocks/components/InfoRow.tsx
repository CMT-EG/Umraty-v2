export const InfoRow = ({ label, value }: { label: string; value: string | number; }) => (
    <div className="flex gap-3 text-sm items-center">
        <div className="text-[#5D5D5DDB] font-bold min-w-[120px]">{label}</div>
        <div className="font-extrabold">{value}</div>
    </div>
);