import { createContext, ReactNode, useState } from "react";

interface ThemeContextProps {
    children?: ReactNode;
}

interface StoreProps {
    darkMode: boolean;
    toggleDarkModeTheme: () => void;
}

const ThemeContext = createContext<StoreProps>({} as StoreProps);

const ThemeContextProvider = (props: ThemeContextProps) => {
    const [darkMode, setDarkModeTheme] = useState(false);
    const toggleDarkModeTheme = () => {
        setDarkModeTheme(!darkMode);
    }

    return (
        <div>
            <ThemeContext.Provider value={{darkMode, toggleDarkModeTheme}}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
}

export {ThemeContext, ThemeContextProvider}