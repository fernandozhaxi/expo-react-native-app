import Constants from 'expo-constants';
const config: {
  base_url: string;
  result_code: number | string;
  default_headers: any;
  request_timeout: number;
} = {
  base_url: process.env.EXPO_PUBLIC_API_BASE_URL || '',
  result_code: 200,
  request_timeout: 30000,
  default_headers: "application/json" // application/x-www-form-urlencoded multipart/form-data
};

export { config };