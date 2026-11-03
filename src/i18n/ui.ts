export type Lang="pt"|"en"
export type Localized=Record<Lang,string>

const pt={
  nav:{
    about:"Sobre",
    projects:"Projetos",
    contact:"Contacto",
    home:"Início",
    main:"Principal",
    themeLight:"Mudar para tema claro",
    themeDark:"Mudar para tema escuro",
    switchLang:"Switch to English",
  },
  hero:{
    projects:"Ver projetos",
    contact:"Contactar",
  },
  about:{
    title:"Sobre mim",
    skills:"Tecnologias",
  },
  projects:{
    title:"Projetos",
    all:"Todos",
    filter:"Filtrar por tecnologia",
    code:"Código",
    demo:"Demo",
  },
  contact:{
    title:"Contacto",
    intro:"Tens um projeto, uma oportunidade ou só uma pergunta? Manda-me uma mensagem.",
    copied:"Email copiado",
    name:"Nome",
    message:"Mensagem",
    send:"Enviar mensagem",
    subject:"Contacto pelo portfolio",
  },
}

// "typeof pt" obriga o inglês a ter exatamente as mesmas chaves
const en:typeof pt={
  nav:{
    about:"About",
    projects:"Projects",
    contact:"Contact",
    home:"Home",
    main:"Main",
    themeLight:"Switch to light theme",
    themeDark:"Switch to dark theme",
    switchLang:"Mudar para português",
  },
  hero:{
    projects:"View projects",
    contact:"Get in touch",
  },
  about:{
    title:"About me",
    skills:"Technologies",
  },
  projects:{
    title:"Projects",
    all:"All",
    filter:"Filter by technology",
    code:"Code",
    demo:"Demo",
  },
  contact:{
    title:"Contact",
    intro:"Have a project, an opportunity or just a question? Send me a message.",
    copied:"Email copied",
    name:"Name",
    message:"Message",
    send:"Send message",
    subject:"Contact via portfolio",
  },
}

export const ui={ pt, en }