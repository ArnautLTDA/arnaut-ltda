import nodemailer from "nodemailer";
import { WaitlistRequest, EXPERIENCE_LABELS } from "./validations";

export interface SendEmailResult {
  success: boolean;
  messageId?: string;
  simulated?: boolean;
  error?: string;
}

const DEFAULT_TARGET_EMAIL = "contato@arnaut.dev.br";

export async function sendWaitlistEmail(
  data: WaitlistRequest,
): Promise<SendEmailResult> {
  const targetEmail = process.env.NOTIFICATION_EMAIL || DEFAULT_TARGET_EMAIL;
  const experienceLabel = EXPERIENCE_LABELS[data.experience] || data.experience;
  const timestamp = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  const subject = `[Lista de Espera The Agency] ${data.name} - ${experienceLabel}`;

  const textContent = `
Novo cadastro na lista de espera do The Agency (Arnaut LTDA):

- Nome Completo: ${data.name}
- E-mail: ${data.email}
- Nível de Experiência: ${experienceLabel}
- Interesse no Produto: ${data.interest}
- Data e Hora: ${timestamp} (Horário de Brasília)

Para responder, basta responder diretamente a este e-mail (Reply-To: ${data.email}).
  `.trim();

  const htmlContent = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Novo Cadastro na Lista de Espera - The Agency</title>
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
      <span class="badge">Early Access · The Agency</span>
      <h1>Inscrição na Lista de Espera</h1>
      <p style="margin: 0; color: #a8b3a8; font-size: 13px;">Recebido em ${timestamp} (Horário de Brasília)</p>
    </div>

    <div class="field">
      <div class="label">Nome Completo</div>
      <div class="value">${escapeHtml(data.name)}</div>
    </div>

    <div class="field">
      <div class="label">E-mail para Convite</div>
      <div class="value"><a href="mailto:${escapeHtml(data.email)}" style="color: #dafa9c; text-decoration: none;">${escapeHtml(data.email)}</a></div>
    </div>

    <div class="field">
      <div class="label">Experiência com Tecnologia</div>
      <div class="value">${escapeHtml(experienceLabel)}</div>
    </div>

    <div class="field">
      <div class="label">Interesse no The Agency</div>
      <div class="value" style="white-space: pre-wrap;">${escapeHtml(data.interest)}</div>
    </div>

    <div class="footer">
      Arnaut LTDA · Plataforma AI-native para criação de agências de software autônomas<br>
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
      const from =
        process.env.SMTP_FROM || `"The Agency by Arnaut" <${smtpUser}>`;

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
          from: process.env.RESEND_FROM || "The Agency <onboarding@resend.dev>",
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
  return {
    success: true,
    simulated: true,
    messageId: `simulated-${Date.now()}`,
  };
}

export const sendQuoteEmail = sendWaitlistEmail;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
