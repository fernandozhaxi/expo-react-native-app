import axios from 'axios';
import { Stack } from 'expo-router';
import { Container } from '~/components/Container';
import { Text } from 'react-native';

import ProductsScreen from '~/pages/products';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <Text>Home</Text>
        <ProductsScreen />
      </Container>
    </>
  );
}
