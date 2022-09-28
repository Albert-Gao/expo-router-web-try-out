import * as React from "react";
import { Link } from "expo-router";
import { Box } from "../../components/Box";
import { Text } from "../../components/Text";

export default function Home() {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text>Home page</Text>

      <Link href="/login">Login</Link>
    </Box>
  );
}
