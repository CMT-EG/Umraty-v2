"use client";
import logoImg from "@/global/assets/logo/logo-dark.png";
import authPageImg from "./assets/images/auth.jpeg";
import useLoginPage from "./hooks/useLoginPage";
import { Form } from "@/global/shadcn/ui/form";
import Image from "next/image";
import TButton from "@/global/components/TForm/TButton";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import WelcomeTitle from "@/global/components/welcomeTitle/WelcomeTitle";
import TPhoneField from "@/global/components/TForm/TPhoneField";
import { OtpForm } from "./_blocks/otpForm/OtpForm";

const LoginPage = () => {
  const {
    form,
    onSubmit,
    isPendingLogin,
    open,
    setOpen,
    mutateOtp,
    isPendingOtp,
  } = useLoginPage();

  return (
    <div className="w-full h-authvh my-5 flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative flex justify-center items-center w-fit gap-8 p-5 border shadow-2xl m-10 rounded-2xl h-full mx-auto overflow-hidden bg-white"
        >
          <Link
            href={"/"}
            className="absolute top-2 start-2 h-6 justify-end items-center gap-2 inline-flex w-fit p-5"
          >
            <MoveRight className="!w-4 !h-6 relative" />
            <div className="text-right text-[#7b7b7b] font-bold">
              الرجوع للخلف
            </div>
          </Link>
          <div className="flex flex-col gap-16 relative w-fit  lg:w-[550px] shrink-0">
            {/* <div className="absolute top-2 start-2">
              <ChangeLang />
            </div> */}

            <div className="flex flex-col gap-5 pt-10">
              <div className="flex justify-start">
                <Image width={212} height={98} src={logoImg} alt="" />
              </div>
              <WelcomeTitle
                title={"مرحبًا بك في موقع عمرتي 👋"}
                subTitle={"الرجاء إدخال رقم الهاتف لتسجيل الدخول"}
              />
              <div className="flex flex-col md:flex-row justify-between gap-5 w-full">
                <TPhoneField
                  form={form}
                  name="phone"
                  label={"رقم الهاتف"}
                  placeholder="ادخل هاتفك"
                  fromItemClassName="w-full"
                />
              </div>
              <OtpForm
                title={"تحقق من رقم هاتفك"}
                subTitle={
                  "تم ارسال رمز تاكيد على رقم هاتفك, تحقق من هاتفك يرجى إدخاله أدناه"
                }
                form={form}
                mutate={mutateOtp}
                isPending={isPendingOtp}
                open={open}
                setOpen={setOpen}
                phoneNumber={form.watch("phone")}
              />
            </div>

            <div className="flex flex-col gap-2 mt-6">
              <TButton
                disabled={isPendingLogin}
                type="submit"
                className="w-full px-6 py-6 tracking-wide text-[#fbfcfc] text-base font-extrabold capitalize transition-colors duration-300 transform bg-primary hover:primary-foreground focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 rounded-full"
              >
                تسجيل الدخول
              </TButton>
              <Link
                href="/"
                // variant={"ghost"}
                className="text-center text-[#8b6343] text-lg font-bold"
              >
                الدخول كضيف
              </Link>
            </div>
          </div>

          <div className="hidden bg-cover lg:block w-full h-full rounded-xl">
            <Image
              width={826}
              height={960}
              className="w-full h-full rounded-xl object-cover"
              src={authPageImg}
              alt="kabba"
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginPage;
