import { createContext, useContext } from 'react';
import type { Credentials } from 'react-native-auth0';

export enum LoggedInStatus {
  OUT = 'OUT',
  IN = 'IN',
  LOADING = 'LOADING',
}

export type AuthContext = {
  loggedInUser: { email: string; id: string } | null;
  status: LoggedInStatus;
  logout: () => Promise<void>;
  login: ({
    email,
    code,
  }: {
    email: string;
    code: string;
  }) => Promise<Credentials | undefined>;
  sendCode: (email: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContext>({
  status: LoggedInStatus.OUT,
  loggedInUser: null,
  logout: async () => {},
  login: async () => undefined,
  sendCode: async () => {},
});

export const useAuthContext = () => useContext(AuthContext);
