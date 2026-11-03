import { useEffect, useState } from "react"

const reduceMotion=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches

export function useTypewriter(words:string[],speed=70,pause=1500) {
  const [text,setText]=useState(()=>reduceMotion()?words[0]:"")

  useEffect(()=>{
    if (reduceMotion()) {
      setText(words[0])
      return
    }
    setText("")
    let w=0
    let i=0
    let deleting=false
    let timer=0

    const tick=()=>{
      const word=words[w]
      if (!deleting) {
        i++
        setText(word.slice(0,i))
        if (i===word.length) {
          deleting=true
          timer=window.setTimeout(tick,pause)
          return
        }
      } else {
        i--
        setText(word.slice(0,i))
        if (i===0) {
          deleting=false
          w=(w+1)%words.length
        }
      }
      timer=window.setTimeout(tick,deleting?speed/2:speed)
    }

    timer=window.setTimeout(tick,speed*6)
    return ()=>window.clearTimeout(timer)
  },[words,speed,pause])

  return text
}
