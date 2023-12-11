import {createContext, useContext, useState} from 'react';


export const useTheme = () => useContext(ThemeContext);

export const ThemeContext = createContext(undefined)

export const ThemeProvider = ({ children }) => {
    const[theme, setTheme] = useState('light')
    return(
    <ThemeContext.Provider value={{theme, toggleTheme:()=> setTheme(theme === 'light'?'dark':'light')}}>
        {children}
    </ThemeContext.Provider>

    )
}


