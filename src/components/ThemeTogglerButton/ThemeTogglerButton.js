import React, { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/ThemeContext";
import { ThemeToggler, TogglerButton } from "./style"

export const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    const handleClick = () => setTheme(theme === themes.light ? themes.dark : themes.light)

    return (
        <ThemeToggler>
            <TogglerButton onClick={handleClick}
                style={{ borderColor: theme.border, backgroundColor: theme.background, color: theme.color }}>
                {theme === themes.light ? 'Dark Mode' : 'Light Mode'}
            </TogglerButton>
        </ThemeToggler>
    )
}