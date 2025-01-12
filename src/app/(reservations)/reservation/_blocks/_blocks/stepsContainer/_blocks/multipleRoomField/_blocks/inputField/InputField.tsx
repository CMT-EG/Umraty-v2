type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  icon: React.ReactNode;
};
function InputField({ label, placeholder, value, onChange, icon }: Props) {
  return (
    <div className="flex-grow">
      <p className="font-bold text-[0.75rem] mb-4 text-black/60">{label}</p>
      <div className="bg-neutral-50 rounded-xl flex items-center">
        <div className="size-12 flex items-center justify-center">{icon}</div>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
          className="focus-visible:outline-none bg-transparent self-stretch flex-grow"
        />
      </div>
    </div>
  );
}

export default InputField;
