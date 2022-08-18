import "../styles/styles.css"
import {useTheme, useThemeToggle} from "../context/ThemeContext";

export default function ThemeToggleButton() {

    const theme = useTheme();
    const toggleTheme = useThemeToggle();

    const darkTheme = (theme === "dark");

    const styles = {
        backgroundColor: darkTheme ? "#222" : "#DDD",
        color: darkTheme ? "#DDD" : "#222"
    }

    return (
        <div
            className="ThemeToggleButton"
            onClick={toggleTheme}
            style={styles}
        >
            Toggle Theme
        </div>
    )
}