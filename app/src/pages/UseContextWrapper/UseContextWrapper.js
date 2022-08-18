import ThemeProvider from "./context/ThemeContext"
import UseContext from "./pages/UseContext"

export default function UseContextWrapper() {

    return (
        <ThemeProvider>
            <UseContext />
        </ThemeProvider>
    )
}