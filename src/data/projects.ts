export interface Project{
  title:string
  description:string
  tech:string[]
  repo?:string
  demo?:string
}

export const projects:Project[]=[
  {
    title:"Logistics on Rails",
    description:"Plataforma que junta a gestão do tráfego ferroviário com a logística dos armazéns. Para analisar a rede de forma eficiente, usa árvores 2D e grafos como índices espaciais, e a ligação aos sensores foi feita em C e Assembly.",
    tech:["Java","SQL","C","Assembly","Linux"],
    repo:"https://github.com/ivasduarte/logistics-on-rails",
  },
  {
    title:"AISafe: simulador de controlo aéreo",
    description:"Simulação de voos e deteção de colisões em tempo real com um motor em C onde vários processos comunicam por memória partilhada e pipes. Os voos são descritos numa linguagem própria, com compilador feito em ANTLR, e o resto do sistema segue DDD.",
    tech:["Java","C","Linux"],
    repo:"https://github.com/ivasduarte/ai-safe",
  },
  {
    title:"Rede de um campus aeroportuário",
    description:"Rede completa para um terminal de aeroporto, desenhada e configurada de raiz em Cisco Packet Tracer. O endereçamento VLSM cobre mais de 8000 nós e o encaminhamento é dinâmico (OSPF). Por cima correm serviços DNS, DHCP e VoIP, e o acesso é controlado com NAT estático e ACLs estendidas. Inclui o desenho da cablagem estruturada.",
    tech:["Cisco Packet Tracer","VLSM","OSPF","DNS","DHCP","VoIP"],
    repo:"https://github.com/ivasduarte/airport-campus-network",
  },
]
