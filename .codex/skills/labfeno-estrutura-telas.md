# LabFeno - Estrutura de Telas do Novo Site
## Guia Completo para Desenvolvimento

---

## 📱 LISTA COMPLETA DE TELAS (12 TELAS)

### 1. HOME / INICIAL
### 2. LABFENO
### 3. INTEGRANTES
### 4. BIBLIOGRAFIA
### 5. ENSINO
### 6. PESQUISAS
### 7. REVISTAS
### 8. REVISTA FHC (Fenomenologia, Humanidades e Ciências)
### 9. EVENTOS
### 10. FENOMENOLOGIA
### 11. CONTATO
### 12. (OPCIONAL) BLOG/NOTÍCIAS

---

## 🎨 TELA 1: HOME / INICIAL

### Layout Sugerido

**HERO SECTION (Tela cheia)**
Crie uma homepage moderna no estilo landing page premium com as seguintes características:

## Layout geral

A página deve começar com uma HERO SECTION full screen (100vh), contendo:

- Imagem de fundo ocupando toda a tela
- Overlay escuro leve para melhorar legibilidade
- Texto principal sobreposto (título grande + descrição)
- Alinhamento elegante (esquerda ou direita, estilo minimalista)

## Header (Navbar)

O header deve:

- Ficar posicionado sobre a hero (overlay)
- Começar TRANSPARENTE
- Ter logo à esquerda
- Menu central ou à direita (About, Research, API, etc)
- Botão CTA destacado (ex: "Create with X")

## Comportamento do scroll

Ao rolar a página:

- O header deve se tornar FIXO (sticky)
- Fundo deve mudar de transparente para branco
- Adicionar sombra leve (box-shadow)
- Cor dos textos deve mudar (de branco para escuro)

## Transições

- Aplicar transição suave (300ms ~ 400ms)
- Mudança de background + cor + sombra animadas

## Segunda seção (após hero)

Criar uma seção institucional contendo:

- Fundo claro (cinza ou branco)
- Ícone central minimalista
- Título grande (headline)
- Parágrafo explicativo abaixo
- Layout centralizado

## Extras

- Responsivo (mobile-first)
- Navbar adaptada para mobile (menu hamburger)
- Código limpo e componentizado (Header, Hero, Section)
```
┌─────────────────────────────────────────────────────────┐
│  LOGO LABFENO (topo esquerdo)        MENU (topo direito)│
│                                                          │
│                                                          │
│              LABORATÓRIO DE FENOMENOLOGIA                │
│                  E SUBJETIVIDADE                         │
│                                                          │
│     Onde a pesquisa se alia ao rigor filosófico para    │
│    desvelar as múltiplas dimensões do ser humano        │
│                                                          │
│                  [CONHEÇA MAIS]  [CONTATO]              │
│                                                          │
│                     ↓ Rolar                              │
└─────────────────────────────────────────────────────────┘
```

```
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

```
className={`
  fixed top-0 w-full transition-all duration-300
  ${scrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"}
`}
```
 

**SEÇÃO 2: APRESENTAÇÃO**
- Texto introdutório sobre o LabFeno
- Imagem de biblioteca/livros
- Destaque para certificação CNPq desde 2011
- Vínculo com UFPR

**SEÇÃO 3: DESTAQUES (Cards/Grid)**
```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   GRUPOS DE  │  │  COLÓQUIOS   │  │  PARCERIAS   │
│    ESTUDO    │  │      E       │  │ ESTRATÉGICAS │
│              │  │  SEMINÁRIOS  │  │              │
│   [Ícone]    │  │   [Ícone]    │  │   [Ícone]    │
│              │  │              │  │              │
│   Descrição  │  │  Descrição   │  │  Descrição   │
└──────────────┘  └──────────────┘  └──────────────┘

┌──────────────┐  ┌──────────────┐
│  PSICOLOGIA  │  │  REVISTA FHC │
│     UFPR     │  │              │
│   [Ícone]    │  │   [Ícone]    │
│  Descrição   │  │  Descrição   │
└──────────────┘  └──────────────┘
```

**SEÇÃO 4: REUNIÕES**
```
╔═══════════════════════════════════════╗
║     📅 REUNIÕES QUINZENAIS            ║
║                                       ║
║   Quartas-feiras                      ║
║   18h às 20h                          ║
║                                       ║
║   📍 Prédio Histórico UFPR            ║
║   Sala 113                            ║
║                                       ║
║   Reuniões abertas ao público         ║
╚═══════════════════════════════════════╝
```

**SEÇÃO 5: COORDENAÇÃO**
- Cards com fotos dos coordenadores
- Nome, título e breve bio
- Links para Lattes

**FOOTER**
- Informações de contato
- Redes sociais
- Links rápidos
- Copyright

### Conteúdo Completo

**Hero - Frase de Impacto:**
"Laboratório de Fenomenologia e Subjetividade"

**Subtítulo:**
"Onde a pesquisa se alia ao rigor filosófico para desvelar as múltiplas dimensões do ser humano"

**Apresentação (Accordion ou texto direto):**
Desde 2011, o Laboratório de Fenomenologia e Subjetividade (LabFeno), integrado ao Departamento de Psicologia da Universidade Federal do Paraná e certificado pelo CNPq, dedica-se a explorar as fronteiras do pensamento fenomenológico aplicado à saúde mental, educação, religiosidade, e além. Nosso compromisso reside na articulação entre teoria e prática, promovendo um diálogo contínuo entre as diversas esferas do conhecimento humano.

**Cards de Destaques:**

1. **Grupos de Estudo**
   Reuniões acadêmicas regulares que promovem o intercâmbio de ideias e o aprofundamento das pesquisas em curso.

2. **Colóquios e Seminários**
   Encontros que reúnem especialistas e pesquisadores para discutir temas de vanguarda, ampliando as fronteiras do conhecimento fenomenológico.

3. **Parcerias Estratégicas**
   Colaborações com núcleos e instituições afins, como o GT de "Fenomenologia, Saúde e Processos Psicológicos" (Anpepp) e o Grupo de Trabalho de Fenomenologia (Anpof).

4. **Psicologia UFPR**
   O LabFeno está vinculado ao Departamento de Psicologia da Universidade Federal do Paraná, certificado pelo CNPq desde 2011.

5. **Revista FHC**
   A revista Fenomenologia, Humanidades e Ciências (ISSN 2675-4673) – editada pelo LabFeno e APFeno, em parceria com Abrapfe.

---

## 🎨 TELA 2: LABFENO (Sobre o Laboratório)

### Layout Sugerido

**HEADER**
- Breadcrumb: Home > LabFeno
- Título da página: "LabFeno"

**SEÇÃO 1: APRESENTAÇÃO INSTITUCIONAL**
- Texto completo sobre o laboratório
- Imagem ilustrativa

**SEÇÃO 2: LINHAS DE PESQUISA**
- Lista numerada ou cards
- 5 linhas principais

**SEÇÃO 3: ATIVIDADES**
- Como Grupo de Pesquisas
- Reuniões semanais
- Debates e diálogos

**SEÇÃO 4: PARCERIAS**
- Logos das instituições parceiras
- Links para sites parceiros
- GT22 - Anpepp
- GT Fenomenologia - Anpof

### Conteúdo Completo

**Apresentação:**
O Laboratório de Fenomenologia e Subjetividade (LabFeno) está vinculado ao Departamento de Psicologia da Universidade Federal do Paraná, certificado pelo CNPq desde 2011, realizando atividades de pesquisa, ensino e extensão.

Caracteriza-se, ainda, como um Núcleo de Pesquisas e dentre suas atividades organiza grupos de estudo, colóquios, seminários, eventos e debates, tendo como foco um conjunto diversificado de temáticas, como: Fenomenologia, Saúde Mental, História e Epistemologia, Religiosidade, Educação, Clínica, Processo de Saúde e Doença, dentre outros.

**Linhas de Pesquisa:**
1. Fenomenologia, Psicologia e Saúde Mental: Pesquisa, Intervenção e Processos Compreensivos
2. Fenomenologia e Ciências do Homem
3. Fenomenologia da Experiência Religiosa e Saúde Mental
4. História do Movimento Fenomenológico no Brasil
5. Fenomenologia e Educação

**Como Grupo de Pesquisas:**
O LabFeno se reúne semanalmente para discutir, debater e dialogar em torno de seus temas principais e das Pesquisas em desenvolvimento pelos Pesquisadores (Mestrandos, Doutorandos, Iniciação Científica, parceiros, etc.) atrelados ao Laboratório. Além disso, promove ainda debates com convidados e com produções atuais efetivados por seus colaboradores.

**Parcerias:**
- GT de "Fenomenologia, Saúde e Processos Psicológicos" (GT22 – Anpepp)
- Grupo de Trabalho de Fenomenologia (Anpof)

---

## 🎨 TELA 3: INTEGRANTES

### Layout Sugerido

**SEÇÃO 1: COORDENAÇÃO**
```
┌─────────────────────┐  ┌─────────────────────┐
│                     │  │                     │
│  [FOTO ADRIANO]     │  │  [FOTO CARLOS]      │
│                     │  │                     │
│  Adriano Furtado    │  │  Carlos Serbena     │
│  Holanda            │  │                     │
│  Coordenador        │  │  Vice-Coordenador   │
│                     │  │                     │
│  [Ver Bio Completa] │  │  [Ver Bio Completa] │
│  [Lattes]           │  │  [Lattes]           │
└─────────────────────┘  └─────────────────────┘
```

**SEÇÃO 2: INTEGRANTES ATUAIS**
- Tabs ou Accordions por categoria:
  * Doutorandos
  * Mestrandos

**SEÇÃO 3: EGRESSOS**
- Tabs ou Accordions:
  * Mestres Egressos
  * Doutores Egressos

**SEÇÃO 4: OUTROS MEMBROS**
- Lista de colaboradores

### Conteúdo Completo

**Coordenação:**

*Adriano Furtado Holanda - Coordenador*
Prof. Dr. Adriano Furtado Holanda, graduado em Psicologia (1987), com Mestrado em Psicologia Clínica pela Universidade de Brasília (1993) e Doutorado em Psicologia pela PUC-Campinas (2002). Professor Adjunto e Orientador de Mestrado da Universidade Federal do Paraná. Editor Chefe da revista Phenomenological Studies- Revista da Abordagem Gestaltica e Editor Associado da revista Interação em Psicologia (UFPR). Membro Colaborador do Circulo Latino Americano de Fenomenologia e Membro da Diretoria da Sociedade Brasileira de Psicologia Fenomenologica. Vice-Coordenador (2014-2016) e atual Coordenador (2016-2018) do Grupo de Trabalho Psicologia & Fenomenologia na ANPEPP. Tem experiência na área de Psicologia, atuando principalmente nos seguintes temas: Fenomenologia, Fenomenologia Husserliana, Psicoterapia, Abordagens Fenomenológicas e Existenciais, Psicologia da Religião, História da Psicologia e Pesquisa Fenomenológica, Psicologia Clínica, Processos de Saúde/Doença e Saúde Mental.

*Carlos Serbena - Vice-Coordenador*
Prof. Dr. Carlos Serbena, possui graduação em Engenharia Elétrica pela Universidade Federal do Paraná (1989), graduação em Psicologia pela Universidade Federal do Paraná (1994), mestrado em Psicologia pela Universidade Federal de Santa Catarina (1999) e doutorado interdisciplinar em Ciências Humanas pela Universidade Federal de Santa Catarina (2006). Atualmente é professor adjunto da Universidade Federal do Paraná e professor colaborador do Mestrado em Psicologia da UFPR. Tem experiência na área de Psicologia, com ênfase em Psicologia Analítica, atuando principalmente nos seguintes temas: epistemologia da psicologia, imaginário, arquétipo, mito e ideologia.

**Doutorandos (Ativos):**
- Dionatans G. Quinhones (PPG-Psicologia)
- Eliane Terezinha Piccolotto (PPG-Educação)
- Maria Isabel Saczuk (PPG-Educação)
- Neemyas Kerr Batalha dos Santos (PPG-Psicologia)
- Tiago de Matos Peixoto (PPG-Psicologia)

**Mestrandos (Ativos):**
- Brenda Santos Vieira (PPG-Psicologia)
- Gabriela Antunes Soares (PPG-Psicologia)
- Jeniffer Antunes Prestes (PPG-Educação)
- Leonan Ferrari Felipin (PPG-Educação)
- Letícia Joana Jardim (PPG-Psicologia)
- Luciana Maísa da Silva Sydor (PPG-Psicologia)

**Mestres Egressos:**
(Lista completa de 35 nomes - ver documento principal)

**Doutores Egressos:**
- Adriana Patrícia Egg-Serra (PPG-Psicologia)
- Alan Muller (PPG-Psicologia)
- Fabiane Villatore Orengo (PPG-Educação)
- Guilherme Bertassoni da Silva (PPG-Psicologia)
- Jerry Adriano Raimundo (PPG-Educação)
- Luciana Elisabete Savaris (PPS-Psicologia)

---

## 🎨 TELA 4: BIBLIOGRAFIA

### Layout Sugerido

**TABS PRINCIPAIS:**
1. Anais de Eventos
2. Artigos Científicos
3. Livros e Capítulos
4. Bibliografia de Husserl

**SEÇÃO ARTIGOS - SUB-TABS por Tema:**
- Clínica e Formação em Psicologia
- Educação
- Ética
- Fenomenologia e Psicologia Fenomenológica
- Gestalt-Terapia, ACP e Psicologia Humanista
- História e Epistemologia da Psicologia
- Logoterapia
- Pesquisa Qualitativa e Fenomenológica
- Psicologia Criminal
- Psicologia, Religião e Espiritualidade
- Saúde Mental e Psicopatologia

**FORMATO DE EXIBIÇÃO:**
- Sistema de busca/filtro
- Ordenação por ano
- Download de PDFs quando disponível
- Links para DOI

### Conteúdo

(Conteúdo extenso - manter estrutura original com todas as referências organizadas por categoria)

**Exemplo de formatação:**
```
ARTIGOS - Clínica e Formação em Psicologia

Silva, G. B., Holanda, A. F. & Mäder, B. J. (2023). Psicoterapia, Legislação e Prática da Psicologia. Revista Brasileira de Psicoterapia. 25 (2):1-22.
[Link] [PDF]

Egg-Serra, A. P., & Holanda, A. F. (2023). Noções de Espiritualidade e Religiosidade para Estudantes de Psicologia. Interações (PUC-Minas), 18(2), e182d08.
[DOI: 10.5752/P.1983-2478.2023v18n2e182d08]
```

---

## 🎨 TELA 5: ENSINO

### Layout Sugerido

**TABS PRINCIPAIS:**
1. Graduação
2. Mestrado e Doutorado

**SEÇÃO GRADUAÇÃO:**
- Lista de disciplinas por semestre
- Links para programas (PDFs)
- Ementa resumida
- Período de oferecimento

**SEÇÃO PÓS-GRADUAÇÃO:**
- Disciplinas oferecidas
- Programas completos
- Informações para candidatos

### Conteúdo

**Graduação - Disciplinas Recentes:**

HP354 – Psicologia Fenomenológico-Existencial I (1º semestre/2024)
HP819 – Tópicos Especiais em Psicologia II (1º Sem/2024)
HP339 – Introdução à Psicologia Fenomenológico-Existencial (2º Semestre/2023)
HP665 – Psicologia & Religião (1º Semestre/2022)
HP381 – Epistemologia da Psicologia
HP385 – Fundamentos da Fenomenologia

**Mestrado e Doutorado:**

PSIC-7009 – Fenomenologia e Psicologia: Teoria e Método/2024
PSIC-7057 – Tópicos Avançados em Psicologia III
EDUC7109 – Tópicos Especiais em Cognição, Aprendizagem e Desenvolvimento Humanos II
PSIC7020 – Teoria e Pesquisa em Psicologia Clínica

---

## 🎨 TELA 6: PESQUISAS

### Layout Sugerido

**SEÇÃO 1: PROJETO EM DESTAQUE**
```
╔═════════════════════════════════════════════╗
║  📋 PROJETO EM ANDAMENTO                    ║
║                                             ║
║  "Menino veste azul!: Um estudo sobre o     ║
║  aprendizado do papel masculino"            ║
║                                             ║
║  Doutoranda: Fabiane Villatore Orengo       ║
║  Orientador: Adriano Furtado Holanda        ║
║                                             ║
║  [PARTICIPAR DA PESQUISA]                   ║
╚═════════════════════════════════════════════╝
```

**SEÇÃO 2: OUTRAS PESQUISAS**
- Grid de cards com pesquisas
- Filtro por área/tema
- Status: Em andamento / Concluída

**SEÇÃO 3: OPORTUNIDADES**
- Call for participation
- Bolsas disponíveis
- Editais abertos

---

## 🎨 TELA 7: REVISTAS

### Layout Sugerido

**CARD PRINCIPAL:**
```
┌─────────────────────────────────────────┐
│  [LOGO DA REVISTA FHC]                  │
│                                         │
│  Phenomenology, Humanities and Sciences │
│  Fenomenologia, Humanidades e Ciências  │
│                                         │
│  ISSN 2675-4673                         │
│                                         │
│  [ACESSAR REVISTA]  [SUBMETER ARTIGO]   │
└─────────────────────────────────────────┘
```

**SEÇÃO 2: NÚMEROS RECENTES**
- Grid com últimas edições
- Capas das revistas
- Links diretos

---

## 🎨 TELA 8: REVISTA FHC (Página Dedicada)

### Layout Sugerido

**SEÇÃO 1: HEADER**
- Logo da revista
- Nome completo
- ISSN

**SEÇÃO 2: SOBRE A REVISTA**
- Objetivo
- Editores
- Parcerias
- Linha editorial

**SEÇÃO 3: TEMAS**
- Lista dos 5 temas principais
- Accordion com detalhes

**SEÇÃO 4: CATEGORIAS DE PUBLICAÇÃO**
- 4 categorias principais
- Descrição de cada uma

**SEÇÃO 5: SUBMISSÕES**
- Botão CTA para submeter
- Link para diretrizes
- Processo de avaliação

**SEÇÃO 6: EDIÇÕES PUBLICADAS**
- Lista cronológica
- Links para PDFs
- Estatísticas de citação

---

## 🎨 TELA 9: EVENTOS

### Layout Sugerido

**TABS:**
1. Próximos Eventos
2. Eventos Realizados
3. Galeria de Fotos

**SEÇÃO EVENTOS REALIZADOS:**
- Timeline vertical
- Anos organizados
- Nome do evento
- Tema
- Anais (quando disponível)

**FORMATO:**
```
2019 ─────────────────────────────────
  │
  ├─ II Congresso Internacional de 
  │  Fenomenologia & Psicologia
  │  Tema: [...]
  │  [Anais] [Fotos]
  │
2017 ─────────────────────────────────
  │
  ├─ I Congresso Internacional de
  │  Fenomenologia Existencial
  │  [Anais] [Fotos]
  │
2015 ─────────────────────────────────
```

### Conteúdo

**Lista de Congressos:**
(Ver documento principal para lista completa)

**Tipos de Eventos:**
- Congressos Internacionais
- Congressos Nacionais
- Congressos Regionais
- Seminários
- Mini-cursos

---

## 🎨 TELA 10: FENOMENOLOGIA (Recursos)

### Layout Sugerido

**SEÇÃO 1: O QUE É FENOMENOLOGIA**
- Texto introdutório
- 4 perspectivas principais
- Infográfico ou ilustração

**SEÇÃO 2: LINKS E SITES**
- Categorias:
  * Arquivos e Centros
  * Associações
  * Recursos Online
- Lista organizada com ícones

**SEÇÃO 3: BIBLIOTECA DIGITAL**
- Sub-tabs:
  * Obras de Husserl
  * Outros Autores
  * Teses e Dissertações
- Downloads disponíveis

**SEÇÃO 4: VIDEOTECA**
- Categorias:
  * Fenomenologia
  * Religiosidade
  * Psicoterapia
  * Saúde Mental
- Thumbnails de vídeos
- Links para YouTube

---

## 🎨 TELA 11: CONTATO

### Layout Sugerido

**SEÇÃO 1: FORMULÁRIO DE CONTATO**
```
┌─────────────────────────────────┐
│ Nome:     [___________________] │
│ Email:    [___________________] │
│ Assunto:  [___________________] │
│ Mensagem: [___________________] │
│           [___________________] │
│           [___________________] │
│                                 │
│         [ENVIAR MENSAGEM]       │
└─────────────────────────────────┘
```

**SEÇÃO 2: INFORMAÇÕES**
```
📧 E-mails:
aholanda@yahoo.com
labfeno@gmail.com

📍 Endereço:
Universidade Federal do Paraná
Prédio Histórico - Sala 113
Departamento de Psicologia

🕐 Reuniões:
Quartas-feiras, quinzenalmente
18h às 20h
```

**SEÇÃO 3: REDES SOCIAIS**
- Ícones grandes clicáveis
- Facebook, Instagram, Twitter, YouTube

**SEÇÃO 4: APLICATIVOS**
- Links para AppStore
- Links para PlayStore
- QR Codes

**SEÇÃO 5: MAPA**
- Google Maps embarcado
- Localização exata da UFPR

---

## 🎨 TELA 12 (OPCIONAL): BLOG/NOTÍCIAS

### Layout Sugerido

**GRID DE POSTS:**
```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│  [Imagem]    │ │  [Imagem]    │ │  [Imagem]    │
│              │ │              │ │              │
│  Título do   │ │  Título do   │ │  Título do   │
│  Post        │ │  Post        │ │  Post        │
│              │ │              │ │              │
│  Data        │ │  Data        │ │  Data        │
│  [Ler mais]  │ │  [Ler mais]  │ │  [Ler mais]  │
└──────────────┘ └──────────────┘ └──────────────┘
```

**CATEGORIAS:**
- Eventos
- Publicações
- Pesquisas
- Destaques

---

## 📐 COMPONENTES GLOBAIS

### MENU PRINCIPAL (Desktop)
```
┌─────────────────────────────────────────────────────┐
│ LOGO    Home  LabFeno  Integrantes  Bibliografia    │
│                Ensino  Pesquisas  Revistas  Eventos │
│                Fenomenologia  Contato         [🔍]  │
└─────────────────────────────────────────────────────┘
```

### MENU MOBILE (Hamburger)
```
☰ MENU
─────────────
  Home
  LabFeno
  Integrantes
  Bibliografia
  Ensino
  Pesquisas
  Revistas
  Eventos
  Fenomenologia
  Contato
─────────────
  [Buscar]
```

### FOOTER (Todas as páginas)
```
┌───────────────────────────────────────────────────┐
│  LABFENO                                          │
│  O LabFeno dedica-se ao estudo aprofundado da     │
│  fenomenologia e da subjetividade...              │
│                                                   │
│  LINKS RÁPIDOS      CONTATO         REDES SOCIAIS │
│  - Home             📧 Emails       [f] [📷]      │
│  - Sobre            📍 Endereço     [t] [▶]      │
│  - Integrantes      🕐 Horário                    │
│  - Eventos                                        │
│                                                   │
│  © 2024 LabFeno - Todos os direitos reservados   │
└───────────────────────────────────────────────────┘
```

---

## 🎨 PALETA DE CORES SUGERIDA

**Cores Principais:**
- Azul Acadêmico: #003366 (Institucional)
- Azul Claro: #4A90E2 (Destaques)
- Cinza Escuro: #333333 (Texto)
- Branco: #FFFFFF (Fundo)
- Cinza Claro: #F5F5F5 (Fundo alternativo)

**Cores de Acento:**
- Dourado/Amarelo: #FFB81C (CTAs, destaques)
- Verde: #28A745 (Sucesso, links)
- Vermelho: #DC3545 (Alertas)

---

## 📱 RESPONSIVIDADE

### Breakpoints Sugeridos
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Adaptações Mobile

**Home:**
- Hero em tela cheia
- Cards empilhados verticalmente
- Menu hamburguer
- CTAs em botões largos

**Integrantes:**
- Cards de coordenadores em coluna única
- Accordions para listas
- Fotos em círculo

**Bibliografia:**
- Tabs transformados em accordions
- Lista vertical
- Busca simplificada

---

## ⚡ FUNCIONALIDADES INTERATIVAS

### Obrigatórias
1. **Busca global** no site
2. **Filtros** na página de Bibliografia
3. **Formulário de contato** funcional
4. **Carrossel** de destaques na home
5. **Accordions** para conteúdo extenso
6. **Tabs** para organização de conteúdo
7. **Lightbox** para galeria de fotos
8. **Scroll suave** entre seções
9. **Botão "Voltar ao topo"**
10. **Lazy loading** de imagens

### Desejáveis
1. **Newsletter** signup
2. **Calendário** de eventos
3. **Sistema de busca** avançado
4. **RSS Feed**
5. **Compartilhamento** em redes sociais
6. **Modo escuro**
7. **Acessibilidade** (WCAG AA)
8. **Multilíngue** (PT/EN/ES)

---

## 📊 SEO E PERFORMANCE

### Meta Tags Essenciais
- Title único por página
- Meta description
- Open Graph tags
- Twitter Cards
- Canonical URLs

### Performance
- Imagens otimizadas (WebP)
- Lazy loading
- Minificação CSS/JS
- Cache browser
- CDN para assets

---

## ✅ CHECKLIST DE DESENVOLVIMENTO

### Fase 1: Estrutura
- [ ] Setup do projeto
- [ ] Configuração de breakpoints
- [ ] Criação de componentes base
- [ ] Sistema de grid

### Fase 2: Páginas Estáticas
- [ ] Home
- [ ] LabFeno
- [ ] Integrantes
- [ ] Fenomenologia
- [ ] Contato

### Fase 3: Páginas Dinâmicas
- [ ] Bibliografia (com filtros)
- [ ] Ensino
- [ ] Pesquisas
- [ ] Revistas
- [ ] Eventos

### Fase 4: Funcionalidades
- [ ] Formulário de contato
- [ ] Sistema de busca
- [ ] Integração com redes sociais
- [ ] Galeria de fotos
- [ ] Downloads de PDFs

### Fase 5: Testes
- [ ] Teste responsivo
- [ ] Teste de performance
- [ ] Teste de acessibilidade
- [ ] Teste cross-browser
- [ ] Teste de SEO

### Fase 6: Deploy
- [ ] Migração de conteúdo
- [ ] Configuração de domínio
- [ ] SSL
- [ ] Analytics
- [ ] Monitoramento

---

**Documento preparado para:** Redesign completo do site LabFeno
**Tecnologias sugeridas:** React, Next.js, TailwindCSS
**Data:** Abril 2026
