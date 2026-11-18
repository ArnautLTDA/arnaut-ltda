import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso e Serviço · Arnaut LTDA",
  description:
    "Termos de uso da plataforma The Agency e dos produtos tecnológicos da Arnaut LTDA.",
};

export default function TermsPage() {
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
          Termos de Serviço da Plataforma
        </h1>
        <p className="text-base leading-relaxed text-[#d0d7cf] mb-6">
          Estes termos regem o acesso, licença e operação da plataforma{" "}
          <strong>The Agency</strong> e dos produtos tecnológicos fornecidos
          pela <strong>Arnaut LTDA</strong>.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4 text-[var(--p-accent)]">
          1. Objeto e Natureza da Plataforma
        </h2>
        <p className="text-base leading-relaxed text-[#d0d7cf] mb-6">
          A Arnaut LTDA fornece soluções de software e plataformas de
          inteligência artificial. O produto The Agency consiste em uma
          plataforma de automação para que operadores e empreendedores criem e
          gerenciem suas próprias soluções e agências de software com auxílio de
          agentes cognitivos autônomos.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4 text-[var(--p-accent)]">
          2. Propriedade Intelectual e Código Gerado
        </h2>
        <p className="text-base leading-relaxed text-[#d0d7cf] mb-6">
          A Arnaut LTDA detém a titularidade sobre a plataforma The Agency e
          seus motores cognitivos. Todo o código-fonte de projetos finais
          gerados pela plataforma para os clientes do operador é transferido de
          forma integral sem vendor lock-in, com padrões abertos em TypeScript,
          Next.js e Clean Architecture.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4 text-[var(--p-accent)]">
          3. Garantia de Qualidade e Segurança
        </h2>
        <p className="text-base leading-relaxed text-[#d0d7cf] mb-6">
          A plataforma aplica portões obrigatórios de qualidade técnica:
          cobertura mínima de 80% em suítes de testes automatizados e varreduras
          de segurança com múltiplos motores estáticos e dinâmicos antes da
          entrega de qualquer solução em produção.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4 text-[var(--p-accent)]">
          4. Foro e Legislação Aplicável
        </h2>
        <p className="text-base leading-relaxed text-[#d0d7cf] mb-6">
          Estes termos são regidos pelas leis da República Federativa do Brasil,
          elegendo-se o foro da Comarca de São Paulo, SP, para dirimir eventuais
          controvérsias.
        </p>
      </div>
    </div>
  );
}
