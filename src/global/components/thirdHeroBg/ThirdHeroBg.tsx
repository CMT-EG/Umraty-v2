type Props = {
  children?: React.ReactNode;
};

export default function ThirdHeroBg({ children }: Props) {
  return (
    <div className="relative z-10 w-full h-rvh bg-cover bg-thirdHero-background bg-center pb-[70px]">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {children}
    </div>
  );
}
