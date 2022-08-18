import "../styles/styles.css"
import ThemeToggleButton from "../components/ThemeToggleButton";
import {useTheme} from "../context/ThemeContext";

export default function UseContext() {

    const theme = useTheme();

    const darkTheme = (theme === "dark");

    const styles = {
        backgroundColor: darkTheme ? "black" : "white",
        color: darkTheme ? "white" : "black"
    }

    return (
        <div className="UseContext" style={styles}>
            <ThemeToggleButton />
        </div>
    )
}