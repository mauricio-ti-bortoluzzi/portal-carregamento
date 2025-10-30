import { z } from "zod";

export const filterSchema = z.object({
  op: z.string().optional(),
  unit: z.string().optional(),
});

export type FilterProps = z.infer<typeof filterSchema>;

export const newOpSchema = z.object({
  volume: z
    .string()
    .transform((v) => parseFloat(v.replace(",", ".")))
    .refine((v) => !isNaN(v), { message: "Informe um número válido." })
    .refine((v) => v > 0, { message: "O volume deve ser maior que zero." }),
  op: z
    .string("O nº da OP é obrigatório.")
    .transform((v) => Number(v))
    .refine((v) => v >= 10000, {
      message: "O nº da OP deve ser igual ou maior que 10000.",
    })
    .refine((v) => v <= 99999, {
      message: "O nº da OP deve ser igual ou menor que 99999.",
    }),
  unit: z.string("A unidade é obrigatória."),
});

export type NewOpProps = z.infer<typeof newOpSchema>;
