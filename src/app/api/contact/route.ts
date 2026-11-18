import { NextRequest, NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/validations";
import { sendWaitlistEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot bot protection
    if (body.website_url && String(body.website_url).trim().length > 0) {
      // Silently reject bot submissions
      return NextResponse.json(
        { success: true, message: "Sua solicitação foi processada." },
        { status: 200 },
      );
    }

    const validationResult = waitlistSchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of validationResult.error.issues) {
        const fieldName = issue.path[0];
        if (typeof fieldName === "string" && !fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message;
        }
      }

      return NextResponse.json(
        {
          success: false,
          error: "Por favor, corrija os erros no formulário.",
          errors: fieldErrors,
        },
        { status: 400 },
      );
    }

    const emailResult = await sendWaitlistEmail(validationResult.data);

    if (!emailResult.success) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Houve uma falha temporária ao registrar sua inscrição. Por favor, tente novamente ou contate contato@arnaut.dev.br.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Sua inscrição na lista de espera foi confirmada! Você receberá nosso convite de acesso antecipado e condições de fundador por e-mail.",
        simulated: emailResult.simulated,
      },
      { status: 200 },
    );
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Erro interno";
    return NextResponse.json(
      {
        success: false,
        error: "Ocorreu um erro ao processar sua solicitação.",
        details: process.env.NODE_ENV === "development" ? errorMsg : undefined,
      },
      { status: 500 },
    );
  }
}
