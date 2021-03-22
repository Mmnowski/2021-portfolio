import { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components";
import '../styles/globals.css'
import { lightTheme, darkTheme, GlobalStyles } from "../styles/themeConfig"

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light")
  const [isMounted, setIsMounted] = useState(false)

  const toggleTheme = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      { isMounted && <>
        <button onClick={toggleTheme}>Theme test</button>
        <Component {...pageProps} />
      </> }
    </ThemeProvider>
  )
}

export default MyApp
