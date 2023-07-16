import React, { useContext } from 'react'
import { ThemeProvider } from '../App'

function AAAAcomponent() {
    const isDarkTheme = useContext(ThemeProvider);
    return (<fieldset>AAAAcomponent ({isDarkTheme ? "Dark": "Light"})</fieldset>);
}

export default AAAAcomponent;