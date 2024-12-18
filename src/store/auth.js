export const login = (username, token) => {
  localStorage.setItem('username', username);
  localStorage.setItem('token', token);
};

export const saveUsername = (username) => {
  localStorage.setItem('username', username);
};

export const logout = () => {
  localStorage.removeItem('username');
  localStorage.removeItem('token');
};

export const isLoggedIn = () => {
  return !!localStorage.getItem('token');
};

export const getUsername = () => {
  return localStorage.getItem('username');
};