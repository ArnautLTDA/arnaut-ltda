"use client";

import { useState } from "react";

interface ServiceData {
  id: string;
  badge: string;
  badgeBg: string;
  name: string;
  status: string;
  desc: string;
  cmd: string;
  logs: string[];
}

const SERVICES: ServiceData[] = [
  {
    id: "prospecting",
    badge: "PL",
    badgeBg: "#dafa9c",
    name: "Prospecção de Leads",
    status: "Ativo",
    desc: "12 leads qualificados no pipeline",
    cmd: "the-agency pipeline --prospect --niche=barbearias",
    logs: [
      "✓ 12 leads minerados no Google Maps (nicho: barbearias, São Paulo)",
      "✓ Números de WhatsApp validados via gateway autônomo (100% ativos)",
      "✓ Dores e reclamações de clientes extraídas de avaliações 1-3 estrelas",
      "[LIVE] Taxa de qualificação de leads: 83.3% (Prontos para prototipação)",
    ],
  },
  {
    id: "prototyping",
    badge: "PR",
    badgeBg: "#8fbcff",
    name: "Prototipação Rápida",
    status: "Ativo",
    desc: "Demo gerada para Barbearia Premium",
    cmd: "the-agency demo --generate --client=barbearia-premium",
    logs: [
      "✓ Identidade visual, fotos e catálogo do cliente minerados com sucesso",
      "✓ Protótipo interativo Next.js gerado e auditado via Playwright (HTTP 200)",
      "✓ Deploy instantâneo em staging publicado com URL segura na Vercel",
      "[LIVE] Amostra funcional pronta para apresentação comercial via WhatsApp",
    ],
  },
  {
    id: "factory",
    badge: "FD",
    badgeBg: "#dafa9c",
    name: "Desenvolvimento & Deploy",
    status: "Ativo",
    desc: "Sistema de agendamento entregue",
    cmd: "the-agency factory --build --client=barbearia-premium",
    logs: [
      "✓ Sinal de 50% confirmado via PIX automatizado com mTLS Banco Inter",
      "✓ Código Clean Architecture gerado: 31 testes aprovados (cobertura 86%)",
      "✓ 5 motores de segurança aprovados (Semgrep, Gitleaks, Trivy, Sonar, Nuclei)",
      "[LIVE] Faturamento do projeto: R$ 1.200,00 | Margem líquida direta: 99.4%",
    ],
  },
];

export default function Hero() {
  const [activeService, setActiveService] = useState<ServiceData>(SERVICES[0]);

  return (
    <section
      className="hero hero--centred"
      data-enter
      style={{ "--h": 1 } as React.CSSProperties}
      aria-labelledby="hero-h"
    >
      <div className="wrap">
        <div className="hero-text">
          <div className="hero__c">
            <a className="pill" href="#agency">
              <span>Arnaut LTDA · Produtos de Tecnologia</span>
              <span className="muted">The Agency — nosso primeiro produto</span>
            </a>
            <h1
              id="hero-h"
              aria-label="Tenha sua própria agência de software. Sem saber programar."
            >
              Tenha sua própria agência de software. Sem saber programar.
            </h1>
            <p className="hero__lead">
              The Agency é uma plataforma completa que usa inteligência
              artificial para prospectar clientes, criar protótipos e entregar
              software de produção. Você controla o negócio. A IA faz o trabalho
              técnico.
            </p>
            <span className="hero__hard-fact">
              <strong data-fact>São Paulo, SP</strong> · Plataforma com 10
              microsserviços autônomos, 31 suítes de teste e esteira de
              engenharia completa em produção
            </span>
            <div className="btn-row">
              <a className="btn btn--primary" href="#contact">
                Entrar na lista de espera
              </a>
              <a className="btn btn--secondary" href="#agency">
                Ver como funciona
              </a>
            </div>
          </div>

          <div
            className="hero__window frame"
            data-visual
            role="img"
            aria-label="Terminal de controle da esteira autônoma The Agency"
          >
            <div className="ly-piece d-win d-win--dark" aria-hidden="true">
              <div className="d-win__bar">
                <span className="d-win__dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ marginRight: "6px", color: "var(--p-accent)" }}
                >
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
                <span>
                  <b>The Agency Engine</b> · Cockpit de Operação
                </span>
                <span className="sp"></span>
                <span>3 Módulos Ativos · 31 Testes Verificados</span>
              </div>
              <div className="d-win__body">
                <div className="inbox">
                  <div className="q">Módulos em execução</div>
                  {SERVICES.map((srv) => (
                    <div
                      key={srv.id}
                      className={`t ${activeService.id === srv.id ? "is-on" : ""}`}
                      onClick={() => setActiveService(srv)}
                      role="button"
                      tabIndex={0}
                    >
                      <i style={{ background: srv.badgeBg }}>{srv.badge}</i>
                      <b>{srv.name}</b>
                      <time>{srv.status}</time>
                      <span>{srv.desc}</span>
                    </div>
                  ))}
                </div>
                <div className="convo">
                  <div className="term-line" style={{ color: "#a8b3a8" }}>
                    <b style={{ color: "var(--p-accent)" }}>$</b>{" "}
                    {activeService.cmd}
                  </div>
                  {activeService.logs.map((log, index) => (
                    <div
                      key={index}
                      className="term-line"
                      style={{
                        color: log.startsWith("[LIVE]")
                          ? "var(--p-accent)"
                          : "#ffffff",
                        marginTop: log.startsWith("[LIVE]") ? "6px" : "0",
                      }}
                    >
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
