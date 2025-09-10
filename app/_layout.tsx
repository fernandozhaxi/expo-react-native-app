import '../global.css';
import 'expo-dev-client';
import { ThemeProvider as NavThemeProvider } from '@react-navigation/native';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as PaperProvider } from "react-native-paper";
import Toast from 'react-native-toast-message';
import { GlobalConfirm } from "@/components/GlobalConfirm";
import { setRouter } from '@/utils/GlobalRouter';

import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';


import { cn } from '~/lib/cn';
import { useColorScheme, useInitialAndroidBarSync } from '~/lib/useColorScheme';
import { NAV_THEME } from '~/theme';

import { AuthProvider } from "../context/AuthContext";

export {
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  useInitialAndroidBarSync();
  const { colorScheme, isDarkColorScheme } = useColorScheme();
  const router = useRouter()
  setRouter(router) // save to global

  return (
    <>
      <StatusBar
        key={`root-status-bar-${isDarkColorScheme ? 'light' : 'dark'}`}
        style={isDarkColorScheme ? 'light' : 'dark'}
      />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <ActionSheetProvider>
            <NavThemeProvider value={NAV_THEME[colorScheme]}>
              <PaperProvider>
                <AuthProvider >
                  <Stack screenOptions={SCREEN_OPTIONS}>
                    <Stack.Screen name="(tabs)" options={TABS_OPTIONS} />
                  </Stack>
                  <GlobalConfirm />
                </AuthProvider>
              </PaperProvider>
            </NavThemeProvider>
          </ActionSheetProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
      <Toast />
    </>
  );
}

const SCREEN_OPTIONS = {
  animation: 'ios_from_right', // for android
} as const;

const TABS_OPTIONS = {
  headerShown: false,
} as const;
