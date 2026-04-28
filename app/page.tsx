"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "motion/react"
import {
  BookOpen,
  CalendarDays,
  Clock,
  ExternalLink,
  Feather,
  GraduationCap,
  Landmark,
  LibraryBig,
  Mail,
  MapPin,
  Microscope,
  Newspaper,
  Quote,
  ScrollText,
  Sparkles,
  Users,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Highlighter } from "@/components/ui/highlighter"
import { Header } from "@/components/Header"
import SplitText from "@/components/SplitText"
import { cn } from "@/lib/utils"

type Member = {
  name: string
  role: string
  note?: string
  bio?: string
  fullBio?: string
}

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  children: React.ReactNode
  className?: string
  dark?: boolean
}

const highlights = [
  {
    title: "Grupos de estudo",
    text: "Reuniões acadêmicas regulares para intercâmbio de ideias e aprofundamento das pesquisas em curso.",
    icon: BookOpen,
  },
  {
    title: "Colóquios e seminários",
    text: "Encontros com especialistas e pesquisadores para discutir temas de vanguarda em fenomenologia.",
    icon: Users,
  },
  {
    title: "Parcerias estratégicas",
    text: "Diálogo com núcleos e instituições como GT22 Anpepp e GT Fenomenologia Anpof.",
    icon: Landmark,
  },
  {
    title: "Psicologia UFPR",
    text: "Laboratório vinculado ao Departamento de Psicologia da Universidade Federal do Paraná.",
    icon: GraduationCap,
  },
  {
    title: "Revista FHC",
    text: "Publicação científica editada pelo LabFeno e APFeno, em parceria com Abrapfe.",
    icon: Newspaper,
  },
]

const researchLines = [
  "Fenomenologia, Psicologia e Saúde Mental: Pesquisa, Intervenção e Processos Compreensivos",
  "Fenomenologia e Ciências do Homem",
  "Fenomenologia da Experiência Religiosa e Saúde Mental",
  "História do Movimento Fenomenológico no Brasil",
  "Fenomenologia e Educação",
]

const partnershipLinks = [
  {
    title: "GT22 - Fenomenologia, Saúde e Processos Psicológicos",
    label: "Anpepp",
    href: "https://www.cadastro.anpepp.org.br/grupotrabalho/view?ID_GRUPO_TRABALHO=32",
  },
  {
    title: "Grupo de Trabalho de Fenomenologia",
    label: "Anpof",
    href: "http://anpof.org/portal/index.php/en/gt-fenomenologia/category-items/36-fenomenologia-gt/253-participantes",
  },
]

const coordinators: Member[] = [
  {
    name: "Adriano Furtado Holanda",
    role: "Coordenador",
    note: "Professor, pesquisador e orientador da UFPR",
    bio: "Graduado em Psicologia, mestre em Psicologia Clínica e doutor em Psicologia. Atua em fenomenologia, psicoterapia, psicologia da religião, história da psicologia, processos de saúde/doença e saúde mental.",
    fullBio:
      "Graduado em Psicologia (1987), Mestrado em Psicologia Clínica pela Universidade de Brasília (1993) e Doutorado em Psicologia pela PUC-Campinas (2002). Professor Associado do Departamento de Psicologia, Orientador de Mestrado e Doutorado nos Programas de Pós-Graduação de Psicologia e de Educação na Universidade Federal do Paraná. Editor Chefe das revistas Phenomenology, Humanities and Sciences, Editor da Revista da Abordagem Gestáltica; e Editor Associado da revista Interação em Psicologia (UFPR). Coordenador do Laboratório de Fenomenologia e Subjetividade (LabFeno-UFPR). Coordenador (2016-2020) e Vice-Coordenador (2020-2024) do Grupo de Trabalho Fenomenologia, Saúde e Processos Psicológicos (Associação Nacional de Pesquisa e Pós-graduação em Psicologia, ANPEPP) e membro do Grupo de Trabalho de Fenomenologia (ANPOF). Tem experiência na área de Psicologia, atuando principalmente nos seguintes temas: Fenomenologia, Fenomenologia Husserliana, Psicoterapias, Abordagens Fenomenológicas e Existenciais, Psicologia da Religião, História da Psicologia e Pesquisa Fenomenológica, Psicologia Clínica, Processos de Saúde/Doença, Psicopatologia e Saúde Mental.",
  },
  {
    name: "Carlos Serbena",
    role: "Vice-Coordenador",
    note: "Professor adjunto da UFPR",
    bio: "Graduado em Engenharia Elétrica e Psicologia, mestre em Psicologia e doutor interdisciplinar em Ciências Humanas. Pesquisa epistemologia da psicologia, imaginário, arquétipo, mito e ideologia.",
    fullBio:
      "Possui graduação em Engenharia Elétrica pela Universidade Federal do Paraná (1989), graduação em Psicologia pela Universidade Federal do Paraná (1994), mestrado em Psicologia pela Universidade Federal de Santa Catarina (1999) e doutorado interdisciplinar em Ciências Humanas pela Universidade Federal de Santa Catarina (2006). Foi suplente da chefia do Departamento de Psicologia da UFPR e vice-coordenador do Programa de Pós-graduação em Psicologia da UFPR. Tem experiência na área de Psicologia, com ênfase em Psicologia Analítica, atuando principalmente nos seguintes temas: grupo vivencial de sonhos na Psicologia Analítica; relações entre Fenomenologia, Psicologia Analítica e Psicopatologia; cultura e grupos em Psicologia Analítica. Atualmente é professor associado da Universidade Federal do Paraná, professor permanente do Programa de Pós-Graduação (mestrado e doutorado) em Psicologia da UFPR e coordenador do GT Epistemologia e interfaces da Psicologia Analítica na ANPEPP.",
  },
]

const memberGroups = [
  {
    title: "Secretaria",
    members: [
      { name: "Mariana Puchivailo", role: "Primeira Secretária" },
      { name: "Camila Mühl", role: "Segunda Secretária" },
      { name: "Fabiane Villatore Orengo", role: "Tesoureira" },
    ],
  },
  {
    title: "Doutorandos",
    members: [
      { name: "Dionatans G. Quinhones", role: "PPG-Psicologia" },
      { name: "Eliane Terezinha Piccolotto", role: "PPG-Educação" },
      { name: "Maira Isabel Saczuk", role: "PPG-Educação" },
      { name: "Neemyas Kerr Batalha dos Santos", role: "PPG-Psicologia" },
      { name: "Tiago de Matos Peixoto", role: "PPG-Psicologia" },
    ],
  },
  {
    title: "Mestrandos",
    members: [
      { name: "Brenda Santos Vieira", role: "PPG-Psicologia" },
      { name: "Gabriela Antunes Soares", role: "PPG-Psicologia" },
      { name: "Jeniffer Antunes Prestes", role: "PPG-Educação" },
      { name: "Leonan Ferrari Felipin", role: "PPG-Educação" },
      { name: "Letícia Joana Jardim", role: "PPG-Psicologia" },
      { name: "Luciana Maísa da Silva Sydor", role: "PPG-Psicologia" },
    ],
  },
]

const alumniGroups = [
  {
    title: "Mestres egressos",
    members: [
      "Andrea de Alvarenga Lima",
      "André Fukuda Maeji",
      "Alex Ander de Souza Orengo",
      "Bruno Jardini Mäder",
      "Cairu Vieira Corrêa",
      "Camila Mühl",
      "Diego do Nascimento Mendonça",
      "Douglas Fernando Henrique de Oliveira",
      "Fabiane Orengo",
      "Guilherme Bertassoni da Silva",
      "Isabela da Silva Perotti",
      "Jennifer da Silva Moreira",
      "Karine Costa Lima Pereira",
      "Karoline Stoltz Schleder",
      "Lázaro Castro Silva Nascimento",
      "Maitê Fernanda Johnson",
      "Marcella Balbino Stenico",
      "Marcelo Costa Benatto",
      "Mariana Cardoso Puchivailo",
      "Nicole Krachenski",
      "Pedro Luis Tizo Santos",
      "Poliana Gomes Goslar",
      "Rodrigo Pereira Ceccon",
      "Sandra Parra Arrieta",
      "Thauana Santos de Araujo",
      "Thalia Gabriella de Sousa",
      "Vanessa Shigunov",
      "Vitor Hugo Lopes Paese",
      "Yuri Alexandre Ferrete",
    ],
  },
  {
    title: "Doutores egressos",
    members: [
      "Adriana Patrícia Egg-Serra",
      "Alan Muller",
      "Fabiane Villatore Orengo",
      "Guilherme Bertassoni da Silva",
      "Jerry Adriano Raimundo",
      "Luciana Elisabete Savaris",
    ],
  },
  {
    title: "Outros membros",
    members: [
      "André Fukuda Maeji",
      "Mariana Vieira Pajaro",
      "Pablo Ferrer Rodrigues",
      "Renato Henriques da Silva",
      "Adriana Patrícia Egg Serra",
      "Pedro Vanni",
    ],
  },
]

const bibliographyThemes = [
  "Clínica e Formação em Psicologia",
  "Educação",
  "Ética",
  "Fenomenologia e Psicologia Fenomenológica",
  "Gestalt-Terapia, ACP e Psicologia Humanista",
  "História e Epistemologia da Psicologia",
  "Logoterapia",
  "Pesquisa Qualitativa e Fenomenológica",
  "Psicologia, Religião e Espiritualidade",
  "Saúde Mental e Psicopatologia",
]

const graduationCourses = [
  "HP354 - Psicologia Fenomenológico-Existencial I (1o semestre/2024)",
  "HP819 - Tópicos Especiais em Psicologia II (1o Sem/2024) [Temas Contemporâneos em Psicologia e Saúde]",
  "HP339 - Introdução à Psicologia Fenomenológico-Existencial (2o Semestre/2023)",
  "HP354 - Psicologia Fenomenológico-Existencial I (1o Semestre/2022)",
  "HP665 - Psicologia & Religião (1o Semestre/2022)",
  "HP339 - Introdução à Psicologia Fenomenológico Existencial - 2o Semestre/2021 [Jan/Mai, 2022]",
  "HP354 - Psicologia Fenomenológico-Existencial II - 2o Semestre2021 [Jan/Mai, 2022]",
  "HP819 - Tópicos Especiais em Psicologia II - ERE 2021",
  "HP354 - Psicologia Fenomenológico-Existencial II_ERE 2021/2",
  "HP381 - Epistemologia da Psicologia - ERE 2021",
  "HP381 - Psicologia Fenomenológico-Existencial I - ERE 2021",
  "HP 339 - Introdução à Psicologia Fenomenológica Existencial - ERE(2020)",
  "HP665 - Psicologia e Religião - Período Especial (2020)",
  "HP361 - Psicopatologia I - Período Especial (2020)",
  "HP361 - Psicopatologia I - ERE (2020)",
  "HP074 - Seminários de Psicologia e Sociedade II (2018/1)",
  "Mini-Curso Pesquisa Qualitativa (2018/2)",
  "HP336 - Estágio Básico III (2018/2)",
  "HP381 - Epistemologia da Psicologia (2018/2)",
  "HP385 - Fundamentos da Fenomenologia (2018/2)",
  "HP258 - Introdução à Psicologia Fenomenológico-Existencial (2017/1)",
  "HP308 - Psicologia e Religião (2017/1)",
  "HP308 - Psicologia e Religião (2015/1)",
  "HP261 - Metodologia de Pesquisa II (2014)",
  "HP308 - Psicologia e Religião (2013/2)",
  "Psicologia Fenomenologia-Existencial I",
  "Psicologia Fenomenologia-Existencial III",
  "Psicologia Fenomenologia-Existencial I",
]

const graduateCourses = [
  "PSIC-7009 - Fenomenologia e Psicologia: Teoria e Método/2024 (Mestrado e Doutorado)",
  "PSIC-7057 - Tópicos Avançados em Psicologia III (Teoria e Crítica da Psicologia Humanista: O Legado de Carl Rogers)",
  "PSIC-7009 - Fenomenologia e Psicologia: Teoria e Método, 2021 (Mestrado e Doutorado)",
  "EDUC7109 - Tópicos Especiais em Cognição, Aprendizagem e Desenvolvimento Humanos II (Fenomenologia, Pesquisa e Educação), 2020",
  "Epistemologia da Psicologia",
  "Fenomenologia e Psicologia - Teoria e Método",
  "Tópicos Avançados em Clínica II",
  "PSIC7020 - Teoria e Pesquisa em Psicologia Clínica (2020) - 705709",
]

const events = [
  {
    year: "2009",
    title:
      "I Congresso Sul-Brasileiro de Fenomenologia / I Congresso de Estudos Fenomenológicos do Paraná",
    theme: "Fenomenologia e Psicologia: Diálogos e Interlocuções",
    date: "05 a 07 de julho",
    place: "UFPR/Curitiba, PR",
    note: "Anais I CSBF",
  },
  {
    year: "2011",
    title:
      "II Congresso Sul-Brasileiro de Fenomenologia / II Congresso de Estudos Fenomenológicos do Paraná",
    theme: "Vínculo, Relação e Diálogo",
    date: "02 a 04 de junho",
    place: "UFPR/Curitiba, PR",
    note: "Anais II CSBF",
  },
  {
    year: "2012",
    title: "I Encontro de Psicologia, Fenomenologia e Realidade Brasileira",
    theme: "Aspectos sócio-culturais e Políticas Públicas",
    date: "19 e 20 de março",
    place: "UFTM, MG",
  },
  {
    year: "2013",
    title: "II Encontro de Psicologia, Fenomenologia e Realidade Brasileira",
    theme: "Consciência, Mente e Corpo: Fenomenologia e Psicologia Cognitiva",
    date: "31 de julho a 02 de agosto",
    place: "UFU/Uberlândia, MG",
  },
  {
    year: "2013",
    title:
      "I Congresso Brasileiro de Psicologia & Fenomenologia / II Congresso Sul-Brasileiro de Fenomenologia",
    theme: "Corpo, Existência e Cognição: Fundamentos e Diversidade",
    date: "12 a 14 de agosto",
    place: "Curitiba, PR",
    note: "Anais I CBPF & III CSBF",
  },
  {
    year: "2014",
    title:
      "I Simpósio Internacional de Fenomenologia e Ciências Cognitivas / III Encontro de Psicologia, Fenomenologia e Realidade Brasileira",
    theme: "Cognição, Ontologia e Antropologia Filosófica",
    date: "05 a 08 de agosto",
    place: "UFU/Uberlândia, MG",
  },
  {
    year: "2015",
    title:
      "II Congresso Brasileiro de Psicologia & Fenomenologia / IV Congresso Sul-Brasileiro de Fenomenologia",
    date: "27 a 29 de julho",
    place: "Curitiba, PR",
    note: "Anais II CBPF & IV CSBF",
  },
  {
    year: "2016",
    title: "IV Congresso Sul-Brasileiro de Fenomenologia",
    theme: "Fenomenologia, Psicologia e Ciências Humanas",
    date: "10 a 12 de novembro",
    place: "FAE-Curitiba, PR",
    note: "Anais V CSBF",
  },
  {
    year: "2017",
    title:
      "I Congresso Internacional de Fenomenologia & Psicologia / II Simpósio Internacional de Fenomenologia e Ciências Cognitivas / IV Encontro de Psicologia, Fenomenologia e Realidade Brasileira",
    theme: "Fenomenologia, Ciência e Sociedade: Diálogos Necessários",
    date: "14 a 16 de setembro",
    place: "UnB/Brasília, DF",
    note: "Anais do I Congresso Internacional de Fenomenologia & Fenomenologia",
    href: "https://www.cfenopsi.com/",
  },
  {
    year: "2017",
    title:
      "I Congresso Internacional de Fenomenologia Existencial / III Congresso Brasileiro de Psicologia & Fenomenologia / II Encontro Nacional do GT de Psicologia & Fenomenologia (ANPEPP)",
    theme: "O Desassossego Humano na Contemporaneidade",
    date: "20 a 22 de setembro",
    place: "Natal, RN",
    note: "Anais III CBPF & I CIFE",
  },
  {
    year: "2019",
    title:
      "II Congresso Internacional de Fenomenologia & Psicologia / V Congresso Brasileiro de Psicologia & Fenomenologia / VI Congresso Sul-Brasileiro de Fenomenologia",
  },
]

const graduationProgramHref =
  "https://1drv.ms/u/s!Am_JSTLFsy5tjd4O3eFDzuWS7nsNeQ?e=sQHF94"

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/LabFeno" },
  { label: "Instagram", href: "https://www.instagram.com/labfeno" },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC9kDT5xHVsYuvz3TddS65OQ",
  },
]

const phenomenologyResourceGroups = [
  {
    title: "Arquivos Husserl Internacionais",
    items: [
      {
        name: "Archives Husserl de Paris (ENS)",
        description:
          "Centro da fenomenologia francesa, com foco na recepção de Husserl e Merleau-Ponty.",
        href: "http://www.umr8547.ens.fr/spip.php?rubrique21",
      },
      {
        name: "Husserl Archives Leuven",
        description:
          "Arquivo original com os 40.000 folhetos de taquigrafia de Husserl.",
        href: "https://hiw.kuleuven.be/hua/",
      },
      {
        name: "Husserl-Archiv Freiburg",
        description:
          "Arquivo ligado ao período em que Husserl lecionou, com foco também na relação Husserl-Heidegger.",
        href: "https://www.husserlarchiv.uni-freiburg.de/",
      },
      {
        name: "Husserl-Archiv Köln",
        description:
          "Especializado na edição das Husserliana e em fenomenologia social.",
        href: "https://husserl.phil-fak.uni-koeln.de/",
      },
      {
        name: "Husserl Archives at the New School",
        description:
          "Herança da fenomenologia nos EUA, incluindo Alfred Schütz e Gurwitsch.",
        href: "https://www.newschool.edu/nssr/husserl-archives/",
      },
    ],
  },
  {
    title: "Associações e círculos acadêmicos",
    items: [
      {
        name: "AFFEN (Portugal)",
        description:
          "Associação Portuguesa de Filosofia Fenomenológica, voltada à investigação em língua portuguesa.",
        href: "http://affen-portugal.com/",
      },
      {
        name: "Sociedade Brasileira de Fenomenologia (SBFen)",
        description: "Órgão agregador de pesquisadores brasileiros.",
        href: "https://www.sebfen.com.br/",
      },
      {
        name: "Círculo Latino-Americano de Fenomenologia (CLAFEN)",
        description:
          "Comunidades de língua espanhola e portuguesa das Américas.",
        href: "http://clafen.org/",
      },
      {
        name: "GT Fenomenologia - ANPOF",
        description:
          "Grupo de trabalho oficial da pós-graduação em filosofia no Brasil.",
        href: "https://www.anpof.org.br/",
      },
      {
        name: "Círculo Fenomenológico da Vida e da Clínica (USP)",
        description:
          "Foco em aplicação clínica da fenomenologia, Daseinsanalyse e Psicologia.",
        href: "https://pos.fflch.usp.br/",
      },
    ],
  },
  {
    title: "Ferramentas, dicionários e bibliografias",
    items: [
      {
        name: "The Husserl Page",
        description:
          "Portal de referência do Prof. Bob Sandmeyer, útil para cronologias.",
        href: "http://www.husserlpage.com/",
      },
      {
        name: "Open Commons of Phenomenology (OPHEN)",
        description: "Grande repositório digital de textos fenomenológicos.",
        href: "https://www.ophen.org/",
      },
      {
        name: "Diccionario Husserl (Antonio Zirión)",
        description:
          "Glossário-guia para tradução e precisão conceitual de termos alemães.",
        href: "http://www.diccionariohusserl.org/",
      },
      {
        name: "Husserliana",
        description:
          "Catálogo oficial das obras completas publicadas pela Springer.",
        href: "https://www.springer.com/series/6059",
      },
    ],
  },
  {
    title: "Biblioteca de acesso livre",
    items: [
      {
        name: "LusoSofia",
        description: "Biblioteca online de filosofia e cultura.",
        href: "http://www.lusosofia.net/",
      },
      {
        name: "Revista da Abordagem Gestáltica",
        description: "Periódico de interseção clínica e fenomenológica.",
        href: "http://itgt.com.br/publicacoes/revista-da-abordagem-gestaltica/",
      },
      {
        name: "Studia Phaenomenologica",
        description:
          "Publicação internacional dedicada à fenomenologia contemporânea.",
        href: "https://zetabooks.com/journal/studia-phaenomenologica/",
      },
      {
        name: "A Crise da Humanidade Europeia (Husserl)",
        description: "Texto fundamental sobre a teleologia da razão.",
        href: "http://www.lusosofia.net/autor.php?autorid=56",
      },
    ],
  },
  {
    title: "Videoteca técnica e acadêmica",
    items: [
      {
        name: "Curso de Introdução - Prof. Tommy Akira Goto",
        description:
          "Série sobre Psicologia Fenomenológica e fundamentos do método.",
        href: "https://www.youtube.com/results?search_query=Tommy+Akira+Goto+Fenomenologia",
      },
      {
        name: "Fenomenologia e Existencialismo - Franklin Leopoldo e Silva",
        description:
          "Aula sobre a transição do método fenomenológico para o existencialismo.",
        href: "https://www.youtube.com/watch?v=S8L_wP26tO4",
      },
      {
        name: "Tempo e Narrativa - Rui Josgrilberg",
        description: "Análise da obra de Paul Ricoeur.",
        href: "https://www.youtube.com/watch?v=rA9M3B8C1l0",
      },
      {
        name: "A Experiência Religiosa - Angela Ales Bello",
        description: "Seminário sobre psicologia e fenomenologia da religião.",
        href: "https://www.youtube.com/watch?v=XzWjH8Qvj40",
      },
      {
        name: "Psicologia e Fenomenologia - Adriano Holanda",
        description:
          "Palestras sobre espiritualidade e clínica das subjetividades.",
        href: "https://www.youtube.com/c/AdrianoHolanda",
      },
      {
        name: "Diálogo Aberto - Jaakko Seikkula",
        description: "Compreensão fenomenológica da psicose e saúde mental.",
        href: "https://www.youtube.com/watch?v=XzWjH8Qvj40",
      },
    ],
  },
]

const journalDialogSections = [
  {
    title: "Revista e linha editorial",
    paragraphs: [
      "Phenomenology, Humanities and Sciences - Fenomenologia, Humanidades e Ciências - ISSN 2675-4673 - é editada pelo Laboratório de Fenomenologia e Subjetividade (LabFeno) e Associação de Pesquisas em Fenomenologia (APFeno), em parceria com a Associação Brasileira de Psicologia Fenomenológica (Abrapfe).",
      "A revista divulga a Fenomenologia e suas aplicações às diversas ciências. Suas diretrizes são definidas pela Editoria e pelo Conselho Editorial, com psicólogos, filósofos e profissionais das áreas da saúde e educação.",
    ],
    points: [
      "Fenomenologia",
      "Psicologia Fenomenológica",
      "Filosofias da Existência",
      "Psicologias Humanistas e Existenciais",
      "Pesquisa Qualitativa e Fenomenológica em Ciências da Saúde, Humanas, Sociais e Educação",
    ],
  },
  {
    title: "Submissões e condições",
    paragraphs: [
      "O cadastro no sistema da revista, com login e senha, é obrigatório para submeter trabalhos e acompanhar o processo editorial.",
      "A submissão deve ser original e inédita, não estar em avaliação por outra revista, estar em formato Microsoft Word, OpenOffice ou RTF, informar URLs das referências quando possível e seguir as Diretrizes Para Autores.",
    ],
    points: [
      "Relato de pesquisa",
      "Revisão Crítica de Literatura",
      "Estudo Teórico ou Histórico",
      "Texto Clássico",
    ],
  },
  {
    title: "Política editorial e avaliação",
    paragraphs: [
      "Os manuscritos são submetidos eletronicamente à apreciação do Conselho Editorial, com pelo menos dois pareceres por proposta e possibilidade de consultores ad hoc.",
      "A revista adota acesso aberto e licença Creative Commons BY-NC, exceto quando indicado de modo diferente.",
      "O processo usa double blind review. São considerados atualidade, relevância, originalidade, consistência científica e atendimento às normas éticas.",
    ],
    points: [
      "Pareceres possíveis: aprovação, aprovação condicionada a pequena reformulação, recomendação de nova submissão após extensa reformulação ou recusa.",
      "Correções devem retornar em 30 dias para pequena reformulação e 60 dias para extensa reformulação.",
      "A decisão final de publicação é sempre da Comissão Editorial.",
    ],
  },
  {
    title: "Autoria, plágio e redes acadêmicas",
    paragraphs: [
      "O crédito de autoria deve se basear em contribuições substanciais: concepção e desenho, análise e interpretação dos dados, discussão dos resultados, revisão e aprovação final.",
      "A revista não publica mais que 1 artigo do mesmo autor, como autor principal ou coautor, no mesmo número.",
      "A verificação de plágio é feita por CrossCheck e CopySpider antes do envio para revisão por pares.",
    ],
    points: ["Academia.edu", "Mendeley", "ResearchGate", "Google Acadêmico"],
  },
  {
    title: "Apresentação dos manuscritos",
    paragraphs: [
      "As normas seguem, em geral, o Manual de Publicação da American Psychological Association (APA), 6a edição, 2010.",
      "Manuscritos podem ser redigidos em português, inglês, francês ou espanhol, com título e resumo em inglês, português e espanhol.",
      "O texto deve usar espaçamento 1,5, fonte Times New Roman 12, 15 a 25 laudas, papel A4, margens de 2,5 cm e numeração no canto inferior direito.",
    ],
    points: [
      "Folha de rosto identificada como documento suplementar.",
      "Folha de rosto sem identificação no texto principal.",
      "Resumo, abstract e resumen entre 120 e 200 palavras.",
      "De 3 a 5 palavras-chave em português, inglês e espanhol.",
      "Até 5 ilustrações, editáveis e com resolução mínima de 600 dpi quando imagem.",
    ],
  },
  {
    title: "Citações, referências e exemplos preservados",
    paragraphs: [
      "Citações e referências seguem o sistema autor-data da APA. A seção deve se chamar Referências, não Bibliografia.",
      "Referências devem ser organizadas alfabeticamente pelo sobrenome do primeiro autor e, quando houver múltiplos estudos do mesmo autor, por ordem cronológica.",
    ],
    points: [
      "Tenório, C. M. D. (2003b). O Conceito de Neurose em Gestalt-Terapia.",
      "Garcia, C. A., & Rocha, A. P. R. (2008). A Adolescência como Ideal Cultural Contemporâneo.",
      "Toassa, G., & Souza, M. P. R. de. (2010). As vivências.",
      "Evangelista, P. (2010). Interpretação Crítica da teoria de Campo Lewiniana a partir da Fenomenologia.",
      "Ribeiro, C. V. S., & Leda, D. B. (2004). O significado do trabalho em tempos de reestruturação produtiva.",
      "Féres-Carneiro, T. (1983). Família: diagnóstico e terapia.",
      "Aguiar, W. M. J., Bock, A. M. B., & Ozella, S. (2001). A orientação profissional com adolescentes.",
      "Parlett, M. (2005). Contemporary Gestalt Therapy: Field theory.",
      "Salvador, C. C. (1994). Aprendizagem escolar e construção de conhecimento.",
      "Franco, F. de M. (1946). Tratado de educação física dos meninos.",
      "Conceição, M. I. G. & Silva, M. C. R. (no prelo). Mitos sobre a sexualidade do lesado medular.",
      "American Psychiatric Association (1995). DSM-IV.",
      "Birney, A. J. & Hall, M. M. (1981). Early identification of children with written language disabilities.",
      "Haidt, J., Dias, M. G. & Koller, S. (1991). Disgust, disrespect and culture.",
      "Silva, A. A. & Engelmann, A. (1988). Teste de eficácia de um curso.",
      "Todorov, J. C., Souza, D. G. & Bori, C. M. (1992). Escolha e decisão.",
      "Meneghini, R. & Campos-de-Carvalho, M. I. (1995). Áreas circunscritas.",
      "Dias, C. M. A. (1994). Os distúrbios da fronteira de contato.",
      "Santos, A. C. (2008). A crítica de Sartre ao ego transcendental na fenomenologia de Husserl.",
    ],
  },
  {
    title: "Correspondência e privacidade",
    paragraphs: [
      "Comunicações rápidas da Phenomenology, Humanities and Sciences - Fenomenologia, Humanidades e Ciências podem ser feitas pelo endereço eletrônico: aholanda@yahoo.com.",
      "Os nomes e endereços informados à revista são usados exclusivamente para os serviços prestados pela publicação, sem disponibilização para outras finalidades ou terceiros.",
    ],
  },
]

const personImagesByName: Record<string, string> = {
  "adriana patricia egg serra": "/person/Adriana Patrícia Egg Serra.jpeg",
  "adriano furtado holanda": "/person/Adriano Furtado Holanda.jpg",
  "alan muller": "/person/Alan Muller.jpg",
  "andre fukuda maeji": "/person/André Fukuda Maeji.jpeg",
  "brenda santos vieira": "/person/Brenda Santos Vieira.jpg",
  "bruno jardini mader": "/person/Bruno Jardini Mäder.png",
  "camila muhl": "/person/Camila Mühl.jpg",
  "carlos serbena": "/person/Carlos Serbena.jpg",
  "dionatans g quinhones": "/person/Dionatans G. Quinhones.jpg",
  "fabiane villatore orengo": "/person/Fabiane Villatore Orengo.jpeg",
  "gabriela antunes soares": "/person/Gabriela Antunes Soares.jpeg",
  "giani aparecida gaiguer": "/person/Giani Aparecida Gaiguer.png",
  "jeniffer antunes prestes": "/person/Jeniffer Antunes Prestes.png",
  "leonan ferrari felipin": "/person/Leonan Ferrari Felipin.jpeg",
  "leticia joana jardim": "/person/Letícia Joana Jardim.jpg",
  "luciana elisabete savaris": "/person/Luciana Elisabete Savaris.jpeg",
  "luciana maisa da silva sydor": "/person/Luciana Maísa da Silva Sydor.jpeg",
  "maira isabel saczuk": "/person/Maira Isabel Saczuk.jpg",
  "mariana puchivailo": "/person/Mariana Puchivailo.jpg",
}

function normalizePersonName(name: string) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
}

function personImagePath(name: string) {
  return personImagesByName[normalizePersonName(name)]
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((piece) => piece[0])
    .join("")
    .toUpperCase()
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function Section({
  id,
  eyebrow,
  title,
  children,
  className,
  dark,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8",
        dark ? "bg-[#17211d] text-[#fbf4e8]" : "bg-[#f7f1e5] text-[#24160f]",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p
            className={cn(
              "mb-4 font-heading text-xs font-semibold tracking-[0.24em] uppercase",
              dark ? "text-[#d8b76d]" : "text-[#7a2e2e]"
            )}
          >
            {eyebrow}
          </p>
          <h2 className="font-antique max-w-4xl text-4xl leading-tight sm:text-5xl">
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  )
}

function MemberPortrait({
  name,
  className,
  compact = false,
}: {
  name: string
  className?: string
  compact?: boolean
}) {
  const [failed, setFailed] = useState(false)
  const src = personImagePath(name)

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden border border-[#c8b27d]/50 bg-[#eadfca]",
        compact ? "size-12" : "h-56 w-full",
        className
      )}
      title={src ?? `Imagem não encontrada para ${name}`}
    >
      {src && !failed ? (
        <Image
          src={src}
          alt={name}
          fill
          unoptimized
          sizes={compact ? "48px" : "(max-width: 768px) 100vw, 360px"}
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="font-antique flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#fbf4e8,#d8c28e_60%,#9f6f3a)] text-2xl text-[#24160f]">
          {initials(name)}
        </div>
      )}
    </div>
  )
}

function CoordinatorDialog({ member }: { member: Member }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        type="button"
        variant="outline"
        onClick={() => setOpen(true)}
        className="rounded-full border-[#a8843f]/40"
      >
        Ver integrante
      </Button>

      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-[#14110e]/70 px-4 py-4 backdrop-blur-sm sm:items-center sm:py-8"
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`coordinator-dialog-${normalizePersonName(member.name)}`}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="max-h-[88svh] w-full max-w-5xl overflow-hidden border border-[#c8b27d]/70 bg-[#fbf8ef] text-[#24160f] shadow-[0_30px_100px_rgba(20,17,14,0.38)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[#d9c9a5] bg-[#fbf8ef]/95 p-5 backdrop-blur-md sm:p-7">
              <div>
                <p className="font-heading text-xs font-semibold tracking-[0.22em] text-[#7a2e2e] uppercase">
                  {member.role}
                </p>
                <h3
                  id={`coordinator-dialog-${normalizePersonName(member.name)}`}
                  className="font-antique mt-2 text-3xl leading-tight"
                >
                  {member.name}
                </h3>
              </div>
              <button
                type="button"
                aria-label={`Fechar biografia de ${member.name}`}
                onClick={() => setOpen(false)}
                className="inline-flex size-10 shrink-0 items-center justify-center border border-[#c8b27d]/70 bg-white/70 text-[#24160f] transition-colors hover:bg-[#eadfca]"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="grid max-h-[calc(88svh-112px)] overflow-y-auto lg:grid-cols-[320px_minmax(0,1fr)]">
              <div className="border-b border-[#d9c9a5] bg-[#efe4cf] p-5 sm:p-7 lg:border-r lg:border-b-0">
                <MemberPortrait name={member.name} className="h-80" />
                <p className="mt-5 font-heading text-sm font-medium text-[#6b5d47]">
                  {member.note}
                </p>
              </div>
              <div className="p-5 sm:p-7">
                <p className="text-base leading-8 text-[#4b3a2a]">
                  {member.fullBio ?? member.bio}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </>
  )
}

function CoordinatorCard({ member, index }: { member: Member; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <article className="grid h-full overflow-hidden border border-[#c8b27d]/55 bg-[#fbf8ef] shadow-[0_24px_80px_rgba(36,22,15,0.08)] md:grid-cols-[minmax(180px,0.85fr)_1fr]">
        <MemberPortrait name={member.name} className="h-72 md:h-full" />
        <div className="flex flex-col justify-between gap-8 p-6 sm:p-8">
          <div>
            <p className="mb-3 font-heading text-xs font-semibold tracking-[0.2em] text-[#7a2e2e] uppercase">
              {member.role}
            </p>
            <h3 className="font-antique text-3xl leading-tight">
              {member.name}
            </h3>
            <p className="mt-2 text-sm text-[#6b5d47]">{member.note}</p>
            <p className="mt-5 leading-7 text-[#4b3a2a]">{member.bio}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CoordinatorDialog member={member} />
            <Button
              asChild
              variant="ghost"
              className="rounded-full text-[#31594f]"
            >
              <a href="#contato">Solicitar Lattes</a>
            </Button>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

function MemberCard({ member }: { member: Member }) {
  return (
    <article className="flex gap-4 border border-[#d9c9a5] bg-[#fbf8ef]/85 p-3 shadow-[0_14px_40px_rgba(36,22,15,0.05)]">
      <MemberPortrait name={member.name} compact />
      <div className="min-w-0">
        <h4 className="font-heading text-sm font-semibold text-[#24160f]">
          {member.name}
        </h4>
        <p className="mt-1 text-xs leading-5 text-[#6b5d47]">{member.role}</p>
      </div>
    </article>
  )
}

function AlumniName({ name }: { name: string }) {
  return (
    <li className="flex items-center gap-3 border-b border-[#d9c9a5]/70 py-3 last:border-b-0">
      <MemberPortrait name={name} compact className="size-10" />
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-[#2d241b]">{name}</p>
      </div>
    </li>
  )
}

function JournalDialog() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-8 rounded-full bg-[#7a2e2e] text-white hover:bg-[#642323]"
      >
        Ver diretrizes completas
      </Button>

      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-[#14110e]/70 px-4 py-4 backdrop-blur-sm sm:items-center sm:py-8"
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="journal-dialog-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="max-h-[88svh] w-full max-w-5xl overflow-hidden border border-[#c8b27d]/70 bg-[#fbf8ef] text-[#24160f] shadow-[0_30px_100px_rgba(20,17,14,0.38)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[#d9c9a5] bg-[#fbf8ef]/95 p-5 backdrop-blur-md sm:p-7">
              <div>
                <p className="font-heading text-xs font-semibold tracking-[0.22em] text-[#7a2e2e] uppercase">
                  Revista FHC
                </p>
                <h3
                  id="journal-dialog-title"
                  className="font-antique mt-2 text-3xl leading-tight"
                >
                  Diretrizes editoriais e submissões
                </h3>
              </div>
              <button
                type="button"
                aria-label="Fechar diretrizes"
                onClick={() => setOpen(false)}
                className="inline-flex size-10 shrink-0 items-center justify-center border border-[#c8b27d]/70 bg-white/70 text-[#24160f] transition-colors hover:bg-[#eadfca]"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="max-h-[calc(88svh-112px)] overflow-y-auto p-5 sm:p-7">
              <div className="grid gap-5">
                {journalDialogSections.map((section) => (
                  <section
                    key={section.title}
                    className="border border-[#d9c9a5] bg-[#fffaf0]/72 p-5"
                  >
                    <h4 className="font-antique text-2xl">{section.title}</h4>
                    <div className="mt-4 space-y-4 text-sm leading-7 text-[#4b3a2a]">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {section.points ? (
                      <ul className="mt-5 grid gap-2 text-sm text-[#5d4a36] sm:grid-cols-2">
                        {section.points.map((point) => (
                          <li
                            key={point}
                            className="border-l-2 border-[#b6863a] bg-[#f7f1e5] px-3 py-2"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </>
  )
}

export default function Page() {
  return (
    <main id="inicio" className="min-h-screen overflow-hidden">
      <Header />

      <section
        className="bg- center relative flex min-h-[92svh] items-center overflow-hidden bg-[#15110d] bg-cover bg-fixed px-4 pt-32 pb-10 text-[#fbf4e8] sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(17,13,9,0.86), rgba(17,13,9,0.58) 47%, rgba(17,13,9,0.34)), url('/about_hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(216,183,109,0.12),transparent_35%,rgba(49,89,79,0.18))]" />
        <div className="absolute inset-x-0 bottom-0 h-40" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center">
          <div className="max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-flex items-center gap-2 border border-[#d8b76d]/40 bg-black/20 px-4 py-2 font-heading text-xs font-semibold tracking-[0.24em] text-[#f3d38e] uppercase backdrop-blur-md"
            >
              <Sparkles className="size-4" />
              UFPR · CNPq desde 2011
            </motion.p>

            <SplitText
              text="Laboratório de Fenomenologia e Subjetividade"
              tag="h1"
              className="font-antique max-w-[10ch] text-4xl leading-[1.02] font-semibold text-[#fff8ed] sm:max-w-4xl sm:text-6xl md:text-7xl lg:text-8xl"
              delay={42}
              duration={1.1}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 34, rotateX: -18 }}
              to={{ opacity: 1, y: 0, rotateX: 0 }}
              threshold={0.1}
              rootMargin="-80px"
              textAlign="left"
            />

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-[#f1ddc1] sm:text-xl"
            >
              Onde a pesquisa se alia ao rigor filosófico para desvelar as
              múltiplas dimensões do ser humano.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button
                asChild
                className="rounded-full bg-[#f3d38e] px-6 text-[#24160f] hover:bg-[#f8dfaa]"
              >
                <a href="#labfeno">Conheça o laboratório</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-[#f3d38e]/60 bg-black/10 px-6 text-[#fbf4e8] hover:bg-white/10 hover:text-white"
              >
                <a href="#contato">Reuniões abertas</a>
              </Button>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="hidden border border-[#d8b76d]/35 bg-[#130f0b]/50 p-6 shadow-2xl backdrop-blur-md lg:block"
          >
            <Quote className="mb-8 size-9 text-[#d8b76d]" />
            <p className="font-antique text-2xl leading-9 text-[#fff8ed]">
              Entre o arquivo e a presença, a fenomenologia recoloca a
              experiência humana no centro da pergunta.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-[#eedbb9]">
              <div className="border border-white/10 p-4">
                <span className="block font-heading text-2xl text-[#f3d38e]">
                  5
                </span>
                linhas de pesquisa
              </div>
              <div className="border border-white/10 p-4">
                <span className="block font-heading text-2xl text-[#f3d38e]">
                  18h
                </span>
                quartas quinzenais
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <Section
        id="labfeno"
        eyebrow="Sobre o laboratório"
        title="Um núcleo de pesquisa, ensino e extensão dedicado à experiência humana."
      >
        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
          <Reveal>
            <div className="space-y-7 text-lg leading-9 text-[#463728]">
              <p>
                Desde 2011, o{" "}
                <Highlighter action="underline" color="#b6863a" isView>
                  Laboratório de Fenomenologia e Subjetividade
                </Highlighter>{" "}
                está integrado ao Departamento de Psicologia da Universidade
                Federal do Paraná e certificado pelo CNPq.
              </p>
              <p>
                O LabFeno articula teoria e prática em saúde mental, educação,
                religiosidade, clínica, história, epistemologia e processos de
                saúde e doença, promovendo grupos de estudo, colóquios,
                seminários, eventos e debates.
              </p>
              <div className="border border-[#d9c9a5] bg-[#fbf8ef]/74 p-5">
                <p className="font-heading text-xs font-semibold tracking-[0.2em] text-[#7a2e2e] uppercase">
                  Núcleos e parcerias
                </p>
                <p className="mt-4 text-base leading-8 text-[#5d4a36]">
                  Como Núcleo de Pesquisas, o LabFeno possui parcerias com
                  diversos outros núcleos, laboratórios e instituições, com
                  destaque para:
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {partnershipLinks.map((partner) => (
                    <a
                      key={partner.href}
                      href={partner.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group border border-[#c8b27d]/70 bg-[#f7f1e5] p-4 transition-colors hover:border-[#31594f] hover:bg-[#eef3ee]"
                    >
                      <span className="font-heading text-xs font-semibold tracking-[0.18em] text-[#31594f] uppercase">
                        {partner.label}
                      </span>
                      <span className="font-antique mt-2 block text-xl leading-7 text-[#24160f]">
                        {partner.title}
                      </span>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#7a2e2e]">
                        Acessar <ExternalLink className="size-4" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative min-h-[360px] overflow-hidden border border-[#c8b27d]/60 bg-[#17211d]">
              <Image
                src="/lab_feno_logo_fundo_verde.jpg"
                alt="Marca LabFeno em fundo verde"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17211d] via-transparent to-transparent" />
              <div className="absolute bottom-0 p-6 text-[#fbf4e8]">
                <p className="font-heading text-xs tracking-[0.2em] text-[#d8b76d] uppercase">
                  Vínculo institucional
                </p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-[#eadfca]">
                  Departamento de Psicologia da UFPR, Prédio Histórico, sala
                  113.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {highlights.map((item, index) => {
            const Icon = item.icon

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="h-full border border-[#d9c9a5] bg-[#fbf8ef]/78 p-5 shadow-[0_16px_48px_rgba(36,22,15,0.05)] transition-transform duration-300 hover:-translate-y-1">
                  <Icon className="mb-8 size-8 text-[#31594f]" />
                  <h3 className="font-antique text-2xl leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[#6b5d47]">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[380px_minmax(0,1fr)]">
          <Reveal>
            <div className="border border-[#c8b27d]/60 bg-[#31594f] p-8 text-[#fbf4e8] shadow-[0_24px_70px_rgba(49,89,79,0.2)]">
              <CalendarDays className="mb-8 size-10 text-[#d8b76d]" />
              <h3 className="font-antique text-3xl">Reuniões quinzenais</h3>
              <div className="mt-6 space-y-4 text-[#eadfca]">
                <p className="flex items-center gap-3">
                  <Clock className="size-5 text-[#d8b76d]" />
                  Quartas-feiras, 18h às 20h
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="size-5 text-[#d8b76d]" />
                  Prédio Histórico UFPR · Sala 113
                </p>
              </div>
              <p className="mt-8 leading-7 text-[#f4e6ca]">
                As reuniões são abertas ao público e atualmente acontecem
                presencialmente no Departamento de Psicologia.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              {researchLines.map((line, index) => (
                <article
                  key={line}
                  className="border border-[#d9c9a5] bg-[#fbf8ef]/78 p-5"
                >
                  <span className="font-heading text-xs font-semibold tracking-[0.18em] text-[#7a2e2e] uppercase">
                    Linha {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-antique mt-4 text-xl leading-7 text-[#24160f]">
                    {line}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        id="integrantes"
        eyebrow="Integrantes"
        title="Pessoas, orientações e trajetórias vinculadas ao laboratório."
        className="bg-[#efe4cf]"
      >
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {coordinators.map((member, index) => (
            <CoordinatorCard key={member.name} member={member} index={index} />
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {memberGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.07}>
              <section className="h-full border border-[#c8b27d]/60 bg-[#f7f1e5]/80 p-5">
                <h3 className="font-antique text-3xl">{group.title}</h3>
                <div className="mt-6 grid gap-3">
                  {group.members.map((member) => (
                    <MemberCard
                      key={`${group.title}-${member.name}`}
                      member={member}
                    />
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {alumniGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.07}>
              <section className="h-full border border-[#c8b27d]/60 bg-[#fbf8ef]/70 p-5">
                <h3 className="font-antique text-2xl">{group.title}</h3>
                <ul className="mt-5 max-h-[420px] overflow-y-auto pr-2">
                  {group.members.map((name) => (
                    <AlumniName key={`${group.title}-${name}`} name={name} />
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="bibliografia"
        eyebrow="Bibliografia"
        title="Produção acadêmica organizada por temas, formas e linhas de investigação."
      >
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1fr]">
          <Reveal>
            <div className="border border-[#d9c9a5] bg-[#fbf8ef]/80 p-8">
              <LibraryBig className="mb-8 size-10 text-[#7a2e2e]" />
              <h3 className="font-antique text-3xl">Eixos bibliográficos</h3>
              <p className="mt-5 leading-8 text-[#5d4a36]">
                A bibliografia do LabFeno reúne artigos, livros, capítulos,
                anais, traduções, teses e dissertações. A organização abaixo
                prepara a interface para filtros e arquivos completos.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {bibliographyThemes.map((theme, index) => (
              <Reveal key={theme} delay={index * 0.025}>
                <div className="flex min-h-24 items-center border border-[#d9c9a5] bg-[#fbf8ef]/78 px-5 py-4">
                  <span className="mr-4 font-heading text-xs text-[#9b7b3d]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-heading text-sm font-medium text-[#2d241b]">
                    {theme}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="ensino"
        eyebrow="Ensino"
        title="Disciplinas de graduação, mestrado e doutorado atravessadas pela fenomenologia."
        dark
      >
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {[
            {
              title: "Graduação",
              courses: graduationCourses,
              icon: GraduationCap,
              href: graduationProgramHref,
              cta: "PROGRAMAS DE GRADUAÇÃO",
            },
            {
              title: "Mestrado e Doutorado",
              courses: graduateCourses,
              icon: ScrollText,
            },
          ].map((group, index) => {
            const Icon = group.icon

            return (
              <Reveal key={group.title} delay={index * 0.08}>
                <section className="h-full border border-[#d8b76d]/30 bg-white/[0.04] p-8">
                  <Icon className="mb-8 size-10 text-[#d8b76d]" />
                  <h3 className="font-antique text-3xl">{group.title}</h3>
                  {"href" in group ? (
                    <a
                      href={group.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 border border-[#d8b76d]/35 px-4 py-2 text-sm font-medium text-[#f3d38e] transition-colors hover:bg-white/10"
                    >
                      Acessar os Programas das Disciplinas: {group.cta}
                      <ExternalLink className="size-4" />
                    </a>
                  ) : null}
                  <ul className="mt-7 space-y-4 text-[#eadfca]">
                    {group.courses.map((course, courseIndex) => (
                      <li
                        key={`${group.title}-${courseIndex}-${course}`}
                        className="border-t border-white/10 pt-4"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section
        id="pesquisas"
        eyebrow="Pesquisas"
        title="Projetos em andamento e campos de investigação ligados à formação."
      >
        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <Reveal>
            <article className="border border-[#c8b27d]/60 bg-[#fbf8ef]/86 p-8 shadow-[0_24px_70px_rgba(36,22,15,0.08)]">
              <Microscope className="mb-8 size-10 text-[#31594f]" />
              <p className="font-heading text-xs font-semibold tracking-[0.2em] text-[#7a2e2e] uppercase">
                Projeto em andamento
              </p>
              <h3 className="font-antique mt-5 text-4xl leading-tight">
                &ldquo;Menino veste azul!: Um estudo sobre o aprendizado do
                papel masculino&rdquo;
              </h3>
              <div className="mt-8 grid gap-4 text-[#5d4a36] sm:grid-cols-2">
                <p>
                  <strong className="text-[#24160f]">Doutoranda:</strong>{" "}
                  Fabiane Villatore Orengo
                </p>
                <p>
                  <strong className="text-[#24160f]">Orientador:</strong>{" "}
                  Adriano Furtado Holanda
                </p>
                <p className="sm:col-span-2">
                  Programa de Pós-Graduação em Educação da Universidade Federal
                  do Paraná. Participação aberta para maiores de 18 anos por
                  questionário online.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="border border-[#c8b27d]/60 bg-[#31594f] p-8 text-[#fbf4e8]">
              <h3 className="font-antique text-3xl">Áreas recorrentes</h3>
              <ul className="mt-7 space-y-4 text-[#eadfca]">
                {[
                  "Saúde mental",
                  "Religiosidade",
                  "Educação",
                  "Clínica",
                  "História e epistemologia",
                  "Processos de saúde e doença",
                ].map((area) => (
                  <li key={area} className="border-t border-white/10 pt-4">
                    {area}
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </Section>

      <Section
        id="revistas"
        eyebrow="Revistas"
        title="Fenomenologia, Humanidades e Ciências como espaço de circulação científica."
        className="bg-[#efe4cf]"
      >
        <div className="mt-12 grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)]">
          <Reveal>
            <div className="relative min-h-[420px] overflow-hidden border border-[#c8b27d]/60 bg-[#14243a]">
              <Image
                src="/lab_feno_logo_fundo_azul.jpg"
                alt="Marca LabFeno em fundo azul"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10151d] via-[#10151d]/20 to-transparent" />
              <div className="absolute bottom-0 p-7 text-white">
                <p className="font-heading text-xs tracking-[0.2em] text-[#d8b76d] uppercase">
                  ISSN 2675-4673
                </p>
                <h3 className="font-antique mt-3 text-3xl">
                  Phenomenology, Humanities and Sciences
                </h3>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full border border-[#c8b27d]/60 bg-[#fbf8ef]/82 p-8">
              <p className="text-lg leading-9 text-[#4b3a2a]">
                A revista FHC é editada pelo LabFeno e APFeno, em parceria com
                Abrapfe, para divulgar a fenomenologia e suas aplicações às
                ciências da saúde, humanas, sociais e educação.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Relato de pesquisa",
                  "Revisão crítica de literatura",
                  "Estudo teórico ou histórico",
                  "Texto clássico",
                ].map((category) => (
                  <div key={category} className="border border-[#d9c9a5] p-4">
                    <p className="font-heading text-sm font-medium">
                      {category}
                    </p>
                  </div>
                ))}
              </div>
              <Button
                asChild
                className="mt-8 rounded-full bg-[#31594f] text-white"
              >
                <a
                  href="https://phenomenology.com.br/index.php/phe"
                  target="_blank"
                  rel="noreferrer"
                >
                  Acessar revista <ExternalLink className="size-4" />
                </a>
              </Button>
              <JournalDialog />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        id="eventos"
        eyebrow="Congressos"
        title="Linha do tempo dos congressos e encontros de fenomenologia."
      >
        <div className="relative mt-12 pl-6 before:absolute before:top-0 before:bottom-0 before:left-2 before:w-px before:bg-[#c8b27d] sm:pl-10 sm:before:left-4">
          {events.map((event, index) => (
            <Reveal key={`${event.year}-${event.title}`} delay={index * 0.04}>
              <article className="relative pb-10 last:pb-0">
                <div className="absolute top-2 -left-[1.62rem] size-4 border border-[#7a2e2e] bg-[#f7f1e5] sm:-left-[2.37rem]" />
                <div className="grid gap-5 border border-[#d9c9a5] bg-[#fbf8ef]/78 p-5 shadow-[0_18px_50px_rgba(36,22,15,0.05)] md:grid-cols-[120px_minmax(0,1fr)] md:p-6">
                  <div className="font-antique text-4xl text-[#7a2e2e]">
                    {event.year}
                  </div>
                  <div>
                    <h3 className="font-antique text-2xl leading-tight sm:text-3xl">
                      {event.title}
                    </h3>
                    {event.theme ? (
                      <p className="mt-3 leading-7 text-[#5d4a36]">
                        &ldquo;{event.theme}&rdquo;
                      </p>
                    ) : null}
                    <div className="mt-5 flex flex-wrap gap-2 text-sm text-[#6b5d47]">
                      {event.date ? (
                        <span className="border border-[#d9c9a5] px-3 py-1">
                          {event.date}
                        </span>
                      ) : null}
                      {event.place ? (
                        <span className="border border-[#d9c9a5] px-3 py-1">
                          {event.place}
                        </span>
                      ) : null}
                      {event.note ? (
                        <span className="border border-[#d9c9a5] px-3 py-1">
                          {event.note}
                        </span>
                      ) : null}
                    </div>
                    {event.href ? (
                      <a
                        href={event.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#7a2e2e]"
                      >
                        Acessar referência <ExternalLink className="size-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="fenomenologia"
        eyebrow="Fenomenologia"
        title="Um movimento filosófico, um método e uma pergunta persistente pela experiência."
        dark
      >
        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
          <Reveal>
            <div className="space-y-7 text-lg leading-9 text-[#eadfca]">
              <p>
                Para além de definições formalistas, a fenomenologia pode ser
                lida como movimento filosófico iniciado em torno de Edmund
                Husserl, com desdobramentos em hermenêutica, ciências
                cognitivas, filosofia existencialista, pensamento social e
                ciências humanas.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {["Epistemologia", "Filosofia", "Método", "Ciência"].map(
                  (perspective) => (
                    <div
                      key={perspective}
                      className="border border-[#d8b76d]/25 bg-white/[0.04] p-5"
                    >
                      <Feather className="mb-4 size-6 text-[#d8b76d]" />
                      <p className="font-antique text-2xl">{perspective}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="border border-[#d8b76d]/30 bg-white/[0.04] p-8">
              <h3 className="font-antique text-3xl">Acervo orientado</h3>
              <p className="mt-5 leading-8 text-[#eadfca]">
                Recursos do LabFeno e parceiros, com centros de investigação,
                associações, bibliotecas digitais e videoteca técnica.
              </p>
              <p className="mt-6 border-t border-white/10 pt-5 text-sm text-[#d8b76d]">
                Compilado e atualizado em Abril/2026.
              </p>
            </aside>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {phenomenologyResourceGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04}>
              <section className="h-full border border-[#d8b76d]/30 bg-white/[0.04] p-5 sm:p-6">
                <h3 className="font-antique text-3xl">{group.title}</h3>
                <div className="mt-6 grid gap-3">
                  {group.items.map((item, itemIndex) => (
                    <a
                      key={`${group.title}-${itemIndex}-${item.href}`}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group border border-white/10 bg-[#111915] p-4 transition-colors hover:border-[#d8b76d]/60 hover:bg-[#1e2c26]"
                    >
                      <span className="flex items-start justify-between gap-4">
                        <span className="font-heading text-sm font-semibold text-[#fbf4e8]">
                          {item.name}
                        </span>
                        <ExternalLink className="mt-0.5 size-4 shrink-0 text-[#d8b76d]" />
                      </span>
                      <span className="mt-2 block text-sm leading-6 text-[#cdbd9c]">
                        {item.description}
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="contato"
        eyebrow="Contato"
        title="Encontros presenciais, mensagens e redes para acompanhar o LabFeno."
        className="bg-[#efe4cf]"
      >
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <Reveal>
            <div className="border border-[#c8b27d]/60 bg-[#31594f] p-8 text-[#fbf4e8]">
              <Mail className="mb-8 size-10 text-[#d8b76d]" />
              <div className="space-y-7">
                <div>
                  <h3 className="font-antique text-3xl">E-mails</h3>
                  <p className="mt-3 text-[#eadfca]">aholanda@yahoo.com</p>
                  <p className="text-[#eadfca]">labfeno@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-antique text-3xl">Endereço</h3>
                  <p className="mt-3 leading-7 text-[#eadfca]">
                    Universidade Federal do Paraná, Prédio Histórico, sala 113,
                    Departamento de Psicologia.
                  </p>
                </div>
                <div>
                  <h3 className="font-antique text-3xl">Redes</h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 border border-[#d8b76d]/35 px-4 py-2 text-sm font-medium text-[#eadfca] transition-colors hover:bg-white/10"
                      >
                        {social.label}
                        <ExternalLink className="size-4 text-[#d8b76d]" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form className="grid gap-4 border border-[#c8b27d]/60 bg-[#fbf8ef]/82 p-6 sm:p-8">
              <label className="grid gap-2 text-sm font-medium text-[#4b3a2a]">
                Nome
                <input
                  className="h-12 border border-[#d9c9a5] bg-[#fffaf0] px-4 transition-colors outline-none focus:border-[#31594f]"
                  type="text"
                  name="name"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#4b3a2a]">
                E-mail
                <input
                  className="h-12 border border-[#d9c9a5] bg-[#fffaf0] px-4 transition-colors outline-none focus:border-[#31594f]"
                  type="email"
                  name="email"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#4b3a2a]">
                Mensagem
                <textarea
                  className="min-h-36 resize-y border border-[#d9c9a5] bg-[#fffaf0] p-4 transition-colors outline-none focus:border-[#31594f]"
                  name="message"
                />
              </label>
              <Button
                asChild
                className="mt-2 rounded-full bg-[#7a2e2e] text-white hover:bg-[#642323]"
              >
                <a href="mailto:labfeno@gmail.com">Enviar mensagem</a>
              </Button>
            </form>
          </Reveal>
        </div>
      </Section>

      <footer className="bg-[#14110e] px-4 py-10 text-[#eadfca] sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/lab_feno_logo.jpg"
              alt="LabFeno"
              width={90}
              height={50}
              className="h-auto w-16 bg-white p-1"
            />
            <div>
              <p className="font-heading text-sm font-semibold tracking-[0.18em]">
                LABFENO
              </p>
              <p className="text-sm text-[#bfa976]">
                Laboratório de Fenomenologia e Subjetividade
              </p>
            </div>
          </div>
          <p className="text-sm text-[#bfa976]">
            UFPR · Departamento de Psicologia · Certificado pelo CNPq desde 2011
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-[#eadfca] underline-offset-4 hover:underline"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  )
}
