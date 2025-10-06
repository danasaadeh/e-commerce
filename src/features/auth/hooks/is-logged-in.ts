import { useUserProfile } from "../services/queries";

export function useIsLoggedIn() {
  const { data: user, isLoading } = useUserProfile();
  return { isLoggedIn: Boolean(user), isLoading };
}
