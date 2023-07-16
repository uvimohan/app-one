import React, { useState } from 'react'
import Acomponent from './components/Acomponent'
export const ThemeProvider = React.createContext();

function App() {
	const [isDarkTheme, setDarkTheme] = useState(true);
	const toggleTheme = () => {
		setDarkTheme(theme => !isDarkTheme);
	}

	return (
		<ThemeProvider.Provider value={isDarkTheme}>
			<div className="App">
				<h2>Hello, World!</h2>
				<button onClick={toggleTheme}>Toggle Theme</button>
				{
					isDarkTheme ? <h3>Dark</h3> : <h3>Light</h3>
				}
				<Acomponent />
			</div>
		</ThemeProvider.Provider>
	);
}

export default App;