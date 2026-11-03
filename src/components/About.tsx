import { profile } from "../data/profile"
import { useLang } from "../i18n/LanguageContext"

export default function About() {
  const { lang, t }=useLang()
  return (
    <section id="about" className="section">
      <div className="container about">
        <div>
          <h2>{t.about.title}</h2>
          {profile.about[lang].map(p=><p key={p} className="prose">{p}</p>)}
        </div>
        <div>
          <h3>{t.about.skills}</h3>
          <ul className="chips">
            {profile.skills.map(s=><li key={s} className="chip">{s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
