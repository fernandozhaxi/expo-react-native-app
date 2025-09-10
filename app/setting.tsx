import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';

import { ThemeToggle } from '~/components/ThemeToggle';

export default function Modal() {
  return (
    <>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>⚙️ 设置页面</Text>
      </View>
      <View>
        <Text>主题</Text>
        <ThemeToggle />
      </View>
    </>
  );
}
