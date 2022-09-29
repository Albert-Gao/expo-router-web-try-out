import { useLink } from "expo-router";
import { Text, View, Button } from "react-native";
import { useAuth } from "../../components/AuthProvider";

export default function Dashboard() {
  const { logout } = useAuth();
  const link = useLink();

  return (
    <View>
      <Text>Dashboard</Text>

      <Button
        title="logout"
        onPress={() => {
          logout();
          link.replace("/login");
        }}
      />
    </View>
  );
}
