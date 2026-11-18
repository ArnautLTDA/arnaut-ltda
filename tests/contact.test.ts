import test from "node:test";
import assert from "node:assert/strict";
import { waitlistSchema } from "../src/lib/validations";
import { sendWaitlistEmail } from "../src/lib/email";
import { POST } from "../src/app/api/contact/route";
import { NextRequest } from "next/server";

test("waitlistSchema should validate correct waitlist payload", () => {
  const validPayload = {
    name: "Carlos Silva",
    email: "carlos@empresa.com.br",
    experience: "basica",
    interest:
      "Quero abrir minha própria agência de software para atender comércios locais.",
  };

  const result = waitlistSchema.safeParse(validPayload);
  assert.equal(result.success, true);
  if (result.success) {
    assert.equal(result.data.name, "Carlos Silva");
    assert.equal(result.data.email, "carlos@empresa.com.br");
    assert.equal(result.data.experience, "basica");
  }
});

test("waitlistSchema should reject invalid email and short interest", () => {
  const invalidPayload = {
    name: "J",
    email: "not-an-email",
    experience: "invalido",
    interest: "oi",
  };

  const result = waitlistSchema.safeParse(invalidPayload);
  assert.equal(result.success, false);
  if (!result.success) {
    const errorMap = Object.fromEntries(
      result.error.issues.map((i) => [i.path[0], i.message]),
    );
    assert.ok(errorMap.name);
    assert.ok(errorMap.email);
    assert.ok(errorMap.experience);
    assert.ok(errorMap.interest);
  }
});

test("sendWaitlistEmail should fall back to simulated success when credentials are not configured", async () => {
  delete process.env.SMTP_HOST;
  delete process.env.SMTP_USER;
  delete process.env.SMTP_PASS;
  delete process.env.RESEND_API_KEY;

  const payload = {
    name: "Marina Souza",
    email: "marina@fintech.com.br",
    experience: "intermediaria" as const,
    interest:
      "Interesse em operar o The Agency para clínicas e consultórios médicos.",
  };

  const result = await sendWaitlistEmail(payload);
  assert.equal(result.success, true);
  assert.equal(result.simulated, true);
  assert.ok(result.messageId?.startsWith("simulated-"));
});

test("POST /api/contact should process valid waitlist submission successfully", async () => {
  const req = new NextRequest("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Ana Pereira",
      email: "ana@techcorp.com",
      experience: "nenhuma",
      interest: "Quero iniciar uma agência autônoma em São Paulo.",
    }),
  });

  const res = await POST(req);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.success, true);
  assert.ok(data.message.includes("lista de espera"));
});

test("POST /api/contact should return 400 when validation fails", async () => {
  const req = new NextRequest("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "",
      email: "invalido",
      experience: "invalido",
      interest: "a",
    }),
  });

  const res = await POST(req);
  assert.equal(res.status, 400);
  const data = await res.json();
  assert.equal(data.success, false);
  assert.ok(data.errors.name);
  assert.ok(data.errors.email);
  assert.ok(data.errors.experience);
  assert.ok(data.errors.interest);
});

test("POST /api/contact should silently drop honeypot submissions", async () => {
  const req = new NextRequest("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Spam Bot",
      email: "spam@bot.net",
      experience: "nenhuma",
      interest: "Spam message",
      website_url: "http://spam.example.com",
    }),
  });

  const res = await POST(req);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.success, true);
});
