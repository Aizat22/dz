import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {
    const [defaultTheme, setDefaultTheme] = useState(false)
    
    function changeThemeDark () {
        setDefaultTheme(true)
    }
    function changeThemeWhite(){
        setDefaultTheme(false)
    }
  return (
  <ThemeContext.Provider value={{changeThemeDark, changeThemeWhite, defaultTheme}}>
    {children}
  </ThemeContext.Provider>
    )
}

export default ThemeContextProvider