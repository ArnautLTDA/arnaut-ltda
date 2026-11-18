"use client";

import { useState } from "react";

export default function Pillars() {
  const [mapsOn, setMapsOn] = useState(true);
  const [whatsappOn, setWhatsappOn] = useState(true);

  return (
    <section className="section" id="pillars" aria-labelledby="pillars-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="pillars-h">
            Quatro pilares do The Agency.{" "}
            <span className="muted">
              Tudo o que você precisa para operar sua própria agência de
              software.
            </span>
          </h2>
        </div>

        <div className="grid">
          {/* Pillar 1: Automated Prospecting */}
          <article className="card card--row span-6">
            <h3>Prospecção automática de clientes</h3>
            <p>
              Clientes encontrados pela IA, não por você. Mineração contínua no
              Google Maps com detecção de dores e validação ativa de WhatsApp.
            </p>
            <div
              className="panel"
              data-fx-palette='{"bg":"#cdd6c6","surface":"#dce3d6","ink":"#262d24","muted":"#5f6a5a","accent":"#355230","accentInk":"#ffffff"}'
              style={{ background: "#cdd6c6" }}
              role="img"
              aria-label="Controle de prospecção e mineração de leads"
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
                          <span className="ui-tg__label">
                            Mineração no Google Maps
                          </span>
                          <span className="ui-tg__sub">
                            {mapsOn
                              ? "Varredura de nichos ativa"
                              : "Varredura pausada"}
                          </span>
                        </span>
                        <button
                          className={`ui-switch ${mapsOn ? "is-on" : ""}`}
                          type="button"
                          role="switch"
                          aria-checked={mapsOn}
                          aria-label="Mineração no Google Maps"
                          onClick={() => setMapsOn(!mapsOn)}
                        >
                          <i></i>
                        </button>
                      </li>
                      <li className="ui-tg">
                        <span className="ui-tg__text">
                          <span className="ui-tg__label">
                            Validação de WhatsApp
                          </span>
                          <span className="ui-tg__sub">
                            {whatsappOn
                              ? "Checagem de números ativos"
                              : "Filtro desativado"}
                          </span>
                        </span>
                        <button
                          className={`ui-switch ${whatsappOn ? "is-on" : ""}`}
                          type="button"
                          role="switch"
                          aria-checked={whatsappOn}
                          aria-label="Validação de WhatsApp"
                          onClick={() => setWhatsappOn(!whatsappOn)}
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

          {/* Pillar 2: Bespoke Prototypes */}
          <article className="card card--row span-6">
            <h3>Protótipo pronto antes da venda</h3>
            <p>
              Venda mostrando o produto pronto. A IA gera um protótipo funcional
              com a marca e o catálogo real do cliente antes do contato.
            </p>
            <div
              className="panel"
              data-fx-palette='{"bg":"#d9ccb7","surface":"#e9e0d2","ink":"#2a2622","muted":"#6f675c","accent":"#a8794a","accentInk":"#ffffff"}'
              style={{ background: "#d9ccb7" }}
              role="img"
              aria-label="Checklist de prototipação automatizada"
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
                          Identidade visual e catálogo minerados
                        </span>
                      </li>
                      <li className="ui-check is-done">
                        <span className="ui-check__box">
                          <svg viewBox="0 0 16 16">
                            <path d="m4.5 8.2 2.3 2.3 4.7-5" />
                          </svg>
                        </span>
                        <span className="ui-check__label">
                          Demo Next.js publicada na Vercel (HTTP 200)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Pillar 3: Autonomous Factory */}
          <article className="card card--row span-6">
            <h3>Fábrica de software autônoma</h3>
            <p>
              Código corporativo sem programadores. Clean Architecture em
              TypeScript, testes automatizados (80%+) e 5 motores de segurança.
            </p>
            <div
              className="panel"
              data-fx-palette='{"bg":"#c6d3df","surface":"#d6e0e9","ink":"#25303a","muted":"#5d6873","accent":"#3f6a92","accentInk":"#ffffff"}'
              style={{ background: "#c6d3df" }}
              role="img"
              aria-label="Notificações de auditoria e segurança da fábrica autônoma"
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
                            Segurança: 5 Motores Aprovados
                          </span>
                          <span className="ui-note__body">
                            Semgrep, Gitleaks, Trivy, Sonar & Nuclei
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
                            Testes E2E: 80%+ Cobertura
                          </span>
                          <span className="ui-note__body">
                            Zero testes instáveis, Clean Architecture
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Pillar 4: Executive Cockpit */}
          <article className="card card--row span-6">
            <h3>Cockpit de comando executivo</h3>
            <p>
              Seu negócio inteiro em uma única tela. Kanban de oportunidades,
              Copilot de WhatsApp, acompanhamento de faturamento e governança.
            </p>
            <div
              className="panel"
              data-fx-palette='{"bg":"#cdd6c6","surface":"#dce3d6","ink":"#262d24","muted":"#5f6a5a","accent":"#355230","accentInk":"#ffffff"}'
              style={{ background: "#cdd6c6" }}
              role="img"
              aria-label="Telemetria e margens financeiras do cockpit"
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
                    data-from="90"
                    data-to="99"
                    data-suffix="%"
                  >
                    <div className="ui-stat__head">
                      <div className="ui-stat__top">
                        <span className="ui-stat__label">
                          Margem Bruta por Projeto
                        </span>
                        <span className="ui-stat__range">&gt;99%</span>
                      </div>
                      <div className="ui-stat__line">
                        <span className="ui-stat__num">&gt;90%</span>
                        <span className="ui-chip ui-chip--plain ui-stat__delta">
                          Lucro líquido
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
