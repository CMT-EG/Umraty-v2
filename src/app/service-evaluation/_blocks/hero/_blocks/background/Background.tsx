import Image from "next/image";
import AlMasjidAlHaramImg from "./assets/images/al-masjid-el-haram.webp";

export default function Background() {
  return (
    <>
      <Image
        width={1280}
        height={776}
        className="absolute inset-0 w-full h-full rounded-2xl -z-10"
        src={AlMasjidAlHaramImg}
        alt="Background"
      />
      <div className="absolute inset-0 bg-service rounded-2xl -z-10"></div>
    </>
  );
}
