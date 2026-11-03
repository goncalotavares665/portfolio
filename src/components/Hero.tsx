import { useRef } from "react"
import type { MouseEvent } from "react"
import { profile } from "../data/profile"
import { useTypewriter } from "../hooks/useTypewriter"

export default function Hero() {
  const ref=useRef<HTMLElement>(null)
  const role=useTypewriter(profile.roles)

  const onMove=(e:MouseEvent<HTMLElement>)=>{
    const el=ref.current
    if (!el) return
    const r=el.getBoundingClientRect()
    el.style.setProperty("--mx",`${e.clientX-r.left}px`)
    el.style.setProperty("--my",`${e.clientY-r.top}px`)
  }

  return (
    <section id="home" className="hero" ref={ref} onMouseMove={onMove}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <h1 className="hero-title">{profile.name}</h1>
        <p className="hero-role" aria-label={profile.roles.join(", ")}>
          <span aria-hidden="true">{role}</span>
          <span className="caret" aria-hidden="true" />
        </p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">Ver projetos</a>
          <a className="btn" href="#contact">Contactar</a>
        </div>
      </div>
    </section>
  )
}
