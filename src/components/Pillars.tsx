"use client";

import { useState } from "react";

export default function Pillars() {
  const [mtlsOn, setMtlsOn] = useState(true);
  const [dockerOn, setDockerOn] = useState(true);

  return (
    <section
      className="section"
      id="pillars"
      style={{ "--h": 1 } as React.CSSProperties}
      aria-labelledby="pillars-h"
    >
      <div className="wrap">
        <div className="section-head">
          <h2 id="pillars-h">
            Quatro pilares de segurança e engenharia de software.{" "}
            <span className="muted">
              Confiabilidade para ambientes de missão crítica.
            </span>
          </h2>
        </div>

        <div className="grid">
          {/* Pillar 1: mTLS & Secrets */}
          <article className="card card--row span-6">
            <h3>Confinamento de segredos com mTLS</h3>
            <p>
              Certificados bancários e credenciais confidenciais rodam
              exclusivamente em contêineres e gateways isolados.
            </p>
            <div
              className="panel"
              data-fx-palette='{"bg":"#cdd6c6","surface":"#dce3d6","ink":"#262d24","muted":"#5f6a5a","accent":"#355230","accentInk":"#ffffff"}'
              style={{ background: "#cdd6c6" }}
              role="img"
              aria-label="Controle de segurança e isolamento de segredos"
            >
              <div className="stage stage--fade-b">
                <div
                  className="at-rise fit"
                  style={
                    {
                      "--ax": "32px",
                      "--ay": "14px",
                      "--fit-max": "360px",
                    } as React.CSSProperties
                  }
                >
                  <div className="ui ui-panel ui-toggles" data-ui="toggles">
                    <ul className="ui-toggles__list">
                      <li className="ui-tg">
                        <span className="ui-tg__text">
                          <span className="ui-tg__label">mTLS Banco Inter</span>
                          <span className="ui-tg__sub">
                            {mtlsOn
                              ? "Gateway isolado ativo"
                              : "Gateway desativado"}
                          </span>
                        </span>
                        <button
                          className={`ui-switch ${mtlsOn ? "is-on" : ""}`}
                          type="button"
                          role="switch"
                          aria-checked={mtlsOn}
                          aria-label="mTLS Banco Inter"
                          onClick={() => setMtlsOn(!mtlsOn)}
                        >
                          <i></i>
                        </button>
                      </li>
                      <li className="ui-tg">
                        <span className="ui-tg__text">
                          <span className="ui-tg__label">
                            Confinamento Docker
                          </span>
                          <span className="ui-tg__sub">
                            {dockerOn
                              ? "Sandbox sem rede ativa"
                              : "Rede liberada"}
                          </span>
                        </span>
                        <button
                          className={`ui-switch ${dockerOn ? "is-on" : ""}`}
                          type="button"
                          role="switch"
                          aria-checked={dockerOn}
                          aria-label="Confinamento Docker"
                          onClick={() => setDockerOn(!dockerOn)}
                        >
                          <i></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Pillar 2: Automated Tests */}
          <article className="card card--row span-6">
            <h3>Suíte de testes automatizados</h3>
            <p>
              Desenvolvimento guiado por testes com cobertura mínima de 80% e
              validação end-to-end com Playwright.
            </p>
            <div
              className="panel"
              data-fx-palette='{"bg":"#d9ccb7","surface":"#e9e0d2","ink":"#2a2622","muted":"#6f675c","accent":"#a8794a","accentInk":"#ffffff"}'
              style={{ background: "#d9ccb7" }}
              role="img"
              aria-label="Checklist de testes automatizados"
            >
              <div className="stage stage--fade-b">
                <div
                  className="at-rise fit"
                  style={
                    {
                      "--ax": "32px",
                      "--ay": "14px",
                      "--fit-max": "360px",
                    } as React.CSSProperties
                  }
                >
                  <div className="ui ui-panel ui-checks" data-ui="checklist">
                    <ul className="ui-checks__list">
                      <li className="ui-check is-done">
                        <span className="ui-check__box">
                          <svg viewBox="0 0 16 16">
                            <path d="m4.5 8.2 2.3 2.3 4.7-5" />
                          </svg>
                        </span>
                        <span className="ui-check__label">
                          31 suítes de teste (100% PASS)
                        </span>
                      </li>
                      <li className="ui-check is-done">
                        <span className="ui-check__box">
                          <svg viewBox="0 0 16 16">
                            <path d="m4.5 8.2 2.3 2.3 4.7-5" />
                          </svg>
                        </span>
                        <span className="ui-check__label">
                          Cobertura mínima de 80% verificada
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Pillar 3: SonarQube & Security Gates */}
          <article className="card card--row span-6">
            <h3>Portões de segurança SonarQube</h3>
            <p>
              Análise estática contínua com Semgrep, Gitleaks e SonarQube para
              impedir vulnerabilidades em produção.
            </p>
            <div
              className="panel"
              data-fx-palette='{"bg":"#c6d3df","surface":"#d6e0e9","ink":"#25303a","muted":"#5d6873","accent":"#3f6a92","accentInk":"#ffffff"}'
              style={{ background: "#c6d3df" }}
              role="img"
              aria-label="Notificações de auditoria e segurança"
            >
              <div className="stage stage--fade-b">
                <div
                  className="at-rise fit"
                  style={
                    {
                      "--ax": "32px",
                      "--ay": "14px",
                      "--fit-max": "360px",
                    } as React.CSSProperties
                  }
                >
                  <div className="ui ui-notify" data-ui="notify">
                    <ul className="ui-notify__list">
                      <li className="ui-note">
                        <span className="ui-note__ico">
                          <svg className="ui-icon" viewBox="0 0 16 16">
                            <path d="m3.5 8.4 2.8 2.8 6.2-6.4" />
                          </svg>
                        </span>
                        <span className="ui-note__text">
                          <span className="ui-note__title">
                            SonarQube: Quality Gate Aprovado
                          </span>
                          <span className="ui-note__body">
                            0 vulnerabilidades detectadas
                          </span>
                        </span>
                      </li>
                      <li className="ui-note">
                        <span className="ui-note__ico">
                          <svg className="ui-icon" viewBox="0 0 16 16">
                            <path d="m3.5 8.4 2.8 2.8 6.2-6.4" />
                          </svg>
                        </span>
                        <span className="ui-note__text">
                          <span className="ui-note__title">
                            Gitleaks: 0 segredos detectados
                          </span>
                          <span className="ui-note__body">
                            Varredura profunda concluída
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Pillar 4: RabbitMQ Resilience */}
          <article className="card card--row span-6">
            <h3>Mensageria resiliente RabbitMQ</h3>
            <p>
              Processamento assíncrono desacoplado com dead-letter exchanges e
              retentativas exponenciais automáticas.
            </p>
            <div
              className="panel"
              data-fx-palette='{"bg":"#cdd6c6","surface":"#dce3d6","ink":"#262d24","muted":"#5f6a5a","accent":"#355230","accentInk":"#ffffff"}'
              style={{ background: "#cdd6c6" }}
              role="img"
              aria-label="Telemetria de mensageria assíncrona"
            >
              <div className="stage stage--fade-b">
                <div
                  className="at-rise fit"
                  style={
                    {
                      "--ax": "32px",
                      "--ay": "14px",
                      "--fit-max": "360px",
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="ui ui-panel ui-stat"
                    data-ui="stat"
                    data-from="98"
                    data-to="100"
                    data-suffix="%"
                  >
                    <div className="ui-stat__head">
                      <div className="ui-stat__top">
                        <span className="ui-stat__label">Vazão AMQP</span>
                        <span className="ui-stat__range">99.98%</span>
                      </div>
                      <div className="ui-stat__line">
                        <span className="ui-stat__num">100%</span>
                        <span className="ui-chip ui-chip--plain ui-stat__delta">
                          Zero perdas
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
