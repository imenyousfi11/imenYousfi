import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { useTheme } from '../context/ThemeContext';

const ThemeConfigProvider = ({ children }) => {
  const { theme: currentTheme } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm: currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: currentTheme === 'dark' ? '#722ed1' : '#1890ff',
          colorBgContainer: currentTheme === 'dark' ? '#1f1f1f' : '#ffffff',
          colorBgLayout: currentTheme === 'dark' ? '#0a0a0a' : '#f8f9fa',
          colorText: currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.85)' : '#242734',
          colorBorder: currentTheme === 'dark' ? '#424242' : '#d9d9d9',
        },
        components: {
          Layout: {
            headerBg: '#282a37',
            footerBg: '#282a37',
            colorText: 'rgba(255, 255, 255, 0.85)',
            bodyBg: currentTheme === 'dark' ? '#0a0a0a' : '#f8f9fa',
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
export default ThemeConfigProvider;