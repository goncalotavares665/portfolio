import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useTheme } from "./hooks/useTheme"
import { LanguageProvider } from "./i18n/LanguageContext"

export default function App() {
  const { theme, toggle } = useTheme()
  return (
    <LanguageProvider>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
