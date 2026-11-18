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
    service: "Payment Service",
    ref: "main",
    time: "1m 45s",
    status: "PASS",
    summary: "Certificado mTLS validado contra API bancária",
    commitMsg: "feat: esteira autônoma e gateways",
    sha: "3f88649",
    steps: [
      { name: "BDD Specs", cmd: "gherkin-lint", time: "2s", status: "done" },
      { name: "Testes TDD", cmd: "pytest -v", time: "31s", status: "done" },
      { name: "Segurança", cmd: "security-gate", time: "18s", status: "done" },
      { name: "Deploy Prod", cmd: "triple-gate", time: "30s", status: "done" },
    ],
    logs: [
      "$ pytest services/payment --cov=src",
      "17 passed, 0 warnings. Cobertura de testes: 84%",
      "$ gitleaks detect --source=. --verbose",
      "0 leaks found. Verificação de segredos concluída com sucesso",
      "$ sonarqube-scan --project=the-agency",
      "Quality Gate Status: PASSED (Reliability: A, Security: A)",
    ],
  },
  {
    id: "run-103",
    runNumber: "#103",
    service: "WhatsApp Service",
    ref: "main",
    time: "2m 10s",
    status: "PASS",
    summary: "Sessão Baileys recuperada automaticamente",
    commitMsg: "fix: reconexão automática e retry exponencial",
    sha: "8a1e204",
    steps: [
      { name: "BDD Specs", cmd: "gherkin-lint", time: "3s", status: "done" },
      { name: "Testes Jest", cmd: "npm test", time: "42s", status: "done" },
      {
        name: "Auditoria Semgrep",
        cmd: "semgrep scan",
        time: "14s",
        status: "done",
      },
      {
        name: "Deploy Docker",
        cmd: "docker-push",
        time: "28s",
        status: "done",
      },
    ],
    logs: [
      "$ npm test -- --coverage",
      "14 passed, 0 failed. Cobertura total: 88.5%",
      "$ semgrep --config=p/security-audit",
      "Scan complete. 0 high severity findings detected.",
      "$ docker build -t arnaut/whatsapp:v1.2 .",
      "Container healthcheck passed in 40ms.",
    ],
  },
  {
    id: "run-102",
    runNumber: "#102",
    service: "Engine Dispatcher",
    ref: "main",
    time: "1m 15s",
    status: "PASS",
    summary: "RabbitMQ Dead Letter Exchange configurada",
    commitMsg: "chore: resiliência de mensagens assíncronas",
    sha: "4b99cd2",
    steps: [
      { name: "BDD Specs", cmd: "gherkin-lint", time: "2s", status: "done" },
      {
        name: "Testes AMQP",
        cmd: "pytest tests/amqp",
        time: "24s",
        status: "done",
      },
      {
        name: "Verificação Gate",
        cmd: "gate-verify",
        time: "12s",
        status: "done",
      },
      { name: "Deploy Prod", cmd: "cluster-sync", time: "22s", status: "done" },
    ],
    logs: [
      "$ pytest tests/amqp/test_dispatcher.py",
      "9 passed. Retry policies e Dead Letter Exchanges verificados.",
      "$ gitleaks detect --redact",
      "No leaks found.",
      "$ cluster-sync --env=production",
      "Queue topologies synced across all cluster nodes.",
    ],
  },
];

export default function AgencyEngine() {
  const [selectedRun, setSelectedRun] = useState<PipelineRun>(RUNS[0]);

  return (
    <section
      className="section"
      id="agency"
      style={{ "--h": 1 } as React.CSSProperties}
      aria-labelledby="agency-h"
    >
      <div className="wrap">
        <div className="grid">
          <h2 id="agency-h" className="span-6">
            The Agency: esteira autônoma de engenharia de software.{" "}
            <span className="muted">Operação contínua de ponta a ponta.</span>
          </h2>
          <p className="span-6 start-7" style={{ color: "var(--p-muted)" }}>
            Orquestramos agentes especializados que escrevem especificações BDD,
            geram código limpo, validam testes e executam deploy isolado sem
            intervenção manual.{" "}
            <a className="link" href="#contact">
              Solicitar proposta
            </a>
          </p>
        </div>

        <div
          className="ui app fill"
          role="img"
          aria-label="Cockpit operacional da esteira The Agency com lista de execuções e pipeline de validação"
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
                <span className="ui-win__title">Pipelines em produção</span>
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
                        Deploy {run.runNumber} · {run.service}
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
                  Concluído
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
                  AR
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
