import { Container } from '@/components/Container';
import ProductsScreen from '@/pages/products';
import { Stack } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';

export default function Explore() {
  return (
    <>
      <Stack.Screen options={{ title: 'Explore page' }} />
      <Container>
        <ThemedText>
          Explore 页面
        </ThemedText>
        <ProductsScreen />
      </Container>
    </>
  );
}
