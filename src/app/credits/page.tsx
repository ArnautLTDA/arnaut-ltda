import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Créditos e Atribuições · Arnaut LTDA",
  description:
    "Créditos de fontes, bibliotecas e ativos utilizados no site institucional da Arnaut LTDA.",
};

export default function CreditsPage() {
  return (
    <div
      style={{
        background: "var(--p-bg)",
        minHeight: "100vh",
        color: "var(--p-ink)",
      }}
    >
      <div className="legal-wrap max-w-[760px] mx-auto px-6 pt-24 pb-16">
        <Link
          className="back-link inline-flex items-center gap-2 text-[var(--p-accent)] hover:underline text-sm mb-8"
          href="/"
        >
          &larr; Voltar para a página inicial
        </Link>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">
          Créditos e Atribuições
        </h1>
        <p className="text-base leading-relaxed text-[#d0d7cf] mb-6">
          Ativos, tipografias e bibliotecas de código aberto utilizados no
          desenvolvimento deste portal institucional:
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4 text-[var(--p-accent)]">
          1. Tipografia
        </h2>
        <ul className="list-disc pl-5 text-base leading-relaxed text-[#d0d7cf] space-y-2 mb-6">
          <li>
            <strong>Host Grotesk:</strong> Criada por Lucas Sharp e
            colaboradores, distribuída sob licença SIL Open Font License através
            do Google Fonts.
          </li>
          <li>
            <strong>JetBrains Mono:</strong> Desenvolvida pela JetBrains,
            distribuída sob licença Apache 2.0.
          </li>
        </ul>

        <h2 className="text-xl font-medium mt-10 mb-4 text-[var(--p-accent)]">
          2. Ícones e Marcas
        </h2>
        <p className="text-base leading-relaxed text-[#d0d7cf] mb-6">
          Ícones das tecnologias referenciadas (Python, TypeScript, Node.js,
          PostgreSQL, RabbitMQ, Docker, GitHub, Playwright, React, FastAPI) são
          marcas registradas de suas respectivas organizações e mantenedores de
          código aberto, utilizados estritamente em caráter identificador de
          interoperabilidade técnica.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4 text-[var(--p-accent)]">
          3. Engenharia de Frontend
        </h2>
        <p className="text-base leading-relaxed text-[#d0d7cf] mb-6">
          Construído com Next.js 15, Tailwind CSS, TypeScript e a arquitetura e
          componentes de precisão da <strong>Arnaut LTDA</strong>.
        </p>
      </div>
    </div>
  );
}
