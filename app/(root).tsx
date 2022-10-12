import { Children, Stack } from "expo-router";
import { Platform } from "react-native";
import { ThemeProvider } from "../components/ThemeProvider";
import { Suspense } from "react";
import { StacksProvider } from "@mobily/stacks";

export default function Root() {
  return (
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
  );
}
