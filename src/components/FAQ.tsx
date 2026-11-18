export default function FAQ() {
  const faqs = [
    {
      question: "O que é o The Agency?",
      answer:
        "The Agency é um produto da Arnaut LTDA — uma plataforma standalone que permite a qualquer empreendedor operar sua própria agência de desenvolvimento de software. Agentes autônomos de IA cuidam de todo o processo técnico: prospecção de clientes, prototipação, desenvolvimento, testes, segurança e deploy. Você controla o negócio pelo cockpit e fatura sem precisar de equipe técnica.",
    },
    {
      question: "Preciso saber programar para usar?",
      answer:
        "Não. The Agency foi projetado para empreendedores sem conhecimento técnico prévio. A IA cuida de toda a engenharia pesada. Você interage com o sistema via cockpit visual intuitivo: aprova leads, revisa demos, acompanha projetos e controla as métricas financeiras.",
    },
    {
      question: "Que tipo de software minha agência vai entregar?",
      answer:
        "Sistemas digitais sob medida de alta demanda para negócios locais: agendamento online com confirmação PIX, vitrines digitais interativas, catálogos de produtos e serviços, portais de autoatendimento e mini-ERPs. Cada produto é construído com a identidade visual do cliente final.",
    },
    {
      question: "O código entregue ao meu cliente é de qualidade corporativa?",
      answer:
        "Sim. Todo software gerado pela plataforma obedece a padrões estritos de Clean Architecture em TypeScript e Next.js, com testes automatizados (80%+ de cobertura via Playwright) e auditoria de segurança cibernética com 5 motores (Semgrep, Gitleaks, Trivy, SonarQube e Nuclei). O cliente final recebe o repositório Git completo e sem vendor lock-in.",
    },
    {
      question: "Quanto custa e como consigo acesso?",
      answer:
        "The Agency está em fase de acesso antecipado (MVP). Cadastre-se na lista de espera para garantir condições exclusivas de lançamento. Quando sua agência estiver operando, cada projeto entregue gera entre R$ 450 e R$ 2.500 de setup mais receita recorrente mensal, com custos operacionais inferiores a R$ 10 por projeto. Oferecemos dois modelos: self-hosted (você controla a infra) e managed (a Arnaut cuida de tudo).",
    },
    {
      question: "A Arnaut LTDA é só o The Agency?",
      answer:
        "Não. A Arnaut LTDA é uma empresa desenvolvedora de produtos de tecnologia. The Agency é o nosso primeiro produto lançado. Estamos construindo um ecossistema de soluções digitais voltadas a democratizar o acesso e a operação de negócios de base tecnológica.",
    },
  ];

  return (
    <section className="section" id="faq" aria-labelledby="faq-h">
      <div className="wrap">
        <div className="grid">
          <div className="span-6">
            <h2 id="faq-h">
              Perguntas frequentes sobre o The Agency.{" "}
              <span className="muted">
                Tudo o que você precisa saber sobre operar sua própria agência
                de software com IA.
              </span>
            </h2>
            <p style={{ color: "var(--p-muted)", marginTop: "var(--s-3)" }}>
              Esclarecemos como funciona a plataforma, a esteira autônoma de
              engenharia e os modelos de acesso antecipado.
            </p>
            <p style={{ marginTop: "var(--s-4)" }}>
              <a className="link" href="#contact">
                Entrar na lista de espera
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
