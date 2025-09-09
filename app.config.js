import "dotenv/config";

console.log("Api Base:", process.env.EXPO_PUBLIC_API_BASE_URL);
console.log("Key: ", process.env.EXPO_PUBLIC_CONSUMER_KEY);
console.log("Secret: ", process.env.EXPO_PUBLIC_CONSUMER_SECRET);
export default {
  expo: {
    name: "horizon-app",
    slug: "horizon-app",
    version: "1.0.0",
    scheme: "horizon-app",
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-dev-launcher",
        {
          launchMode: "most-recent",
        },
      ],
      "expo-web-browser",
    ],
    experiments: {
      typedRoutes: true,
      tsconfigPaths: true,
    },
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.shashankraj007281.woocommercedemo",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.shashankraj007281.woocommercedemo",
    },
    extra: {
      router: {},
      eas: {
        projectId: "0344a868-6a4f-479d-8ecc-67621d40cad5",
      },
      KEY: process.env.EXPO_PUBLIC_CONSUMER_KEY,
      SECRET: process.env.EXPO_PUBLIC_CONSUMER_SECRET,
      API_BASE_URL: process.env.EXPO_PUBLIC_API_BASE_URL,
    },
  },
};
