import { Children, Stack } from "expo-router";
import { Platform, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "../components/ThemeProvider";
import { Suspense } from "react";

const Header = () => {
  return <Text>Header</Text>;
};

export default function RootStack() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Header />
        <Suspense fallback="loading...">
          {Platform.OS === "web" ? (
            <Children />
          ) : (
            <Stack screenOptions={{ headerShown: false }} />
          )}
        </Suspense>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
