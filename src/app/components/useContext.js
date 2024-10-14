import { useContext } from "react" 
import { useState } from "react"

const ThemeContext = React.createContext()

function App() {
    const [theme, setTheme] = useState("light")

    return (
        <ThemeContext.provider value={{ theme, setTheme }}>
            <Toolbar/>
        </ThemeContext.provider>
    )
}

function Toolbar() {
    return (
        <div>
            <ThemeButton/>
        </div>
    )
}

function ThemeButton() {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}
        >
          Toggle Theme
        </button>
    )
}