"use client"
import "./style.css"
import { useTheme } from "next-themes"

const ToogleSwitch = () => {

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="checkbox-wrapper-5 flex border mt-1 p-2 rounded-full">
        <p className="pr-2">Light</p>
      <div className="check">
        <input 
          id="check-5" 
          type="checkbox" 
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <label htmlFor="check-5" />
      </div>
        <p className="pl-2">Dark</p>
    </div>
  );
}

export default ToogleSwitch;
