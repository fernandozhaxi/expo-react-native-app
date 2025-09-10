import { StyleSheet, View, Text } from 'react-native';
import { Link, Stack } from 'expo-router';
import { HeaderButton } from '~/components/HeaderButton';
export default function Profile() {
  return (
    <>
      <Stack.Screen options={{ title: 'Profile' }} />
      <View style={styles.container}>
        <View>
          设置

          <Link href="/setting" asChild>
            <HeaderButton />
          </Link>
        </View>
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
