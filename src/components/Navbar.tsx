import { useEffect } from "react"
import { profile } from "../data/profile"
import { useActiveSection } from "../hooks/useActiveSection"
import type { Theme } from "../hooks/useTheme"

const links=[
  { id:"about", label:"Sobre" },
  { id:"projects", label:"Projetos" },
  { id:"contact", label:"Contacto" },
]
const sectionIds=["home",...links.map(l=>l.id)]

interface Props {
  theme:Theme
  onToggleTheme:()=>void
}

export default function Navbar({ theme, onToggleTheme }:Props) {
  const active=useActiveSection(sectionIds)

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
        <a href="#home" className="brand" aria-label="Início">{profile.initials}</a>
        <nav aria-label="Principal">
          <ul className="nav-links">
            {links.map(l=>(
              <li key={l.id}>
                <a href={`#${l.id}`} className={active===l.id?"active":""}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={theme==="dark"?"Mudar para tema claro":"Mudar para tema escuro"}
        >
          {theme==="dark"?"☀":"☾"}
        </button>
      </div>
      <div className="progress" aria-hidden="true" />
    </header>
  )
}
