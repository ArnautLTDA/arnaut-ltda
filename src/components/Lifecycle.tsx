"use client";

import { useState } from "react";

interface Step {
  id: number;
  title: string;
  desc: string;
  visual: React.ReactNode;
}

const STEPS: Step[] = [
  {
    id: 1,
    title: "Etapa 1: Requisitos e Especificações BDD de Software",
    desc: "Agentes analisam o requisito e escrevem cenários Gherkin com critérios objetivos de aceite e contratos de dados.",
    visual: (
      <div
        style={{
          padding: "20px",
          background: "#141414",
          borderRadius: "8px",
          border: "1px solid rgba(255,255,255,0.08)",
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          color: "var(--p-ink)",
          lineHeight: "1.6",
        }}
      >
        <span style={{ color: "var(--p-accent)" }}>Feature:</span> Processamento
        de pagamentos via PIX
        <br />
        &nbsp;&nbsp;<span style={{ color: "var(--p-accent)" }}>
          Scenario:
        </span>{" "}
        Emissão com certificado mTLS válido
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;Given credenciais mTLS ativas no gateway
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;When payload de cobrança for enviado
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;Then retorno deve conter chave copia-e-cola
      </div>
    ),
  },
  {
    id: 2,
    title: "Etapa 2: Engenharia TDD e Segurança Confinada",
    desc: "O agente coder produz o código mínimo para passar nos testes unitários, submetido de imediato aos scanners de segurança.",
    visual: (
      <div
        style={{
          padding: "20px",
          background: "#141414",
          borderRadius: "8px",
          border: "1px solid rgba(255,255,255,0.08)",
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          color: "var(--p-ink)",
          lineHeight: "1.6",
        }}
      >
        <span style={{ color: "#dafa9c" }}>PASS</span>{" "}
        services/payment/tests/test_inter.py
        <br />
        <span style={{ color: "#dafa9c" }}>PASS</span>{" "}
        services/payment/tests/test_webhook.py
        <br />
        <span style={{ color: "#a8b3a8" }}>Gitleaks:</span> 0 secrets detected
        <br />
        <span style={{ color: "#a8b3a8" }}>Semgrep:</span> 0 security findings
        (OWASP Top 10)
      </div>
    ),
  },
  {
    id: 3,
    title: "Etapa 3: Homologação Playwright e Deploy Confinado",
    desc: "Testes de ponta a ponta em navegadores reais verificam formulários e transações antes do envio final aos contêineres.",
    visual: (
      <div
        style={{
          padding: "20px",
          background: "#141414",
          borderRadius: "8px",
          border: "1px solid rgba(255,255,255,0.08)",
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          color: "var(--p-ink)",
          lineHeight: "1.6",
        }}
      >
        <span style={{ color: "#dafa9c" }}>PLAYWRIGHT:</span> 3 journeys passed
        on Chromium
        <br />
        <span style={{ color: "#ffffff" }}>Docker deploy:</span> image
        arnaut/payment:v1.4.2
        <br />
        <span style={{ color: "#a8b3a8" }}>Health check:</span> HTTP 200 OK em
        42ms
        <br />
        <span style={{ color: "var(--p-accent)" }}>Status:</span> Produção
        estável e monitorada
      </div>
    ),
  },
];

export default function Lifecycle() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section
      className="section"
      id="lifecycle"
      style={{ "--h": 2 } as React.CSSProperties}
      data-moment="pinned-chapters"
      aria-labelledby="lifecycle-h"
    >
      <div className="wrap mo-pc__grid">
        <div className="mo-pc__text">
          <h2 id="lifecycle-h">
            Ciclo de desenvolvimento autônomo em três etapas.{" "}
            <span className="muted">
              Do requisito em linguagem natural ao deploy validado.
            </span>
          </h2>
          <p style={{ marginBottom: "var(--s-5)" }}>
            <a className="link" href="#contact">
              Solicitar proposta para sua esteira
            </a>
          </p>
          <ol className="mo-pc__steps">
            {STEPS.map((s) => (
              <li
                key={s.id}
                className="mo-pc__step"
                style={{
                  cursor: "pointer",
                  opacity: activeStep === s.id ? 1 : 0.65,
                  transition: "opacity 0.2s ease",
                }}
                onClick={() => setActiveStep(s.id)}
              >
                <h3
                  style={{
                    color: activeStep === s.id ? "var(--p-accent)" : "inherit",
                  }}
                >
                  {s.title}
                </h3>
                <p>{s.desc}</p>
                <div className="block lg:hidden mt-3">{s.visual}</div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mo-pc__visuals frame hidden lg:flex flex-col justify-center">
          {STEPS.find((s) => s.id === activeStep)?.visual}
        </div>
      </div>
    </section>
  );
}
