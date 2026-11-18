import test from "node:test";
import assert from "node:assert/strict";
import { quoteRequestSchema } from "../src/lib/validations";
import { sendQuoteEmail } from "../src/lib/email";
import { POST } from "../src/app/api/contact/route";
import { NextRequest } from "next/server";

test("quoteRequestSchema should validate correct quote request payload", () => {
  const validPayload = {
    name: "Carlos Silva",
    email: "carlos@empresa.com.br",
    type: "esteira",
    project: "Desenvolvimento de microsserviços com mTLS e RabbitMQ",
    tech: "TypeScript, Python, Docker",
  };

  const result = quoteRequestSchema.safeParse(validPayload);
  assert.equal(result.success, true);
  if (result.success) {
    assert.equal(result.data.name, "Carlos Silva");
    assert.equal(result.data.email, "carlos@empresa.com.br");
    assert.equal(result.data.type, "esteira");
  }
});

test("quoteRequestSchema should reject invalid email and short project", () => {
  const invalidPayload = {
    name: "J",
    email: "not-an-email",
    type: "invalid_type",
    project: "abc",
    tech: "a",
  };

  const result = quoteRequestSchema.safeParse(invalidPayload);
  assert.equal(result.success, false);
  if (!result.success) {
    const errorMap = Object.fromEntries(
      result.error.issues.map((i) => [i.path[0], i.message]),
    );
    assert.ok(errorMap.name);
    assert.ok(errorMap.email);
    assert.ok(errorMap.type);
    assert.ok(errorMap.project);
    assert.ok(errorMap.tech);
  }
});

test("sendQuoteEmail should fall back to simulated success when credentials are not configured", async () => {
  delete process.env.SMTP_HOST;
  delete process.env.SMTP_USER;
  delete process.env.SMTP_PASS;
  delete process.env.RESEND_API_KEY;

  const payload = {
    name: "Marina Souza",
    email: "marina@fintech.com.br",
    type: "poc" as const,
    project: "PoC para validação de esteira autônoma e testes TDD",
    tech: "Python, Docker, FastAPI",
  };

  const result = await sendQuoteEmail(payload);
  assert.equal(result.success, true);
  assert.equal(result.simulated, true);
  assert.ok(result.messageId?.startsWith("simulated-"));
});

test("POST /api/contact should process valid submission successfully", async () => {
  const req = new NextRequest("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Ana Pereira",
      email: "ana@techcorp.com",
      type: "esteira",
      project: "Esteira autônoma de microsserviços",
      tech: "TypeScript, Python, Docker",
    }),
  });

  const res = await POST(req);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.success, true);
  assert.ok(data.message.includes("Sua solicitação de proposta foi enviada"));
});

test("POST /api/contact should return 400 when validation fails", async () => {
  const req = new NextRequest("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "",
      email: "invalido",
      type: "esteira",
      project: "oi",
      tech: "",
    }),
  });

  const res = await POST(req);
  assert.equal(res.status, 400);
  const data = await res.json();
  assert.equal(data.success, false);
  assert.ok(data.errors.name);
  assert.ok(data.errors.email);
  assert.ok(data.errors.project);
  assert.ok(data.errors.tech);
});

test("POST /api/contact should silently drop honeypot submissions", async () => {
  const req = new NextRequest("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Spam Bot",
      email: "spam@bot.net",
      type: "esteira",
      project: "Spam message",
      tech: "Spam",
      website_url: "http://spam.example.com",
    }),
  });

  const res = await POST(req);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.success, true);
});
