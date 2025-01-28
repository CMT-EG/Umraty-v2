import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthState, LoginAuth } from "./AuthTypes";
import AuthManager from "./AuthManager";

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation<AuthState, unknown, LoginAuth>({
    mutationFn: (values) => AuthManager.login(values),
    onSuccess: (data) => {
      queryClient.setQueryData(["auth"], data);
    },
    retry: false,
  });
};
