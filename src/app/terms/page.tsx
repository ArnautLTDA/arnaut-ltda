import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso e Serviço · Arnaut LTDA",
  description:
    "Termos de prestação de serviços de engenharia e desenvolvimento de software da Arnaut LTDA.",
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
          Termos de Serviço
        </h1>
        <p className="text-base leading-relaxed text-[#d0d7cf] mb-6">
          Estes termos regem o relacionamento comercial e as entregas de
          software executadas pela <strong>Arnaut LTDA</strong>.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4 text-[var(--p-accent)]">
          1. Propriedade Intelectual e Código-Fonte
        </h2>
        <p className="text-base leading-relaxed text-[#d0d7cf] mb-6">
          O cliente adquire a titularidade integral sobre todo o código-fonte
          desenvolvido sob encomenda, esquemas de banco de dados, fluxos de
          automação e documentações criadas especificamente para o seu projeto,
          mediante a quitação dos marcos acordados.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4 text-[var(--p-accent)]">
          2. Garantia de Qualidade e Critérios de Aceite
        </h2>
        <p className="text-base leading-relaxed text-[#d0d7cf] mb-6">
          Todas as entregas são formalizadas por meio de especificações em BDD
          Gherkin e suítes de testes automatizados com cobertura mínima de 80%.
          O projeto só é considerado concluído após a aprovação de todos os
          gates de segurança e testes de homologação.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4 text-[var(--p-accent)]">
          3. Acordo de Nível de Serviço (SLA)
        </h2>
        <p className="text-base leading-relaxed text-[#d0d7cf] mb-6">
          Para contratos de esteira contínua (The Agency) e squads dedicados, os
          tempos de resposta, janelas de manutenção e métricas de
          disponibilidade são formalizados em anexo contratual específico.
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
