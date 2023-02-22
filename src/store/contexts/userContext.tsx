import React, { useContext, createContext } from "react";

type AuthUser = {
  email: string;
  lname: string;
  fname: string;
};

type UserContextType = {
  userData: AuthUser;
  setUserData: React.Dispatch<React.SetStateAction<AuthUser>>;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export function useUserContext() {
  return useContext(UserContext);
}
