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
    title: "Etapa 1: Configure sua agência em minutos",
    desc: "The Agency roda como uma aplicação standalone no seu ambiente. Configure nichos-alvo, região de atuação e parâmetros de precificação com conexões automáticas a gateways.",
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
        <span style={{ color: "var(--p-accent)" }}>SETUP:</span> Nichos
        configurados: Barbearias, Clínicas, Oficinas
        <br />
        <span style={{ color: "var(--p-accent)" }}>LOCATION:</span> São Paulo,
        SP e regiões metropolitanas
        <br />
        <span style={{ color: "#dafa9c" }}>GATEWAYS:</span> WhatsApp Gateway
        ativo & Banco Inter mTLS conectado
        <br />
        <span style={{ color: "#ffffff" }}>STATUS:</span> Esteira pronta para
        iniciar prospecção autônoma
      </div>
    ),
  },
  {
    id: 2,
    title: "Etapa 2: A IA prospecta, prototipa e vende",
    desc: "Agentes autônomos mineram leads qualificados, constroem protótipos sob medida e abordam clientes no WhatsApp com o sistema deles já pronto. Você aprova com 1 clique.",
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
        <span style={{ color: "#dafa9c" }}>LEAD:</span> Barbearia Dom Pedro
        (Nota 4.8 · 142 avaliações no Maps)
        <br />
        <span style={{ color: "#dafa9c" }}>DEMO:</span>{" "}
        barbearia-dom-pedro.vercel.app (fotos e catálogo real)
        <br />
        <span style={{ color: "#a8b3a8" }}>WHATSAPP:</span> Abordagem com
        screenshot responsivo e link ativo
        <br />
        <span style={{ color: "var(--p-accent)" }}>PIX SINAL:</span> R$ 600,00
        liquidado via QR Code dinâmico
      </div>
    ),
  },
  {
    id: 3,
    title: "Etapa 3: Software entregue, você fatura",
    desc: "A fábrica autônoma constrói o sistema final com Clean Architecture, testes e pentest. O cliente recebe o código-fonte no GitHub e você recebe o pagamento via PIX.",
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
        <span style={{ color: "#dafa9c" }}>ENTREGA:</span> Repositório Git
        transferido ao cliente sem lock-in
        <br />
        <span style={{ color: "#ffffff" }}>QA & SEGURANÇA:</span> 31 suítes PASS
        (88% cov) · 0 vulnerabilidades
        <br />
        <span style={{ color: "var(--p-accent)" }}>FINANCEIRO:</span> R$
        1.200,00 recebido (Tokens gastos: R$ 4,80)
        <br />
        <span style={{ color: "#a8b3a8" }}>MRR:</span> Plano de sustentação R$
        197/mês ativado com sucesso
      </div>
    ),
  },
];

export default function Lifecycle() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section className="section" id="lifecycle" aria-labelledby="lifecycle-h">
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="mo-pc__text">
          <h2 id="lifecycle-h">
            De zero a sua agência de software em três etapas.{" "}
            <span className="muted">
              Do setup inicial ao faturamento no seu caixa.
            </span>
          </h2>
          <p style={{ marginBottom: "var(--s-4)" }}>
            <a className="link" href="#contact">
              Entrar na lista de espera para acesso antecipado
            </a>
          </p>
          <ol
            className="mo-pc__steps"
            style={{
              display: "grid",
              gap: "12px",
              listStyle: "none",
              padding: 0,
            }}
          >
            {STEPS.map((s) => (
              <li
                key={s.id}
                style={{
                  cursor: "pointer",
                  padding: "16px 20px",
                  borderRadius: "8px",
                  background:
                    activeStep === s.id
                      ? "rgba(255,255,255,0.04)"
                      : "transparent",
                  borderLeft:
                    activeStep === s.id
                      ? "3px solid var(--p-accent)"
                      : "3px solid rgba(255,255,255,0.12)",
                  transition: "all 0.15s ease",
                }}
                onClick={() => setActiveStep(s.id)}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: activeStep === s.id ? "var(--p-accent)" : "#ffffff",
                    marginBottom: "4px",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--p-muted)",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {s.desc}
                </p>
                <div className="block lg:hidden mt-3">{s.visual}</div>
              </li>
            ))}
          </ol>
        </div>

        <div className="frame hidden lg:flex flex-col justify-center">
          {STEPS.find((s) => s.id === activeStep)?.visual}
        </div>
      </div>
    </section>
  );
}
