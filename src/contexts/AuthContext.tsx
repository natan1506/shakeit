import { createContext, ReactNode } from "react";

interface AuthContextData {
  username: string;
  name: string;
  avatar: string;
}

interface AuthProviderProps {
  children: ReactNode;
  username: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ 
  children,
  ...rest
}: AuthProviderProps) {}
