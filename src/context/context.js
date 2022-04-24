import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

const AppProvider = ({ children }) => {


  return (
    <Context.Provider
      value={{

      }}
    >
      {children}
    </Context.Provider>
  );
};
export const AppState = () => {
  return useContext(Context);
};

export default AppProvider;
