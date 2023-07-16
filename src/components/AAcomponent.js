import AAAcomponent from './AAAcomponent'
import React, { useContext } from 'react'
import { ThemeProvider } from '../App'

function AAcomponent() {
    const isDarkTheme = useContext(ThemeProvider);
    return (<fieldset>AAcomponent ({isDarkTheme ? "Dark": "Light"})<AAAcomponent /></fieldset>);
}

export default AAcomponent;