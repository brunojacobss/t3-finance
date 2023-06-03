import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "./switch";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Switch
      checked={theme === "dark"}
      onCheckedChange={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    />
  );
};

export default ThemeSwitch;
