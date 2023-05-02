import React, { createContext, useState } from 'react'

type ThemeContextType = true | false;

export const AppContext = createContext<ThemeContextType | null>(false);

export const AppContextProvider = ({ children }: any) => {
  const [formSent, setFormSent] = useState(false);

  return (
    <AppContext.Provider value={formSent}>
      {children}
    </AppContext.Provider>
  );
};