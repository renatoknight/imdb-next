import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeDetector = () => {
  const { theme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    const activeTheme = theme === 'system' ? systemTheme : theme;
    setCurrentTheme(activeTheme);
  }, [theme, systemTheme]);

  return (
    <div>
      <p>O tema atual do sistema é: {currentTheme}</p>
    </div>
  );
};

export default ThemeDetector;