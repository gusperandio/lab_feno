"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "LabFeno", href: "#labfeno" },
  { label: "Integrantes", href: "#integrantes" },
  { label: "Bibliografia", href: "#bibliografia" },
  { label: "Ensino", href: "#ensino" },
  { label: "Pesquisas", href: "#pesquisas" },
  { label: "Revistas", href: "#revistas" },
  { label: "Congressos", href: "#eventos" },
  { label: "Fenomenologia", href: "#fenomenologia" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48)

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[#c8b27d]/40 bg-[#f7f1e5]/92 text-[#1f1812] shadow-[0_18px_50px_rgba(31,24,18,0.08)] backdrop-blur-xl"
          : "text-[#fbf4e8]"
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#inicio"
          className="group flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span
            className={cn(
              "relative flex size-12 shrink-0 items-center justify-center overflow-hidden border transition-colors",
              scrolled
                ? "border-[#a8843f]/40 bg-white"
                : "border-white/35 bg-black/20"
            )}
          >
            <Image
              src="/lab_feno_logo.jpg"
              alt="LabFeno"
              width={90}
              height={50}
              priority
              className="h-auto w-11 object-contain"
            />
          </span>
          <span className="min-w-0">
            <span className="block font-heading text-sm font-semibold tracking-[0.18em]">
              LABFENO
            </span>
            <span
              className={cn(
                "hidden text-xs sm:block",
                scrolled ? "text-[#6b5d47]" : "text-[#f1ddae]"
              )}
            >
              Fenomenologia e Subjetividade
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? "hover:bg-[#eadfca] hover:text-[#31594f]"
                  : "hover:bg-white/12 hover:text-[#f3d38e]"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            asChild
            className={cn(
              "rounded-full border px-5",
              scrolled
                ? "border-[#31594f]/20 bg-[#31594f] text-white hover:bg-[#24433b]"
                : "border-[#f3d38e]/60 bg-[#f3d38e] text-[#24160f] hover:bg-[#f7deb0]"
            )}
          >
            <a href="#contato">Contato</a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className={cn(
            "inline-flex size-10 items-center justify-center border transition-colors lg:hidden",
            scrolled
              ? "border-[#c8b27d]/50 bg-white/70 text-[#24160f]"
              : "border-white/35 bg-black/20 text-white"
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "grid overflow-hidden border-t border-[#c8b27d]/30 bg-[#f7f1e5]/96 px-4 text-[#24160f] shadow-xl backdrop-blur-xl transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-transparent"
        )}
      >
        <div className="min-h-0">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-[#ded0b3] px-2 py-3 text-sm font-medium last:border-b-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-3 rounded-full bg-[#31594f] text-white"
            >
              <a href="#contato" onClick={() => setOpen(false)}>
                Entrar em contato
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
