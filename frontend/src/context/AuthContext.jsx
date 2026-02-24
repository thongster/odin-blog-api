import { createContext, useContext, useState } from 'react';

// createContext used to create shared state container
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // state is a function so it runs only once instead of on every render
  // find token from localStorage if logged in, returns null if not
  const [token, setToken] = useState(() => {
    return localStorage.getItem('token');
  });

  // login function to set token after successful login api call
  const login = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  // logout and remove token
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return <AuthContext value={{ token, login, logout }}>{children}</AuthContext>;
};

// custom hook, useContext to allow use of custom context function
const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
