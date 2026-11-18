"use client";

import { useState } from "react";

interface PipelineRun {
  id: string;
  runNumber: string;
  service: string;
  ref: string;
  time: string;
  status: string;
  summary: string;
  commitMsg: string;
  sha: string;
  steps: {
    name: string;
    cmd: string;
    time: string;
    status: "done" | "running";
  }[];
  logs: string[];
}

const RUNS: PipelineRun[] = [
  {
    id: "run-104",
    runNumber: "#104",
    service: "Clínica OdontoSorriso",
    ref: "client/odonto-sorriso",
    time: "1m 45s",
    status: "ENTREGUE",
    summary:
      "Portal de agendamento online e confirmação PIX entregue em produção",
    commitMsg: "feat: deploy em domínio próprio e ativação de suporte 90 dias",
    sha: "3f88649",
    steps: [
      {
        name: "Mineração Maps",
        cmd: "osint-enrich",
        time: "12s",
        status: "done",
      },
      { name: "Demo Vercel", cmd: "demo-build", time: "31s", status: "done" },
      {
        name: "Testes Playwright",
        cmd: "qa-audit --cov=88%",
        time: "18s",
        status: "done",
      },
      {
        name: "Deploy & PIX",
        cmd: "handover-prod",
        time: "30s",
        status: "done",
      },
    ],
    logs: [
      "$ the-agency client:deliver --id=odonto-sorriso",
      "31 suítes de teste executadas com sucesso. Cobertura: 88.5%",
      "$ security-scan --project=odonto-sorriso",
      "0 vulnerabilidades detectadas (Semgrep + Gitleaks + Trivy + Nuclei)",
      "$ bank-inter:pix --status",
      "Liquidação financeira 100% confirmada. Repositório Git transferido ao cliente.",
    ],
  },
  {
    id: "run-103",
    runNumber: "#103",
    service: "Barbearia Dom Pedro",
    ref: "client/barbearia-dom-pedro",
    time: "2m 10s",
    status: "ENTREGUE",
    summary: "Vitrine interativa de serviços e sistema de reservas entregues",
    commitMsg: "feat: testes Playwright 86% e entrega do repositório Git",
    sha: "8a1e204",
    steps: [
      { name: "Prospecção", cmd: "osint-enrich", time: "14s", status: "done" },
      { name: "Demo Bespoke", cmd: "demo-build", time: "42s", status: "done" },
      {
        name: "Segurança 5 Scanners",
        cmd: "sec-audit",
        time: "24s",
        status: "done",
      },
      {
        name: "Entrega Final",
        cmd: "handover-prod",
        time: "28s",
        status: "done",
      },
    ],
    logs: [
      "$ the-agency pipeline:run --client=barbearia-dom-pedro",
      "Protótipo interativo validado pelo cliente via WhatsApp em 4 minutos",
      "$ inter-banking --verify-pix-signal",
      "Sinal de 50% confirmado via PIX automatizado mTLS",
      "$ docker-build --tag=production",
      "Deploy concluído na nuvem com domínio próprio e SSL ativo.",
    ],
  },
  {
    id: "run-102",
    runNumber: "#102",
    service: "Auto Elétrica Central",
    ref: "client/auto-eletrica-central",
    time: "1m 15s",
    status: "EM ANDAMENTO",
    summary: "Catálogo interativo com orçamento rápido via WhatsApp",
    commitMsg: "chore: protótipo sob medida em homologação com cliente",
    sha: "4b99cd2",
    steps: [
      {
        name: "Mineração Maps",
        cmd: "osint-enrich",
        time: "10s",
        status: "done",
      },
      { name: "Demo Vercel", cmd: "demo-build", time: "28s", status: "done" },
      {
        name: "Negociação",
        cmd: "whatsapp-copilot",
        time: "15s",
        status: "done",
      },
      { name: "Fábrica Dev", cmd: "dev-squad", time: "22s", status: "running" },
    ],
    logs: [
      "$ the-agency leads:enrich --place-id=auto-central-sp",
      "Dores extraídas: cliente relata demora no envio de tabela de serviços",
      "$ whatsapp-gateway:send-sample",
      "Demo com link interativo enviada com sucesso no WhatsApp do proprietário",
      "$ dev-squad --clean-architecture",
      "Squad autônomo gerando componentes TypeScript com tipagem estrita.",
    ],
  },
];

export default function AgencyEngine() {
  const [selectedRun, setSelectedRun] = useState<PipelineRun>(RUNS[0]);

  return (
    <section className="section" id="agency" aria-labelledby="agency-h">
      <div className="wrap">
        <div className="grid">
          <h2 id="agency-h" className="span-6">
            The Agency: sua agência de software operada por inteligência
            artificial.{" "}
            <span className="muted">
              Operação contínua de ponta a ponta sem necessidade de equipe
              técnica.
            </span>
          </h2>
          <p className="span-6 start-7" style={{ color: "var(--p-muted)" }}>
            Você é o dono do negócio; a IA é a equipe completa. Acompanhe a
            esteira prospectar clientes no Maps, gerar protótipos sob medida,
            fechar vendas no WhatsApp e entregar software de produção com
            segurança auditada.{" "}
            <a className="link" href="#contact">
              Entrar na lista de espera
            </a>
          </p>
        </div>

        <div
          className="ui app fill"
          role="img"
          aria-label="Cockpit operacional da esteira The Agency com lista de entregas e pipeline de validação"
        >
          {/* Left Pane: Pipeline run selection */}
          <div className="app__pane app__pane--list" aria-hidden="true">
            <div className="ui ui-panel ui-win" data-ui="window">
              <div className="ui-win__bar">
                <span className="ui-win__dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span className="ui-win__title">Entregas em produção</span>
              </div>
              <div style={{ padding: "12px", display: "grid", gap: "8px" }}>
                {RUNS.map((run) => (
                  <div
                    key={run.id}
                    onClick={() => setSelectedRun(run)}
                    style={{
                      padding: "10px",
                      background:
                        selectedRun.id === run.id
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(255,255,255,0.02)",
                      borderRadius: "6px",
                      borderLeft:
                        selectedRun.id === run.id
                          ? "2px solid var(--p-accent)"
                          : "2px solid transparent",
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontWeight: 500,
                        fontSize: "13px",
                      }}
                    >
                      <span>
                        Entrega {run.runNumber} · {run.service}
                      </span>
                      <span
                        style={{
                          color: "var(--p-accent)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "11px",
                        }}
                      >
                        {run.status}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "var(--p-muted)",
                        marginTop: "4px",
                      }}
                    >
                      {run.summary}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Pane: Detailed Pipeline Board */}
          <div className="app__pane app__pane--open" data-ui-loop>
            <div className="ui ui-panel ui-pipe" data-ui="pipeline-board">
              <div className="ui-pipe__head">
                <span className="ui-pipe__repo">ArnautLTDA/the-agency</span>
                <i className="ui-pipe__slash">/</i>
                <code className="ui-pipe__ref">{selectedRun.ref}</code>
                <span className="ui-pipe__run">{selectedRun.runNumber}</span>
                <span className="ui-spacer"></span>
                <span className="ui-pipe__total">
                  <span data-pipe-total>{selectedRun.time}</span>
                </span>
                <span
                  className="ui-chip ui-chip--live ui-pipe__chip"
                  style={{
                    background: "rgba(218, 250, 156, 0.2)",
                    color: "var(--p-accent)",
                  }}
                >
                  {selectedRun.status === "ENTREGUE"
                    ? "Concluído"
                    : "Em execução"}
                </span>
              </div>

              <div className="ui-pipe__commit">
                <span
                  className="ui-avatar"
                  style={{
                    background: "var(--p-accent)",
                    color: "var(--p-bg)",
                    width: "24px",
                    height: "24px",
                    borderRadius: "4px",
                    display: "grid",
                    placeItems: "center",
                    fontSize: "11px",
                    fontWeight: 600,
                  }}
                >
                  AG
                </span>
                <span className="ui-pipe__msg">{selectedRun.commitMsg}</span>
                <code
                  className="ui-pipe__sha"
                  style={{ fontSize: "11px", color: "var(--p-muted)" }}
                >
                  {selectedRun.sha}
                </code>
              </div>

              <ol className="ui-pipe__steps">
                {selectedRun.steps.map((st, idx) => (
                  <li key={idx} className="ui-pipe__step is-done">
                    <span className="ui-pipe__name">
                      <span className="ui-pipe__nm">{st.name}</span>
                    </span>
                    <code className="ui-pipe__cmd">{st.cmd}</code>
                    <span className="ui-pipe__time">{st.time}</span>
                  </li>
                ))}
              </ol>

              <div className="ui-pipe__log" aria-hidden="true">
                {selectedRun.logs.map((log, idx) => (
                  <span key={idx} className="ui-pipe__line">
                    {log.startsWith("$") ? (
                      <>
                        <b>$</b> {log.slice(2)}
                      </>
                    ) : (
                      log
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
