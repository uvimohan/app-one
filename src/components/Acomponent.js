import React, { useContext } from 'react'
import AAcomponent from './AAcomponent'
import { ThemeProvider } from '../App'

function Acomponent() {
    const isDarkTheme = useContext(ThemeProvider);
    return (<fieldset>Acomponent ({isDarkTheme ? "Dark": "Light"})<AAcomponent /></fieldset>);
}

export default Acomponent;