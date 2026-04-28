---
name: lab-feno-ui
description: Use esta skill para tarefas de frontend e interface no projeto Lab Feno, incluindo landing pages, secoes, header, hero, componentes, refino visual, responsividade, tipografia e animacoes. O projeto usa HeroUI v3, shadcn/ui e componentes personalizados, com foco em UI e experiencia visual.
---

# Lab Feno UI

## Contexto

Este projeto e uma interface em `Next.js 16` com `React 19`, `Tailwind CSS v4` e foco quase exclusivo em camada visual.

Stack principal:

- `@heroui/react` v3 para componentes de interface e composicao rapida.
- `shadcn/ui` para blocos utilitarios e componentes base em `components/ui`.
- Componentes personalizados em `components/` para partes especificas da experiencia.

Bibliotecas de animacao ja presentes no projeto:
- `@react-bits`
- `framer-motion` / `motion`
- `gsap` e `@gsap/react`
- `animate.css`

## Diretrizes

- Priorize trabalho visual: layout, composicao, hierarquia tipografica, espacos, estados e responsividade.
- Evite introduzir regras de negocio, integracoes de backend ou fluxos complexos sem necessidade explicita.
- Reaproveite `HeroUI` e `shadcn/ui` antes de criar novas bases genericas.
- Use componentes personalizados quando a interface exigir identidade propria ou comportamento visual fora do padrao das bibliotecas.
- Preserve a linguagem visual existente: serif para texto base, `DM Sans` para destaque e uso forte de imagem de fundo.
- Considere animacoes como parte da experiencia, mas mantenha execucao leve, clara e com degradacao aceitavel.

## Preferencias de implementacao

- Para elementos de interface prontos, prefira `HeroUI v3`.
- Para primitives, utilitarios e padroes locais, prefira `shadcn/ui`.
- Para secoes hero, cabecalho, botoes flutuantes e textos animados, mantenha ou evolua os componentes customizados ja existentes.
- Mantenha compatibilidade com `Tailwind CSS v4` e com os tokens definidos em `styles/globals.css`.

## O que evitar

- Nao transformar o projeto em dashboard, CRUD ou app orientado a dados sem pedido explicito.
- Nao adicionar dependencias de estado global ou arquitetura desnecessaria para uma camada de UI.
- Nao substituir componentes customizados sem ganho visual claro ou simplificacao real.

## Referencias rapidas

- `app/`
- `components/`
- `components/ui/`
- `styles/globals.css`
- `components.json`
