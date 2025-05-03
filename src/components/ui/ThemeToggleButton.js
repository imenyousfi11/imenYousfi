import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { Button } from "antd";
function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      aria-label="Toggle Theme"
      onClick={toggleTheme}
      color="#fff"
      bg="transparent"
      width={{ base: "35vw", sm: "35vw", md: "35vw", lg: "auto" }}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </Button>
  );
}

export default ThemeToggleButton;
