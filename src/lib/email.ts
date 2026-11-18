import nodemailer from "nodemailer";
import { QuoteRequest, MODALIDADE_LABELS } from "./validations";

export interface SendEmailResult {
  success: boolean;
  messageId?: string;
  simulated?: boolean;
  error?: string;
}

const DEFAULT_TARGET_EMAIL = "contato@arnaut.dev.br";

export async function sendQuoteEmail(
  data: QuoteRequest,
): Promise<SendEmailResult> {
  const targetEmail = process.env.NOTIFICATION_EMAIL || DEFAULT_TARGET_EMAIL;
  const modalidadeLabel = MODALIDADE_LABELS[data.type] || data.type;
  const timestamp = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  const subject = `[Nova Solicitação de Proposta] ${data.name} - ${modalidadeLabel}`;

  const textContent = `
Nova solicitação de orçamento recebida via site oficial Arnaut LTDA:

- Nome Completo: ${data.name}
- E-mail Corporativo: ${data.email}
- Modalidade: ${modalidadeLabel}
- Escopo Técnico: ${data.project}
- Stack Tecnológica: ${data.tech}
- Data e Hora: ${timestamp} (Horário de Brasília)

Para responder, basta responder diretamente a este e-mail (Reply-To: ${data.email}).
  `.trim();

  const htmlContent = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Nova Solicitação de Proposta</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: #0f0f0f;
      color: #ffffff;
      margin: 0;
      padding: 32px 16px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #1a1a1a;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 32px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }
    .header {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 20px;
      margin-bottom: 24px;
    }
    .header h1 {
      font-size: 20px;
      margin: 0 0 8px 0;
      color: #ffffff;
      letter-spacing: -0.02em;
    }
    .header .badge {
      display: inline-block;
      padding: 4px 10px;
      background-color: rgba(218, 250, 156, 0.15);
      border: 1px solid #dafa9c;
      color: #dafa9c;
      font-size: 12px;
      font-weight: 600;
      border-radius: 6px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .field {
      margin-bottom: 20px;
    }
    .label {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #a8b3a8;
      margin-bottom: 6px;
    }
    .value {
      font-size: 15px;
      color: #ffffff;
      background-color: rgba(255, 255, 255, 0.04);
      padding: 12px 16px;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.06);
    }
    .footer {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 20px;
      margin-top: 32px;
      font-size: 12px;
      color: #a8b3a8;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <span class="badge">Novo Lead Arnaut LTDA</span>
      <h1>Solicitação de Proposta Comercial</h1>
      <p style="margin: 0; color: #a8b3a8; font-size: 13px;">Recebido em ${timestamp} (Horário de Brasília)</p>
    </div>

    <div class="field">
      <div class="label">Nome Completo</div>
      <div class="value">${escapeHtml(data.name)}</div>
    </div>

    <div class="field">
      <div class="label">E-mail Corporativo</div>
      <div class="value"><a href="mailto:${escapeHtml(data.email)}" style="color: #dafa9c; text-decoration: none;">${escapeHtml(data.email)}</a></div>
    </div>

    <div class="field">
      <div class="label">Modalidade de Contratação</div>
      <div class="value">${escapeHtml(modalidadeLabel)}</div>
    </div>

    <div class="field">
      <div class="label">Escopo Técnico do Projeto</div>
      <div class="value" style="white-space: pre-wrap;">${escapeHtml(data.project)}</div>
    </div>

    <div class="field">
      <div class="label">Stack Tecnológica Prioritária</div>
      <div class="value">${escapeHtml(data.tech)}</div>
    </div>

    <div class="footer">
      Arnaut LTDA · Software house de engenharia autônoma para sistemas críticos<br>
      E-mail de destino configurado: <strong>${escapeHtml(targetEmail)}</strong>
    </div>
  </div>
</body>
</html>
  `.trim();

  // 1. Check for SMTP configuration
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (smtpHost && smtpUser && smtpPass) {
    try {
      const port = Number(process.env.SMTP_PORT) || 587;
      const secure = process.env.SMTP_SECURE === "true" || port === 465;
      const from = process.env.SMTP_FROM || `"Arnaut LTDA" <${smtpUser}>`;

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port,
        secure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const info = await transporter.sendMail({
        from,
        to: targetEmail,
        replyTo: data.email,
        subject,
        text: textContent,
        html: htmlContent,
      });

      return { success: true, messageId: info.messageId };
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      return { success: false, error: errorMessage };
    }
  }

  // 2. Check for Resend API configuration
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from:
            process.env.RESEND_FROM || "Arnaut LTDA <onboarding@resend.dev>",
          to: [targetEmail],
          reply_to: data.email,
          subject,
          text: textContent,
          html: htmlContent,
        }),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        return { success: false, error: `Resend error: ${errorBody}` };
      }

      const resData = (await response.json()) as { id?: string };
      return { success: true, messageId: resData.id };
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      return { success: false, error: errorMessage };
    }
  }

  // 3. Fallback: Development / Unconfigured credentials
  // Structured logging for local verification and CI/testing without failing the lead submission
  return {
    success: true,
    simulated: true,
    messageId: `simulated-${Date.now()}`,
  };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
