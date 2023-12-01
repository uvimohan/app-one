import React, { useState } from 'react'
import Acomponent from './components/Acomponent'
export const ThemeProvider = React.createContext();

function App() {
	const [isDarkTheme, setDarkTheme] = useState(true);
	const toggleTheme = () => {
		setDarkTheme(theme => !isDarkTheme);
	}

	const defaultStyle = {
		height: "100vh",
		padding: "1rem"
	}

	const darkThemeStyle = {
		color: "#fff",
		backgroundColor: "#000",
		height: "100vh",
		padding: "1rem"
	}

	return (
		<ThemeProvider.Provider value={isDarkTheme}>
			<div className="App" style={isDarkTheme ? darkThemeStyle : defaultStyle}>
				<h2>Hello, World!</h2>
				<button onClick={toggleTheme}>Toggle Theme</button>
				{
					isDarkTheme ? <h3>Login</h3> : <h3>Logout</h3>
				}
				<Acomponent />
			</div>
		</ThemeProvider.Provider>
	);
}

export default App;