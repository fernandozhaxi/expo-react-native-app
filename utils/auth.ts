import AsyncStorage from "@react-native-async-storage/async-storage";

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";
const USER_KEY = "user";

/** 保存 token */
export const setToken = async (data: { accessToken: string; refreshToken: string; user?: string }) => {
  await AsyncStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
  await AsyncStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken);
  if (data.user) {
    await AsyncStorage.setItem(USER_KEY, data.user);
  }
};

/** 获取 accessToken */
export const getAccessToken = () => {
  return AsyncStorage.getItem(ACCESS_TOKEN_KEY);
};

/** 获取 refreshToken */
export const getRefreshToken = () => {
  return AsyncStorage.getItem(REFRESH_TOKEN_KEY);
};

/** 获取用户 */
export const getUser = () => {
  return AsyncStorage.getItem(USER_KEY);
};

/** 删除 token */
export const removeToken = async () => {
  await AsyncStorage.multiRemove([ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, USER_KEY]);
};
