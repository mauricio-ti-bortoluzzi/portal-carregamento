import { z } from "zod";

export const filterSchema = z.object({
  op: z.string().optional(),
  unit: z.string().optional(),
});

export type FilterProps = z.infer<typeof filterSchema>;

export const newOrderSchema = z.object({
  batch: z.string().nonoptional(),
});

export type NewOrderProps = z.infer<typeof newOrderSchema>;
