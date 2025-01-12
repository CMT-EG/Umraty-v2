import { notFound } from "next/navigation";
import OTP from "./_blocks/Otp";

type Props = {
  searchParams: { [key: string]: string | undefined };
};
export default function Page({ searchParams }: Props) {
  const phoneNumber = searchParams["phone_number"];
  if (!phoneNumber) return notFound();

  return <OTP phoneNumber={phoneNumber} />;
}
