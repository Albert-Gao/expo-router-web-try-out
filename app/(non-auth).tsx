import { Children, Stack } from "expo-router";
import { Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvoider } from "../components/AuthProvider";
import { ThemeProvider } from "../components/ThemeProvider";

export default function NonAuthLayout() {
  return (
    <AuthProvoider>
      <SafeAreaProvider>
        <ThemeProvider>
          {Platform.OS === "web" ? (
            <Children />
          ) : (
            <Stack screenOptions={{ headerShown: false }} />
          )}
        </ThemeProvider>
      </SafeAreaProvider>
    </AuthProvoider>
  );
}
