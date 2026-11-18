"use client";

export default function Metrics() {
  return (
    <section className="section" id="metrics" aria-labelledby="metrics-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="metrics-h">
            A oportunidade. A tecnologia. Os números.{" "}
            <span className="muted">
              O modelo econômico do The Agency: mercado massivo e margens
              recordes.
            </span>
          </h2>
        </div>

        <div className="grid">
          {/* Card 1: Market Opportunity */}
          <article className="card card--row span-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span
                  className="ui-chip"
                  style={{
                    background: "rgba(218, 250, 156, 0.15)",
                    color: "var(--p-accent)",
                    marginBottom: "12px",
                    display: "inline-block",
                  }}
                >
                  Mercado Endereçável
                </span>
                <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>
                  15 Milhões de PMEs
                </h3>
                <p
                  style={{
                    color: "var(--p-muted)",
                    fontSize: "14px",
                    lineHeight: "1.6",
                  }}
                >
                  Mais de 15 milhões de pequenos negócios no Brasil precisam de
                  agendamento, vitrines digitais com PIX e portais de
                  autoatendimento, mas não podem pagar R$ 20.000 para agências
                  humanas.
                </p>
              </div>
              <div
                style={{
                  marginTop: "20px",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "grid",
                  gap: "6px",
                  fontSize: "12px",
                  color: "var(--p-ink)",
                }}
              >
                <div>
                  • Mercado de agentes de IA:{" "}
                  <strong style={{ color: "#fff" }}>crescendo 40%+ a.a.</strong>
                </div>
                <div>
                  • Custo de agência tradicional:{" "}
                  <strong style={{ color: "#fff" }}>R$ 25.000+/mês</strong>
                </div>
              </div>
            </div>
          </article>

          {/* Card 2: Projected Unit Economics */}
          <article className="card card--row span-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span
                  className="ui-chip"
                  style={{
                    background: "rgba(143, 188, 255, 0.15)",
                    color: "#8fbcff",
                    marginBottom: "12px",
                    display: "inline-block",
                  }}
                >
                  Unit Economics do Operador
                </span>
                <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>
                  &gt;90% Margem Líquida
                </h3>
                <p
                  style={{
                    color: "var(--p-muted)",
                    fontSize: "14px",
                    lineHeight: "1.6",
                  }}
                >
                  Receita média estimada de R$ 1.200 por projeto entregue com
                  custo marginal inferior a R$ 10 em inferência de IA e
                  hospedagem de staging.
                </p>
              </div>
              <div
                style={{
                  marginTop: "20px",
                  padding: "12px",
                  background: "#141414",
                  borderRadius: "6px",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  lineHeight: "1.5",
                }}
              >
                <div style={{ color: "var(--p-accent)" }}>
                  Setup médio: R$ 1.200,00
                </div>
                <div style={{ color: "var(--p-muted)" }}>
                  Tokens & infra: - R$ 6,50
                </div>
                <div
                  style={{
                    color: "#ffffff",
                    borderTop: "1px dashed rgba(255,255,255,0.15)",
                    marginTop: "4px",
                    paddingTop: "4px",
                  }}
                >
                  MRR Recorrente: R$ 97–297/mês
                </div>
              </div>
            </div>
          </article>

          {/* Card 3: Technical Maturity */}
          <article className="card card--row span-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span
                  className="ui-chip"
                  style={{
                    background: "rgba(218, 250, 156, 0.15)",
                    color: "var(--p-accent)",
                    marginBottom: "12px",
                    display: "inline-block",
                  }}
                >
                  Maturidade do MVP
                </span>
                <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>
                  10 Microsserviços
                </h3>
                <p
                  style={{
                    color: "var(--p-muted)",
                    fontSize: "14px",
                    lineHeight: "1.6",
                  }}
                >
                  Arquitetura de microsserviços polyglot operacional com 31
                  suítes de testes 100% aprovadas e 5 camadas de segurança
                  automatizadas.
                </p>
              </div>
              <div
                style={{
                  marginTop: "20px",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "grid",
                  gap: "6px",
                  fontSize: "12px",
                  color: "var(--p-ink)",
                }}
              >
                <div>
                  • 31 suítes de testes:{" "}
                  <strong style={{ color: "var(--p-accent)" }}>
                    100% PASS
                  </strong>
                </div>
                <div>
                  • Portão de qualidade:{" "}
                  <strong style={{ color: "#fff" }}>80%+ cobertura</strong>
                </div>
                <div>
                  • Scanners:{" "}
                  <strong style={{ color: "#fff" }}>
                    Semgrep, Gitleaks, Nuclei
                  </strong>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
