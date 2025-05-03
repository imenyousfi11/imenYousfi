
import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import ThemeConfigProvider from '../config/ThemeConfigProvider';

export const AppProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <ThemeConfigProvider>
        {children}
      </ThemeConfigProvider>
    </ThemeProvider>
  );
};