import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeProvider'

const Header = () => {
    const {defaultTheme, changeThemeDark, changeThemeWhite} = useContext(ThemeContext)
  return (
    <div>
        {defaultTheme ? (<h1>white theme</h1>) : (<h1>dark theme</h1>)}
        <button onClick={changeThemeDark}>dark theme</button>
        <button onClick={changeThemeWhite}>white theme</button>
    </div>
  )
}

export default Header