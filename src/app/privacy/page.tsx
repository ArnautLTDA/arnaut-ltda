import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade · Arnaut LTDA",
  description: "Política de privacidade e proteção de dados da Arnaut LTDA.",
};

export default function PrivacyPage() {
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
          Política de Privacidade
        </h1>
        <p className="text-base leading-relaxed text-[#d0d7cf] mb-6">
          A <strong>Arnaut LTDA</strong> respeita a privacidade de seus clientes
          e usuários. Este documento estabelece as diretrizes de tratamento,
          retenção e proteção de dados coletados em nossos serviços e canais de
          contato.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4 text-[var(--p-accent)]">
          1. Coleta e Finalidade dos Dados
        </h2>
        <p className="text-base leading-relaxed text-[#d0d7cf] mb-6">
          Coletamos exclusivamente os dados fornecidos voluntariamente por meio
          de nossos formulários de contato e propostas comerciais (nome,
          endereço de e-mail corporativo e escopo do projeto). Essas informações
          são utilizadas unicamente para elaboração de orçamentos técnicos e
          atendimento institucional.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4 text-[var(--p-accent)]">
          2. Isolamento e Segurança de Segredos
        </h2>
        <p className="text-base leading-relaxed text-[#d0d7cf] mb-6">
          Em projetos desenvolvidos pela Arnaut LTDA, aplicamos o princípio de
          Zero Secrets in Code e confinamento em gateways independentes. Não
          armazenamos nem transmitimos credenciais bancárias ou chaves de
          produção em servidores desprotegidos.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4 text-[var(--p-accent)]">
          3. Compartilhamento com Terceiros
        </h2>
        <p className="text-base leading-relaxed text-[#d0d7cf] mb-6">
          A Arnaut LTDA não comercializa, não aluga e não compartilha dados de
          clientes com terceiros para fins publicitários. Os dados são mantidos
          em ambientes seguros com criptografia de ponta a ponta.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4 text-[var(--p-accent)]">
          4. Contato do Encarregado de Dados
        </h2>
        <p className="text-base leading-relaxed text-[#d0d7cf] mb-6">
          Para dúvidas sobre o tratamento de seus dados ou solicitações de
          exclusão, entre em contato pelo e-mail{" "}
          <code className="text-[var(--p-accent)] font-mono bg-white/5 px-2 py-0.5 rounded">
            contato@arnaut.dev.br
          </code>
          .
        </p>
      </div>
    </div>
  );
}
