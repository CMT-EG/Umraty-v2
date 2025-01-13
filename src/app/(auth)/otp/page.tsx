import { notFound } from "next/navigation";
import OTP from "./_blocks/Otp";
import { use } from "react";

// Use the correct SearchParams type for Next.js 15
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

// For Next.js 15, we don't need to explicitly type params, but ensure props are passed properly
export default function Page({
  searchParams,
}: {
  searchParams: SearchParams; // Make sure this is the correct type for Next.js 15
}) {
  const searchParamsAll = use(searchParams)

  const phoneNumber = searchParamsAll["phone_number"];

  // Handle case where phoneNumber might be an array
  const normalizedPhoneNumber = Array.isArray(phoneNumber)
    ? phoneNumber[0]
    : phoneNumber;

  if (!normalizedPhoneNumber) return notFound();

  return <OTP phoneNumber={normalizedPhoneNumber} />;
}
