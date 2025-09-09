import { Container } from '@/components/Container';
import ProductsScreen from '@/pages/products';
import { Stack } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home page' }} />
      <Container>
        <ThemedText>
          Home页面1
        </ThemedText>
        <ProductsScreen />
      </Container>
    </>
  );
}
