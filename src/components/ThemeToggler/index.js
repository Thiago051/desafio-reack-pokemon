import React, { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/ThemeContext";
import { Toggler } from "./style"

export const ThemeToggler = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    const handleChange = () => setTheme(theme === themes.light ? themes.dark : themes.light)

    return (
        <Toggler>
            <input type="checkbox" onChange={handleChange}/>
            <span></span>
        </Toggler>    
    )
}