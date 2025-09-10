import Constants from 'expo-constants';
const { API_BASE_URL } = Constants.expoConfig?.extra || {};

const config: {
  base_url: string;
  result_code: number | string;
  default_headers: any;
  request_timeout: number;
} = {
  base_url: API_BASE_URL,
  result_code: 200,
  request_timeout: 30000,
  default_headers: "application/json" // application/x-www-form-urlencoded multipart/form-data
};

export { config };