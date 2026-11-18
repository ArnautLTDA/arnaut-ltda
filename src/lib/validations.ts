import { z } from "zod";

export const waitlistSchema = z.object({
  name: z
    .string({ required_error: "Informe seu nome completo." })
    .trim()
    .min(2, "Informe seu nome completo (mínimo 2 caracteres)."),
  email: z
    .string({ required_error: "Informe um e-mail válido." })
    .trim()
    .email("Informe um e-mail válido para receber o convite."),
  experience: z.enum(["nenhuma", "basica", "intermediaria", "avancada"], {
    errorMap: () => ({
      message: "Selecione seu nível de experiência com tecnologia.",
    }),
  }),
  interest: z
    .string({ required_error: "Conte-nos o que te atrai no The Agency." })
    .trim()
    .min(3, "Descreva brevemente o seu interesse (mínimo 3 caracteres)."),
  website_url: z.string().optional(), // Honeypot field
});

export type WaitlistRequest = z.infer<typeof waitlistSchema>;

// Backward compatibility alias
export const quoteRequestSchema = waitlistSchema;
export type QuoteRequest = WaitlistRequest;

export const EXPERIENCE_LABELS: Record<string, string> = {
  nenhuma: "Nenhuma (quero que a IA opere 100%)",
  basica: "Básica (conheço conceitos gerais)",
  intermediaria: "Intermediária (já usei ferramentas digitais/no-code)",
  avancada: "Avançada (já programo ou sou técnico)",
};
