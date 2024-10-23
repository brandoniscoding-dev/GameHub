import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaDesktop } from 'react-icons/fa';

// Type pour le thème
type Theme = 'light' | 'dark' | 'system';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('system'); // Typage du state "theme"
  const [mounted, setMounted] = useState<boolean>(false); // Typage du state "mounted"

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    document.documentElement.classList.remove('light', 'dark');
    if (newTheme !== 'system') {
      document.documentElement.classList.add(newTheme);
    }
  };

  if (!mounted) return null; 

  return (
    <div className="flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-800 rounded-full w-36 shadow-md">
      <button
        onClick={() => handleThemeChange('dark')}
        className={`flex items-center justify-center p-2 transition-colors ${
          theme === 'dark' ? 'text-blue-500' : 'text-gray-400'
        }`}
      >
        <FaMoon className="h-6 w-6" />
      </button>

      <button
        onClick={() => handleThemeChange('system')}
        className={`flex items-center justify-center p-2 transition-colors ${
          theme === 'system' ? 'text-gray-500' : 'text-gray-400'
        }`}
      >
        <FaDesktop className="h-6 w-6" />
      </button>

      <button
        onClick={() => handleThemeChange('light')}
        className={`flex items-center justify-center p-2 transition-colors ${
          theme === 'light' ? 'text-yellow-500' : 'text-gray-400'
        }`}
      >
        <FaSun className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ThemeToggle;
