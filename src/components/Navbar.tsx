"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">
          Pular para o conteúdo principal
        </a>

        <Link className="nav__logo" href="/#top">
          <span className="mark" data-mark="stack" aria-hidden="true"></span>
          Arnaut LTDA
        </Link>

        <nav className="nav__links" aria-label="Navegação principal">
          <div className="nav__item">
            <a className="nav__link" href="/#agency">
              The Agency
            </a>
          </div>
          <div className="nav__item">
            <a className="nav__link" href="/#pillars">
              Pilares
            </a>
          </div>
          <div className="nav__item">
            <a className="nav__link" href="/#lifecycle">
              Ciclo
            </a>
          </div>
          <div className="nav__item">
            <a className="nav__link" href="/#stack">
              Tecnologias
            </a>
          </div>
          <div className="nav__item">
            <a className="nav__link" href="/#faq">
              Perguntas
            </a>
          </div>
        </nav>

        <div className="nav__actions">
          <a className="btn btn--primary" href="/#contact">
            Solicitar proposta
          </a>
        </div>

        <button
          className="nav__toggle"
          type="button"
          aria-expanded={isOpen}
          aria-label="Menu principal"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path
                d="M3 3l12 12M15 3L3 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path
                d="M2 5h14M2 13h14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="sm:hidden border-b border-white/10 px-6 py-4 flex flex-col gap-3"
          style={{ backgroundColor: "var(--p-surface)" }}
        >
          <a
            className="text-sm py-2 text-white/90 hover:text-white"
            href="/#agency"
            onClick={() => setIsOpen(false)}
          >
            The Agency
          </a>
          <a
            className="text-sm py-2 text-white/90 hover:text-white"
            href="/#pillars"
            onClick={() => setIsOpen(false)}
          >
            Pilares
          </a>
          <a
            className="text-sm py-2 text-white/90 hover:text-white"
            href="/#lifecycle"
            onClick={() => setIsOpen(false)}
          >
            Ciclo
          </a>
          <a
            className="text-sm py-2 text-white/90 hover:text-white"
            href="/#stack"
            onClick={() => setIsOpen(false)}
          >
            Tecnologias
          </a>
          <a
            className="text-sm py-2 text-white/90 hover:text-white"
            href="/#faq"
            onClick={() => setIsOpen(false)}
          >
            Perguntas
          </a>
          <div className="pt-2">
            <a
              className="btn btn--primary w-full text-center"
              href="/#contact"
              onClick={() => setIsOpen(false)}
            >
              Solicitar proposta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
