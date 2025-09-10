import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {user ? (
        <>
          <Text style={{ fontSize: 18, marginBottom: 20 }}>👤 用户名：{user}</Text>
          <Button title="设置" onPress={() => router.push("/setting")} />
          <View style={{ marginTop: 20 }}>
            <Button title="退出登录" onPress={logout} />
          </View>
        </>
      ) : (
        <Button title="去登录" onPress={() => router.push("/sign-in")} />
      )}
    </View>
  );
}
