import { useAuth } from "./AuthProvider";
import { Navigate } from "./Navigate";

export function Protected({ children }: { children: any }) {
  const { isAuth } = useAuth();

  return isAuth ? children : <Navigate href="/login" />;
}
