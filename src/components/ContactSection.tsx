"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  type: string;
  project: string;
  tech: string;
  website_url?: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  type: "esteira",
  project: "",
  tech: "",
  website_url: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setFieldErrors({});

    // Basic client-side check
    const errors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Informe seu nome completo (mínimo 2 caracteres).";
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errors.email = "Informe um e-mail corporativo válido.";
    }
    if (!formData.project.trim() || formData.project.trim().length < 5) {
      errors.project =
        "Descreva o escopo técnico do projeto (mínimo 5 caracteres).";
    }
    if (!formData.tech.trim() || formData.tech.trim().length < 2) {
      errors.tech = "Informe as principais tecnologias do projeto.";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.errors) {
          setFieldErrors(data.errors);
        }
        setErrorMessage(
          data.error ||
            "Houve um problema ao enviar sua solicitação. Por favor, envie diretamente para contato@arnaut.dev.br.",
        );
      } else {
        setSuccessMessage(data.message);
        setFormData(INITIAL_FORM);
      }
    } catch {
      setErrorMessage(
        "Erro de conexão ao enviar proposta. Por favor, tente novamente ou contate contato@arnaut.dev.br.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="section"
      id="contact"
      style={{ "--h": 1 } as React.CSSProperties}
      aria-labelledby="contact-h"
    >
      <div className="wrap">
        <div className="grid">
          {/* Left: Guarantee Card */}
          <div className="span-6 guarantee-card">
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--p-accent)"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <div>
                  <h3
                    id="contact-h"
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      color: "#fff",
                      margin: 0,
                    }}
                  >
                    Garantia de Confidencialidade e SLA Técnico
                  </h3>
                  <div style={{ fontSize: "12px", color: "var(--p-muted)" }}>
                    Acordo de Não Divulgação (NDA) Bilateral
                  </div>
                </div>
              </div>

              <p
                style={{
                  fontSize: "13px",
                  color: "var(--p-muted)",
                  lineHeight: 1.6,
                  marginBottom: "20px",
                }}
              >
                Assinamos acordo de confidencialidade mútuo antes de qualquer
                compartilhamento de código, credencial ou especificação de
                arquitetura.
              </p>

              <div
                style={{ display: "grid", gap: "12px", marginBottom: "24px" }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    fontSize: "12px",
                    color: "var(--p-ink)",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--p-accent)"
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    Diagnóstico preliminar e viabilidade técnica em até 24 horas
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    fontSize: "12px",
                    color: "var(--p-ink)",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--p-accent)"
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    Confinamento estrito de chaves em contêineres sem acesso
                    externo
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    fontSize: "12px",
                    color: "var(--p-ink)",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--p-accent)"
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    Transferência de propriedade intelectual registrada em
                    contrato
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    fontSize: "12px",
                    color: "var(--p-ink)",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--p-accent)"
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    Relatórios contínuos de qualidade SonarQube e Semgrep
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    fontSize: "12px",
                    color: "var(--p-ink)",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--p-accent)"
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    Suporte técnico de prontidão com engenheiros baseados em São
                    Paulo
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
                paddingTop: "16px",
                fontSize: "12px",
                color: "var(--p-muted)",
                display: "grid",
                gap: "6px",
              }}
            >
              <div>
                Sede operacional:{" "}
                <strong style={{ color: "#fff" }}>São Paulo, SP</strong>
              </div>
              <div>
                Engenharia responsável:{" "}
                <strong style={{ color: "#fff" }}>Arnaut LTDA</strong>
              </div>
              <div>
                Canal técnico direto:{" "}
                <a
                  href="mailto:contato@arnaut.dev.br"
                  className="text-[var(--p-accent)] hover:underline"
                >
                  contato@arnaut.dev.br
                </a>
              </div>
            </div>
          </div>

          {/* Right: Functional Quote Form */}
          <div
            className="span-6 start-7 guarantee-card"
            style={{
              background: "var(--p-surface)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "var(--r-md)",
              padding: "24px",
            }}
          >
            {successMessage ? (
              <div
                className="form justify-center items-center text-center p-8 rounded-xl border border-[var(--p-accent)]/30 bg-[#162416]"
                role="status"
              >
                <div className="w-14 h-14 rounded-full bg-[var(--p-accent)]/20 text-[var(--p-accent)] grid place-items-center mb-4">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">
                  Solicitação enviada com sucesso!
                </h3>
                <p className="text-sm text-white/80 max-w-md mb-6 leading-relaxed">
                  {successMessage}
                </p>
                <p className="text-xs text-white/50 mb-6">
                  Nossos engenheiros receberam seus dados em{" "}
                  <strong>contato@arnaut.dev.br</strong> e retornarão em breve.
                </p>
                <button
                  type="button"
                  className="btn btn--secondary"
                  onClick={() => setSuccessMessage(null)}
                >
                  Enviar outra solicitação
                </button>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit} noValidate>
                {/* Honeypot for bot protection */}
                <input
                  type="text"
                  name="website_url"
                  value={formData.website_url || ""}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: "none" }}
                  aria-hidden="true"
                />

                {errorMessage && (
                  <div
                    className="p-3 rounded-md bg-red-950/80 border border-red-500/40 text-red-200 text-xs"
                    role="alert"
                  >
                    {errorMessage}
                  </div>
                )}

                <div className="field">
                  <label htmlFor="f-name">Nome completo</label>
                  <input
                    id="f-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={
                      fieldErrors.name ? "f-name-err" : undefined
                    }
                  />
                  {fieldErrors.name && (
                    <p
                      className="field__error text-xs text-red-400 mt-1"
                      id="f-name-err"
                    >
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="f-email">E-mail corporativo</label>
                  <input
                    id="f-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    inputMode="email"
                    required
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={
                      fieldErrors.email ? "f-email-err" : undefined
                    }
                  />
                  {fieldErrors.email && (
                    <p
                      className="field__error text-xs text-red-400 mt-1"
                      id="f-email-err"
                    >
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="f-type">Modalidade de contratação</label>
                  <select
                    id="f-type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      height: "44px",
                      minHeight: "44px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "var(--r-sm)",
                      color: "#fff",
                      padding: "0 12px",
                      fontFamily: "inherit",
                      fontSize: "13px",
                    }}
                  >
                    <option
                      value="esteira"
                      style={{ background: "#1a1a1a", color: "#fff" }}
                    >
                      Desenvolvimento com esteira The Agency
                    </option>
                    <option
                      value="poc"
                      style={{ background: "#1a1a1a", color: "#fff" }}
                    >
                      PoC de Automação e Validação
                    </option>
                    <option
                      value="auditoria"
                      style={{ background: "#1a1a1a", color: "#fff" }}
                    >
                      Auditoria de Segurança e Débito Técnico
                    </option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="f-project">Escopo técnico do projeto</label>
                  <input
                    id="f-project"
                    name="project"
                    type="text"
                    value={formData.project}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Ex.: Microsserviços de pagamento, mensageria ou testes"
                    required
                    aria-invalid={!!fieldErrors.project}
                    aria-describedby={
                      fieldErrors.project ? "f-project-err" : undefined
                    }
                  />
                  {fieldErrors.project && (
                    <p
                      className="field__error text-xs text-red-400 mt-1"
                      id="f-project-err"
                    >
                      {fieldErrors.project}
                    </p>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="f-tech">Stack tecnológica prioritária</label>
                  <input
                    id="f-tech"
                    name="tech"
                    type="text"
                    value={formData.tech}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Ex.: Python, TypeScript, Docker, Postgres"
                    required
                    aria-invalid={!!fieldErrors.tech}
                    aria-describedby={
                      fieldErrors.tech ? "f-tech-err" : undefined
                    }
                  />
                  {fieldErrors.tech && (
                    <p
                      className="field__error text-xs text-red-400 mt-1"
                      id="f-tech-err"
                    >
                      {fieldErrors.tech}
                    </p>
                  )}
                </div>

                <div className="btn-row" style={{ marginTop: "8px" }}>
                  <button
                    className="btn btn--primary"
                    type="submit"
                    disabled={isSubmitting}
                    style={{ width: "100%", opacity: isSubmitting ? 0.7 : 1 }}
                  >
                    {isSubmitting
                      ? "Enviando proposta..."
                      : "Solicitar proposta"}
                  </button>
                </div>

                <p className="t-small muted" style={{ margin: 0 }}>
                  Retornamos em até 24 horas úteis com minuta de NDA
                  pré-assinada.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
