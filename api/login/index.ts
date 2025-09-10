import request from "@/utils/axios";

/**
 * 用户名 + 密码登录
 * @param data
 * @returns
 */
export const login = (data: any) => {
  return request.post({ url: "/member/auth/login", data });
};

export const logoutApi = () => {
  return request.post({ url: "/member/auth/logout" });
};

/**
 *
 * @param data
 * @returns
 */
export const refreshTokenApi = (data: {
  refreshToken: string
}) => {
  return request.post({ url: "/member/auth/refresh-token", data });
};

// 获取用户权限信息
export const getInfoApi = () => {
  return request.get({ url: "/system/auth/get-permission-info" });
};
