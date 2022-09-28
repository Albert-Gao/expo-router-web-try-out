import { Children, Stack } from "expo-router";
import { Platform, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "../components/ThemeProvider";
import { Suspense } from "react";
import { StacksProvider } from "@mobily/stacks";

export default function RootStack() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StacksProvider>
          <Suspense fallback="loading...">
            {Platform.OS === "web" ? (
              <Children />
            ) : (
              <Stack screenOptions={{ headerShown: false }} />
            )}
          </Suspense>
        </StacksProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
