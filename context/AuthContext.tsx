import React, { createContext, useContext, useState, useEffect } from "react";
import { login as loginApi } from '~/api/auth'
import { getAccessToken, getRefreshToken, getUser, setToken, removeToken } from "@/utils/auth";

type AuthContextType = {
  user: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const [user, setUser] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  useEffect(() => {
    const loadAuth = async () => {
      const token = await getAccessToken();
      const rToken = await getRefreshToken();
      const u = await getUser();
      if (token && u) {
        setAccessToken(token);
        setRefreshToken(rToken);
        setUser(u);
      }
    };
    loadAuth();
  }, []);

  const login = async (username: string, password: string) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { token, refreshToken } = await loginApi({
          username, password
        })
        // 请求用户信息
        // setUser(data.user);
        setAccessToken(token);
        setRefreshToken(refreshToken);
        resolve(true)
      } catch (error) {
        console.log(error)
        reject()
      }
    })
  };

  const logout = async () => {
    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);
    await removeToken();
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, refreshToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
