import axiosInstance from "@/global/shadcn/lib/axiosInstance"

export const sendOTP = (phoneNumber: any) => {
    return axiosInstance.post("/auth/customer/send-otp/", {
        phone_number: phoneNumber,
    })
}