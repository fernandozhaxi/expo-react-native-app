import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ThemeToggle } from "~/components/ThemeToggle";
import { useTheme } from "@react-navigation/native";
import { useColorScheme } from '~/lib/useColorScheme';

export default function Setting() {
  const { colors, dark } = useTheme();
  const colorScheme = useColorScheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar style={dark ? "light" : "dark"} />

      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <Text style={[styles.headerText, { color: colors.text }]}>设置</Text>
      </View>

      <View style={styles.menuContainer}>
        {/* 主题切换项 */}
        <View style={[styles.menuItem, { borderBottomColor: colors.border }]}>
          <Feather name="moon" size={20} color={colors.text} style={styles.icon} />
          <Text style={[styles.menuText, { color: colors.text }]}>主题</Text>
          <View style={styles.toggleContainer}>
            <ThemeToggle />
          </View>
        </View>

        {/* 关于 */}
        <TouchableOpacity style={[styles.menuItem, { borderBottomColor: colors.border }]}>
          <Feather name="info" size={20} color={colors.text} style={styles.icon} />
          <Text style={[styles.menuText, { color: colors.text }]}>关于</Text>
          <Feather name="chevron-right" size={20} color={colorScheme.colors.grey || colors.border} />
        </TouchableOpacity>

        {/* 隐私政策 */}
        <TouchableOpacity style={[styles.menuItem, { borderBottomColor: colors.border }]}>
          <Feather name="shield" size={20} color={colors.text} style={styles.icon} />
          <Text style={[styles.menuText, { color: colors.text }]}>隐私政策</Text>
          <Feather name="chevron-right" size={20} color={colorScheme.colors.grey || colors.border} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  menuContainer: {
    paddingHorizontal: 20,
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
  toggleContainer: {
    marginRight: 5,
  },
});
