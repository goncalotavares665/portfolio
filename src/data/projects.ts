import type { Localized } from "../i18n/ui"

export interface Project {
  title: Localized
  description: Localized
  tech: string[]
  repo?: string
  demo?: string
}

export const projects:Project[]=[
  {
    title: {
      pt: "All Aboard",
      en: "All Aboard",
    },
    description: {
      pt: "Simulador de redes ferroviárias inspirado no RailRoad Tycoon. Inclui um editor de mapas e cenários e um motor de simulação em JavaFX, com algoritmos de grafos implementados de raiz (conectividade, percursos eulerianos de manutenção, caminhos mais curtos), análise de complexidade no pior caso e modelação estatística em Python. Desenvolvido com Scrum e TDD.",
      en: "Railway network simulator inspired by RailRoad Tycoon. Features a JavaFX map/scenario editor and simulation engine, with graph algorithms implemented from scratch (connectivity, Eulerian maintenance routes, shortest paths), worst-case complexity analysis, and statistical modelling in Python. Built with Scrum and TDD.",
    },
    tech: ["Java","JavaFX","Graph Algorithms","Python","JUnit 5","Scrum"],
    repo: "https://github.com/goncalotavares665/all-aboard",
  },
  {
    title: {
      pt: "Logistics on Rails",
      en: "Logistics on Rails",
    },
    description: {
      pt: "Plataforma que junta a gestão do tráfego ferroviário com a logística dos armazéns. Para analisar a rede de forma eficiente, usa árvores 2D e grafos como índices espaciais, e a ligação aos sensores foi feita em C e Assembly.",
      en: "Railway traffic and warehouse logistics management system. Implemented spatial indexes (2D-Trees, Graphs) for network analysis and integrated low-level hardware (C/Assembly) for sensor management.",
    },
    tech: ["Java","SQL","C","Assembly","Linux","Scrum"],
    repo: "https://github.com/ivasduarte/logistics-on-rails",
  },
  {
    title: {
      pt: "Rede de um campus aeroportuário",
      en: "Airport Campus Network",
    },
    description: {
      pt: "Rede completa para um terminal de aeroporto, desenhada e configurada de raiz em Cisco Packet Tracer. O endereçamento VLSM cobre mais de 8000 nós e o encaminhamento é dinâmico (OSPF). Por cima correm serviços DNS, DHCP e VoIP, e o acesso é controlado com NAT estático e ACLs estendidas. Inclui o desenho da cablagem estruturada.",
      en: "End-to-end design and configuration of an airport terminal network (Cisco Packet Tracer). VLSM subnetting (8000+ nodes), OSPF dynamic routing, and structural cabling design. Deployed enterprise services (DNS, DHCP, Cisco VoIP) and secured the infrastructure using Static NAT and Extended ACLs.",
    },
    tech: ["Cisco Packet Tracer","VLSM","OSPF","DNS","DHCP","Cisco VoIP","Scrum"],
    repo: "https://github.com/ivasduarte/airport-campus-network",
  },
  {
    title: {
      pt: "AISafe: simulador de controlo aéreo",
      en: "AISafe - Air Traffic Control Simulator",
    },
    description: {
      pt: "Como simular muitos voos ao mesmo tempo e detetar colisões em tempo real? Com um motor em C onde vários processos comunicam por memória partilhada e pipes. Os voos são descritos numa linguagem própria, com compilador feito em ANTLR, e o resto do sistema segue DDD.",
      en: "High-concurrency flight simulator. Built a custom DSL compiler with ANTLR and a concurrent C engine using processes, shared memory, and pipes for real-time collision detection. Structured with DDD.",
    },
    tech: ["Java","C","ANTLR","Linux","Scrum"],
    repo: "https://github.com/ivasduarte/ai-safe",
  },
  {
    title: {
      pt: "LaPrizza",
      en: "LaPrizza",
    },
    description: {
      pt: "Um sistema integrado de gestão de restaurantes com operações baseadas na web, personalização interativa de pizzas em 3D, agendamento da cozinha com inteligência artificial e administração do sistema.",
      en: "An integrated restaurant management system featuring web-based operations, interactive 3D pizza customization, AI-powered kitchen scheduling, and system administration.",
    },
    tech: ["JavaScript","Node.js","Express","MongoDB","Three.js","React","Scrum"],
    repo: "https://github.com/ivasduarte/laprizza",
  },
]