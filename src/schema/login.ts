import { z } from "zod";

export const loginSchema = z.object({
  cpf: z
    .string()
    .min(1, "CPF é obrigatório")
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),
  password: z.string().min(1, "Senha é obrigatória"),
});

// Tipo inferido automaticamente
export type LoginFormData = z.infer<typeof loginSchema>;
