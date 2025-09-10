import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { useColorScheme } from '~/lib/useColorScheme';

export default function Profile() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const { colors, dark } = useTheme();
  const colorScheme = useColorScheme();

  const MenuItem = ({ icon, text, onPress }) => (
    <TouchableOpacity
      style={[styles.menuItem, { borderBottomColor: colors.border }]}
      onPress={onPress}
    >
      <Feather name={icon} size={20} color={colors.text} style={styles.icon} />
      <Text style={[styles.menuText, { color: colors.text }]}>{text}</Text>
      <Feather name="chevron-right" size={20} color={colorScheme.colors.grey || colors.border} />
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {user ? (
        <>
          <View style={styles.userInfo}>
            <Text style={[styles.userName, { color: colors.text }]}>👤 {user}</Text>
          </View>

          <MenuItem
            icon="log-out"
            text="退出登录"
            onPress={logout}
          />
        </>
      ) : (
        <MenuItem
          icon="log-in"
          text="去登录"
          onPress={() => router.push("/sign-in")}
        />
      )}

      <MenuItem
        icon="settings"
        text="设置"
        onPress={() => router.push("/setting")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  userInfo: {
    paddingVertical: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  icon: {
    marginRight: 15,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
  },
});