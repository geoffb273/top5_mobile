import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { AuthContext, LoggedInStatus } from '../context/AuthContext';
import { useAuth0 } from 'react-native-auth0';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { authorizeWithEmail, sendEmailCode, clearSession, user } = useAuth0();
  const [status, setStatus] = useState<LoggedInStatus>(LoggedInStatus.OUT);
  const [loggedInUser, setLoggedInUser] = useState<{
    email: string;
    id: string;
  } | null>(null);

  const sendCode = useCallback(async (email: string) => {
    console.log('', email);
    return sendEmailCode({ email, send: 'code' });
  }, []);

  const login = useCallback(
    async ({ email, code }: { email: string; code: string }) => {
      return authorizeWithEmail({ email, code });
    },
    [],
  );

  const logout = useCallback(() => {
    setStatus(LoggedInStatus.OUT);
    return clearSession();
  }, []);

  useEffect(() => {
    if (user != null && user.email != null) {
      setLoggedInUser({ id: user.email, email: user.email });
      setStatus(LoggedInStatus.IN);
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ status, loggedInUser, sendCode, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
