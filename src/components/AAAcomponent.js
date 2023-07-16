import AAAAcomponent from './AAAAcomponent'
import React, { useContext } from 'react'
import { ThemeProvider } from '../App'

function AAcomponent() {
    const isDarkTheme = useContext(ThemeProvider);
    return (<fieldset>AAAcomponent ({isDarkTheme ? "Dark": "Light"})<AAAAcomponent /></fieldset>);
}

export default AAcomponent;