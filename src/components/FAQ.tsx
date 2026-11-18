export default function FAQ() {
  const faqs = [
    {
      question: "Propriedade do código de software e direitos intelectuais",
      answer:
        "A sua empresa detém 100% dos direitos patrimoniais e de propriedade intelectual do código gerado, dos testes e das configurações de infraestrutura.",
    },
    {
      question: "Isolamento de segurança e proteção de credenciais de software",
      answer:
        "Utilizamos contêineres Docker confinados e gateways dedicados. Segredos bancários residem em variáveis de ambiente isoladas e nunca em repositórios.",
    },
    {
      question: "Política de testes e cobertura de código de software",
      answer:
        "Nenhuma entrega entra em homologação sem 80% de cobertura de código verificada por pytest, jest ou coverage tools integradas à esteira.",
    },
    {
      question: "Auditoria técnica e processo de modernização de software",
      answer:
        "Sim. Executamos uma PoC de auditoria para mapear pontos de falha e aplicar automações gradualmente com suítes de regressão Playwright.",
    },
  ];

  return (
    <section
      className="section"
      id="faq"
      style={{ "--h": 1 } as React.CSSProperties}
      aria-labelledby="faq-h"
    >
      <div className="wrap">
        <div className="grid">
          <div className="span-6">
            <h2 id="faq-h">
              Perguntas frequentes sobre a esteira The Agency.{" "}
              <span className="muted">
                Respostas técnicas sobre nossa operação autônoma.
              </span>
            </h2>
            <p style={{ color: "var(--p-muted)", marginTop: "var(--s-3)" }}>
              Nossa equipe técnica esclarece todos os critérios de propriedade
              intelectual, segurança e entrega contínua.
            </p>
            <p style={{ marginTop: "var(--s-4)" }}>
              <a className="link" href="#contact">
                Solicitar proposta comercial
              </a>
            </p>
          </div>

          <div className="span-6 start-7 faq">
            {faqs.map((f, i) => (
              <div key={i} className="faq__item">
                <h3>{f.question}</h3>
                <p>{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
