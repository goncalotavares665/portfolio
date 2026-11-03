import { useState } from "react"
import type { FormEvent } from "react"
import { profile } from "../data/profile"

export default function Contact() {
  const [copied,setCopied]=useState(false)

  const copy=async()=>{
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(()=>setCopied(false),1800)
    } catch {}
  }

  const send=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const data=new FormData(e.currentTarget)
    const subject=encodeURIComponent(`Contacto pelo portfolio: ${data.get("name")}`)
    const body=encodeURIComponent(String(data.get("message")))
    window.location.href=`mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section">
      <div className="container contact">
        <div>
          <h2>Contacto</h2>
          <p className="prose">Tens um projeto, uma oportunidade ou só uma pergunta? Envia-me uma mensagem.</p>
          <button className="btn" onClick={copy}>
            {copied?"Email copiado":profile.email}
          </button>
          <p className="social">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </div>
        <form onSubmit={send} className="form">
          <label>
            Nome
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            Mensagem
            <textarea name="message" rows={5} required />
          </label>
          <button className="btn primary" type="submit">Enviar mensagem</button>
        </form>
      </div>
    </section>
  )
}
