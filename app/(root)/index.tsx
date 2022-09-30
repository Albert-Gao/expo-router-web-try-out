import * as React from "react";
import { Link } from "expo-router";
import { Box } from "../../components/Box";
import { Text } from "../../components/Text";
import { Button } from "react-native";
import { browserLocalPersistence } from "firebase/auth";

export default function Home() {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text>Home page</Text>

      <Link href="/login">Login</Link>

      <Button
        title="Test Firebase Auth"
        onPress={() => {
          console.log("browserLocalPersistence", browserLocalPersistence);
        }}
      />
    </Box>
  );
}
