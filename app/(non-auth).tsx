import { Children, Stack } from "expo-router";
import { Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "../components/ThemeProvider";

export default function NonAuthLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        {Platform.OS === "web" ? (
          <Children />
        ) : (
          <Stack screenOptions={{ headerShown: false }} />
        )}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
