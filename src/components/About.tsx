import { profile } from "../data/profile"

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div>
          <h2>Sobre mim</h2>
          {profile.about.map(p=><p key={p} className="prose">{p}</p>)}
        </div>
        <div>
          <h3>Tecnologias</h3>
          <ul className="chips">
            {profile.skills.map(s=><li key={s} className="chip">{s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
