type Props = {
  title: string;
};
export default function ServiceTitle({ title }: Props) {
  return (
    <div className="h-[61px] px-6 bg-[#b49164] rounded-xl items-center flex">
      <div className="grow shrink basis-0 h-6 items-center flex">
        <h4 className="text-white text-base font-semibold font-Alexandria">
          {title}
        </h4>
      </div>
    </div>
  );
}
