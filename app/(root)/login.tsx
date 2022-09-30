import * as React from "react";
import { Link } from "expo-router";
import { Box } from "../../components/Box";
import { Text } from "../../components/Text";

export default function Login() {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text>Login page</Text>

      <Link href="/">home</Link>
    </Box>
  );
}
