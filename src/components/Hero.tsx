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
    id: "engine",
    badge: "EN",
    badgeBg: "#dafa9c",
    name: "Engine Central",
    status: "Ativo",
    desc: "Orquestração LangGraph confinada",
    cmd: "the-agency status --all --verify",
    logs: [
      "✓ Pipeline aprovado no Security Gate com 0 vulnerabilidades",
      "✓ Conexão mTLS Banco Inter estabelecida com sucesso",
      "✓ 31 suítes de teste unitário e integração executadas: 100% PASS",
      "[LIVE] Fila assíncrona RabbitMQ processando 14 tarefas em paralelo",
    ],
  },
  {
    id: "whatsapp",
    badge: "WP",
    badgeBg: "#8fbcff",
    name: "WhatsApp Gateway",
    status: "Ativo",
    desc: "Baileys & Outbound AMQP",
    cmd: "the-agency gateway whatsapp --healthcheck",
    logs: [
      "✓ Sessão Baileys recuperada automaticamente do storage seguro",
      "✓ Polling de mensagens síncrono conectado via WebSocket seguro",
      "✓ 8 workers processando disparos assíncronos na fila amqp.whatsapp",
      "[LIVE] Latência média de disparo: 42ms (Zero timeouts nas últimas 24h)",
    ],
  },
  {
    id: "payment",
    badge: "PY",
    badgeBg: "#dafa9c",
    name: "Payment Gateway",
    status: "Ativo",
    desc: "mTLS Banco Inter & Webhooks",
    cmd: "the-agency gateway payment --test-mtls",
    logs: [
      "✓ Certificado X.509 Banco Inter carregado no contêiner isolado",
      "✓ Handshake mTLS validado contra endpoints de emissão de PIX",
      "✓ Webhook assinado com SHA-256 e idempotência habilitada",
      "[LIVE] Transações operando em tempo real com 99.99% de disponibilidade",
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
              <span>Arnaut LTDA · Software House</span>
              <span className="muted">The Agency em produção</span>
            </a>
            <h1
              id="hero-h"
              aria-label="Software house de engenharia autônoma para sistemas críticos"
            >
              Software house de engenharia autônoma para sistemas críticos
            </h1>
            <p className="hero__lead">
              Projetamos e operamos esteiras de software autônomas com agentes
              de IA, testes contínuos e arquitetura confinada.
            </p>
            <span className="hero__hard-fact">
              <strong data-fact>São Paulo, SP</strong> · 10 microsserviços
              autônomos e 31 suítes de teste em produção
            </span>
            <div className="btn-row">
              <a className="btn btn--primary" href="#contact">
                Solicitar proposta
              </a>
              <a className="btn btn--secondary" href="#agency">
                Conhecer a esteira
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
                  <b>The Agency Engine</b> · AMQP v1.2
                </span>
                <span className="sp"></span>
                <span>10 Microsserviços Ativos · 31 Testes Verificados</span>
              </div>
              <div className="d-win__body">
                <div className="inbox">
                  <div className="q">Serviços em execução</div>
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
