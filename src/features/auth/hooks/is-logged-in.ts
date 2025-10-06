import { useGetMeQuery } from "../services/queries";

export function useIsLoggedIn() {
  const { data: user, isLoading } = useGetMeQuery();
  return { isLoggedIn: Boolean(user), isLoading };
}
