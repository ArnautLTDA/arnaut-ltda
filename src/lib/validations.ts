import { z } from "zod";

export const quoteRequestSchema = z.object({
  name: z
    .string({ required_error: "Informe seu nome completo." })
    .trim()
    .min(2, "Informe seu nome completo (mínimo 2 caracteres)."),
  email: z
    .string({ required_error: "Informe um e-mail corporativo válido." })
    .trim()
    .email("Informe um e-mail corporativo válido."),
  type: z.enum(["esteira", "poc", "auditoria"], {
    errorMap: () => ({
      message: "Selecione uma modalidade de contratação válida.",
    }),
  }),
  project: z
    .string({ required_error: "Descreva o escopo técnico do projeto." })
    .trim()
    .min(5, "Descreva o escopo técnico do projeto (mínimo 5 caracteres)."),
  tech: z
    .string({ required_error: "Informe as principais tecnologias do projeto." })
    .trim()
    .min(2, "Informe as principais tecnologias do projeto."),
  website_url: z.string().optional(), // Honeypot field
});

export type QuoteRequest = z.infer<typeof quoteRequestSchema>;

export const MODALIDADE_LABELS: Record<string, string> = {
  esteira: "Desenvolvimento com esteira The Agency",
  poc: "PoC de Automação e Validação",
  auditoria: "Auditoria de Segurança e Débito Técnico",
};
