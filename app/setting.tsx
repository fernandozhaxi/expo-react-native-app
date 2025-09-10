import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';

import { ThemeToggle } from '~/components/ThemeToggle';

export default function Modal() {
  return (
    <>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

      <View>
        <Text>主题</Text>
        <ThemeToggle />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
