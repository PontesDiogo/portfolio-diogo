import gibiSiteImage from "../assets/images/gibi-site.png";
import gibiAdminImage from "../assets/images/gibi-admin.png";
import formularioImagee from "../assets/images/formulario-preenchido.png";
import mapaImage from "../assets/images/mapa-formulario.png";


import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "sos-bichos",
    index: "01",
    category: "Produto digital",
    title: "SOS Bichos",
    headline: "Registrar uma ocorrência é só o começo.",
    description:
      "Plataforma web criada para centralizar o registro e o acompanhamento de ocorrências relacionadas a animais, conectando a experiência do cidadão à gestão administrativa.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "Leaflet",
      "Netlify",
    ],
    images: [
      {
        src: formularioImagee,
        alt: "Formulário de registro de ocorrência preenchido",
      },
      {
        src: mapaImage,
        alt: "Mapa de localização do formulário",
      },
    ],
    highlights: [
      {
        title: "Dois perfis de acesso",
        description:
          "Fluxos distintos para cidadãos e administradores, com permissões e responsabilidades próprias.",
      },
      {
        title: "Múltiplas imagens",
        description:
          "Seleção, pré-visualização, armazenamento e exibição de várias fotos associadas à ocorrência.",
      },
      {
        title: "Localização",
        description:
          "Seleção do endereço por mapa, geolocalização e geocodificação reversa.",
      },
      {
        title: "Acompanhamento",
        description:
          "Consulta e atualização do andamento das ocorrências por meio de diferentes estados.",
      },
    ],
    links: [
      {
        label: "Visitar aplicação",
        url: "https://sos-bichos.netlify.app",
        external: true,
      },
    ],
    status: "Protótipo funcional e publicado",
    attribution:
      "Projeto acadêmico desenvolvido em dupla. Diogo assumiu a liderança técnica e foi responsável pela maior parte da implementação.",
  },
  {
    id: "gibi-carpintaria",
    index: "02",
    category: "Solução profissional",
    title: "Gibi Carpintaria",
    headline: "Uma vitrine própria para os projetos da empresa.",
    description:
      "Site institucional com área administrativa para gerenciamento de projetos, imagens, publicação e destaques da página inicial.",
    technologies: ["React", "TypeScript", "Supabase", "Netlify"],
    images: [
      {
        src: gibiSiteImage,
        alt: "Página pública do site institucional da Gibi Carpintaria",
      },
      {
        src: gibiAdminImage,
        alt: "Área administrativa utilizada para gerenciar projetos da Gibi Carpintaria",
      },
    ],
    highlights: [
      {
        title: "Gestão de conteúdo",
        description:
          "Usuários autorizados podem cadastrar, editar e excluir projetos realizados.",
      },
      {
        title: "Publicação controlada",
        description:
          "Projetos podem permanecer cadastrados internamente sem aparecer no site público.",
      },
      {
        title: "Destaques da home",
        description:
          "Publicações selecionadas podem receber prioridade na página inicial.",
      },
      {
        title: "Uso real",
        description:
          "A plataforma é utilizada pela empresa e atualizada por usuários internos.",
      },
    ],
    links: [
      {
        label: "Visitar site",
        url: "https://gibicarpintaria.com",
        external: true,
      },
    ],
    status: "Aplicação publicada e utilizada pela empresa",
    attribution:
      "Ideia, análise da necessidade, concepção e desenvolvimento integral realizados por Diogo Garcia.",
  },
  {
    id: "controle-entregas",
    index: "03",
    category: "Análise de processos",
    title: "Controle de Entregas por Obra",
    headline: "Já entregamos todo o material desta obra?",
    description:
      "Estudo de caso sobre o controle de entregas parciais, rastreabilidade por obra e cálculo do saldo de materiais ainda pendentes.",
    technologies: ["Análise de requisitos", "Fluxos", "Regras de negócio", "ERP"],
    highlights: [
      {
        title: "Problema operacional",
        description:
          "Entregas parciais dificultavam a confirmação do total já enviado para cada obra.",
      },
      {
        title: "Fluxo estruturado",
        description:
          "Pedidos, itens, entregas e quantidades pendentes foram organizados em um único modelo.",
      },
      {
        title: "Relatórios",
        description:
          "A solução prevê consulta do histórico e do saldo de materiais por obra.",
      },
      {
        title: "Aplicação no ERP",
        description:
          "A proposta foi incorporada ao sistema interno utilizado pela empresa.",
      },
    ],
    links: [],
    status: "Solução concebida e aplicada no ERP interno",
    attribution:
      "Diogo identificou o problema e concebeu os fluxos, regras e arquitetura funcional. A implementação técnica no ERP foi realizada por outro desenvolvedor, em Delphi.",
  },
  {
    id: "dijkstra",
    index: "04",
    category: "Lógica e algoritmos",
    title: "Visualizador de Dijkstra",
    headline:
      "Quando a teoria fez sentido depois que pude vê-la funcionando.",
    description:
      "Aplicação visual criada para demonstrar a busca pelo caminho de menor custo entre dois pontos usando o algoritmo de Dijkstra.",
    technologies: ["Python", "Grafos", "Dijkstra", "Visualização interativa"],
    highlights: [
      {
        title: "Aplicação da teoria",
        description:
          "Um conceito abstrato da disciplina foi transformado em uma experiência visual.",
      },
      {
        title: "Caminho mínimo",
        description:
          "O sistema compara custos e apresenta o trajeto mais eficiente entre os pontos.",
      },
      {
        title: "Desenvolvimento integral",
        description:
          "A proposta, a interface e a implementação foram realizadas por Diogo.",
      },
      {
        title: "Apresentação técnica",
        description:
          "O projeto também foi utilizado para explicar o algoritmo à turma.",
      },
    ],
    links: [
      {
        label: "Ver repositório",
        url: "https://github.com/PontesDiogo/Theory-of-graphs",
        external: true,
      },
    ],
    status: "Projeto acadêmico",
    attribution:
      "Projeto realizado em grupo. Diogo propôs o tema, escolheu o algoritmo, desenvolveu a aplicação e realizou a apresentação prática.",
  },
];