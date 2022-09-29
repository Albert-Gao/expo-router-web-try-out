import { Children } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "../components/ThemeProvider";
import { AuthProvoider } from "../components/AuthProvider";
import { Protected } from "../components/Protected";

export default function AuthLayout() {
  return (
    <AuthProvoider>
      <SafeAreaProvider>
        <ThemeProvider>
          <Protected>
            <Children />
          </Protected>
        </ThemeProvider>
      </SafeAreaProvider>
    </AuthProvoider>
  );
}
