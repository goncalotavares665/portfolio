import { useMemo, useState } from "react"
import { projects } from "../data/projects"

const ALL="Todos"

export default function Projects() {
  const [filter,setFilter]=useState(ALL)
  const tags=useMemo(()=>[ALL,...Array.from(new Set(projects.flatMap(p=>p.tech)))],[])
  const visible=projects.filter(p=>filter===ALL||p.tech.includes(filter))

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projetos</h2>
        <div className="filters" role="group" aria-label="Filtrar por tecnologia">
          {tags.map(t=>(
            <button
              key={t}
              className={`chip filter ${filter===t?"on":""}`}
              aria-pressed={filter===t}
              onClick={()=>setFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="cards">
          {visible.map(p=>(
            <article key={p.title} className="card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="chips small">
                {p.tech.map(t=><li key={t} className="chip">{t}</li>)}
              </ul>
              <div className="card-links">
                {p.repo&&<a href={p.repo} target="_blank" rel="noreferrer">Código</a>}
                {p.demo&&<a href={p.demo} target="_blank" rel="noreferrer">Demo</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
