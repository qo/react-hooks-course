import {createContext, useContext, useState} from "react";

const ThemeContext = createContext();
const ThemeToggleContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeToggle() {
    return useContext(ThemeToggleContext);
}

export default function ThemeProvider({children}) {

    const [theme, setTheme] = useState("dark");

    function toggleTheme() {
        setTheme(theme => {
            return (
                theme === "dark" ?
                    "light"
                    :
                    "dark"
            );
        })
    }

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeToggleContext.Provider value={toggleTheme}>
                {children}
            </ThemeToggleContext.Provider>
        </ThemeContext.Provider>
    )

}