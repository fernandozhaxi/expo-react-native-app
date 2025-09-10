import 'dotenv/config';

export default {
  expo: {
    name: 'horizon',
    slug: 'horizon',
    version: '1.0.0',
    scheme: 'horizon',
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-dev-launcher',
        {
          launchMode: 'most-recent',
        },
      ],
      'expo-web-browser',
    ],
    experiments: {
      typedRoutes: true,
      tsconfigPaths: true,
    },
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.mobile.mobile',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.mobile.mobile',
    },
    extra: {
      router: {},
      eas: {
        projectId: 'xxxx',
      },
      KEY: process.env.EXPO_PUBLIC_CONSUMER_KEY,
      SECRET: process.env.EXPO_PUBLIC_CONSUMER_SECRET,
      API_BASE_URL: process.env.EXPO_PUBLIC_API_BASE_URL,
    },
  },
};
