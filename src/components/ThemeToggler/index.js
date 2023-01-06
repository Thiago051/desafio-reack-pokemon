import React, { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/ThemeContext";
import { Toggler } from "./style"

export const ThemeToggler = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    const handleClick = () => setTheme(theme === themes.light ? themes.dark : themes.light)

    return (
        <Toggler theme={theme}>
            <button onClick={handleClick}>
                {theme === themes.light ? 'Dark Mode' : 'Light Mode'}
            </button>
        </Toggler>
    )
}