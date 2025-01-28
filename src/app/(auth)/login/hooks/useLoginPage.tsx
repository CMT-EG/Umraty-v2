import { useForm } from "react-hook-form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLogin } from "../api/useAuthQuery";
import { toast } from "@/global/shadcn/hooks/use-toast";
import { useState } from "react";

const useLoginPage = () => {
  const { mutateAsync: mutateAsyncLogin, isPending: isPendingLogin } =
    useLogin();

  const { mutate: mutateOtp, isPending: isPendingOtp } = useLogin();
  const [open, setOpen] = useState(true);

  const formSchema = z.object({
    phone: z.union([
      z
        .string()
        .min(1, {
          message: "",
        })
        .regex(/^\d{1,14}$/, {
          message: "",
        }),
      z.number(),
    ]),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "email",
      email: "",
      phone: "",
      password: "",
    } as any,
  });

  const onSubmit = async (values: any) => {
    const response = await mutateAsyncLogin(values);
    console.log("response", response);

    // setLoginData({
    //   token: response?.token,
    //   message: response?.message,
    //   user: response?.user,
    // });
    axios.defaults.headers.common["Authorization"] = `Bearer ${response.token}`;

    // redirect("/", RedirectType.replace);

    toast({
      title: "",
    });
  };

  return {
    form,
    onSubmit,
    isPendingLogin,
    mutateOtp,
    isPendingOtp,
    open,
    setOpen,
  };
};

export default useLoginPage;
