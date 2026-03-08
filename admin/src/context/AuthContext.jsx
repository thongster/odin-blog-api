import { createContext, useContext, useState } from 'react';

// createContext used to create shared state container
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // state is a function so it runs only once instead of on every render
  // find token from localStorage if logged in, returns null if not
  const [token, setToken] = useState(() => {
    return localStorage.getItem('token');
  });

  // parse user string into an object so we can use it
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // login function to set token after successful login api call
  const login = (dataFromBackend) => {
    localStorage.setItem('token', dataFromBackend.token);
    localStorage.setItem('user', JSON.stringify(dataFromBackend.user));

    setToken(dataFromBackend.token);
    setUser(dataFromBackend.user);
  };

  // logout and remove token
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext value={{ token, user, login, logout }}>{children}</AuthContext>
  );
};

// custom hook, useContext to allow use of custom context function
const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
