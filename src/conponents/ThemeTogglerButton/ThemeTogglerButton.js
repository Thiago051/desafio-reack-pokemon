import React, { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/themeToggler";
import { ThemeToggler, TogglerButton } from "./style"


export const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <ThemeToggler>
            <TogglerButton onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}
                style={{borderColor: theme.border, backgroundColor: theme.background, color: theme.color}}>
                {theme === themes.light ? 'Dark Mode' : 'Light Mode'}
            </TogglerButton>
        </ThemeToggler>
    )
}