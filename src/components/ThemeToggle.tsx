import { FaSun, FaMoon, FaDesktop } from 'react-icons/fa';
import { useTheme } from 'next-themes';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme(); 

  return (
    <div className="flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-800 rounded-full w-36 shadow-md">
      <button
        onClick={() => setTheme('dark')}
        className={`flex items-center justify-center p-2 transition-colors ${
          theme === 'dark' ? 'text-blue-500' : 'text-gray-400'
        }`}
      >
        <FaMoon className="h-6 w-6" />
      </button>

      <button
        onClick={() => setTheme('system')}
        className={`flex items-center justify-center p-2 transition-colors ${
          theme === 'system' ? 'text-gray-500' : 'text-gray-400'
        }`}
      >
        <FaDesktop className="h-6 w-6" />
      </button>

      <button
        onClick={() => setTheme('light')}
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
