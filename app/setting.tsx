import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, ScrollView, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ThemeToggle } from "~/components/ThemeToggle";
import { useTheme } from "@react-navigation/native";
import { useColorScheme } from '~/lib/useColorScheme';
import { useRef, useCallback, useMemo } from 'react';
import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet';

export default function Setting() {
  const { colors, dark } = useTheme();
  const colorScheme = useColorScheme();

  const aboutModalRef = useRef<BottomSheetModal>(null);
  const privacyModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['40%', '75%'], []);

  // open modal
  const handleAboutPress = useCallback(() => {
    aboutModalRef.current?.present();
  }, []);

  const handlePrivacyPress = useCallback(() => {
    privacyModalRef.current?.present();
  }, []);

  // custom background
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
      />
    ),
    []
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar style={dark ? "light" : "dark"} />

      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <Text style={[styles.headerText, { color: colors.text }]}>设置</Text>
      </View>

      <View style={styles.menuContainer}>
        {/* 主题切换 */}
        <View style={[styles.menuItem, { borderBottomColor: colors.border }]}>
          <Feather name="moon" size={20} color={colors.text} style={styles.icon} />
          <Text style={[styles.menuText, { color: colors.text }]}>主题</Text>
          <View style={styles.toggleContainer}>
            <ThemeToggle />
          </View>
        </View>

        {/* 关于 */}
        <TouchableOpacity
          style={[styles.menuItem, { borderBottomColor: colors.border }]}
          onPress={handleAboutPress}
        >
          <Feather name="info" size={20} color={colors.text} style={styles.icon} />
          <Text style={[styles.menuText, { color: colors.text }]}>关于</Text>
          <Feather name="chevron-right" size={20} color={colorScheme.colors.grey || colors.border} />
        </TouchableOpacity>

        {/* 隐私政策 */}
        <TouchableOpacity
          style={[styles.menuItem, { borderBottomColor: colors.border }]}
          onPress={handlePrivacyPress}
        >
          <Feather name="shield" size={20} color={colors.text} style={styles.icon} />
          <Text style={[styles.menuText, { color: colors.text }]}>隐私政策</Text>
          <Feather name="chevron-right" size={20} color={colorScheme.colors.grey || colors.border} />
        </TouchableOpacity>
      </View>

      {/* About Modal */}
      <BottomSheetModal
        ref={aboutModalRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        backgroundStyle={{ backgroundColor: colors.card }}
        handleIndicatorStyle={{ backgroundColor: colors.text }}
      >
        <View style={styles.modalContent}>
          <View style={[styles.modalHeader, { borderBottomColor: colors.border }]}>
            <Text style={[styles.modalTitle, { color: colors.text }]}>关于</Text>
            <TouchableOpacity onPress={() => aboutModalRef.current?.dismiss()}>
              <Feather name="x" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.modalBody}>
            <Text style={[styles.modalText, { color: colors.text }]}>
              {"\n\n"}版本: 1.0.0
              {"\n\n"}开发团队: horizon
              {"\n\n"}联系方式: wzj@gmail.com
              {"\n\n"}© 2025 保留所有权利。
            </Text>
          </ScrollView>
        </View>
      </BottomSheetModal>

      {/* Privacy Modal */}
      <BottomSheetModal
        ref={privacyModalRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        backgroundStyle={{ backgroundColor: colors.card }}
        handleIndicatorStyle={{ backgroundColor: colors.text }}
      >
        <View style={styles.modalContent}>
          <View style={[styles.modalHeader, { borderBottomColor: colors.border }]}>
            <Text style={[styles.modalTitle, { color: colors.text }]}>隐私政策</Text>
            <TouchableOpacity onPress={() => privacyModalRef.current?.dismiss()}>
              <Feather name="x" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.modalBody}>
            <Text style={[styles.modalText, { color: colors.text }]}>
              隐私政策
              {"\n\n"}我们非常重视您的隐私。本隐私政策说明了我们如何收集、使用、披露、处理和保护您在使用我们的应用时提供给我们的信息。
              {"\n\n"}1. 信息收集
              {"\n"}我们可能会收集您在使用应用时提供的个人信息，如姓名、电子邮件地址等。
              {"\n\n"}2. 信息使用
              {"\n"}我们使用收集的信息来提供、维护和改进我们的服务，以及开发新服务。
              {"\n\n"}3. 信息共享
              {"\n"}我们不会与第三方共享您的个人信息，除非获得您的明确同意或法律要求。
              {"\n\n"}4. 数据安全
              {"\n"}我们采取合理的安全措施来保护您的信息免受未经授权的访问、修改或泄露。
              {"\n\n"}5. 政策变更
              {"\n"}我们可能会不时更新本隐私政策。我们会通过适当的方式通知您任何重大变更。
              {"\n\n"}如果您有任何关于隐私政策的问题，请联系我们
            </Text>
          </ScrollView>
        </View>
      </BottomSheetModal>
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
  modalContent: {
    flex: 1,
    paddingBottom: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalBody: {
    padding: 16,
  },
  modalText: {
    fontSize: 15,
    lineHeight: 22,
  },
});
