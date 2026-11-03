import { createContext, useContext, useEffect, useState } from "react"
import type { ReactNode } from "react"
import { ui } from "./ui"
import type { Lang } from "./ui"

const KEY="portfolio-lang"

function initialLang():Lang {
  try {
    const saved=localStorage.getItem(KEY)
    if (saved==="pt"||saved==="en") return saved
  } catch {}
  return navigator.language.toLowerCase().startsWith("pt")?"pt":"en"
}

interface Value {
  lang:Lang
  t:typeof ui.pt
  toggle:()=>void
}

const LanguageContext=createContext<Value|null>(null)

export function LanguageProvider({ children }:{ children:ReactNode }) {
  const [lang,setLang]=useState<Lang>(initialLang)

  useEffect(()=>{
    document.documentElement.lang=lang
    try { localStorage.setItem(KEY,lang) } catch {}
  },[lang])

  const toggle=()=>setLang(l=>l==="pt"?"en":"pt")

  return (
    <LanguageContext.Provider value={{ lang, t:ui[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx=useContext(LanguageContext)
  if (!ctx) throw new Error("useLang tem de ser usado dentro de LanguageProvider")
  return ctx
}
