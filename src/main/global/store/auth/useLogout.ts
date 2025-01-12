import { useRouter } from "next/navigation";

import { useAuth } from "./useAuth";

const useLogout = () => {
  const router = useRouter();
  const logout = useAuth((state) => state.logout);

  const handleLogOut = () => {
    logout();
    router.replace("/auth/login");
  };

  return { handleLogOut };
};

export default useLogout;
