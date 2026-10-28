import { createContext } from "react";

export type Role = "admin" | "sub_admin" | "user" | "business";

export type User = {
  id: number;
  name: string;
  email?: string | null;
  phone?: string | null;
  role: Role;
};

export type AuthContextType = {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string, user: User) => void;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | null>(null);
