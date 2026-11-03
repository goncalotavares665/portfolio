import { useEffect } from "react"
import { profile } from "../data/profile"
import { useActiveSection } from "../hooks/useActiveSection"
import type { Theme } from "../hooks/useTheme"
import { useLang } from "../i18n/LanguageContext"

const links=[
  { id:"about" },
  { id:"projects" },
  { id:"contact" },
] as const
const sectionIds=["home",...links.map(l=>l.id)]

interface Props {
  theme:Theme
  onToggleTheme:()=>void
}

export default function Navbar({ theme, onToggleTheme }:Props) {
  const active=useActiveSection(sectionIds)
  const { lang, t, toggle:toggleLang }=useLang()

  useEffect(()=>{
    const root=document.documentElement
    const onScroll=()=>{
      const max=root.scrollHeight-root.clientHeight
      root.style.setProperty("--progress",`${max>0?(root.scrollTop/max)*100:0}%`)
    }
    onScroll()
    window.addEventListener("scroll",onScroll,{ passive:true })
    return ()=>window.removeEventListener("scroll",onScroll)
  },[])

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="brand" aria-label={t.nav.home}>{profile.initials}</a>
        <nav aria-label={t.nav.main}>
          <ul className="nav-links">
            {links.map(l=>(
              <li key={l.id}>
                <a href={`#${l.id}`} className={active===l.id?"active":""}>{t.nav[l.id]}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme==="dark"?t.nav.themeLight:t.nav.themeDark}
          >
            {theme==="dark"?"☀":"☾"}
          </button>
          <button
            className="lang-toggle"
            onClick={toggleLang}
            aria-label={t.nav.switchLang}
            lang={lang==="pt"?"en":"pt"}
          >
            <span className={lang==="pt"?"on":""}>PT</span>
            <span className={lang==="en"?"on":""}>EN</span>
          </button>
        </div>
      </div>
      <div className="progress" aria-hidden="true" />
    </header>
  )
}
