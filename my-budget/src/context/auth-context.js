import React from "react";

const AuthContext = React.createContext({
  currentUser: {},
  bankAccounts: [],
  refreshBankAccounts: () => {},
  register: (first_name, last_name, email, password) => {},
  login: (email, password) => {},
  logout: () => {},
});

export default AuthContext;
