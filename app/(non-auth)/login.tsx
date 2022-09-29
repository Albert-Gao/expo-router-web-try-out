import * as React from "react";
import { Link, useLink } from "expo-router";
import { Box } from "../../components/Box";
import { Text } from "../../components/Text";
import { Button } from "react-native";
import { useAuth } from "../../components/AuthProvider";

export default function Login() {
  const { login } = useAuth();
  const link = useLink();

  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text>Login page</Text>

      <Button
        title="Login"
        onPress={() => {
          login();
          link.replace("/dashboard");
        }}
      />

      <Link href="/">home</Link>
    </Box>
  );
}
