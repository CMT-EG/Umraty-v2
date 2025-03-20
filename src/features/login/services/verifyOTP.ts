import axiosInstance from "@/global/shadcn/lib/axiosInstance"

export const verifyOTP = async (otp: any, phoneNumber: any) => {
    const response = await axiosInstance.post("/auth/customer/verify-otp/", {
        phone_number: phoneNumber,
        otp
    })
    console.log("RES:", response)
    return response.data 
}
