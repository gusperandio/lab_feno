# SKILL: Desenvolvimento Web Responsivo para Sites Acadêmicos
## Guia Completo para Criar Sites Institucionais Modernos e Responsivos

---

## 📋 OBJETIVO DESTE SKILL

Este skill fornece diretrizes completas para criar sites institucionais acadêmicos modernos, responsivos e de alta qualidade, com foco em:
- Performance otimizada
- Design responsivo
- Acessibilidade
- SEO
- Experiência do usuário
- Manutenibilidade

---

## 🛠️ STACK TECNOLÓGICA RECOMENDADA

### Frontend Framework
**Opção 1: Next.js (Recomendado)**
- React-based
- SSR e SSG nativos
- Otimização de imagens automática
- File-based routing
- API routes integradas

**Opção 2: React + Vite**
- Build rápido
- Hot Module Replacement
- Configuração simples

### Styling
**TailwindCSS (Altamente Recomendado)**
- Utility-first CSS
- Responsivo por padrão
- Dark mode nativo
- Customizável
- Tree-shaking automático

**Alternativa: Styled Components ou CSS Modules**

### Gerenciamento de Estado
- React Context API (para sites simples)
- Zustand (para sites médios)
- Redux Toolkit (para sites complexos)

### Animações
- Framer Motion (React)
- GSAP (JavaScript puro)
- CSS Animations (casos simples)
---

## 📐 ESTRUTURA DE PROJETO

### Estrutura de Pastas (Next.js)
```
lab_feno_/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── team/
│   │   ├── events/
│   │   └── logos/
│   ├── pdfs/
│   └── icons/
├── src/
│   ├── app/
│   │   ├── page.tsx (Home)
│   │   ├── labfeno/
│   │   │   └── page.tsx
│   │   ├── integrantes/
│   │   │   └── page.tsx
│   │   ├── bibliografia/
│   │   │   └── page.tsx
│   │   ├── ensino/
│   │   │   └── page.tsx
│   │   ├── pesquisas/
│   │   │   └── page.tsx
│   │   ├── revistas/
│   │   │   └── page.tsx
│   │   ├── eventos/
│   │   │   └── page.tsx
│   │   ├── fenomenologia/
│   │   │   └── page.tsx
│   │   └── contato/
│   │       └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Accordion.tsx
│   │   │   ├── Tabs.tsx
│   │   │   └── Modal.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Team.tsx
│   │   │   └── Contact.tsx
│   │   └── shared/
│   │       ├── SEO.tsx
│   │       ├── Newsletter.tsx
│   │       └── SocialLinks.tsx
│   ├── lib/
│   │   ├── api.ts
│   │   ├── utils.ts
│   │   └── constants.ts
│   ├── styles/
│   │   └── globals.css
│   ├── types/
│   │   └── index.ts
│   └── data/
│       ├── integrantes.json
│       ├── eventos.json
│       └── bibliografia.json
├── .env.local
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 SISTEMA DE DESIGN

### Cores (Tailwind Config)
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003366',
          50: '#E6EDF5',
          100: '#CCDAEB',
          200: '#99B5D7',
          300: '#6690C3',
          400: '#336BAF',
          500: '#003366',
          600: '#002952',
          700: '#001F3D',
          800: '#001429',
          900: '#000A14',
        },
        accent: {
          DEFAULT: '#4A90E2',
          light: '#6BA4E8',
          dark: '#2E6BC0',
        },
        success: '#28A745',
        warning: '#FFB81C',
        error: '#DC3545',
        neutral: {
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
```

### Tipografia
```css
/* globals.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Merriweather:wght@300;400;700;900&display=swap');

:root {
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-serif: 'Merriweather', Georgia, serif;
}

body {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-serif);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

h1 { font-size: 2.5rem; } /* 40px */
h2 { font-size: 2rem; }   /* 32px */
h3 { font-size: 1.75rem; }/* 28px */
h4 { font-size: 1.5rem; } /* 24px */
h5 { font-size: 1.25rem; }/* 20px */
h6 { font-size: 1rem; }   /* 16px */

@media (max-width: 768px) {
  h1 { font-size: 2rem; }
  h2 { font-size: 1.75rem; }
  h3 { font-size: 1.5rem; }
  h4 { font-size: 1.25rem; }
}
```

---

## 📱 RESPONSIVIDADE

### Breakpoints
```javascript
// Tailwind default breakpoints
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px

// Uso:
<div className="
  w-full           /* mobile: 100% */
  md:w-1/2         /* tablet: 50% */
  lg:w-1/3         /* desktop: 33% */
  xl:w-1/4         /* large: 25% */
">
  Conteúdo responsivo
</div>
```

### Grid Responsivo
```jsx
// components/sections/Features.tsx
export function Features() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Destaques
        </h2>
        <div className="
          grid
          grid-cols-1        /* mobile: 1 coluna */
          md:grid-cols-2     /* tablet: 2 colunas */
          lg:grid-cols-3     /* desktop: 3 colunas */
          gap-6
        ">
          <FeatureCard title="Grupos de Estudo" />
          <FeatureCard title="Colóquios" />
          <FeatureCard title="Parcerias" />
        </div>
      </div>
    </section>
  );
}
```

---

## 🧩 COMPONENTES PRINCIPAIS

### Header Responsivo
```tsx
// components/layout/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'LabFeno', href: '/labfeno' },
    { name: 'Integrantes', href: '/integrantes' },
    { name: 'Bibliografia', href: '/bibliografia' },
    { name: 'Ensino', href: '/ensino' },
    { name: 'Pesquisas', href: '/pesquisas' },
    { name: 'Revistas', href: '/revistas' },
    { name: 'Eventos', href: '/eventos' },
    { name: 'Fenomenologia', href: '/fenomenologia' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="LabFeno" 
              className="h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
```

### Hero Section
```tsx
// components/sections/Hero.tsx
export function Hero() {
  return (
    <section className="
      relative 
      bg-gradient-to-br from-primary to-primary-700
      text-white
      py-20 md:py-32
      px-4
    ">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="
          text-4xl md:text-5xl lg:text-6xl 
          font-bold 
          mb-6
          animate-fade-in
        ">
          Laboratório de Fenomenologia e Subjetividade
        </h1>
        
        <p className="
          text-xl md:text-2xl 
          mb-8 
          max-w-3xl 
          mx-auto
          text-gray-100
        ">
          Onde a pesquisa se alia ao rigor filosófico para desvelar 
          as múltiplas dimensões do ser humano
        </p>
        
        <div className="
          flex 
          flex-col sm:flex-row 
          gap-4 
          justify-center
        ">
          <Button variant="secondary" size="lg">
            Conheça Mais
          </Button>
          <Button variant="outline" size="lg">
            Contato
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="
        absolute 
        bottom-8 
        left-1/2 
        transform -translate-x-1/2
        animate-bounce
      ">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
```

### Card Component
```tsx
// components/ui/Card.tsx
interface CardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

export function Card({ title, description, image, link }: CardProps) {
  return (
    <div className="
      bg-white 
      rounded-lg 
      shadow-md 
      overflow-hidden
      hover:shadow-xl 
      transition-shadow
      duration-300
    ">
      {image && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {link && (
          <a 
            href={link}
            className="
              text-primary 
              hover:text-primary-700 
              font-semibold
              inline-flex items-center
            "
          >
            Saiba mais
            <ArrowRight size={20} className="ml-2" />
          </a>
        )}
      </div>
    </div>
  );
}
```

### Accordion Component
```tsx
// components/ui/Accordion.tsx
'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div 
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="
              w-full 
              px-6 py-4 
              flex justify-between items-center
              bg-gray-50 hover:bg-gray-100
              transition-colors
            "
          >
            <span className="font-semibold text-left">{item.title}</span>
            <ChevronDown 
              className={`
                transition-transform 
                ${openIndex === index ? 'rotate-180' : ''}
              `}
            />
          </button>
          
          <div 
            className={`
              px-6
              transition-all
              ${openIndex === index ? 'py-4' : 'h-0 overflow-hidden'}
            `}
          >
            <p className="text-gray-700">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
```

### Tabs Component
```tsx
// components/ui/Tabs.tsx
'use client';

import { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tab Headers */}
      <div className="
        flex 
        border-b border-gray-200
        overflow-x-auto
        scrollbar-hide
      ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`
              px-6 py-3
              font-semibold
              border-b-2
              transition-colors
              whitespace-nowrap
              ${activeTab === index 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-6">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}
```

---

## 🔍 SEO E META TAGS

### Layout Root
```tsx
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'LabFeno | Laboratório de Fenomenologia e Subjetividade',
    template: '%s | LabFeno',
  },
  description: 'O LabFeno dedica-se ao estudo aprofundado da fenomenologia e da subjetividade, unindo rigor acadêmico e sensibilidade filosófica.',
  keywords: ['fenomenologia', 'psicologia', 'subjetividade', 'UFPR', 'pesquisa'],
  authors: [{ name: 'LabFeno UFPR' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://labfeno.com.br',
    siteName: 'LabFeno',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LabFeno',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@psicofeno',
    creator: '@psicofeno',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
```

### Página Individual
```tsx
// app/integrantes/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integrantes',
  description: 'Conheça a equipe do LabFeno: coordenadores, doutorandos, mestrandos e egressos.',
  openGraph: {
    title: 'Integrantes | LabFeno',
    description: 'Conheça a equipe do LabFeno',
  },
};

export default function IntegrantesPage() {
  return (
    <main>
      {/* Conteúdo da página */}
    </main>
  );
}
```

---

## ⚡ PERFORMANCE

### Otimização de Imagens
```tsx
// Next.js Image component
import Image from 'next/image';

<Image
  src="/images/team/adriano.jpg"
  alt="Adriano Furtado Holanda"
  width={300}
  height={300}
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  loading="lazy"
  className="rounded-full"
/>
```

### Lazy Loading Components
```tsx
// Lazy load heavy components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(
  () => import('@/components/HeavyComponent'),
  {
    loading: () => <Skeleton />,
    ssr: false, // Desabilita SSR se não for necessário
  }
);
```

### Font Optimization
```tsx
// app/layout.tsx
import { Inter, Merriweather } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
});

export default function RootLayout({ children }) {
  return (
    <html 
      lang="pt-BR" 
      className={`${inter.variable} ${merriweather.variable}`}
    >
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
```

---

## ♿ ACESSIBILIDADE

### Checklist WCAG 2.1 AA

```tsx
// Boas práticas de acessibilidade

// 1. Textos alternativos
<img src="..." alt="Descrição clara e concisa" />

// 2. Contraste adequado
// Texto normal: mínimo 4.5:1
// Texto grande: mínimo 3:1

// 3. Navegação por teclado
<button 
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  tabIndex={0}
  aria-label="Abrir menu"
>
  Menu
</button>

// 4. Landmarks ARIA
<header role="banner">
<nav role="navigation" aria-label="Menu principal">
<main role="main">
<aside role="complementary">
<footer role="contentinfo">

// 5. Skip links
<a 
  href="#main-content" 
  className="sr-only focus:not-sr-only"
>
  Pular para o conteúdo principal
</a>

// 6. Form labels
<label htmlFor="email">
  E-mail
  <input 
    id="email" 
    type="email"
    aria-required="true"
    aria-invalid={hasError}
    aria-describedby={hasError ? "email-error" : undefined}
  />
</label>
{hasError && <span id="email-error" role="alert">...</span>}
```

---

## 🎭 ANIMAÇÕES

### Framer Motion
```tsx
// components/ui/FadeIn.tsx
import { motion } from 'framer-motion';

export function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

// Uso:
<FadeIn delay={0.2}>
  <h2>Título com fade in</h2>
</FadeIn>
```

### CSS Animations
```css
/* globals.css */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in {
  animation: slide-in-right 0.6s ease-out;
}
```

---

## 📧 FORMULÁRIO DE CONTATO

### Contact Form Component
```tsx
// components/sections/ContactForm.tsx
'use client';

import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Nome *
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          E-mail *
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Assunto *
        </label>
        <input
          id="subject"
          type="text"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Mensagem *
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="
          w-full 
          bg-primary 
          text-white 
          py-3 
          rounded-lg
          font-semibold
          hover:bg-primary-700
          disabled:opacity-50
          disabled:cursor-not-allowed
          transition-colors
        "
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
      </button>

      {status === 'success' && (
        <div className="p-4 bg-green-50 text-green-800 rounded-lg">
          Mensagem enviada com sucesso!
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-50 text-red-800 rounded-lg">
          Erro ao enviar mensagem. Tente novamente.
        </div>
      )}
    </form>
  );
}
```

### API Route (Next.js)
```tsx
// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  // Configurar transporter do Nodemailer
  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'labfeno@gmail.com',
      replyTo: email,
      subject: `[LabFeno] ${subject}`,
      html: `
        <h2>Nova mensagem do site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
```

---

## 📦 DEPLOYMENT

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Configurações
# vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["gru1"] // São Paulo
}
```

### Netlify
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🔐 VARIÁVEIS DE AMBIENTE

```env
# .env.local

# Site
NEXT_PUBLIC_SITE_URL=https://labfeno.com.br

# Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=labfeno@gmail.com
SMTP_PASS=your_password_here

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# APIs
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_key_here
RECAPTCHA_SECRET_KEY=your_secret_here
```

---

## ✅ CHECKLIST DE QUALIDADE

### Antes de Publicar
- [ ] Todas as imagens otimizadas (WebP)
- [ ] Meta tags configuradas
- [ ] Sitemap.xml gerado
- [ ] Robots.txt configurado
- [ ] SSL ativo
- [ ] Performance Score > 90 (Lighthouse)
- [ ] Acessibilidade Score > 90 (Lighthouse)
- [ ] SEO Score > 90 (Lighthouse)
- [ ] Mobile-friendly (Google Test)
- [ ] Cross-browser testado
- [ ] Forms funcionais
- [ ] Links verificados
- [ ] Console sem erros
- [ ] Analytics configurado
- [ ] Backup configurado

---

**Este skill cobre:** Desenvolvimento completo de sites acadêmicos responsivos
**Stack:** Next.js + React + TailwindCSS + TypeScript
**Criado para:** Projeto LabFeno UFPR
