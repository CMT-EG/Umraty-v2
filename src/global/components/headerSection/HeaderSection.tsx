const HeaderSection = ({ title, subtitle }) => {
  const words = title.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  return (
    <div className="text-center">
      <h1 className="mb-2 relative inline-block text-5xl font-extrabold">
        <span className="text-[#141416]">{firstWord}</span>{" "}
        <span className="text-primary-700 relative">{restWords}</span>
        <span className="absolute w-full bottom-0 start-3 h-[12px] bg-primary/30" />
      </h1>
      <p className="text-[#777E90] text-2xl font-normal">{subtitle}</p>
    </div>
  );
};

export default HeaderSection;
