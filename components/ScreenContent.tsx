import { StyleSheet, View } from 'react-native';

import { Text } from 'react-native';
type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, children }: ScreenContentProps) => {
  return (
    <View style={styles.container}>
      <Text className="text-center">
        {title}
      </Text>
      <View style={styles.separator} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  separator: {
    backgroundColor: '#d1d5db',
    height: 1,
    marginVertical: 30,
    width: '80%',
  },
});
