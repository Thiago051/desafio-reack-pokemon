import { createContext, useState } from "react"

export const themes = {
    light: {
        color: '#000',
        border: '#000',
        background: '#eee'
    },
    dark: {
        color: '#fff',
        border: '#fff',
        background: '#24292e'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.dark)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}