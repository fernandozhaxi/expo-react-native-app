import { Stack } from 'expo-router';
import { Container } from '~/components/Container';
import ProductsScreen from '~/pages/products';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ProductsScreen />
      </Container>
    </>
  );
}
