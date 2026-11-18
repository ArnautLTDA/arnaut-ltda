"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  experience: string;
  interest: string;
  website_url?: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  experience: "nenhuma",
  interest: "",
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

    const errors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Informe seu nome completo (mínimo 2 caracteres).";
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errors.email = "Informe um e-mail válido para contato.";
    }
    if (!formData.interest.trim() || formData.interest.trim().length < 3) {
      errors.interest =
        "Descreva brevemente o que te atrai no The Agency (mínimo 3 caracteres).";
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
            "Houve um problema ao processar seu cadastro. Por favor, envie diretamente para contato@arnaut.dev.br.",
        );
      } else {
        setSuccessMessage(data.message);
        setFormData(INITIAL_FORM);
      }
    } catch {
      setErrorMessage(
        "Erro de conexão ao enviar inscrição. Por favor, tente novamente ou contate contato@arnaut.dev.br.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section" id="contact" aria-labelledby="contact-h">
      <div className="wrap">
        <div className="grid">
          {/* Left: Founder Benefits Card */}
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
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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
                    Acesso Antecipado & Vantagens de Fundador
                  </h3>
                  <div style={{ fontSize: "12px", color: "var(--p-muted)" }}>
                    Lista de Espera Oficial · The Agency
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
                The Agency está em fase de acesso antecipado (MVP). Cadastre-se
                na lista de espera para ser um dos primeiros operadores e
                garantir benefícios exclusivos de lançamento.
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
                    Acesso prioritário ao MVP antes do lançamento público
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
                    Condições comerciais de fundador (preço exclusivo
                    permanente)
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
                  <span>Canal direto com a equipe de engenharia e produto</span>
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
                    Participação ativa no direcionamento de novas integrações
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
                    Suporte dedicado na calibração dos seus primeiros nichos
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
                Sede de produto:{" "}
                <strong style={{ color: "#fff" }}>São Paulo, SP</strong>
              </div>
              <div>
                Desenvolvido por:{" "}
                <strong style={{ color: "#fff" }}>Arnaut LTDA</strong>
              </div>
              <div>
                Canal técnico e parcerias:{" "}
                <a
                  href="mailto:contato@arnaut.dev.br"
                  className="text-[var(--p-accent)] hover:underline"
                >
                  contato@arnaut.dev.br
                </a>
              </div>
            </div>
          </div>

          {/* Right: Waitlist Form */}
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
                  Inscrição confirmada na lista de espera!
                </h3>
                <p className="text-sm text-white/80 max-w-md mb-6 leading-relaxed">
                  {successMessage}
                </p>
                <p className="text-xs text-white/50 mb-6">
                  Seu convite prioritário será enviado diretamente pela equipe
                  da Arnaut LTDA.
                </p>
                <button
                  type="button"
                  className="btn btn--secondary"
                  onClick={() => setSuccessMessage(null)}
                >
                  Cadastrar outro e-mail
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
                    placeholder="Seu nome ou razão social"
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
                  <label htmlFor="f-email">E-mail para convite</label>
                  <input
                    id="f-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    inputMode="email"
                    placeholder="voce@exemplo.com.br"
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
                  <label htmlFor="f-experience">
                    Sua experiência prévia com tecnologia
                  </label>
                  <select
                    id="f-experience"
                    name="experience"
                    value={formData.experience}
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
                      value="nenhuma"
                      style={{ background: "#1a1a1a", color: "#fff" }}
                    >
                      Nenhuma (quero que a IA opere 100%)
                    </option>
                    <option
                      value="basica"
                      style={{ background: "#1a1a1a", color: "#fff" }}
                    >
                      Básica (conheço conceitos gerais)
                    </option>
                    <option
                      value="intermediaria"
                      style={{ background: "#1a1a1a", color: "#fff" }}
                    >
                      Intermediária (já usei no-code ou ferramentas digitais)
                    </option>
                    <option
                      value="avancada"
                      style={{ background: "#1a1a1a", color: "#fff" }}
                    >
                      Avançada (já programo ou sou técnico)
                    </option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="f-interest">
                    O que mais te atrai em ter sua própria agência de software?
                  </label>
                  <input
                    id="f-interest"
                    name="interest"
                    type="text"
                    value={formData.interest}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Ex.: Quero atender barbearias e clínicas na minha cidade"
                    required
                    aria-invalid={!!fieldErrors.interest}
                    aria-describedby={
                      fieldErrors.interest ? "f-interest-err" : undefined
                    }
                  />
                  {fieldErrors.interest && (
                    <p
                      className="field__error text-xs text-red-400 mt-1"
                      id="f-interest-err"
                    >
                      {fieldErrors.interest}
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
                      ? "Registrando inscrição..."
                      : "Entrar na lista de espera"}
                  </button>
                </div>

                <p className="t-small muted" style={{ margin: 0 }}>
                  Vagas limitadas para a primeira turma de fundadores e early
                  adopters.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
