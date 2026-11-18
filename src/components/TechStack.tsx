"use client";

import { useState } from "react";

interface SpokeNode {
  name: string;
  role: string;
  icon: string;
  x: number;
  y: number;
}

const SPOKES: SpokeNode[] = [
  {
    name: "Postgres",
    role: "Persistência Relacional",
    icon: "/assets/icons/postgres.svg",
    x: 140,
    y: 80,
  },
  {
    name: "Redis",
    role: "Cache & Sessões Rápidas",
    icon: "/assets/icons/redis.svg",
    x: 500,
    y: 80,
  },
  {
    name: "Kafka",
    role: "Streaming de Eventos",
    icon: "/assets/icons/kafka.svg",
    x: 540,
    y: 190,
  },
  {
    name: "Stripe",
    role: "Pagamentos Globais",
    icon: "/assets/icons/stripe.svg",
    x: 500,
    y: 300,
  },
  {
    name: "Sentry",
    role: "Monitoramento & Falhas",
    icon: "/assets/icons/sentry.svg",
    x: 140,
    y: 300,
  },
  {
    name: "Grafana",
    role: "Métricas & Observabilidade",
    icon: "/assets/icons/grafana.svg",
    x: 100,
    y: 190,
  },
];

export default function TechStack() {
  const [activeSpoke, setActiveSpoke] = useState<string | null>(null);

  const cx = 320;
  const cy = 190;

  return (
    <section
      className="section"
      id="stack"
      style={{ "--h": 1 } as React.CSSProperties}
      aria-labelledby="stack-h"
    >
      <div className="wrap">
        <div className="section-head">
          <h2 id="stack-h">
            Integrações de infraestrutura e tecnologias suportadas.{" "}
            <span className="muted">
              Conexão direta com bancos de dados, mensageria e ferramentas de
              segurança.
            </span>
          </h2>
        </div>

        <div
          className="panel relative overflow-hidden flex items-center justify-center min-h-[260px] md:min-h-[380px] max-h-[440px]"
          role="img"
          aria-label="Diagrama de tecnologias e infraestrutura suportada"
          style={{
            background: "#141414",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "var(--r-md)",
          }}
        >
          <div className="w-full max-w-[640px] px-2 py-4 flex justify-center">
            <svg
              viewBox="0 0 640 380"
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-auto select-none overflow-visible max-h-[380px]"
            >
              <defs>
                <filter
                  id="hub-glow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Connecting lines */}
              {SPOKES.map((spoke) => {
                const isActive = activeSpoke === spoke.name;
                return (
                  <g key={spoke.name}>
                    <line
                      x1={cx}
                      y1={cy}
                      x2={spoke.x}
                      y2={spoke.y}
                      stroke={
                        isActive ? "#dafa9c" : "rgba(255, 255, 255, 0.18)"
                      }
                      strokeWidth={isActive ? "2" : "1.2"}
                      strokeDasharray={isActive ? "none" : "4 4"}
                      filter={isActive ? "url(#hub-glow)" : undefined}
                      style={{ transition: "all 0.3s ease" }}
                    />
                    {/* Animated moving particle along connection */}
                    <circle r="2.5" fill="#dafa9c">
                      <animateMotion
                        path={`M ${cx} ${cy} L ${spoke.x} ${spoke.y}`}
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                );
              })}

              {/* Center Core API Node */}
              <g
                transform={`translate(${cx}, ${cy})`}
                className="cursor-pointer"
              >
                <circle
                  r="34"
                  fill="#1a1a1a"
                  stroke="var(--p-accent)"
                  strokeWidth="2"
                  filter="url(#hub-glow)"
                />
                <circle r="24" fill="rgba(218, 250, 156, 0.1)" />
                <image
                  href="/assets/icons/ui-server.svg"
                  x="-11"
                  y="-16"
                  width="22"
                  height="22"
                />
                <text
                  y="16"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="11"
                  fontFamily="var(--font-mono)"
                  fontWeight="600"
                  letterSpacing="0.05em"
                >
                  API
                </text>
              </g>

              {/* Spoke Nodes */}
              {SPOKES.map((spoke) => {
                const isHovered = activeSpoke === spoke.name;
                return (
                  <g
                    key={spoke.name}
                    transform={`translate(${spoke.x}, ${spoke.y})`}
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveSpoke(spoke.name)}
                    onMouseLeave={() => setActiveSpoke(null)}
                  >
                    <circle
                      r={isHovered ? "28" : "24"}
                      fill="#1a1a1a"
                      stroke={
                        isHovered
                          ? "var(--p-accent)"
                          : "rgba(255, 255, 255, 0.2)"
                      }
                      strokeWidth={isHovered ? "2" : "1"}
                      style={{ transition: "all 0.2s ease" }}
                    />
                    <image
                      href={spoke.icon}
                      x="-11"
                      y="-12"
                      width="22"
                      height="22"
                      preserveAspectRatio="xMidYMid meet"
                    />
                    <text
                      y="34"
                      textAnchor="middle"
                      fill={isHovered ? "var(--p-accent)" : "#ffffff"}
                      fontSize="12"
                      fontFamily="var(--font-mono)"
                      fontWeight="500"
                    >
                      {spoke.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
