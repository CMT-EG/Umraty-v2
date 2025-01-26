const HeaderSectionTwo = ({ prevText, title, subtitle }) => {
  const words = title.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  return (
    <div className="flex flex-col gap-4 text-start">
      <span className="text-[#777E90] text-sm font-bold">{prevText}</span>
      <h1 className="relative inline-block text-5xl font-extrabold">
        <span className="text-[#141416]">{firstWord}</span>
        <span className="text-primary-700 relative">{restWords}</span>
      </h1>
      <p className="text-[#353945] text-base font-normal max-w-[640px]">
        {subtitle}
      </p>
    </div>
  );
};

export default HeaderSectionTwo;
