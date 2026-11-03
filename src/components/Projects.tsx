import { useMemo, useState } from "react"
import { projects } from "../data/projects"
import { useLang } from "../i18n/LanguageContext"

const ALL="all"

export default function Projects() {
  const { lang, t:tr }=useLang()
  const [filter,setFilter]=useState(ALL)
  const tags=useMemo(()=>[ALL,...Array.from(new Set(projects.flatMap(p=>p.tech)))],[])
  const visible=projects.filter(p=>filter===ALL||p.tech.includes(filter))

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>{tr.projects.title}</h2>
        <div className="filters" role="group" aria-label={tr.projects.filter}>
          {tags.map(t=>(
            <button
              key={t}
              className={`chip filter ${filter===t?"on":""}`}
              aria-pressed={filter===t}
              onClick={()=>setFilter(t)}
            >
              {t===ALL?tr.projects.all:t}
            </button>
          ))}
        </div>
        <div className="cards">
          {visible.map(p=>(
            <article key={p.title.pt} className="card">
              <h3>{p.title[lang]}</h3>
              <p>{p.description[lang]}</p>
              <ul className="chips small">
                {p.tech.map(t=><li key={t} className="chip">{t}</li>)}
              </ul>
              <div className="card-links">
                {p.repo&&<a href={p.repo} target="_blank" rel="noreferrer">[{tr.projects.code}]</a>}
                {p.demo&&<a href={p.demo} target="_blank" rel="noreferrer">[{tr.projects.demo}]</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
